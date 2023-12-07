---
titolo: GET /webhooks/events
sidebar_position: 4
---

import RequestTabs from"@site/src/components/Requests/RequestTabs"

# GET /eventi

Elenca tutti gli eventi appartenenti al webhook. È possibile specificare un filtro per ottenere risultati più specifici.

### Parametri opzionali

| Parametro       | Tipo     | Descrizione                                                                                               |
| :-------------- | :------- | :-------------------------------------------------------------------------------------------------------- |
| `status`        | stringa  | Lo stato dell'evento (fallito, successo)                                                                  |
| `pagina`        | stringa  | Il numero di pagina                                                                                       |
| `items`         | stringa  | Il numero di elementi per pagina                                                                          |
| `subscriptions` | string[] | Valori separati da virgole degli eventi da sottoscrivere su questo webhook (ad esempio `message_created`) |

### Esempio di richiesta

<RequestTabs endpoint='webhooks_api' request="get_webhooks_events" />

### Risposta

| Parametro        | Tipo                                                      | Descrizione               |
| :--------------- | :-------------------------------------------------------- | :------------------------ |
| `webhook_events` | [WebhookEvent](/api/reference/object_types/webhook_event) | Elenco di eventi webhook. |

### Esempio di risposta

```json title=response.json
{
  "webhook_events": [
    {
      "event": "message_created",
      "payload": "message_object",
      "risposta": {
        "body": {},
        "code": 200,
        "headers": {}
      },
      "success": true,
      "createdAt": "2022-11-08T15:41:49Z"
    },
    {
      "evento": "message_created",
      "payload": "message_object",
      "risposta": {
        "body": {},
        "code": 200,
        "headers": {}
      },
      "success": true,
      "createdAt": "2022-11-08T14:52:31Z"
    },
    {
      "evento": "message_created",
      "payload": "contact_object",
      "risposta": {
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
    "pagine": 2
  }
}
```
