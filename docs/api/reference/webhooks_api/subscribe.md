---
title: POST /webhooks/subscribe
sidebar_position: 2
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# POST /subscriptions

Creates a new webhook or updates an existing one.

:::caution

Each account can **only** register 1 webhook.

:::

### Required Parameters

| Parameter       | Type     | Description                                                                               |
| :-------------- | :------- | :---------------------------------------------------------------------------------------- |
| `url`           | string   | The identifier of the contact (e.g. phone number in WhatsApp)                             |
| `subscriptions` | string[] | Comma separated values of the events to subscribe on this webhook (e.g `message_created`) |

### Example Request

<RequestTabs endpoint='webhooks_api' request="post_webhooks_subscribe"/>

### Response

| Parameter | Type                                           | Description                               |
| :-------- | :--------------------------------------------- | :---------------------------------------- |
| `contact` | [Webhook](/api/reference/object_types/webhook) | The webhook which was created or updated. |

### Example Response

```json title=response.json
{
    "webhook": {
        "url": "https://my-app.com/my-webhook-endpoint",,
        "subscriptions": [
            "message_created"
        ],
        "createdAt": "2022-10-18 17:01:20 +0200",
        "enabled": true
    }
}
```
