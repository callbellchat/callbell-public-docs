---
title: PATCH /channels/:uuid
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# PATCH /channels/:uuid

Aggiorna un canale esistente.

### Parametri richiesti

| Parametro | Tipo   | Descrizione                   |
| :-------- | :----- | :---------------------------- |
| `uuid`    | string | L'identificatore del canale   |

### Parametri opzionali

| Parametro | Tipo   | Descrizione                                      |
| :-------- | :----- | :----------------------------------------------- |
| `title`   | string | Il nuovo titolo che verrà assegnato al canale    |


### Esempio di richiesta

<RequestTabs endpoint='channels_api' request="patch_channel"/>

### Risposta

| Parametro | Tipo                              | Descrizione                                       |
| :-------- | :-------------------------------- | :------------------------------------------------ |
| `channel` | [Canale](/api/reference/object_types/channel) | L'oggetto che rappresenta il canale                |

### Esempio di risposta

```json title=response.json
{
  "channel": {
    "uuid": "7c996996fea947f4a1d5a11e7fac84db",
    "title": "Nuovo titolo",
    "type": "whatsapp",
    "main": true
  }
}
```