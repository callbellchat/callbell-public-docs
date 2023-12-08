---
title: POST /webhooks/subscribe
sidebar_position: 2
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# POST /subscriptions

Cria um novo webhook ou atualiza um existente.

:::caution

Cada conta pode **apenas** registrar 1 webhook.

:::

### Parâmetros obrigatórios

| Parâmetro       | Tipo     | Descrição                                                                                                  |
| :-------------- | :------- | :--------------------------------------------------------------------------------------------------------- |
| `url`           | string   | O identificador do contato (por exemplo, número de telefone no WhatsApp)                                   |
| `subscriptions` | string[] | Valores separados por vírgula dos eventos para se inscrever neste webhook (por exemplo, `message_created`) |

### Exemplo de Requisição

<RequestTabs endpoint='webhooks_api' request="post_webhooks_subscribe"/>

### Resposta

| Parâmetro | Tipo                                           | Descrição                               |
| :-------- | :--------------------------------------------- | :-------------------------------------- |
| `contact` | [Webhook](/api/reference/object_types/webhook) | O webhook que foi criado ou atualizado. |

### Exemplo de Resposta

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