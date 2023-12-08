---
sidebar_position: 2
---

# Conversazione chiusa

Questo evento si verifica quando una conversazione viene **chiusa**.

### Nome dell'evento

`conversazione_chiusa`

### Campi del payload

Vedi [Oggetto Conversazione](/api/reference/object_types/conversation)

### Esempio di payload

```json title=payload.json
{
  "event": "conversazione_chiusa",
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
    "createdAt": "2023-11-20T17:14:22Z",
    "closedAt": "2023-11-20T17:14:22Z"
  }
}
```