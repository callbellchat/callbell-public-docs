---
titolo: GET /templates/:uuid
posizione_barra_ laterale: 3
---

import RequestTabs from"@site/src/components/Requests/RequestTabs"

# GET /templates/:uuid

Ottiene un modello specifico, dato un `uuid`.

### Parametri richiesti

| Parametro | Tipo    | Descrizione        |
| :-------- | :------ | :----------------- |
| `uuid`    | stringa | L'uuid del modello |

### Esempio di richiesta

<RequestTabs endpoint='templates_api' request="get_template" />

### Risposta

| Parametro  | Tipo                                               | Descrizione                                                  |
| :--------- | :------------------------------------------------- | :----------------------------------------------------------- |
| `template` | [Template[]](/api/reference/object_types/template) | L'oggetto che rappresenta il messaggio del modello Whatsapp. |

### Esempio di risposta

```json title=response.json
{
  "template": {
    "uuid": "ad42a09715814e6483b1c5debd6a2dbc",
    "title": "Template title",
    "templateType": "text",
    "text": "Testo del messaggio",
    "createdAt": "2020-11-13T21:08:53Z"
  }
}
```
