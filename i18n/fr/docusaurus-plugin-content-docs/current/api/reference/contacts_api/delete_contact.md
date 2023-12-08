---
title: DELETE /contacts/:uuid
sidebar_position: 6
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# DELETE /contacts/:uuid

Supprime un contact spécifique en fonction d'un `uuid`.

:::caution

Cette opération est **irréversible**. Vérifiez toujours l'exactitude de votre code.

:::

### Paramètres requis

| Paramètre | Type   | Description             |
| :-------- | :----- | :---------------------- |
| `uuid`    | string | L'uuid du contact       |

### Exemple de requête

<RequestTabs endpoint='contacts_api' request='delete_contact'/>

### Réponse

| Paramètre | Type   | Description              |
| :-------- | :----- | :----------------------- |
| `status`  | string | Statut de l'opération.    |

### Exemple de réponse

```json title=response.json
{
  "status": "contact was destroyed"
}
```