---
title: PATCH /channels/:uuid
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# PATCH /channels/:uuid

Atualiza um canal existente.

### Parâmetros obrigatórios

| Parâmetro | Tipo   | Descrição                   |
| :-------- | :----- | :---------------------------- |
| `uuid`    | string | O identificador do canal |

### Parâmetros opcionais

| Parâmetro | Tipo   | Descrição                                     |
| :-------- | :----- | :---------------------------------------------- |
| `title`   | string | O novo título que será dado ao canal |


### Exemplo de requisição

<RequestTabs endpoint='channels_api' request="patch_channel"/>

### Resposta

| Parâmetro | Tipo                                           | Descrição                          |
| :-------- | :--------------------------------------------- | :----------------------------------- |
| `channel` | [Channel](/api/reference/object_types/channel) | O objeto que representa o canal. |

### Exemplo de resposta

```json title=response.json
{
  "channel": {
    "uuid": "7c996996fea947f4a1d5a11e7fac84db",
    "title": "Novo título",
    "type": "whatsapp",
    "main": true
  }
}
```