---
title: GET /templates
sidebar_position: 2
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /templates

Elenca tutti i template appartenenti all'account.

### Richiesta di esempio

<RequestTabs endpoint='templates_api' request="get_templates" />

### Risposta

| Parametro   | Tipo                                               | Descrizione            |
| :---------- | :------------------------------------------------- | :--------------------- |
| `templates` | [Template[]](/api/reference/object_types/template) | Un elenco di template. |

### Esempio di risposta

```json title=response.json
{
  "templates": [
    {
      "uuid": "ad42a09715814e6483b1c5debd6a2dbc",
      "title": "Template title",
      "templateType": "text",
      "text": "Testo del messaggio",
      "createdAt": "2020-11-13T21:08:53Z"
    },
    {
      "uuid": "47aad5f9b4ca423c9d630f06ab93fe1f",
      "title": "Un altro titolo di template",
      "templateType": "text",
      "text": "Testo di un altro messaggio",
      "createdAt": "2020-11-13T21:10:33Z"
    }
  ],
  "meta": {
    "page": 1,
    "pages": 1
  }
}
```