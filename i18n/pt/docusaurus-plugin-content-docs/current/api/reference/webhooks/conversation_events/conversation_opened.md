---
sidebar_position: 1
---

# Conversa Iniciada

Esse evento ocorre quando uma conversa é **iniciada** ou **reiniciada**.

### Nome do Evento

`conversa_iniciada`

### Campos do Payload

Veja [Objeto Conversa](/api/reference/object_types/conversation)

### Exemplo de Payload

```json title=payload.json
{
  "event": "conversa_iniciada",
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