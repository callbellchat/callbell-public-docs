---
title: DELETE /webhooks/unsubscribe
sidebar_position: 3
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# DELETE /webhooks/unsubscribe

Supprime le webhook du compte actuel.

### Exemple de demande

<RequestTabs endpoint='webhooks_api' request="delete_webhooks_unsubscribe"/>

### Réponse

| Paramètre | Type   | Description                 |
| :-------- | :----- | :-------------------------- |
| `status`  | string | Statut de l'opération        |

### Exemple de réponse

```json title=response.json
{
  "status": "webhook was destroyed"
}
```