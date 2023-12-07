---
sidebar_position: 3
---

# Contacto eliminado

Este evento se enviará siempre que un contacto sea **borrado**. Actualmente, esto ocurre cada vez que se borra una conversación de Callbell.

### Nombre del Evento

contacto_borrado

### Payload Fields

| Campo Tipo Descripción
| :-------- | :----- | :--------------------------------------------------- |
| `uuid` | cadena | Identificador único del mensaje borrado | | Fecha de borrado del mensaje
| Fecha de borrado del mensaje (formato ISO 8601)

### Ejemplo de carga útil

```json title=carga.json
{
  "evento": "contacto_borrado",
  "payload": {
    "uuid": "fad77e68757b43c3b77b51cd66ec18f3",
    "deleted": "2022-10-17T15:15:06.095Z"
  }
}
```
