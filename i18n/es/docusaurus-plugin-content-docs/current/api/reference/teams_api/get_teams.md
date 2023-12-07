---
título: GET /equipos
sidebar_position: 2
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /equipos

Lista todos los equipos pertenecientes a la cuenta.

### Ejemplo de solicitud

<RequestTabs endpoint='teams_api' request="get_teams"/>

### Respuesta

| Parámetro Tipo Descripción
| :-------- | :----------------------------------------- | :--------------- |
| `teams` | [Team[]](/api/reference/object_types/team) | Una lista de equipos. |


### Ejemplo de respuesta

```json title=respuesta.json
{
  "teams": [
    {
      "uuid": "ad42a09715814e6483b1c5debd6a2dbc",
      "name": "General",
      "createdAt": "2020-11-13T21:08:53Z",
      "por defecto": true
      "members": 2
    },
    {
      "uuid": "47aad5f9b4ca423c9d630f06ab93fe1f",
      "name": "Soporte",
      "createdAt": "2020-11-13T21:10:33Z",
      "por defecto": false
      "members": 1
    }
  ],
  "meta": {
    "página": 1,
    "pages": 1
  }
}
```