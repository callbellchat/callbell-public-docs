---
title: OBTENER /webhooks/events
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# OBTENER /events

Enumera todos los eventos pertenecientes al webhook. Se puede especificar un filtro para obtener resultados más específicos.

### Parámetros opcionales

| Parámetro       | Tipo     | Descripción                                                                             |
| :-------------- | :------- | :-------------------------------------------------------------------------------------- |
| `status`        | string   | El estado del evento (fallido, exitoso)                                                  |
| `page`          | string   | El número de página                                                                     |
| `items`         | string   | La cantidad de elementos por página                                                      |
| `subscriptions` | string[] | Valores separados por comas de los eventos a los que suscribirse en este webhook (por ejemplo, `message_created`) |

### Ejemplo de solicitud

<RequestTabs endpoint='webhooks_api' request="get_webhooks_events"/>

### Respuesta

| Parámetro          | Tipo                                                      | Descripción             |
| :----------------- | :-------------------------------------------------------- | :---------------------- |
| `webhook_events`   | [WebhookEvent](/api/reference/object_types/webhook_event) | Lista de eventos de webhook. |

### Ejemplo de respuesta

```json title=response.json
{
  "webhook_events": [
    {
      "event": "message_created",
      "payload": "message_object",
      "response": {
        "body": {},
        "code": 200,
        "headers": {}
      },
      "success": true,
      "createdAt": "2022-11-08T15:41:49Z"
    },
    {
      "event": "message_created",
      "payload": "message_object",
      "response": {
        "body": {},
        "code": 200,
        "headers": {}
      },
      "success": true,
      "createdAt": "2022-11-08T14:52:31Z"
    },
    {
      "event": "message_created",
      "payload": "contact_object",
      "response": {
        "body": {},
        "code": 200,
        "headers": {}
      },
      "success": true,
      "createdAt": "2022-11-08T14:51:51Z"
    }
  ],
  "meta": {
    "page": 1,
    "pages": 2
  }
}
```