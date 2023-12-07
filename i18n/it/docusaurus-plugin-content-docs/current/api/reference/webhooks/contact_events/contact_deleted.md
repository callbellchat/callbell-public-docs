---
sidebar_position: 3
---

# Contatto eliminato

Questo evento viene inviato ogni volta che un contatto viene **cancellato**. Attualmente, ciò avviene ogni volta che una conversazione viene cancellata da Callbell.

### Nome evento

`contatto_cancellato`

### Campi del carico utile

| Campo | Tipo | Descrizione |
| :-------- | :----- | :--------------------------------------------------- |
| `uuid` | stringa | L'identificatore univoco del messaggio cancellato |
| `deleted` | stringa | Data di cancellazione del messaggio (formattata ISO 8601) |

### Esempio di carico utile

```json title=payload.json
{
  "evento": "contatto_cancellato",
  "payload": {
    "uuid": "fad77e68757b43c3b77b51cd66ec18f3",
    "cancellato": "2022-10-17T15:15:06.095Z"
  }
}
```
