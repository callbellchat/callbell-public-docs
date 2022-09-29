---
title: POST /messages/send
---

# POST /messages/send

### Required Parameters

| Parameter | Type           | Description                          |
| :-------- | :------------- | :----------------------------------- |
| `to`      | String         | Phone number or platform identifier  |
| `from`    | String         | Channel identifier (e.g. `whatsapp`) |
| `type`    | MessageType    | Type of message to be sent           |
| `content` | MessageContent | Content of the message               |


### Example Request

```bash title=request.sh
curl -X POST "https://api.callbell.eu/v1/messages/send" \
  -H "Authorization: Bearer test_gshuPaZoeEG6ovbc8M79w0QyM" \
  -H "Content-Type: application/json" \
  -d '{
    "to": "+31612345678",
    "from": "whatsapp",
    "type": "text",
    "content": {
      "text": "Hello!"
    }
  }'
```

### Response

| Parameter | Type                                                                   | Description                                                              |
| :-------- | :--------------------------------------------------------------------- | :----------------------------------------------------------------------- |
| message   | [MessageSendRequest](/api_reference/object_types/message_send_request) | The message send request. The system will initially enqueue the message. |


### Example Response

```json title=response.json
{
  "message": {
    "uuid": "adf3d1216d4c4dcd908199d6700f2381",
    "status": "enqueued"
  }
}
```