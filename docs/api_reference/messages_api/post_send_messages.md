---
title: POST /messages/send
---

# POST /messages/send

:::caution
After 24h without a reply from the customer, it is not possible to send regular messages, you'll need to use a [Template](#send-template-messages) message, see examples below.
:::

### Required Parameters

| Parameter | Type           | Description                          |
| :-------- | :------------- | :----------------------------------- |
| `to`      | String         | Phone number or platform identifier  |
| `from`    | String         | Channel identifier (e.g. `whatsapp`) |
| `type`    | MessageType    | Type of message to be sent           |
| `content` | MessageContent | Content of the message               |

### Optional Parameters

| Parameter       | Type    | Description                                                       |
| :-------------- | :------ | :---------------------------------------------------------------- |
| `template_uuid` | string  | Unique identifier of the template message                         |
| `optin_contact` | Boolean | Confirmation that the contact has opted-in for receiving messages |

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

## Send Template Messages

You can use the API to send an approved [Template](/api_reference/object_types/template) Message.

:::info
This is only available for accounts using the official **WhatsApp Business API** integration.
:::

:::caution
In order to send template messages `template_uuid` and `optin_contact` **must** be present in the payload.
:::

```bash title=request.sh
curl -X POST "https://api.callbell.eu/v1/messages/send" \
  -H "Authorization: Bearer test_gshuPaZoeEG6ovbc8M79w0QyM" \
  -H "Content-Type: application/json" \
  -d '{
    "to": "+31612345678",
    "from": "whatsapp",
    "type": "text",
    "content": {
      "text": "John Doe"
    },
    "template_uuid": "d980fb66fd5043d3ace1aa06ba044342",
    "optin_contact": true
  }'
```

In this context `text` refers to the placeholder of the template message, for example let's say you have a template message like this:

```bash title=template_example
Hello {{1}}, this is a template message example
```

The placeholder replacement will be done with the value passed in the payload, so in this case it will be the following:

```bash title=template_example
Hello John Doe, this is a template message example
```

## Send Template Messages with Media Attachments

You can use the API to send an approved [Template](/api_reference/object_types/template) Message

:::info
This is only available for accounts using the official **WhatsApp Business API** integration.
:::

:::caution
In order to send template messages `template_uuid` and `optin_contact` must be present in the payload.
:::

If you have media template messages approved, you can send them by including a valid `url` of the media

### Send Image Attachment

```bash title=request.sh
curl -X POST "https://api.callbell.eu/v1/messages/send" \
  -H "Authorization: Bearer test_gshuPaZoeEG6ovbc8M79w0QyM" \
  -H "Content-Type: application/json" \
  -d '{
    "to": "+31612345678",
    "from": "whatsapp",
    "type": "image",
    "content": {
      "text": "John Doe",
      "url": "https://example.com/valid_image.jpeg"
    },
    "template_uuid": "d980fb66fd5043d3ace1aa06ba044342",
    "optin_contact": true
  }'
```

### Send Document Attachment

```bash title=request.sh
curl -X POST "https://api.callbell.eu/v1/messages/send" \
  -H "Authorization: Bearer test_gshuPaZoeEG6ovbc8M79w0QyM" \
  -H "Content-Type: application/json" \
  -d '{
    "to": "+31612345678",
    "from": "whatsapp",
    "type": "document",
    "content": {
      "text": "John Doe",
      "url": "https://example.com/valid_document.pdf"
    },
    "template_uuid": "d980fb66fd5043d3ace1aa06ba044342",
    "optin_contact": true
  }'
```

### Send Video Attachment

```bash title=request.sh
curl -X POST "https://api.callbell.eu/v1/messages/send" \
  -H "Authorization: Bearer test_gshuPaZoeEG6ovbc8M79w0QyM" \
  -H "Content-Type: application/json" \
  -d '{
    "to": "+31612345678",
    "from": "whatsapp",
    "type": "video",
    "content": {
      "text": "John Doe",
      "url": "https://example.com/valid_video.mp4"
    },
    "template_uuid": "d980fb66fd5043d3ace1aa06ba044342",
    "optin_contact": true
  }'
```

:::info
Use the [Templates API](/api_reference/template_messages_api/introduction) to the get the `template_uuid`s your templates.
:::
