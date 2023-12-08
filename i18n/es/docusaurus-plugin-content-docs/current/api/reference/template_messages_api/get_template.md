es
---
title: GET /templates/:uuid
sidebar_position: 3
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /templates/:uuid

Obtener una plantilla específica dado un `uuid`.

### Parámetros requeridos

| Parámetro | Tipo   | Descripción            |
| :-------- | :----- | :--------------------- |
| `uuid`    | string | El uuid de la plantilla |

### Ejemplo de solicitud

<RequestTabs endpoint='templates_api' request="get_template"/>

### Respuesta

| Parámetro   | Tipo                                               | Descripción                                                            |
| :---------- | :------------------------------------------------- | :--------------------------------------------------------------------- |
| `template`  | [Template[]](/api/reference/object_types/template) | El objeto que representa el mensaje de plantilla de WhatsApp.           |

### Ejemplo de respuesta

```json title=response.json
{
  "template": {
    "uuid": "ad42a09715814e6483b1c5debd6a2dbc",
    "title": "Título de la plantilla",
    "templateType": "texto",
    "text": "Texto del mensaje",
    "createdAt": "2020-11-13T21:08:53Z"
  }
}
```