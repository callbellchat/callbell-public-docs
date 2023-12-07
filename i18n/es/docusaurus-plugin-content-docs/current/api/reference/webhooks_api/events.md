---
título: GET /webhooks/events
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /events

Lista todos los eventos pertenecientes al webhook. Se puede especificar un filtro para obtener resultados más específicos.

### Parámetros opcionales

| Parámetro Tipo Descripción
| :-------------- | :------- | :---------------------------------------------------------------------------------------- |
| `status` | cadena | El estado del evento (fallido, éxito) | | | | El número de página
| `page` | string | El número de la página | | `items` | El número del evento
| `items` | string | El número de elementos por página | | `subscriptions` | string | El número de suscripciones
| `subscriptions` | string[] | Valores separados por comas de los eventos a suscribir en este webhook (ej. `message_created`) |

### Ejemplo de solicitud

<RequestTabs endpoint='webhooks_api' request="get_webhooks_events"/>

### Respuesta

| Parámetro Tipo Descripción
| :--------------- | :-------------------------------------------------------- | :---------------------- |
| `webhook_events` | [WebhookEvent](/api/reference/object_types/webhook_event) | Lista de eventos webhook. |

### Ejemplo de respuesta

```json title=response.json
{
  "webhook_events": [
    {
      "evento": "message_created",
      "payload": "message_object",
      "response": {
        "body": {},
        "code": 200,
        "headers": {}
      },
      "success": verdadero,
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
      "success": verdadero,
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
      "success": verdadero,
      "createdAt": "2022-11-08T14:51:51Z"
    }
  ],
  "meta": {
    "page": 1,
    "páginas": 2
  }
}
```
