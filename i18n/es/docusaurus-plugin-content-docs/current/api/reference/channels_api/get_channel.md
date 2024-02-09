---
title: GET /channels/:uuid
sidebar_position: 3
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /channels/:uuid

Obtener un canal específico dado un `uuid`.

### Parámetros Requeridos

| Parámetro | Tipo   | Descripción              |
| :-------- | :----- | :----------------------- |
| `uuid`    | string | El uuid del canal        |

### Ejemplo de Solicitud

<RequestTabs endpoint='channels_api' request="get_channel"/>

### Respuesta

| Parámetro | Tipo                                           | Descripción                             |
| :-------- | :--------------------------------------------- | :-------------------------------------- |
| `channel` | [Channel](/api/reference/object_types/channel) | El objeto que representa el canal.       |

### Ejemplo de Respuesta

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