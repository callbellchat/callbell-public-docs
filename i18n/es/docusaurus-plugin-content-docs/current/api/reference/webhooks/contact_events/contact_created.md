---
sidebar_position: 1
---

# Contacto Creado

Este evento se enviará cada vez que se **crea** un contacto.

### Nombre del Evento

`contact_created`

### Campos del Payload

Ver [Objeto Contacto](./../../object_types/contact.md)

### Ejemplo de Payload

```json title=payload.json
{
  "event": "contact_created",
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