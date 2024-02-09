---
title: PATCH /channels/:uuid
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# PATCH /channels/:uuid

Updates an existing channel.

### Required Parameters

| Parameter | Type   | Description                   |
| :-------- | :----- | :---------------------------- |
| `uuid`    | string | The identifier of the channel |

### Optional Parameters

| Parameter | Type   | Description                                     |
| :-------- | :----- | :---------------------------------------------- |
| `title`   | string | The new title that will be given to the channel |


### Example Request

<RequestTabs endpoint='channels_api' request="patch_channel"/>

### Response

| Parameter | Type                                           | Description                          |
| :-------- | :--------------------------------------------- | :----------------------------------- |
| `channel` | [Channel](/api/reference/object_types/channel) | The object representing the channel. |

### Example Response

```json title=response.json
{
  "channel": {
    "uuid": "7c996996fea947f4a1d5a11e7fac84db",
    "title": "New title",
    "type": "whatsapp",
    "main": true
  }
}
```
