---
sidebar_position: 1
---

# Contatto creato

Questo evento verrà inviato ogni volta che viene creato un contatto.

### Nome dell'evento

`contatto_creato`

### Campi del payload

Vedi [Oggetto Contatto](./../../object_types/contact.md)

### Esempio di payload

```json title=payload.json
{
  "event": "contatto_creato",
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