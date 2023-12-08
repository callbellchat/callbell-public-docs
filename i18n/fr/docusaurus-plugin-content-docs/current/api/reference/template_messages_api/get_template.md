---
title: GET /templates/:uuid
sidebar_position: 3
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /templates/:uuid

Récupérez un modèle spécifique en utilisant un `uuid`.

### Paramètres requis

| Paramètre | Type   | Description              |
| :-------- | :----- | :----------------------- |
| `uuid`    | string | L'uuid du modèle         |

### Exemple de requête

<RequestTabs endpoint='templates_api' request="get_template"/>

### Réponse

| Paramètre   | Type                                               | Description                                          |
| :---------- | :------------------------------------------------- | :--------------------------------------------------- |
| `template`  | [Template[]](/api/reference/object_types/template) | L'objet représentant le message de modèle WhatsApp.  |

### Exemple de réponse

```json title=response.json
{
  "template": {
    "uuid": "ad42a09715814e6483b1c5debd6a2dbc",
    "title": "Titre du modèle",
    "templateType": "text",
    "text": "Texte du message",
    "createdAt": "2020-11-13T21:08:53Z"
  }
}
```