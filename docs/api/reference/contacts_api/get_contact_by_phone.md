---
title: GET /contacts/phone/:number
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /contacts/phone/:number

Get a specific contact given a `phone_number`. When the `channel_uuid` is specified, the contact will be searched by the phone number and the channel, otherwise by default the lookup will be performed on the **main WhatsApp channel**.

### Required Parameters

| Parameter      | Type   | Description                     |
| :------------- | :----- | :------------------------------ |
| `phone_number` | string | The phone number of the contact |


### Optional Parameters

| Parameter      | Type   | Description                                |
| :------------- | :----- | :----------------------------------------- |
| `channel_uuid` | string | The channel UUID to search the contact by. |

### Example Request

<RequestTabs endpoint='contacts_api' request="get_contact_by_phone"/>

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
      "Address": "Oxford Street 123",
      "Billing Address": "Oxford Street 123",
      "VAT": "ABC123DCE456"
    }
  }
}
```
