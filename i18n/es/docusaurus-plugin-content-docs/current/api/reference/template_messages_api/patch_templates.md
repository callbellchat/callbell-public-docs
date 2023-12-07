---
título: PATCH /templates/:uuid
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# PATCH /templates/:uuid

Actualiza una plantilla existente.

### Parámetros requeridos

| Parámetro Tipo Descripción
| :-------- | :----- | :----------------------------- |
| `uuid` | string | El identificador de la plantilla |

### Parámetros opcionales

| Parámetro Tipo Descripción
| :-------- | :----- | :----------------------------------------------- |
| `title` | string | El nuevo título que se dará a la plantilla |

### Ejemplo de petición

<RequestTabs endpoint='templates_api' request="patch_template"/>

### Respuesta

| Parámetro Tipo Descripción
| :--------- | :------------------------------------------------- | :----------------------------------------------------- |
| `template` | [Template[]](/api/reference/object_types/template) | El objeto que representa el mensaje de plantilla de Whatsapp. |

### Ejemplo de respuesta

```json title=response.json
{
  "templates": {
    "uuid": "ad42a09715814e6483b1c5debd6a2dbc",
    "title": "Nuevo título",
    "templateType": "text",
    "text": "Texto del mensaje",
    "createdAt" "2020-11-13T21:08:53Z"
  }
}
```
