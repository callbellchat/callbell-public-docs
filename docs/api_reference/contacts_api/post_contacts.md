---
title: POST /contacts
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# POST /contacts

Creates a new contact.

### Required Parameters

| Parameter    | Type   | Description                                                   |
| :----------- | :----- | :------------------------------------------------------------ |
| `identifier` | string | The identifier of the contact (e.g. phone number in WhatsApp) |
| `source`     | Source | The source of the contact (e.g. `whatsapp`)                   |
| `name`       | string | The name of the contact                                       |

### Example Request

<RequestTabs endpoint='contacts_api' request="post_contacts"/>

### Response

| Parameter | Type                                           | Description                    |
| :-------- | :--------------------------------------------- | :----------------------------- |
| `contact` | [Contact](/api_reference/object_types/contact) | The contact which was created. |

### Example Response

```json title=response.json
{
  "contact": [
    {
      "uuid": "414a6d692bd645ed803f2e7ce360d4c8",
      "name": "John Doe",
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
