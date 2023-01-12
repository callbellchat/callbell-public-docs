---
title: PATCH /whatsapp_template_messages/:uuid
sidebar_position: 4
---

# PATCH /whatsapp_template_messages/:uuid

Updates an existing contact.

### Required Parameters

| Parameter | Type   | Description                                     |
| :-------- | :----- | :---------------------------------------------- |
| `uuid`    | string | The identifier of the Whatsapp Template Message |

### Optional Parameters

| Parameter | Type   | Description                                                   |
| :-------- | :----- | :------------------------------------------------------------ |
| `title`   | string | The title that will be given to the Whatsapp template message |

### Example Request

```bash title=request.sh
curl -X PATCH "https://api.callbell.eu/v1/contacts/414a6d692bd645ed803f2e7ce360d4c8" \
  -H "Authorization: Bearer test_gshuPaZoeEG6ovbc8M79w0QyM" \
  -H "Content-Type: application/json"
  -d '{"title": New title"}'
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
    "title": "New title",
    "templateType": "text",
    "text": "Message text",
    "createdAt": "2020-11-13T21:08:53Z"
  }
}
```
