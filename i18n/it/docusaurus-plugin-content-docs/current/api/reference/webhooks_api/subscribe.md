---

title: POST /webhooks/subscribe
sidebar_position: 2
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# POST /subscriptions

Crea un nuovo webhook o aggiorna quello esistente.

:::caution

Ogni account può registrare **solo** 1 webhook.

:::

### Parametri Richiesti

| Parametro      | Tipo     | Descrizione                                                                                  |
| :------------- | :------- | :------------------------------------------------------------------------------------------- |
| `url`          | string   | L'identificatore del contatto (ad esempio, il numero di telefono su WhatsApp)                 |
| `subscriptions`| string[] | Valori separati da virgola degli eventi a cui sottoscriversi su questo webhook (p.e. `message_created`) |

### Esempio Richiesta

<RequestTabs endpoint='webhooks_api' request="post_webhooks_subscribe"/>

### Risposta

| Parametro | Tipo                                                     | Descrizione                                     |
| :-------- | :------------------------------------------------------- | :---------------------------------------------- |
| `webhook` | [Webhook](/api/reference/object_types/webhook) | Il webhook che è stato creato o aggiornato.   |

### Esempio Risposta

```json title=response.json
{
    "webhook": {
        "url": "https://my-app.com/my-webhook-endpoint",,
        "subscriptions": [
            "message_created"
        ],
        "createdAt": "2022-10-18 17:01:20 +0200",
        "enabled": true
    }
}
```