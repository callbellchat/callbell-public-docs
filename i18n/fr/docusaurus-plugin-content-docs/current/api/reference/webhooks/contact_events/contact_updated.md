---
sidebar_position: 2
---

# Contact Mis à jour

Cet événement sera envoyé chaque fois qu'un contact est **mis à jour**. Cela inclut également les _changements d'étiquette_.

### Nom de l'événement

`contact_updated`

### Champs de la charge utile

Voir [Objet Contact](./../../object_types/contact.md)

### Exemple de charge utile

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