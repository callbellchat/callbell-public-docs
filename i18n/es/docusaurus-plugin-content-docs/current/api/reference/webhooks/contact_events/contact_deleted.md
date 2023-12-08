---
sidebar_position: 3
---

# Contacto eliminado

Este evento se enviará cada vez que se **elimine** un contacto. Actualmente, esto ocurre cada vez que se elimina una conversación de Callbell.

### Nombre del evento

`contacto_eliminado`

### Campos del payload

| Campo     | Tipo   | Descripción                                        |
| :-------- | :----- | :------------------------------------------------- |
| `uuid`    | string | El identificador único del mensaje eliminado        |
| `eliminado` | string | Fecha de eliminación del mensaje (formato ISO 8601) |

### Ejemplo de payload

```json title=payload.json
{
  "evento": "contacto_eliminado",
  "payload": {
    "uuid": "fad77e68757b43c3b77b51cd66ec18f3",
    "eliminado": "2022-10-17T15:15:06.095Z"
  }
}
```