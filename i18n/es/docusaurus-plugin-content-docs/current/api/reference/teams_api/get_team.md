---
título: GET /equipos/:uuid
sidebar_position: 3
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /equipos/:uuid

Obtener un equipo específico dado un `uuid`.

### Parámetros obligatorios

| Parámetro Tipo Descripción
| :-------- | :----- | :------------------- |
| `uuid` | string | El uuid del equipo |

### Ejemplo de solicitud

<RequestTabs endpoint='teams_api' request="get_team"/>

### Respuesta

| Parámetro Tipo Descripción
| :-------- | :--------------------------------------- | :--------------------------------- |
| `team` | [Equipo](/api/reference/object_types/team) | El objeto que representa al equipo. |

### Ejemplo de respuesta

```json title=respuesta.json
{
  "team": {
    "uuid": "ad42a09715814e6483b1c5debd6a2dbc",
    "name": "General",
    "createdAt": "2020-11-13T21:08:53Z",
    "por defecto": true
    "members": 2
  }
}
```

