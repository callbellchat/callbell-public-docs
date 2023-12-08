---
title: GET /times
sidebar_position: 2
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /times

Listar todas as equipes pertencentes à conta.

### Exemplo de requisição

<RequestTabs endpoint='teams_api' request="get_teams"/>

### Resposta

| Parâmetro  | Tipo                                       | Descrição       |
| :--------- | :----------------------------------------- | :-------------- |
| `teams`    | [Team[]](/api/reference/object_types/team) | Uma lista de equipes. |

### Exemplo de resposta

```json title=response.json
{
  "teams": [
    {
      "uuid": "ad42a09715814e6483b1c5debd6a2dbc",
      "name": "Geral",
      "createdAt": "2020-11-13T21:08:53Z",
      "default": true,
      "members": 2
    },
    {
      "uuid": "47aad5f9b4ca423c9d630f06ab93fe1f",
      "name": "Suporte",
      "createdAt": "2020-11-13T21:10:33Z",
      "default": false,
      "members": 1
    }
  ],
  "meta": {
    "page": 1,
    "pages": 1
  }
}
```