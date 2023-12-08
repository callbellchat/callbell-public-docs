---
title: GET /teams/:uuid
sidebar_position: 3
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /teams/:uuid

Obtener un equipo específico dado un `uuid`.

### Parámetros requeridos

| Parámetro | Tipo   | Descripción          |
| :-------- | :----- | :------------------- |
| `uuid`    | string | El uuid del equipo   |

### Ejemplo de solicitud

<RequestTabs endpoint='teams_api' request="get_team"/>

### Respuesta

| Parámetro | Tipo                                     | Descripción                       |
| :-------- | :--------------------------------------- | :-------------------------------- |
| `team`    | [Team](/api/reference/object_types/team) | El objeto que representa el equipo |

### Ejemplo de respuesta

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