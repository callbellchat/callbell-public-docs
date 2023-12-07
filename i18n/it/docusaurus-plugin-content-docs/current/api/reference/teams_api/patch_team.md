---
title: PATCH /teams/:uuid
posizione della barra laterale: 4
---

import RequestTabs from"@site/src/components/Requests/RequestTabs"

# PATCH /teams/:uuid

Aggiorna un team esistente.

### Parametri richiesti

| Parametro | Tipo    | Descrizione                    |
| :-------- | :------ | :----------------------------- |
| `uuid`    | stringa | L'identificatore della squadra |

### Parametri opzionali

| Parametro | Tipo    | Descrizione                               |
| :-------- | :------ | :---------------------------------------- |
| `nome`    | stringa | Il nuovo nome che verrà dato alla squadra |

### Esempio di richiesta

<RequestTabs endpoint='teams_api' request="patch_team" />

### Risposta

| Parametro | Tipo                                     | Descrizione                        |
| :-------- | :--------------------------------------- | :--------------------------------- |
| `team`    | [Team](/api/reference/object_types/team) | L'oggetto che rappresenta il team. |

### Esempio di risposta

```json title=response.json
{
  "team": {
    "uuid": "ad42a09715814e6483b1c5debd6a2dbc",
    "nome": "Nuovo nome",
    "createdAt": "2020-11-13T21:08:53Z",
    "default": true,
    "membri": 2
  }
}
```