---
sidebar_position: 3
---

# Contact Supprimé

Cet événement sera envoyé chaque fois qu'un contact est **supprimé**. Actuellement, cela se produit chaque fois qu'une conversation est supprimée de Callbell.

### Nom de l'événement

`contact_deleted`

### Champs de la charge utile

| Champ     | Type   | Description                                          |
| :-------- | :----- | :--------------------------------------------------- |
| `uuid`    | string | L'identifiant unique du message supprimé             |
| `deleted` | string | Date de suppression du message (format ISO 8601)     |

### Exemple de charge utile

```json title=payload.json
{
  "event": "contact_deleted",
  "payload": {
    "uuid": "fad77e68757b43c3b77b51cd66ec18f3",
    "deleted": "2022-10-17T15:15:06.095Z"
  }
}
```