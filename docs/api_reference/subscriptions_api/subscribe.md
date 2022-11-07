---
title: POST /webhooks/subscribe
sidebar_position: 4
---

# POST /contacts

Creates a new webhook or updates an existing one. (Each account can have **only** one webhook at the time)

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
