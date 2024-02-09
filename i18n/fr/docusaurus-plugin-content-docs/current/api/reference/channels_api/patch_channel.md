---
title: PATCH /channels/:uuid
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# PATCH /channels/:uuid

Met à jour un canal existant.

### Paramètres obligatoires

| Paramètre | Type   | Description                            |
| :-------- | :----- | :------------------------------------- |
| `uuid`    | string | L'identifiant du canal                   |

### Paramètres optionnels

| Paramètre | Type   | Description                                                     |
| :-------- | :----- | :-------------------------------------------------------------- |
| `title`   | string | Le nouveau titre qui sera attribué au canal |

### Exemple de demande

<RequestTabs endpoint='channels_api' request="patch_channel"/>

### Réponse

| Paramètre | Type                                                        | Description                               |
| :-------- | :---------------------------------------------------------- | :---------------------------------------- |
| `channel` | [Channel](/api/reference/object_types/channel) | L'objet représentant le canal. |

### Exemple de réponse

```json title=response.json
{
  "channel": {
    "uuid": "7c996996fea947f4a1d5a11e7fac84db",
    "title": "Nouveau titre",
    "type": "whatsapp",
    "main": true
  }
}
```