---
sidebar_position: 1
---

# Contatto creato

Questo evento viene inviato ogni volta che viene **creato** un contatto.

### Nome evento

`contatto_creato`

### Campi del carico utile

Vedere [Oggetto Contatto](./../../object_types/contact.md)

### Esempio di carico utile

``json title=payload.json
{
  "evento": "contact_created",
  "payload": {
    "href": "https://dash.callbell.eu/contacts/eb2b914a977e4ab896e7b886698b3eac",
    "nome": "John Doe",
    "tag": ["Lead"],
    "uuid": "eb2b914a977e4ab896e7b886698b3eac",
    "source": "whatsapp",
    "avatarUrl": null,
    "createdAt": "2022-10-12T15:57:16Z",
    "phoneNumber": "331122334455"
  }
}
```
