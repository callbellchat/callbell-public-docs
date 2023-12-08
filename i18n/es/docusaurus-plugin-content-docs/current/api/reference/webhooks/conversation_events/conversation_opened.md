---
sidebar_position: 1
---

# Chat abierto

Este evento ocurre cuando se **abre** o **reabre** un chat.

### Nombre del evento

`chat_abierto`

### Campos del payload

Ver [Objeto de chat](/api/reference/object_types/conversation)

### Ejemplo de payload

```json title=payload.json
{
  "event": "chat_abierto",
  "payload": {
    "source": "whatsapp",
    "contact": {
      "href": "https://dash.callbell.eu/contacts/eb2b914a977e4ab896e7b886698b3eac",
      "name": "John Doe",
      "tags": ["Lead"],
      "uuid": "eb2b914a977e4ab896e7b886698b3eac",
      "source": "whatsapp",
      "avatarUrl": null,
      "createdAt": "2022-10-12T15:57:16Z",
      "phoneNumber": "331122334455"
    },
    "createdAt": "2023-11-20T17:14:22Z"
  }
}
```