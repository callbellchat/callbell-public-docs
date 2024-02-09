---
title: GET /channels
sidebar_position: 2
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /channels

List all channels belonging to the account.

### Parámetros opcionales

| Parámetro | Tipo   | Descripción                                                                                   |
| :-------- | :----- | :-------------------------------------------------------------------------------------------- |
| `page`    | Number | El número de página a recuperar. El valor predeterminado es `1`.                               |
| `type`    | String | Filtrar por tipo de canal. Los valores posibles son `facebook`, `whatsapp`, `instagram` y `telegram`. |

### Ejemplo de solicitud

<RequestTabs endpoint='channels_api' request="get_channels"/>

### Respuesta

| Parámetro  | Tipo                                             | Descripción       |
| :--------- | :----------------------------------------------- | :---------------- |
| `channels` | [Channel[]](/api/reference/object_types/channel) | Una lista de canales. |

### Ejemplo de respuesta

```json title=response.json
{
  "channels": [
    {
      "uuid": "7c996996fea947f4a1d5a11e7fac84db",
      "title": "phone_number_1",
      "type": "whatsapp",
      "main": true
    },
    {
      "uuid": "dcefe6d18b5c4bbdb0661136c7f63c8e",
      "title": "phone_number_2",
      "type": "whatsapp",
      "main": false
    },
    {
      "uuid": "759edec71ff440b29fc635c5fac84d4f",
      "title": "phone_number_3",
      "type": "whatsapp",
      "main": false
    }
  ],
  "meta": {
    "page": 1,
    "pages": 1
  }
}
```