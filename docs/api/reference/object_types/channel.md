---
title: Channel
sidebar_position: 6
---

# Channel

Channels are the different platforms where you can receive and send messages. You can have multiple channels of the same type, for example, multiple WhatsApp numbers.

## Properties

| Parameter     | Type    | Description                                                                                     |
| :------------ | :------ | :---------------------------------------------------------------------------------------------- |
| `uuid`        | String  | The unique identifier of the channel.                                                           |
| `title`       | String  | The title of the channel.                                                                       |
| `type`        | String  | The type of the channel. Possible values are `facebook`, `whatsapp`, `instagram` and `telegram` |
| `main`        | Boolean | Indicates if the channel is the main channel.                                                   |
| `discardedAt` | String  | Indicates if the channel is the main channel.                                                   |

## Example

```json title=response.json
{
  "channels": [
    {
      "uuid": "7c996996fea947f4a1d5a11e7fac84db",
      "title": "phone_number_1",
      "type": "whatsapp",
      "main": true,
      "discardedAt": false
    },
    {
      "uuid": "dcefe6d18b5c4bbdb0661136c7f63c8e",
      "title": "phone_number_2",
      "type": "whatsapp",
      "main": false,
      "discardedAt": true
    },
    {
      "uuid": "759edec71ff440b29fc635c5fac84d4f",
      "title": "phone_number_3",
      "type": "whatsapp",
      "main": false,
      "discardedAt": true
    }
  ],
  "meta": {
    "page": 1,
    "pages": 1
  }
}
```

