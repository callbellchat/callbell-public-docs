---
title: GET /whatsapp_template_messages/:uuid
sidebar_position: 3
---

# GET /whatsapp_template_messages/:uuid

Get a specific Whatsapp template message given a `uuid`.

### Required Parameters

| Parameter | Type   | Description                               |
| :-------- | :----- | :---------------------------------------- |
| `uuid`    | string | The uuid of the whatsapp template message |

### Example Request

```bash title=request.sh
curl -X GET "https://api.callbell.eu/v1/whatsapp_template_messages/ad42a09715814e6483b1c5debd6a2dbc" \
  -H "Authorization: Bearer test_gshuPaZoeEG6ovbc8M79w0QyM" \
  -H "Content-Type: application/json"
```

### Response

| Parameter                   | Type                                                                                 | Description                                            |
| :-------------------------- | :----------------------------------------------------------------------------------- | :----------------------------------------------------- |
| `whatsapp_template_message` | [Whatsapp Template Message[]](/api_reference/object_types/whatsapp_template_message) | The object representing the Whatsapp template message. |

### Example Response

```json title=response.json
{
  "whatsapp_template_message": {
    "uuid": "ad42a09715814e6483b1c5debd6a2dbc",
    "title": "Template title",
    "templateType": "text",
    "text": "Message text",
    "createdAt": "2020-11-13T21:08:53Z"
  }
}
```
