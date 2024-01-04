---
title: GET /contacts/:uuid/messages
sidebar_position: 3
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /contacts/:uuid/messages

List all messages belonging to the contact. Results are paginated and sorted by `createdAt` in descending order.

### Parámetros Opcionales

| Parámetro | Tipo    | Descripción                                                       |
| :-------- | :------ | :---------------------------------------------------------------- |
| `page`    | Integer | La página de mensajes. Si no se especifica, se utilizará la página 1. |

### Ejemplo de Solicitud

<RequestTabs endpoint='contacts_api' request="get_contact_messages"/>

### Respuesta

| Parámetro   | Tipo                                              | Descripción          |
| :---------- | :------------------------------------------------ | :------------------- |
| `messages`  | [Messages[]](/api/reference/object_types/message) | Una lista de mensajes. |

### Ejemplo de Respuesta

```json title=response.json
{
  "messages": [
    {
      "text": "Hola, ¿cómo puedo ayudarte?",
      "createdAt": "2023-12-12T10:56:36Z",
      "uuid": "cf839626ac7949879b88bcffd41d34fe",
      "status": "enviado",
      "channel": "whatsapp",
      "from": "391234567890",
      "to": "390987654321"
    },
    {
      "text": "La conversación fue asignada a John Doe",
      "createdAt": "2023-12-12T10:56:35Z",
      "status": "nota",
      "channel": "whatsapp",
      "from": "390987654321",
      "to": "390987654321"
    },
    {
      "text": "Hola 👋",
      "createdAt": "2023-12-12T10:53:32Z",
      "status": "recibido",
      "channel": "whatsapp",
      "from": "390987654321",
      "to": "391234567890"
    }
  ]
}
```