---
sidebar_position: 1
---

# Contact Créé

Cet événement sera envoyé chaque fois qu'un contact est **créé**.

### Nom de l'événement

`contact_created`

### Champs du payload

Voir [Objet Contact](./../../object_types/contact.md)

### Exemple de payload

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