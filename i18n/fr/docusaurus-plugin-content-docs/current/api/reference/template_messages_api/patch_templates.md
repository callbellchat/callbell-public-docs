---
title: PATCH /templates/:uuid
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# PATCH /templates/:uuid

Met à jour un modèle existant.

### Paramètres requis

| Paramètre | Type   | Description                    |
| :-------- | :----- | :----------------------------- |
| `uuid`    | string | L'identifiant du modèle        |

### Paramètres optionnels

| Paramètre | Type   | Description                                      |
| :-------- | :----- | :----------------------------------------------- |
| `title`   | string | Le nouveau titre qui sera donné au modèle        |

### Exemple de requête

<RequestTabs endpoint='templates_api' request="patch_template"/>

### Réponse

| Paramètre  | Type                                               | Description                                                      |
| :--------- | :------------------------------------------------- | :--------------------------------------------------------------- |
| `template` | [Template[]](/api/reference/object_types/template) | L'objet représentant le message de modèle Whatsapp.                |

### Exemple de réponse

```json title=response.json
{
  "templates": {
    "uuid": "ad42a09715814e6483b1c5debd6a2dbc",
    "title": "Nouveau titre",
    "templateType": "texte",
    "text": "Texte du message",
    "createdAt": "2020-11-13T21:08:53Z"
  }
}
```