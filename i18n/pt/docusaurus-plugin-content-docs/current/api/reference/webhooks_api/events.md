---
title: GET /webhooks/events
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /eventos

Listar todos os eventos pertencentes ao webhook. Um filtro pode ser especificado para obter resultados mais específicos.

### Parâmetros opcionais

| Parâmetro       | Tipo     | Descrição                                                                                 |
| :-------------- | :------- | :---------------------------------------------------------------------------------------- |
| `status`        | string   | O status do evento (falha, sucesso)                                                        |
| `page`          | string   | O número da página                                                                         |
| `items`         | string   | O número de itens por página                                                               |
| `subscriptions` | string[] | Valores separados por vírgula dos eventos a serem inscritos neste webhook (ex: `message_created`) |

### Exemplo de requisição

<RequestTabs endpoint='webhooks_api' request="get_webhooks_events"/>

### Resposta

| Parâmetro          | Tipo                                                      | Descrição                |
| :----------------- | :-------------------------------------------------------- | :----------------------- |
| `webhook_events`   | [WebhookEvent](/api/reference/object_types/webhook_event) | Lista de eventos webhook |

### Exemplo de resposta

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