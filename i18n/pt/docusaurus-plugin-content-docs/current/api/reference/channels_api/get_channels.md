---
title: GET /channels
sidebar_position: 2
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /channels

Listar todos os canais pertencentes à conta.

### Parâmetros opcionais

| Parâmetro | Tipo   | Descrição                                                                                        |
| :-------- | :----- | :----------------------------------------------------------------------------------------------- |
| `page`    | Number | O número da página a ser recuperada. O padrão é `1`.                                              |
| `type`    | String | Filtrar por tipo de canal. Os valores possíveis são `facebook`, `whatsapp`, `instagram` e `telegram`. |

### Exemplo de Requisição

<RequestTabs endpoint='channels_api' request="get_channels"/>

### Resposta

| Parâmetro  | Tipo                                             | Descrição            |
| :--------- | :----------------------------------------------- | :------------------- |
| `channels` | [Channel[]](/api/reference/object_types/channel) | Uma lista de canais. |

### Exemplo de Resposta 

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
    },
  ],
  "meta": {
    "page": 1,
    "pages": 1
  }
}
```