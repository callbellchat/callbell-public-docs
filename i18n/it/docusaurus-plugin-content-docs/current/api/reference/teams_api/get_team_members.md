---
title: GET /teams/:uuid/members
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /teams/:uuid/members

Elencare tutti i membri appartenenti al team.

### Parametri obbligatori

| Parametro | Tipo   | Descrizione            |
| :-------- | :----- | :--------------------- |
| `uuid`    | string | L'UUID del team        |

### Parametri opzionali

| Parametro | Tipo   | Descrizione                                                                |
| :-------- | :----- | :------------------------------------------------------------------------- |
| `page`    | number | Il numero di pagina da restituire. Il valore predefinito è `1`.             |
| `status`  | string | Lo stato del membro del team. I valori possibili sono `available` e `away`. |

### Esempio di richiesta

<RequestTabs endpoint='teams_api' request="get_team_members"/>

### Risposta

| Parametro | Tipo                                                    | Descrizione            |
| :-------- | :------------------------------------------------------ | :--------------------- |
| `users`   | [TeamMember[]](/api/reference/object_types/team_member) | Una lista di membri del team. |

### Esempio di risposta

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