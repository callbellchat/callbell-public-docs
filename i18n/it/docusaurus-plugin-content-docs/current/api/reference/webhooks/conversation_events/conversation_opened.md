---
sidebar_position: 1
---

# Conversazione aperta

Questo evento si verifica quando una conversazione viene **aperta** o **riaperta**.

### Nome evento

`conversazione_aperta

### Campi del carico utile

Vedere [Oggetto di conversazione](/api/reference/object_types/conversation)

### Esempio di carico utile

``json title=payload.json

  "evento": "conversation_opened",
  "payload": {
    "source": "whatsapp",
    "contatto": {
      "href": "https://dash.callbell.eu/contacts/eb2b914a977e4ab896e7b886698b3eac",
      "nome": "John Doe",
      "tag": ["Lead"],
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