---
title: GET /channels/:uuid
sidebar_position: 3
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /channels/:uuid

Get a specific channel given a `uuid`.

### Required Parameters

| Parameter | Type   | Description             |
| :-------- | :----- | :---------------------- |
| `uuid`    | string | The uuid of the channel |

### Example Request

<RequestTabs endpoint='channels_api' request="get_channel"/>

### Response

| Parameter | Type                                           | Description                          |
| :-------- | :--------------------------------------------- | :----------------------------------- |
| `channel` | [Channel](/api/reference/object_types/channel) | The object representing the channel. |

### Example Response

```json title=response.json
{
  "channel": {
    "uuid": "7c996996fea947f4a1d5a11e7fac84db",
    "title": "phone_number_1",
    "type": "whatsapp",
    "main": true
  }
}
```
