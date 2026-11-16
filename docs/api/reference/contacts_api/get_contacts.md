---
title: GET /contacts
sidebar_position: 2
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /contacts

List the contacts belonging to the account. By default, contacts are sorted by the creation date of their conversation, newest first. The optional parameters below filter the list by conversation activity, source, tags or team, and can change the order.

### Optional Parameters

| Parameter   | Type     | Description                                                                        |
| :---------- | :------- | :--------------------------------------------------------------------------------- |
| `page`      | Integer  | The page of contacts. If not specified it will default to page 1. Pages beyond 500 are not available — use [cursor pagination](#cursor-pagination) instead. |
| `after`     | string   | Opaque cursor taken from `meta.next` of a previous response. Returns the batch of contacts that follows it. See [Cursor pagination](#cursor-pagination). |
| `source`    | Source   | The integration type (e.g. `whatsapp`)                                             |
| `tags`      | string[] | The matching tags, comma-separated (e.g. `sales,lead`). Tags are _case-insentive_. |
| `team_uuid`           | string   | The uuid of the team.                                                              |
| `conversation_state`  | string   | `open` or `closed`. Returns only contacts whose conversation is in that state. |
| `last_message_from`   | string   | `contact` returns contacts who sent the latest message of their conversation, which usually means they are waiting for a reply. `business` returns contacts whose latest message was sent from your account (a team member, a bot, a broadcast or the API). |
| `last_inbound_message_after`  | string | An ISO 8601 date-time, for example `2026-11-12T08:00:00Z`. Returns contacts whose most recent message to you was received at or after this time. A date without a time (`2026-11-12`) means midnight UTC. Messages sent from your account do not count. |
| `last_inbound_message_before` | string | An ISO 8601 date-time. Returns contacts whose most recent message to you was received at or before this time. Contacts who never sent a message are excluded whenever `last_inbound_message_after` or `last_inbound_message_before` is set. |
| `assigned_user`       | string   | The email of a team member, to return only conversations assigned to them, or `unassigned`, to return only conversations with no assigned team member. |
| `order`               | string   | `created_at` (default) sorts by the creation date of the conversation. `last_inbound_message_at` sorts by the time of the most recent message received from the contact; contacts who never sent a message come last. Both orders are newest first. |
| `include_field_types` | boolean  | When `true`, the response includes `customFieldsMetadata` with value, type and options for each custom field. |

### Filtering by conversation activity {#filtering-by-conversation-activity}

The conversation filters can be combined with each other and with `source`, `tags` and `team_uuid`. For example, this request lists the open conversations whose latest message came from the contact, starting with the contact who wrote most recently:

```bash
curl -X GET "https://api.callbell.eu/v1/contacts?conversation_state=open&last_message_from=contact&order=last_inbound_message_at" \
    -H "Authorization: Bearer test_gshuPaZoeEG6ovbc8M79w0QyM" \
    -H "Content-Type: application/json"
```

To list who wrote to you since 8:00 UTC today and is not assigned to anyone, use `last_inbound_message_after=2026-11-12T08:00:00Z&assigned_user=unassigned`.

The `last_inbound_message_*` parameters and the `last_inbound_message_at` order only look at messages received from the contact. A reply from your team does not change them.

An unsupported value returns a `400 Bad Request` error that names each invalid parameter:

```json title=response.json
{
  "error": {
    "conversation_state": ["must be one of: open, closed"],
    "assigned_user": ["must be the email of a user inside the account, or unassigned"]
  }
}
```

### Cursor pagination

Page-based pagination stops at page 500 (10,000 contacts): requests beyond that limit return a `400 Bad Request` error with the message `Pagination limit exceeded`. To walk the complete contact list, use cursor pagination instead:

1. Make a request as usual: every response includes an opaque token in `meta.next`.
2. Pass the token back through the `after` parameter to fetch the next batch of contacts.
3. Keep following `meta.next` until it comes back `null` — that marks the last batch.

```bash
curl -X GET "https://api.callbell.eu/v1/contacts?after=eyJ0cyI6MTc1NDM4NDQwMDAwMCwiaWQiOjEyMzQ1fQ" \
    -H "Authorization: Bearer test_gshuPaZoeEG6ovbc8M79w0QyM" \
    -H "Content-Type: application/json"
```

A few things to keep in mind:

- Treat the token as opaque and send it back unchanged. A malformed token returns a `400 Bad Request` error with the message `Invalid pagination cursor`.
- The `page` parameter is ignored when `after` is present.
- Filters and the order are not encoded in the token — pass the same filters and the same `order` along with `after` on every request.
- Contacts are returned in the same order as page-based requests. Contacts created after the walk started are not included. With `order=last_inbound_message_at`, a contact who writes to you during the walk moves to the top of the list, so the walk can skip that contact or return it twice.

### Example Request

<RequestTabs endpoint='contacts_api' request="get_contacts"/>

### Response

| Parameter  | Type                                             | Description         |
| :--------- | :----------------------------------------------- | :------------------ |
| `contacts` | [Contact[]](/api/reference/object_types/contact) | A list of contacts. |
| `meta`     | object                                           | Pagination metadata: `page` and `pages` for page-based requests, plus `next`, the cursor pointing to the next batch (`null` on the last batch). |

### Example Response

```json title=response.json
{
  "contacts": [
    {
      "uuid": "414a6d692bd645ed803f2e7ce360d4c8",
      "name": "John Doe",
      "phoneNumber": "+123 456 789",
      "avatarUrl": null,
      "createdAt": "2020-11-13T21:08:53Z",
      "source": "whatsapp",
      "href": "https://dash.callbell.eu/contacts/414a6d692bd645ed803f2e7ce360d4c8",
      "conversationHref": "https://dash.callbell.eu/chat/f3670b13446b412796238b1cd78899f9",
      "assignedUser": "john.doe@email.com",
      "tags": [
        "sales",
        "lead"
      ],
      "customFields":{
        "Stripe link": "https://stripe.com/contacts/cus1234567",
        "Billing Address": "3 Abbey Rd, London"
      }
    },
    ...
    {
      "uuid": "ff8bec9363bc4c29b8b044eabf2afebd",
      "name": "Mario Rossi",
      "phoneNumber": "+33 11 22 33 44",
      "avatarUrl": null,
      "createdAt": "2021-02-24T20:33:06Z",
      "source": "whatsapp",
      "href": "https://dash.callbell.eu/contacts/ff8bec9363bc4c29b8b044eabf2afebd",
      "conversationHref": "https://dash.callbell.eu/chat/f3670b13446b412796238b1cd78899f9",
      "assignedUser": null,
      "tags": [
        "sales",
        "lead",
        "hot"
      ],
      "customFields":{
        "Stripe link": "https://stripe.com/contacts/cus124124153"
      }
    }
  ],
  "meta": {
    "page": 1,
    "pages": 42,
    "next": "eyJ0cyI6MTc1NDM4NDQwMDAwMCwiaWQiOjEyMzQ1fQ"
  }
}
```

### Example Response (with `include_field_types=true`)

```json title=response.json
{
  "contacts": [
    {
      "uuid": "414a6d692bd645ed803f2e7ce360d4c8",
      "name": "John Doe",
      "customFields": {
        "Address": "Oxford Street 123",
        "Join Date": "2024-01-15",
        "Preferences": "[\"Newsletter\", \"Promotions\"]"
      },
      "customFieldsMetadata": {
        "Address": { "value": "Oxford Street 123", "type": "text" },
        "Join Date": { "value": "2024-01-15", "type": "date" },
        "Preferences": { "value": ["Newsletter", "Promotions"], "type": "checkbox", "options": ["Newsletter", "Promotions", "Updates"] }
      }
    }
  ]
}
```
