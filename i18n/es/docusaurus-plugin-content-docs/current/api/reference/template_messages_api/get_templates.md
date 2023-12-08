---
title: GET /templates
sidebar_position: 2
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /templates

Lista todos os modelos pertencentes à conta.

### Solicitação de exemplo

<RequestTabs endpoint='templates_api' request="get_templates"/>

### Resposta

| Parâmetro   | Tipo                                               | Descrição          |
| :---------- | :------------------------------------------------- | :------------------- |
| `templates` | [Template[]](/api/reference/object_types/template) | Uma lista de modelos. |

### Exemplo de resposta

```json title=response.json
{
  "templates": [
    {
      "uuid": "ad42a09715814e6483b1c5debd6a2dbc",
      "title": "Título do Modelo",
      "templateType": "text",
      "text": "Texto da mensagem",
      "createdAt": "2020-11-13T21:08:53Z"
    },
    {
      "uuid": "47aad5f9b4ca423c9d630f06ab93fe1f",
      "title": "Outro Título do Modelo",
      "templateType": "text",
      "text": "Outro Texto da mensagem",
      "createdAt": "2020-11-13T21:10:33Z"
    }
  ],
  "meta": {
    "page": 1,
    "pages": 1
  }
}
```