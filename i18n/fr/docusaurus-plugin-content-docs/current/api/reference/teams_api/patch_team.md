---
title: PATCH /teams/:uuid
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# PATCH /teams/:uuid

Mises à jour d'une équipe existante.

### Paramètres requis

| Paramètre | Type   | Description                |
| :-------- | :----- | :------------------------- |
| `uuid`    | string | L'identifiant de l'équipe  |

### Paramètres optionnels

| Paramètre | Type   | Description                                 |
| :-------- | :----- | :------------------------------------------ |
| `name`    | string | Le nouveau nom qui sera donné à l'équipe     |

### Exemple de requête

<RequestTabs endpoint='teams_api' request="patch_team"/>

### Réponse

| Paramètre | Type                                     | Description                        |
| :-------- | :--------------------------------------- | :--------------------------------- |
| `team`    | [Team](/api/reference/object_types/team) | L'objet représentant l'équipe.     |

### Exemple de réponse

```json title=response.json
{
  "team": {
    "uuid": "ad42a09715814e6483b1c5debd6a2dbc",
    "name": "Nouveau nom",
    "createdAt": "2020-11-13T21:08:53Z",
    "default": true,
    "members": 2
  }
}
```