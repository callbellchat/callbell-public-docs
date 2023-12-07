---
título: DELETE /webhooks/unsubscribe
sidebar_position: 3
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# DELETE /webhooks/unsubscribe

Elimina el webhook de la cuenta actual.

### Ejemplo de solicitud

<RequestTabs endpoint='webhooks_api' request="delete_webhooks_unsubscribe"/>

### Respuesta

| Parámetro Tipo Descripción
| :-------- | :----- | :---------------------- |
| `status` | string | Estado de la operación |

### Ejemplo de respuesta

```json title=respuesta.json
{
  "status": "webhook fue destruido"
}
```
