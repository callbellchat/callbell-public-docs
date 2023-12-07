---
title: GET /teams
sidebar_position: 2
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /teams

Elenca tutti i team appartenenti all'account.

### Richiesta di esempio

<RequestTabs endpoint='teams_api' request="get_teams" />

### Risposta

| Parametro | Tipo                                       | Descrizione         |
| :-------- | :----------------------------------------- | :------------------ |
| `teams`   | [Team[]](/api/reference/object_types/team) | Un elenco di teams. |


### Esempio di risposta

``json title=response.json
{
  "teams": [
    {
      "uuid": "ad42a09715814e6483b1c5debd6a2dbc",
      "nome": "Generale",
      "createdAt": "2020-11-13T21:08:53Z",
      "default": true,
      "membri": 2
    },
    {
      "uuid": "47aad5f9b4ca423c9d630f06ab93fe1f",
      "nome": "Supporto",
      "createdAt": "2020-11-13T21:10:33Z",
      "default": false,
      "membri": 1
    }
  ],
  "meta": {
    "page": 1,
    "pagine": 1
  }
}
```