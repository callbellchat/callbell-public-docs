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
| `identifier` | String | The identifier of the contact (e.g. phone number in WhatsApp) |
| `source`     | Source | The source of the contact (e.g. `whatsapp`)                   |
| `name`       | String | The name of the contact                                       |

### Optional Parameters

| Parameter       | Type     | Description                                                                    |
| :-------------- | :------- | :----------------------------------------------------------------------------- |
| `tags`          | String[] | A list of comma-separated values (e.g `['Call back', 'Interested']`)           |
| `custom_fields` | String{} | An object with the custom fields (e.g. `{'Billing Address': 'Main Street 1'}`) |
| `assigned_user` | String   | Email of the user that you want to assign to a contact                         |
| `team_uuid`     | String   | UUID of the team that you want to assign to a contact                          |

:::caution
When passing `custom_fields` or `tags` make sure that they exist in your account. See [tags](https://dash.callbell.eu/settings/tags) and [custom_fields](https://dash.callbell.eu/settings/custom_fields) in your settings.

Same applies for `assigned_user` and `team_uuid`: either needs to exists in your account.
:::

### Example Request

<RequestTabs endpoint='contacts_api' request="post_contacts"/>

### Response

| Parameter | Type                                           | Description                    |
| :-------- | :--------------------------------------------- | :----------------------------- |
| `contact` | [Contact](/api/reference/object_types/contact) | The contact which was created. |

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
      "assignedUser": null,
      "customFields": {}
    }
  ]
}
```
