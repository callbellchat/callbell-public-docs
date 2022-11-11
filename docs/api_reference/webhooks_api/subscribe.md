---
title: POST /webhooks/subscribe
sidebar_position: 2
---

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

```bash title=request.sh
curl -X POST "https://api.callbell.eu/v1/webhooks/subscribe" \
  -H "Authorization: Bearer test_gshuPaZoeEG6ovbc8M79w0QyM" \
  -H "Content-Type: application/json"
  -d '{
    	"url": "https://my-app.com/my-webhook-endpoint",
        "subscriptions": ["message_created", "contact_created"]
  }'
```

### Response

| Parameter | Type                                           | Description                               |
| :-------- | :--------------------------------------------- | :---------------------------------------- |
| `contact` | [Webhook](/api_reference/object_types/webhook) | The webhook which was created or updated. |

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
