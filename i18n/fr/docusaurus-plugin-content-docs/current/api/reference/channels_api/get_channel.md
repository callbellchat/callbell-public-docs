---
title: GET /channels/:uuid
sidebar_position: 3
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /channels/:uuid

Obtenez un canal spécifique en fonction d'un `uuid`.

### Paramètres requis

| Paramètre | Type   | Description                    |
| :-------- | :----- | :----------------------------- |
| `uuid`    | string | L'uuid du canal à récupérer     |

### Exemple de requête

<RequestTabs endpoint='channels_api' request="get_channel"/>

### Réponse

| Paramètre   | Type                                           | Description                                  |
| :---------- | :--------------------------------------------- | :------------------------------------------- |
| `channel`   | [Channel](/api/reference/object_types/channel) | L'objet représentant le canal.                |

### Exemple de réponse

```json title=response.json
{
  "channel": {
    "uuid": "7c996996fea947f4a1d5a11e7fac84db",
    "title": "phone_number_1",
    "type": "whatsapp",
    "main": true
  }
}
```