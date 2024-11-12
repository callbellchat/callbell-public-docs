---
title: GET /contacts
sidebar_position: 2
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /contacts

List all contacts belonging to the account. A filter can be specified in order to get more specific results.

### Optional Parameters

| Parameter   | Type     | Description                                                                        |
| :---------- | :------- | :--------------------------------------------------------------------------------- |
| `page`      | Integer  | The page of contacts. If not specified it will default to page 1.                  |
| `source`    | Source   | The integration type (e.g. `whatsapp`)                                             |
| `tags`      | string[] | The matching tags, comma-separated (e.g. `sales,lead`). Tags are _case-insentive_. |
| `team_uuid` | string   | The uuid of the team.                                                              |

### Example Request

<RequestTabs endpoint='contacts_api' request="get_contacts"/>

### Response

| Parameter  | Type                                             | Description         |
| :--------- | :----------------------------------------------- | :------------------ |
| `contacts` | [Contact[]](/api/reference/object_types/contact) | A list of contacts. |

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
  ]
}
```
