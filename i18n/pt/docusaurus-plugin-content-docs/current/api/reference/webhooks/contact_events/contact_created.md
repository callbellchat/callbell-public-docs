---
sidebar_position: 1
---

# Contato Criado

Este evento será enviado sempre que um contato for **criado**.

### Nome do Evento

`contato_criado`

### Campos da Carga

Veja [Objeto de Contato](./../../object_types/contact.md)

### Exemplo de Carga

```json title=payload.json
{
  "event": "contato_criado",
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