---
title: DELETE /webhooks/unsubscribe
sidebar_position: 3
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# DELETE /webhooks/unsubscribe

Deletes the webhook of the current account.

### Ejemplo de solicitud

<RequestTabs endpoint='webhooks_api' request="delete_webhooks_unsubscribe"/>

### Respuesta

| Parámetro  | Tipo   | Descripción            |
| :--------  | :----- | :--------------------- |
| `status`   | string | Estado de la operación |

### Ejemplo de respuesta

```json title=response.json
{
  "status": "webhook fue destruido"
}
```