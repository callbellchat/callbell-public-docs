---
sidebar_position: 2
---

# Conversación Cerrada

Este evento ocurre cuando una conversación se **cierra**.

### Nombre del Evento

`conversation_closed`

### Campos del Cuerpo

Ver [Objeto de Conversación](/api/reference/object_types/conversation)

### Ejemplo del Cuerpo

```json title=payload.json
{
  "event": "conversation_closed",
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
    "createdAt": "2023-11-20T17:14:22Z",
    "closedAt": "2023-11-20T17:14:22Z"
  }
}
```