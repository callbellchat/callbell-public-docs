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

| Parameter       | Type     | Description                                                                                             |
| :-------------- | :------- | :------------------------------------------------------------------------------------------------------ |
| `tags`          | String[] | A list of comma-separated values (e.g `['Call back', 'Interested']`)                                    |
| `custom_fields` | String{} | An object with the custom fields (e.g. `{'Billing Address': 'Main Street 1'}`)                          |
| `assigned_user` | String   | Email of the user that you want to assign to a contact                                                  |
| `team_uuid`     | String   | UUID of the team that you want to assign to a contact                                                   |
| `channel_uuid`  | String   | The message will be sent from this channel (when omitted, it will use the default main channel)         |
| `bot_status`    | String   | The status of the bot for this contact. The status of the bot. Accepts either `bot_start` or `bot_end`. |

:::info
When passing `bot_status` make sure that the bot is enabled in your account. Visit [bots](https://dash.callbell.eu/bots) in your Callbell account to create and enable one.

If you have a bot enabled, the default status is `bot_start` meaning that the bot will reply whenever the contact writes. If this is not the intended behavior, you can set the status to `bot_end` to stop the bot from replying to the contact. This can be useful when you want to take over the conversation manually or when you want to stop the bot from replying to the contact for any other reason.
:::

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
      "conversationHref": "https://dash.callbell.eu/chat/f3670b13446b412796238b1cd78899f9",
      "tags": [],
      "assignedUser": null,
      "customFields": {}
    }
  ]
}
```
