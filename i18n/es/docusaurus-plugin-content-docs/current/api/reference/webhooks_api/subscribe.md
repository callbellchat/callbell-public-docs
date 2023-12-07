---
título: POST /webhooks/subscribe
sidebar_position: 2
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# POST /subscriptions

Crea un nuevo webhook o actualiza uno existente.

:::precaución

Cada cuenta puede **sólo** registrar 1 webhook.

:::

### Parámetros requeridos

| Parámetro Tipo Descripción
| :-------------- | :------- | :---------------------------------------------------------------------------------------- |
| `url` | string | El identificador del contacto (por ejemplo, el número de teléfono en WhatsApp) | | `subscriptions` | string[] | Comandos de suscripciones
| `subscriptions` | string[] | Valores separados por comas de los eventos a suscribir en este webhook (ej. `message_created`) |

### Ejemplo de solicitud

<RequestTabs endpoint='webhooks_api' request="post_webhooks_subscribe"/>

### Respuesta

| Parámetro Tipo Descripción
| :-------- | :--------------------------------------------- | :---------------------------------------- |
| `contact` | [Webhook](/api/reference/object_types/webhook) | El webhook que fue creado o actualizado. |

### Ejemplo de respuesta

```json title=response.json
{
    "webhook": {
        "url": "https://my-app.com/my-webhook-endpoint",,
        "subscriptions": [
            "mensaje_creado"
        ],
        "createdAt": "2022-10-18 17:01:20 +0200",
        "enabled": true
    }
}
```
