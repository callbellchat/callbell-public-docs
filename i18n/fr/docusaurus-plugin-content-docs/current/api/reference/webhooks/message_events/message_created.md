# Message Créé

Cet événement sera envoyé chaque fois qu'un message est **créé**, par exemple lors de la réception ou de l'envoi d'un message d'un client.

### Nom de l'événement

`message_created`

### Champ de la charge utile

| Champ         | Type                                           | Description                                                  |
| :------------ | :--------------------------------------------- | :----------------------------------------------------------- |
| `to`          | string                                         | L'identifiant spécifique au canal du destinataire du message |
| `from`        | string                                         | L'identifiant spécifique au canal de l'expéditeur du message |
| `text`        | string                                         | Le texte du message                                          |
| `attachments` | string[]                                       | Les pièces jointes du message                                |
| `status`      | string                                         | Le statut du message. Ne peut être que `received` ou `sent`  |
| `channel`     | string                                         | Identifiant du canal (par exemple `whatsapp`)                |
| `contact`     | [Contact](/api/reference/object_types/contact) | Le contact associé au message                                |
| `createdAt`   | string                                         | Date de création du contact (au format ISO 8601)             |

### Exemple de charge utile

```json title=payload.json
{
  "event": "message_created",
  "payload": {
    "to": "331122334455",
    "from": "335544332211",
    "text": "Bonjour",
    "status": "received",
    "channel": "whatsapp",
    "contact": {
      "href": "https://dash.callbell.eu/contacts/eb2b914a977e4ab896e7b886698b3eac",
      "name": "John Doe",
      "tags": ["Lead"],
      "uuid": "eb2b914a977e4ab896e7b886698b3eac",
      "source": "whatsapp",
      "avatarUrl": null,
      "createdAt": "2022-10-12T15:57:16Z",
      "phoneNumber": "331122334455"
    },
    "createdAt": "2022-10-18T12:06:29.000+02:00"
  }
}
```