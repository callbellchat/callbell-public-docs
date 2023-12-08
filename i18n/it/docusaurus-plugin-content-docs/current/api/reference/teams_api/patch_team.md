---
title: PATCH /teams/:uuid
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# PATCH /teams/:uuid

Aggiorna un team esistente.

### Parametri richiesti

| Parametro | Tipo   | Descrizione               |
| :-------- | :----- | :------------------------ |
| `uuid`    | string | L'identificatore del team |

### Parametri opzionali

| Parametro | Tipo   | Descrizione                               |
| :-------- | :----- | :---------------------------------------- |
| `name`    | string | Il nuovo nome che verrà assegnato al team |

### Esempio di richiesta

<RequestTabs endpoint='teams_api' request="patch_team"/>

### Risposta

| Parametro | Tipo                                     | Descrizione                        |
| :-------- | :--------------------------------------- | :--------------------------------- |
| `team`    | [Team](/api/reference/object_types/team) | L'oggetto che rappresenta il team. |

### Esempio di risposta

```json title=response.json
{
  "team": {
    "uuid": "ad42a09715814e6483b1c5debd6a2dbc",
    "name": "Nuovo nome",
    "createdAt": "2020-11-13T21:08:53Z",
    "default": true,
    "members": 2
  }
}
```