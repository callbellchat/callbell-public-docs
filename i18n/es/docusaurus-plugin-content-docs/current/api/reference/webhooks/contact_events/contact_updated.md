---
sidebar_position: 2
---

# Contacto actualizado

Este evento se enviará siempre que un contacto sea **actualizado**. Esto también incluye _cambios de etiqueta_.

### Nombre del Evento

contacto_actualizado

### Payload Fields

Véase [Contact Object](./../../object_types/contact.md)

### Ejemplo de carga útil

```json title=carga.json
{
  "event": "contacto_actualizado",
  "payload": {
    "href": "https://dash.callbell.eu/contacts/eb2b914a977e4ab896e7b886698b3eac",
    "name": "John Doe",
    "tags": ["Lead"],
    "uuid": "eb2b914a977e4ab896e7b886698b3eac",
    "fuente": "whatsapp",
    "avatarUrl": null,
    "createdAt": "2022-10-12T15:57:16Z",
    "phoneNumber": "331122334455"
  }
}
```
