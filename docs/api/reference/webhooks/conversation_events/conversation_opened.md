---
sidebar_position: 1
---

# Conversation Opened

This event occurs when a conversation is **opened** or **reopened**.

### Event Name

`conversation_opened`

### Payload Fields

See [Conversation Object](/api/reference/object_types/conversation)

### Example Payload

```json title=payload.json
{
  "event": "conversation_opened",
  "payload": {
    "source": "whatsapp",
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
    "createdAt": "2023-11-20T17:14:22Z"
  }
}
```