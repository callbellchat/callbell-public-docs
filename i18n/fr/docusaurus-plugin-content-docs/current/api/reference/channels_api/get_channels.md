---
title: GET /channels
sidebar_position: 2
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /channels
List all channels belonging to the account.

### Optional Parameters

| Parameter | Type   | Description                                                                                    |
| :-------- | :----- | :--------------------------------------------------------------------------------------------- |
| `page`    | Number | The page number to retrieve. Default is `1`.                                                   |
| `type`    | String | Filter by channel type. Possible values are `facebook`, `whatsapp`, `instagram` and `telegram` |

### Example Request

<RequestTabs endpoint='channels_api' request="get_channels"/>

### Response

| Parameter  | Type                                             | Description         |
| :--------- | :----------------------------------------------- | :------------------ |
| `channels` | [Channel[]](/api/reference/object_types/channel) | A list of channels. |

### Example Response 

```json title=response.json
{
  "channels": [
    {
      "uuid": "7c996996fea947f4a1d5a11e7fac84db",
      "title": "phone_number_1",
      "type": "whatsapp",
      "main": true
    },
    {
      "uuid": "dcefe6d18b5c4bbdb0661136c7f63c8e",
      "title": "phone_number_2",
      "type": "whatsapp",
      "main": false
    },
    {
      "uuid": "759edec71ff440b29fc635c5fac84d4f",
      "title": "phone_number_3",
      "type": "whatsapp",
      "main": false
    },
  ],
  "meta": {
    "page": 1,
    "pages": 1
  }
}
```