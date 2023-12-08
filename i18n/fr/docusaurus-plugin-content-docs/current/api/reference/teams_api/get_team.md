---
title: GET /teams/:uuid
sidebar_position: 3
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /teams/:uuid

Obtenez une équipe spécifique en utilisant un `uuid`.

### Paramètres Requis

| Paramètre | Type   | Description          |
| :-------- | :----- | :------------------- |
| `uuid`    | string | L'uuid de l'équipe   |

### Exemple de Requête

<RequestTabs endpoint='teams_api' request="get_team"/>

### Réponse

| Paramètre | Type                                     | Description                             |
| :-------- | :--------------------------------------- | :-------------------------------------- |
| `team`    | [Team](/api/reference/object_types/team) | L'objet représentant l'équipe.           |

### Exemple de Réponse

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