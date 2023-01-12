---
title: GET /whatsapp_template_messages
sidebar_position: 2
---

# GET /whatsapp_template_messages

List all Whatsapp template messages belonging to the account.

### Example Request

```bash title=request.sh
curl -X GET "https://api.callbell.eu/v1/whatsapp_template_messages" \
  -H "Authorization: Bearer test_gshuPaZoeEG6ovbc8M79w0QyM" \
  -H "Content-Type: application/json"
```

### Response

| Parameter                    | Type                                                                                 | Description                           |
| :--------------------------- | :----------------------------------------------------------------------------------- | :------------------------------------ |
| `whatsapp_template_messages` | [Whatsapp Template Message[]](/api_reference/object_types/whatsapp_template_message) | A list of Whatsapp template messages. |

### Example Response

```json title=response.json
{
  "whatsapp_template_messages": [
    {
      "uuid": "ad42a09715814e6483b1c5debd6a2dbc",
      "title": "Template title",
      "templateType": "text",
      "text": "Message text",
      "createdAt": "2020-11-13T21:08:53Z"
    },
    {
      "uuid": "47aad5f9b4ca423c9d630f06ab93fe1f",
      "title": "Another Template title",
      "templateType": "text",
      "text": "Another Message text",
      "createdAt": "2020-11-13T21:10:33Z"
    }
  ],
  "meta": {
    "page": 1,
    "pages": 1
  }
}
```
