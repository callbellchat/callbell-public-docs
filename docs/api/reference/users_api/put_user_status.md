---
title: PUT /users/:uuid/status
sidebar_position: 1
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# PUT /users/:uuid/status

Updates the availability and/or a users' custom status.

### Required Parameters

| Parameter | Type   | Description                                                   |
| :-------- | :----- | :------------------------------------------------------------ |
| `uuid`    | string | The user `uuid` |

### Optional Parameters

| Parameter       | Type     | Description                                                                      |
| :-------------- | :------- | :------------------------------------------------------------------------------- |
| `available`          | boolean | User is available (`true`) or away (`false`)             |
| `custom_status_uuid` | string | The `uuid` of a custom status    |

:::info
When passing `bot_status` make sure that the bot is enabled in your account. Visit [bots](https://dash.callbell.eu/bots) in your Callbell account to create and enable one.

If you have a bot enabled, the default status is `bot_start`.
:::

:::caution
Ensure that `custom_fields` and `tags` already exist in your account before passing them. Visit [tags](https://dash.callbell.eu/settings/tags) and [custom_fields](https://dash.callbell.eu/settings/custom_fields) in your settings for more information.

Similarly, for `assigned_user` and `team_uuid`, use a valid email address associated with a user in your account or reference an existing team.
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
