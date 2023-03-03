---
title: GET /contacts/:uuid
sidebar_position: 3
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /contact/:uuid

Get a specific contact given a `uuid`.

### Required Parameters

| Parameter | Type   | Description             |
| :-------- | :----- | :---------------------- |
| `uuid`    | string | The uuid of the contact |

### Example Request

<RequestTabs endpoint='contacts_api' request="get_contact"/>

### Response

| Parameter | Type                                           | Description                          |
| :-------- | :--------------------------------------------- | :----------------------------------- |
| `contact` | [Contact](/api_reference/object_types/contact) | The object representing the contact. |

### Example Response

```json title=response.json
{
  "contact": [
    {
      "uuid": "414a6d692bd645ed803f2e7ce360d4c8",
      "name": "John Doe",
      "phoneNumber": "+123 456 789",
      "avatarUrl": null,
      "createdAt": "2020-11-13T21:08:53Z",
      "source": "whatsapp",
      "href": "https://dash.callbell.eu/contacts/414a6d692bd645ed803f2e7ce360d4c8",
      "tags": ["sales", "lead"],
      "customFields": {
        "Address": "Oxford Street 123",
        "Billing Address": "Oxford Street 123",
        "VAT": "ABC123DCE456"
      }
    }
  ]
}
```
