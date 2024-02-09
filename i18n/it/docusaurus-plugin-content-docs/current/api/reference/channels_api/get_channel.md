---
title: OTTIENI /canali/:uuid
sidebar_position: 3
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# OTTIENI /canali/:uuid

Ottieni un canale specifico dato un `uuid`.

### Parametri necessari

| Parametro | Tipo   | Descrizione             |
| :-------- | :----- | :---------------------- |
| `uuid`    | string | L'uuid del canale |

### Esempio di richiesta

<RequestTabs endpoint='channels_api' request="get_channel"/>

### Risposta

| Parametro | Tipo                                                              | Descrizione                          |
| :-------- | :---------------------------------------------------------------- | :----------------------------------- |
| `channel` | [Canale](/api/reference/object_types/channel) | L'oggetto che rappresenta il canale. |

### Esempio di risposta

```json title=response.json
{
  "channel": {
    "uuid": "7c996996fea947f4a1d5a11e7fac84db",
    "title": "phone_number_1",
    "type": "whatsapp",
    "main": true
  }
}
```