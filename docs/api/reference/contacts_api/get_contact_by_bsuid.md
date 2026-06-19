---
title: GET /contacts/bsuid/:bsuid
sidebar_position: 5
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /contacts/bsuid/:bsuid

Get a specific contact given a `bsuid` (Business Suite User ID). This is useful for looking up contacts that may not have a phone number associated (e.g. WhatsApp username-privacy users).

### Required Parameters

| Parameter | Type   | Description                              |
| :-------- | :----- | :--------------------------------------- |
| `bsuid`   | string | The Business Suite User ID of the contact |

### Example Request

<RequestTabs endpoint='contacts_api' request="get_contact_by_bsuid"/>

### Response

| Parameter | Type                                           | Description                          |
| :-------- | :--------------------------------------------- | :----------------------------------- |
| `contact` | [Contact](/api/reference/object_types/contact) | The object representing the contact. |

### Example Response

```json title=response.json
{
  "contact": {
    "uuid": "414a6d692bd645ed803f2e7ce360d4c8",
    "name": "John Doe",
    "phoneNumber": "+123 456 789",
    "avatarUrl": null,
    "createdAt": "2020-11-13T21:08:53Z",
    "source": "whatsapp",
    "href": "https://dash.callbell.eu/contacts/414a6d692bd645ed803f2e7ce360d4c8",
    "conversationHref": "https://dash.callbell.eu/chat/f3670b13446b412796238b1cd78899f9",
    "tags": ["sales", "lead"],
    "assignedUser": null,
    "customFields": {
      "Address": "Oxford Street 123"
    },
    "bsuid": "bsuid_abc123"
  }
}
```
