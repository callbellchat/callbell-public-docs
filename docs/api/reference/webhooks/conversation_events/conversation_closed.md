---
sidebar_position: 2
---

# Conversation Closed

This event occurs when a conversation is **closed**.

### Event Name

`conversation_closed`

### Payload Fields

See [Conversation Object](/api/reference/object_types/conversation)

### Example Payload

```json title=payload.json
{
  "event": "conversation_closed",
  "payload": {
    "source": "whatsapp",
    "href": "https://dash.callbell.eu/chat/f3670b13446b412796238b1cd78899f9",
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
    "closingReason": "issue_resolved",
    "createdAt": "2023-11-20T17:14:22Z",
    "closedAt": "2023-11-20T17:14:22Z"
  }
}
```

