# Messaggio Creato

Questo evento verrà inviato ogni volta che viene **creato** un messaggio, ad esempio quando si riceve o si invia un messaggio da/a un cliente.

### Nome dell'Evento

`message_created`

### Campi del Payload

| Campo         | Tipo                                           | Descrizione                                                          |
| :------------ | :--------------------------------------------- | :------------------------------------------------------------------- |
| `to`          | string                                         | L'identificatore specifico del canale del destinatario del messaggio |
| `from`        | string                                         | L'identificatore specifico del canale del mittente del messaggio     |
| `text`        | string                                         | Il testo del messaggio                                               |
| `attachments` | string[]                                       | Gli allegati del messaggio                                           |
| `status`      | string                                         | Lo stato del messaggio. Può essere solo `received` o `sent`          |
| `channel`     | string                                         | Identificativo del canale (es. `whatsapp`)                           |
| `contact`     | [Contact](/api/reference/object_types/contact) | Il contatto associato al messaggio                                   |
| `createdAt`   | string                                         | Data di creazione del contatto (formattata secondo ISO 8601)         |

### Esempio del Payload

```json title=payload.json
{
  "event": "message_created",
  "payload": {
    "to": "331122334455",
    "from": "335544332211",
    "text": "Ciao",
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