---
title: PATCH /templates/:uuid
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# PATCH /templates/:uuid

Aggiorna un template esistente.

### Parametri Richiesti

| Parametro | Tipo   | Descrizione                   |
| :-------- | :----- | :---------------------------- |
| `uuid`    | string | L'identificatore del template |

### Parametri Opzionali

| Parametro | Tipo   | Descrizione                                |
| :-------- | :----- | :----------------------------------------- |
| `title`   | string | Il nuovo titolo che verrà dato al template |

### Esempio di Richiesta

<RequestTabs endpoint='templates_api' request="patch_template"/>

### Risposta

| Parametro  | Tipo                                               | Descrizione                                                  |
| :--------- | :------------------------------------------------- | :----------------------------------------------------------- |
| `template` | [Template[]](/api/reference/object_types/template) | L'oggetto che rappresenta il messaggio template di Whatsapp. |

### Esempio di Risposta

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