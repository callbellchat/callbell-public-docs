---
title: POST /webhooks/subscribe
sidebar_position: 2
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# POST /subscriptions

Crea un nuevo webhook o actualiza uno existente.

:::caution

Cada cuenta puede **sólo** registrar 1 webhook.

:::

### Parámetros requeridos

| Parámetro      | Tipo     | Descripción                                                                             |
| :------------- | :------- | :-------------------------------------------------------------------------------------- |
| `url`          | string   | El identificador del contacto (por ejemplo, número de teléfono en WhatsApp)              |
| `subscriptions`| string[] | Valores separados por comas de los eventos a los que suscribirse en este webhook (por ejemplo `message_created`) |

### Ejemplo de solicitud

<RequestTabs endpoint='webhooks_api' request="post_webhooks_subscribe"/>

### Respuesta

| Parámetro | Tipo                                           | Descripción                                 |
| :-------- | :--------------------------------------------- | :------------------------------------------ |
| `contacto`| [Webhook](/api/reference/object_types/webhook)| El webhook que se creó o actualizó.         |

### Ejemplo de respuesta

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