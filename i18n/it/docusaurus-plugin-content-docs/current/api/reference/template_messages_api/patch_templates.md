---
titolo: PATCH /templates/:uuid
posizione della barra laterale: 4
---

import RequestTabs from"@site/src/components/Requests/RequestTabs"

# PATCH /templates/:uuid

Aggiorna un template esistente.

### Parametri richiesti

| Parametro | Tipo    | Descrizione                  |
| :-------- | :------ | :--------------------------- |
| `uuid`    | stringa | L'identificatore del modello |

### Parametri opzionali

| Parametro | Tipo    | Descrizione                               |
| :-------- | :------ | :---------------------------------------- |
| `title`   | stringa | Il nuovo titolo che verrà dato al modello |

### Esempio di richiesta

<RequestTabs endpoint='templates_api' request="patch_template" />

### Risposta

| Parametro  | Tipo                                               | Descrizione                                                  |
| :--------- | :------------------------------------------------- | :----------------------------------------------------------- |
| `template` | [Template[]](/api/reference/object_types/template) | L'oggetto che rappresenta il messaggio del modello Whatsapp. |

### Esempio di risposta

```json title=response.json
{
  "templates": {
    "uuid": "ad42a09715814e6483b1c5debd6a2dbc",
    "title": "Nuovo titolo",
    "templateType": "text",
    "text": "Testo del messaggio",
    "createdAt": "2020-11-13T21:08:53Z"
  }
}
```
