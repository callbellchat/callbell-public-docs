# Message Created

This event will be sent whenever a message gets **created**, for example when _receiving_ or _sending_ a message from/to a customer.

### Event Name

`message_created`

### Payload Fields

| Field         | Type                                           | Description                                                    |
| :------------ | :--------------------------------------------- | :------------------------------------------------------------- |
| `to`          | string                                         | The channel-specific identifier of the message receiver        |
| `from`        | string                                         | The channel-specific identifier of the message sender          |
| `text`        | string                                         | The text of the message                                        |
| `attachments` | string[]                                       | The attachments of the message                                 |
| `status`      | string                                         | The status of the message. Can be only be `received` or `sent` |
| `channel`     | string                                         | Channel identifier (e.g. `whatsapp`)                           |
| `contact`     | [Contact](/api/reference/object_types/contact) | The contact associated to the message                          |
| `createdAt`   | string                                         | Date of contact creation (ISO 8601 formatted)                  |

### Example Payload

```json title=payload.json
{
  "event": "message_created",
  "payload": {
    "to": "331122334455",
    "from": "335544332211",
    "text": "Hello",
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
