---
sidebar_position: 3
---

# Contatto Eliminato

Questo evento verrà inviato ogni volta che un contatto viene **eliminato**. Attualmente, ciò avviene quando una conversazione viene eliminata da Callbell.

### Nome dell'evento

`contact_deleted`

### Campi del payload

| Campo     | Tipo   | Descrizione                                                   |
| :-------- | :----- | :------------------------------------------------------------ |
| `uuid`    | stringa | L'identificatore univoco del messaggio eliminato               |
| `deleted` | stringa | Data dell'eliminazione del messaggio (formato ISO 8601)        |

### Esempio del payload

```json title=payload.json
{
  "event": "contact_deleted",
  "payload": {
    "uuid": "fad77e68757b43c3b77b51cd66ec18f3",
    "deleted": "2022-10-17T15:15:06.095Z"
  }
}
```