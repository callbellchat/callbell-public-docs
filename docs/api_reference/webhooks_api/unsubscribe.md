---
title: DELETE /webhooks/unsubscribe
sidebar_position: 3
---

# DELETE /webhooks/unsubscribe

Deletes the webhook of the current account.

### Example Request

```bash title=request.sh
curl -X DELETE "https://api.callbell.eu/v1/webhooks/unsubscribe" \
  -H "Authorization: Bearer test_gshuPaZoeEG6ovbc8M79w0QyM" \
  -H "Content-Type: application/json"
```

### Response

| Parameter | Type   | Description             |
| :-------- | :----- | :---------------------- |
| `status`  | string | Status of the operation |

### Example Response

```json title=response.json
{
  "status": "webhook was destroyed"
}
```
