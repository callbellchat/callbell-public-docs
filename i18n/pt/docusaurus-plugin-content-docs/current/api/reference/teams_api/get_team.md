---
title: GET /teams/:uuid
sidebar_position: 3
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /teams/:uuid

Obtenha uma equipe específica dado um `uuid`.

### Parâmetros Obrigatórios

| Parâmetro | Tipo   | Descrição           |
| :-------- | :----- | :------------------ |
| `uuid`    | string | O uuid da equipe    |

### Exemplo de Requisição

<RequestTabs endpoint='teams_api' request="get_team"/>

### Resposta

| Parâmetro | Tipo                                      | Descrição                            |
| :-------- | :---------------------------------------- | :----------------------------------- |
| `team`    | [Team](/api/reference/object_types/team) | O objeto que representa a equipe.    |

### Exemplo de Resposta

```json title=response.json
{
  "team": {
    "uuid": "ad42a09715814e6483b1c5debd6a2dbc",
    "name": "General",
    "createdAt": "2020-11-13T21:08:53Z",
    "default": true,
    "members": 2
  }
}
```