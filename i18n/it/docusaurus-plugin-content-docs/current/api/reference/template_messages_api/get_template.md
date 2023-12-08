---
title: GET /templates/:uuid
sidebar_position: 3
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /templates/:uuid

Ottieni un template specifico dato un `uuid`.

### Parametri richiesti

| Parametro | Tipo   | Descrizione         |
| :-------- | :----- | :------------------ |
| `uuid`    | string | L'uuid del template |

### Esempio richiesta

<RequestTabs endpoint='templates_api' request="get_template"/>

### Risposta

| Parametro  | Tipo                                               | Descrizione                                                   |
| :--------- | :------------------------------------------------- | :------------------------------------------------------------ |
| `template` | [Template[]](/api/reference/object_types/template) | L'oggetto che rappresenta il messaggio del template Whatsapp. |

### Esempio risposta

```json title=response.json
{
  "template": {
    "uuid": "ad42a09715814e6483b1c5debd6a2dbc",
    "title": "Titolo del template",
    "templateType": "text",
    "text": "Testo del messaggio",
    "createdAt": "2020-11-13T21:08:53Z"
  }
}
```