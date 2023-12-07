---
title: GET /teams/:uuid
posizione_di_side: 3
---

import RequestTabs from"@site/src/components/Requests/RequestTabs"

# GET /teams/:uuid

Ottiene un team specifico, dato un `uuid`.

### Parametri richiesti

| Parametro | Tipo    | Descrizione          |
| :-------- | :------ | :------------------- |
| `uuid`    | stringa | L'uuid della squadra |

### Esempio di richiesta

<RequestTabs endpoint='teams_api' request="get_team" />

### Risposta

| Parametro | Tipo                                     | Descrizione                        |
| :-------- | :--------------------------------------- | :--------------------------------- |
| `team`    | [Team](/api/reference/object_types/team) | L'oggetto che rappresenta il team. |

### Esempio di risposta

```json title=response.json
{
  "team": {
    "uuid": "ad42a09715814e6483b1c5debd6a2dbc",
    "nome": "Generale",
    "createdAt": "2020-11-13T21:08:53Z",
    "default": true,
    "membri": 2
  }
}
```

