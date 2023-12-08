---
title: PATCH /templates/:uuid
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# PATCH /templates/:uuid

Atualiza um modelo existente.

### Parâmetros obrigatórios

| Parâmetro | Tipo   | Descrição                  |
| :-------- | :----- | :------------------------- |
| `uuid`    | string | O identificador do modelo. |

### Parâmetros opcionais

| Parâmetro | Tipo   | Descrição                                        |
| :-------- | :----- | :----------------------------------------------- |
| `title`   | string | O novo título que será atribuído ao modelo.      |

### Requisição de exemplo

<RequestTabs endpoint='templates_api' request="patch_template"/>

### Resposta

| Parâmetro  | Tipo                                               | Descrição                                                |
| :--------- | :------------------------------------------------- | :------------------------------------------------------- |
| `template` | [Template[]](/api/reference/object_types/template) | O objeto que representa a mensagem de modelo do WhatsApp. |

### Exemplo de resposta

```json title=response.json
{
  "templates": {
    "uuid": "ad42a09715814e6483b1c5debd6a2dbc",
    "title": "Novo título",
    "templateType": "text",
    "text": "Texto da mensagem",
    "createdAt": "2020-11-13T21:08:53Z"
  }
}
```