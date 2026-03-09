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

| Parameter       | Type     | Description                                                                      |
| :-------------- | :------- | :------------------------------------------------------------------------------- |
| `tags`          | string[] | A list of comma-separated values (e.g `['Call back', 'Interested']`)             |
| `custom_fields` | String{} \| Object | An object with the custom fields. Values can be strings or arrays depending on the field type (see below). |
| `name`          | string   | The name of the contact                                                          |
| `assigned_user` | String   | Email of the the collaborator that you want to assign to a contact               |
| `unassign_user` | Boolean  | `true` is you want to remove the assigned collaborator from a contact            |
| `team_uuid`     | String   | UUID of the team that you want to assign to a contact                            |
| `bot_status`    | String   | The status of the bot for this contact. Accepts either `bot_start` or `bot_end`. |

:::info
When passing `bot_status` make sure that the bot is enabled in your account. Visit [bots](https://dash.callbell.eu/bots) in your Callbell account to create and enable one.

If you have a bot enabled, the default status is `bot_start`.
:::

:::caution
Ensure that `custom_fields` and `tags` already exist in your account before passing them. Visit [tags](https://dash.callbell.eu/settings/tags) and [custom_fields](https://dash.callbell.eu/settings/custom_fields) in your settings for more information.

For dropdown and checkbox custom fields, you must also configure the available options when creating the field. These options are displayed in the dashboard and enforced during validation.

Similarly, for `assigned_user` and `team_uuid`, use a valid email address associated with a user in your account or reference an existing team.
:::

:::info
Custom field values are validated based on their field type. Invalid values will return a validation error. Here are the expected formats per type:

| Type       | Value format | Example                                            |
| :--------- | :----------- | :------------------------------------------------- |
| `text`     | string       | `"Main Street 1"`                                  |
| `email`    | string       | `"user@example.com"`                               |
| `number`   | string       | `"42"`                                             |
| `date`     | string       | `"2026-03-03"`                                     |
| `dropdown` | string       | `"Active"` (must match one of the available options)|
| `checkbox` | string[]     | `["Dark Mode", "Notifications"]` (must match available options) |

Example:
```json
{
  "custom_fields": {
    "Billing Address": "Main Street 1",
    "Work Email": "user@example.com",
    "Status": "Active",
    "Features": ["Dark Mode", "Notifications"]
  }
}
```
:::

### Example Request

<RequestTabs endpoint='contacts_api' request="patch_contacts"/>

### Response

| Parameter | Type                                           | Description                         |
| :-------- | :--------------------------------------------- | :---------------------------------- |
| `contact` | [Contact](/api/reference/object_types/contact) | The contact which has been updated. |

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
      "conversationHref": "https://dash.callbell.eu/chat/f3670b13446b412796238b1cd78899f9",
      "tags": [],
      "assignedUser": "jane.doe@email.com",
      "customFields": {}
    }
  ]
}
```
