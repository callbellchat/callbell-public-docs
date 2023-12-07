---
title: POST /webhooks/subscribe
sidebar_position: 2
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# POST /webhooks/subscribe

Crea un nuovo webhook o aggiorna uno esistente.

:::warning

Ogni account può registrare **solo** 1 webhook.

:::

### Parametri richiesti

| Parametro       | Tipo     | Descrizione                                                                                               |
| :-------------- | :------- | :-------------------------------------------------------------------------------------------------------- |
| `url`           | stringa  | L'identificativo del contatto (ad esempio il numero di telefono di WhatsApp)                              |
| `subscriptions` | string[] | Valori separati da virgole degli eventi da sottoscrivere su questo webhook (ad esempio `message_created`) |

### Esempio di richiesta

<RequestTabs endpoint='webhooks_api' request="post_webhooks_subscribe" />

### Risposta

| Parametro  | Tipo                                           | Descrizione                     |
| :--------- | :--------------------------------------------- | :------------------------------ |
| `contatto` | [Webhook](/api/reference/object_types/webhook) | Il webhook creato o aggiornato. |

### Esempio di risposta

```json title=response.json
{
    "webhook": {
        "url": "https://my-app.com/my-webhook-endpoint",
        "subscriptions": [
            "message_created"
        ],
        "createdAt": "2022-10-18 17:01:20 +0200",
        "enabled": true
    }
}
```
