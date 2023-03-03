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

### Optional Parameters

| Parameter       | Type     | Description                                                                   |
| :-------------- | :------- | :---------------------------------------------------------------------------- |
| `tags`          | string[] | A list of comma separated values (e.g `['Call back', 'Interested']`)          |
| `custom_fields` | string{} | An object with the custom fields (e.g. `{'Billing Address': 'Main Street 1}`) |
| `name`          | string   | The name of the contact                                                       |

:::caution
When passing `custom_fields` or `tags` make sure that they already exist in your account. See [tags](https://dash.callbell.eu/settings/tags) and [custom_fields](https://dash.callbell.eu/settings/custom_fields) in your settings.
:::

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
