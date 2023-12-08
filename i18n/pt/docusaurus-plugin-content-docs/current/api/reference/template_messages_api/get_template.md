---
title: GET /templates/:uuid
sidebar_position: 3
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /templates/:uuid

Obtenha um modelo específico dado um `uuid`.

### Parâmetros Obrigatórios

| Parâmetro | Tipo   | Descrição                 |
| :-------- | :----- | :------------------------ |
| `uuid`    | string | O uuid do modelo          |

### Exemplo de Requisição

<RequestTabs endpoint='templates_api' request="get_template"/>

### Resposta

| Parâmetro  | Tipo                                               | Descrição                                                |
| :--------- | :------------------------------------------------- | :------------------------------------------------------- |
| `template` | [Template[]](/api/reference/object_types/template) | O objeto que representa a mensagem de modelo do WhatsApp. |

### Exemplo de Resposta

```json title=response.json
{
  "template": {
    "uuid": "ad42a09715814e6483b1c5debd6a2dbc",
    "title": "Título do modelo",
    "templateType": "texto",
    "text": "Texto da mensagem",
    "createdAt": "2020-11-13T21:08:53Z"
  }
}
```