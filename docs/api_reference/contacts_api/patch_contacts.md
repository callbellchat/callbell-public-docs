---
title: PATCH /contacts/:uuid
sidebar_position: 5
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# PATCH /contacts/:uuid

Updates an existing contact.

### Required Parameters

| Parameter | Type   | Description                                                   |
| :-------- | :----- | :------------------------------------------------------------ |
| `uuid`    | string | The identifier of the contact (e.g. phone number in WhatsApp) |

### Optional Parameters

All parameters reported by [Contact](/api_reference/object_types/contact) _except_ `uuid`.

### Example Request

<RequestTabs endpoint='contacts_api' request="patch_contacts"/>

### Response

| Parameter | Type                                           | Description                         |
| :-------- | :--------------------------------------------- | :---------------------------------- |
| `contact` | [Contact](/api_reference/object_types/contact) | The contact which has been updated. |

### Example Response

```json title=response.json
{
  "contact": [
    {
      "uuid": "414a6d692bd645ed803f2e7ce360d4c8",
      "name": "UPDATE Doe",
      "phoneNumber": "123456789",
      "avatarUrl": null,
      "createdAt": "2020-11-13T21:08:53Z",
      "source": "whatsapp",
      "href": "https://dash.callbell.eu/contacts/414a6d692bd645ed803f2e7ce360d4c8",
      "tags": [],
      "customFields": {}
    }
  ]
}
```
