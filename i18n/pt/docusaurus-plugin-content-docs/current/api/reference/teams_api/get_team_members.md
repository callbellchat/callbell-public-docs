---
title: GET /teams/:uuid/members
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /teams/:uuid/members

Listar todos os membros pertencentes à equipe.

### Parâmetros obrigatórios

| Parâmetro | Tipo   | Descrição              |
| :-------- | :----- | :--------------------- |
| `uuid`    | string | O uuid da equipe       |

### Parâmetros opcionais

| Parâmetro | Tipo   | Descrição                                                                                                                                 |
| :-------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| `page`    | number | O número da página a ser retornada. O padrão é `1`.                                                                                       |
| `status`  | string | O status do membro da equipe. Os valores possíveis são `available` (disponível) e `away` (ausente).                                      |

### Exemplo de requisição

<RequestTabs endpoint='teams_api' request="get_team_members"/>

### Resposta

| Parâmetro | Tipo                                                               | Descrição                  |
| :-------- | :----------------------------------------------------------------- | :------------------------- |
| `users`   | [TeamMember[]](/api/reference/object_types/team_member)            | Uma lista de membros da equipe. |

### Exemplo de resposta

```json title=response.json
{
  "users": [
    {
      "email": "john1@gmail.com",
      "available": true
    },
    {
      "email": "john2@gmail.com",
      "available": true
    }
  ],
  "meta": {
    "page": 1,
    "pages": 1
  }
}
```