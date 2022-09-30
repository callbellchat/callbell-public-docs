---
title: GET /messages/status/:uuid
sidebar_position: 3
---

# GET /messages/status/:uuid

### Required Parameters

| Parameter | Type   | Description                                           |
| :-------- | :----- | :---------------------------------------------------- |
| `uuid`    | String | Identifier of the message which was sent through API. |



### Example Request

```bash title=request.sh
curl -X GET "https://api.callbell.eu/v1/messages/status/adf3d1216d4c4dcd908199d6700f2381" \
  -H "Authorization: Bearer test_gshuPaZoeEG6ovbc8M79w0QyM" \
  -H "Content-Type: application/json"
```

### Response
| Parameter | Type                                                                   | Description                                  |
| :-------- | :--------------------------------------------------------------------- | :------------------------------------------- |
| `message` | [MessageSendRequest](/api_reference/object_types/message_send_request) | The message details comprehensive of status. |

### Example Response

```json title=response.json
{
  "message": {
    "uuid": "adf3d1216d4c4dcd908199d6700f2381",
    "status": "enqueued"
  }
}
```