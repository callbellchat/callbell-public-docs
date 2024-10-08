---
sidebar_position: 2
---

# Contact Updated

This event will be sent whenever a contact is **updated**. This also includes _tag changes_.

### Event Name

`contact_updated`

### Payload Fields

See [Contact Object](./../../object_types/contact.md)

### Example Payload

```json title=payload.json
{
  "event": "contact_updated",
  "payload": {
    "href": "https://dash.callbell.eu/contacts/eb2b914a977e4ab896e7b886698b3eac",
    "conversationHref": "https://dash.callbell.eu/chat/f3670b13446b412796238b1cd78899f9",
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
