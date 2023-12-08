---
sidebar_position: 2
---

# Contato Atualizado

Este evento será enviado sempre que um contato for **atualizado**. Isso inclui também as _mudanças de tag_.

### Nome do Evento

`contato_atualizado`

### Campos de Payload

Veja [Objeto Contato](./../../object_types/contact.md)

### Exemplo de Payload

```json title=payload.json
{
  "event": "contato_atualizado",
  "payload": {
    "href": "https://dash.callbell.eu/contacts/eb2b914a977e4ab896e7b886698b3eac",
    "name": "John Doe",
    "tags": ["Lead"],
    "uuid": "eb2b914a977e4ab896e7b886698b3eac",
    "source": "whatsapp",
    "avatarUrl": null,
    "createdAt": "2022-10-12T15:57:16Z",
    "phoneNumber": "331122334455"
  }
}
```