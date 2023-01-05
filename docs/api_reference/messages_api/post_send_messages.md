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

## Send Message with Media Attachments

You can use the API to send **media messages** containing **images**, **documents**, **audio** and **video** messages.

Is it also possible to add a _caption_ when sending `image` attachments (see the example request below).

### Send Image Attachment Example

```bash title=request.sh
```bash title=request.sh
curl -X POST "https://api.callbell.eu/v1/messages/send" \
  -H "Authorization: Bearer test_gshuPaZoeEG6ovbc8M79w0QyM" \
  -H "Content-Type: application/json" \
  -d '{
    "to": "+31612345678",
    "from": "whatsapp",
    "type": "image",
    "content": {
      "url": "https://example.com/my_image.jpeg"
    }
  }'
```

### Send Image Attachment & Caption Example

```bash title=request.sh
curl -X POST "https://api.callbell.eu/v1/messages/send" \
  -H "Authorization: Bearer test_gshuPaZoeEG6ovbc8M79w0QyM" \
  -H "Content-Type: application/json" \
  -d '{
    "to": "+31612345678",
    "from": "whatsapp",
    "type": "image",
    "content": {
      "url": "https://example.com/my_image.jpeg",
      "text: "This is my caption"
    }
  }'
```

### Send Document Attachment Example

```bash title=request.sh
curl -X POST "https://api.callbell.eu/v1/messages/send" \
  -H "Authorization: Bearer test_gshuPaZoeEG6ovbc8M79w0QyM" \
  -H "Content-Type: application/json" \
  -d '{
    "to": "+31612345678",
    "from": "whatsapp",
    "type": "document",
    "content": {
      "url": "https://example.com/my_image.pdf"
    }
  }'
```

### Send Audio Attachment Example

:::info
This is only available for accounts using the official **WhatsApp Business API** integration.
:::

```bash title=request.sh
curl -X POST "https://api.callbell.eu/v1/messages/send" \
  -H "Authorization: Bearer test_gshuPaZoeEG6ovbc8M79w0QyM" \
  -H "Content-Type: application/json" \
  -d '{
    "to": "+31612345678",
    "from": "whatsapp",
    "type": "document",
    "content": {
      "url": "https://example.com/my_audio.mp3"
    }
  }'
```

### Send Video Attachment Example

:::info
This is only available for accounts using the official **WhatsApp Business API** integration.
:::

```bash title=request.sh
curl -X POST "https://api.callbell.eu/v1/messages/send" \
  -H "Authorization: Bearer test_gshuPaZoeEG6ovbc8M79w0QyM" \
  -H "Content-Type: application/json" \
  -d '{
    "to": "+31612345678",
    "from": "whatsapp",
    "type": "document",
    "content": {
      "url": "https://example.com/my_video.mp4"
    }
  }'
```
