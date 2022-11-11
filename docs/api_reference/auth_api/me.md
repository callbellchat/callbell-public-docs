---
title: POST /auth/me
sidebar_position: 1
---

# GET /auth/me

Return a `200` status code if the `api_token` is valid.

### Example Request

```bash title=request.sh
curl -X GET "https://api.callbell.eu/v1/auth/me" \
  -H "Authorization: Bearer test_gshuPaZoeEG6ovbc8M79w0QyM" \
  -H "Content-Type: application/json"
```

### Response

| Parameter    | Type   | Description                                            |
| :----------- | :----- | :----------------------------------------------------- |
| `status`     | string | The status of the request (`ok`)                       |
| `user_email` | string | Email of the account user                              |
| `user_name`  | string | Name of the account user                               |
| `api_key`    | string | API key which generated the token used for the request |

### Example Response

```json title=response.json
{
  "status": "ok",
  "user_email": "john_doe@email.com",
  "user_name": "John Doe",
  "api_key": "test_1234567890"
}
```
