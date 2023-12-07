---
sidebar_position: 2
---

# Conversación cerrada

Este evento ocurre cuando una conversación es **cerrada**.

### Nombre del Evento

conversación_cerrada

### Payload Fields

Ver [Conversation Object](/api/reference/object_types/conversation)

### Ejemplo de carga útil

```json title=carga.json
{
  "evento": "conversation_closed",
  "payload": {
    "fuente": "whatsapp",
    "contact": {
      "href": "https://dash.callbell.eu/contacts/eb2b914a977e4ab896e7b886698b3eac",
      "name": "Juan Pérez",
      "tags": ["Lead"],
      "uuid": "eb2b914a977e4ab896e7b886698b3eac",
      "fuente": "whatsapp",
      "avatarUrl": null,
      "createdAt": "2022-10-12T15:57:16Z",
      "phoneNumber": "331122334455"
    },
    "createdAt": "2023-11-20T17:14:22Z",
    "closedAt": "2023-11-20T17:14:22Z"
  }
}
```