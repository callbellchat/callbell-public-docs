---
title: GET /contacts/:uuid/messages
sidebar_position: 3
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /contacts/:uuid/messages

List all messages belonging to the contact. Results are paginated and sorted by `createdAt` in descending order.

### Optional Parameters

| Parameter | Type    | Description                                                                                                                          |
| :-------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------- |
| `page`    | Integer | The page of messages. If not specified it will default to page 1.                                                                    |
| `after`   | String  | Cursor for fetching the next page. Pass the `next` value from the previous response's `meta` field. When present, `page` is ignored. |

### Example Request

<RequestTabs endpoint='contacts_api' request="get_contact_messages"/>

### Response

| Parameter  | Type                                              | Description              |
| :--------- | :------------------------------------------------ | :----------------------- |
| `messages` | [Messages[]](/api/reference/object_types/message) | A list of messages.      |
| `meta`     | Object                                            | Pagination metadata.     |

### Meta Object

| Parameter | Type    | Description                                                                                            |
| :-------- | :------ | :----------------------------------------------------------------------------------------------------- |
| `page`    | Integer | Current page number. Only present when using offset pagination (`?page=N`).                            |
| `pages`   | Integer | Total number of pages. Only present when using offset pagination (`?page=N`).                          |
| `next`    | String  | Cursor to pass as `?after=` to retrieve the next page of results. `null` when there are no more pages. |

### Example Response

```json title=response.json
{
  "messages": [
    {
      "text": "Hello there how can I help you?",
      "createdAt": "2023-12-12T10:56:36Z",
      "uuid": "cf839626ac7949879b88bcffd41d34fe",
      "status": "sent",
      "channel": "whatsapp",
      "from": "391234567890",
      "to": "390987654321"
    },
    {
      "text": "Conversation was assigned to John Doe",
      "createdAt": "2023-12-12T10:56:35Z",
      "status": "note",
      "channel": "whatsapp",
      "from": "390987654321",
      "to": "390987654321"
    },
    {
      "text": "Hello there 👋",
      "createdAt": "2023-12-12T10:53:32Z",
      "status": "received",
      "channel": "whatsapp",
      "from": "390987654321",
      "to": "390987654321"
    }
  ],
  "meta": {
    "page": 1,
    "pages": 5,
    "next": "eyJ0cyI6MTcwMTM3NTIxNjAwMCwiaWQiOjQyfQ"
  }
}
```

### Cursor Pagination

To iterate through all messages efficiently, use the `after` parameter with the `meta.next` value from each response. When `meta.next` is `null`, you have reached the last page.

```json title=response.json (cursor mode)
{
  "messages": [...],
  "meta": {
    "next": "eyJ0cyI6MTcwMTM3NTIxNjAwMCwiaWQiOjQyfQ"
  }
}
```
