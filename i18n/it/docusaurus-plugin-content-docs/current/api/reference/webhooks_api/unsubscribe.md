---
title: DELETE /webhooks/unsubscribe
sidebar_position: 3
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# DELETE /webhooks/unsubscribe

Rimuove il webhook dell'account corrente.

### Esempio di richiesta

<RequestTabs endpoint='webhooks_api' request="delete_webhooks_unsubscribe"/>

### Risposta

| Parametro  | Tipo   | Descrizione             |
| :--------- | :----- | :---------------------- |
| `status`   | string | Stato dell'operazione    |

### Esempio di risposta

```json title=response.json
{
  "status": "Il webhook è stato eliminato"
}
```