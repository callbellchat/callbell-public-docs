---
title: PATCH /teams/:uuid
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# PATCH /teams/:uuid

Actualiza un equipo existente.

### Parámetros Requeridos

| Parámetro | Tipo   | Descripción                         |
| :-------- | :----- | :---------------------------------- |
| `uuid`    | string | El identificador del equipo          |

### Parámetros Opcionales

| Parámetro | Tipo   | Descripción                                   |
| :-------- | :----- | :-------------------------------------------- |
| `name`    | string | El nuevo nombre que se dará al equipo          |

### Ejemplo de solicitud

<RequestTabs endpoint='teams_api' request="patch_team"/>

### Respuesta

| Parámetro | Tipo                                           | Descripción                              |
| :-------- | :--------------------------------------------- | :--------------------------------------- |
| `team`    | [Equipo](/api/reference/object_types/team) | El objeto que representa al equipo        |

### Ejemplo de respuesta

```json title=response.json
{
  "team": {
    "uuid": "ad42a09715814e6483b1c5debd6a2dbc",
    "name": "Nuevo nombre",
    "createdAt": "2020-11-13T21:08:53Z",
    "default": true,
    "members": 2
  }
}
```