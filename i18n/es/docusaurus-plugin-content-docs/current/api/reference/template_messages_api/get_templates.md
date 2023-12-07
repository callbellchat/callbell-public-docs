---
título: GET /templates
sidebar_position: 2
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /templates

Lista todas las plantillas pertenecientes a la cuenta.

### Ejemplo de petición

<RequestTabs endpoint='templates_api' request="get_templates"/>

### Respuesta

| Parámetro Tipo Descripción
| :---------- | :------------------------------------------------- | :------------------- |
| `templates` | [Template[]](/api/reference/object_types/template) | Una lista de plantillas. |

### Ejemplo de respuesta

```json title=respuesta.json
{
  "templates": [
    {
      "uuid": "ad42a09715814e6483b1c5debd6a2dbc",
      "title": "Template title",
      "templateType": "text",
      "text": "Texto del mensaje",
      "createdAt" "2020-11-13T21:08:53Z"
    },
    {
      "uuid": "47aad5f9b4ca423c9d630f06ab93fe1f",
      "title": "Otro título de plantilla",
      "templateType": "text",
      "text": "Otro texto de mensaje",
      "createdAt" "2020-11-13T21:10:33Z"
    }
  ],
  "meta": {
    "page": 1,
    "pages": 1
  }
}
```
