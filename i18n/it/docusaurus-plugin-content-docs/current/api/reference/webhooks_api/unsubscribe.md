---
title: DELETE /webhooks/unsubscribe
sidebar_position: 3
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# DELETE /webhooks/unsubscribe

Elimina il webhook dell'account corrente.

### Richiesta di esempio

<RequestTabs endpoint='webhooks_api' request="delete_webhooks_unsubscribe" />

### Risposta

| Parametro | Tipo    | Descrizione           |
| :-------- | :------ | :-------------------- |
| `status`  | stringa | Stato dell'operazione |

### Esempio di risposta

```json title=response.json
{
  "status": "webhook è stato distrutto"
}
```
