---
title: PATCH /teams/:uuid
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# PATCH /teams/:uuid

Atualiza uma equipe existente.

### Parâmetros Obrigatórios

| Parâmetro | Tipo   | Descrição               |
| :-------- | :----- | :----------------------- |
| `uuid`    | string | O identificador da equipe |

### Parâmetros Opcionais

| Parâmetro | Tipo   | Descrição                                 |
| :-------- | :----- | :------------------------------------------ |
| `name`    | string | O novo nome que será atribuído à equipe |

### Exemplo de Requisição

<RequestTabs endpoint='teams_api' request="patch_team"/>

### Resposta

| Parâmetro | Tipo                                     | Descrição                        |
| :-------- | :--------------------------------------- | :--------------------------------- |
| `team`    | [Team](/api/reference/object_types/team) | O objeto que representa a  equipe. |

### Exemplo de Resposta

```json title=response.json
{
  "team": {
    "uuid": "ad42a09715814e6483b1c5debd6a2dbc",
    "name": "Novo nome",
    "createdAt": "2020-11-13T21:08:53Z",
    "default": true,
    "members": 2
  }
}
```