---
title: GET /channels/:uuid
sidebar_position: 3
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /channels/:uuid

Obtenha um canal específico dado um `uuid`.

### Parâmetros Necessários

| Parâmetro | Tipo   | Descrição                 |
| :-------- | :----- | :------------------------ |
| `uuid`    | string | O uuid do canal           |

### Exemplo de Requisição

<RequestTabs endpoint='channels_api' request="get_channel"/>

### Resposta

| Parâmetro | Tipo                                           | Descrição                          |
| :-------- | :--------------------------------------------- | :--------------------------------- |
| `channel` | [Channel](/api/reference/object_types/channel) | O objeto que representa o canal.   |

### Exemplo de Resposta

```json title=response.json
{
  "channel": {
    "uuid": "7c996996fea947f4a1d5a11e7fac84db",
    "title": "phone_number_1",
    "type": "whatsapp",
    "main": true
  }
}
```