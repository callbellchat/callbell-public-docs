---
title: POST /auth/me
sidebar_position: 1
---

# POST /auth/me

Return a `200` status code if the `api_token` is valid.

### Example Request

```bash title=request.sh
curl -X POST "https://api.callbell.eu/v1/auth/me" \
  -H "Authorization: Bearer test_gshuPaZoeEG6ovbc8M79w0QyM" \
  -H "Content-Type: application/json"
  -d '{}'
```

### Response

| Parameter | Type   | Description |
| :-------- | :----- | :---------- |
| `status`  | string | "ok"        |

### Example Response

```json title=response.json
{
  "status": "ok"
}
```
