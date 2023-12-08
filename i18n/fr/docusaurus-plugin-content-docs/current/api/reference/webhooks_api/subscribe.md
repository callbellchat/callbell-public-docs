---
title: POST /webhooks/subscribe
sidebar_position: 2
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# POST /subscriptions

Crée un nouveau webhook ou met à jour un webhook existant.

:::caution

Chaque compte ne peut s'inscrire qu'à **un seul** webhook.

:::

### Paramètres requis

| Paramètre       | Type     | Description                                                                                |
| :-------------- | :------- | :----------------------------------------------------------------------------------------- |
| `url`           | string   | L'identificateur du contact (par exemple, le numéro de téléphone sur WhatsApp)             |
| `subscriptions` | string[] | Valeurs séparées par des virgules des événements auxquels souscrire à ce webhook (par ex. `message_created`) |

### Exemple de requête

<RequestTabs endpoint='webhooks_api' request="post_webhooks_subscribe"/>

### Réponse

| Paramètre  | Type                                           | Description                                    |
| :--------- | :--------------------------------------------- | :--------------------------------------------- |
| `contact`  | [Webhook](/api/reference/object_types/webhook) | Le webhook qui a été créé ou mis à jour.        |

### Exemple de réponse

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