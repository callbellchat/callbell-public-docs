---
sidebar_position: 2
---


# Contacto actualizado

Este evento se enviará cuando se **actualice** un contacto. Esto también incluye cambios de _etiquetas_.

### Nombre del evento

`contact_updated`

### Campos de la carga útil

Consultar [Objeto de contacto](./../../object_types/contact.md)

### Ejemplo de carga útil

```json title=payload.json
{
  "event": "contact_updated",
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