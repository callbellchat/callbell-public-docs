---
title: GET /contacts/:uuid/messages
sidebar_position: 3
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /contacts/:uuid/messages

Liste de tous les messages appartenant au contact. Les résultats sont paginés et triés par `createdAt` dans l'ordre décroissant.

### Paramètres facultatifs

| Parameter | Type    | Description                                                                            |
| :-------- | :------ | :------------------------------------------------------------------------------------- |
| `page`    | Integer | La page des messages. Si elle n'est pas spécifiée, la page 1 sera utilisée par défaut. |

### Exemple de demande

<RequestTabs endpoint='contacts_api' request="get_contact_messages"/>

### Réponse

| Parameter  | Type                                              | Description            |
| :--------- | :------------------------------------------------ | :--------------------- |
| `messages` | [Messages[]](/api/reference/object_types/message) | Une liste de messages. |

### Exemple de réponse

```json title=response.json
{
  "messages": [
    {
      "text": "Bonjour, comment puis-je vous aider ?",
      "createdAt": "2023-12-12T10:56:36Z",
      "uuid": "cf839626ac7949879b88bcffd41d34fe",
      "status": "sent",
      "channel": "whatsapp",
      "from": "391234567890",
      "to": "390987654321"
    },
    {
      "text": "La conversation a été assignée à John Doe",
      "createdAt": "2023-12-12T10:56:35Z",
      "status": "note",
      "channel": "whatsapp",
      "from": "390987654321",
      "to": "390987654321"
    },
    {
      "text": "Bonjour 👋",
      "createdAt": "2023-12-12T10:53:32Z",
      "status": "received",
      "channel": "whatsapp",
      "from": "390987654321",
      "to": "391234567890"
    }
  ]
}
```
