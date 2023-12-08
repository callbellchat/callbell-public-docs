---
title: DELETE /contacts/:uuid
sidebar_position: 6
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# DELETE /contacts/:uuid

Deleta um contato específico dado um `uuid`.

:::caution

Essa operação é **irreversível**. Sempre verifique a correção do seu código.

:::

### Parâmetros Obrigatórios

| Parâmetro | Tipo   | Descrição               |
| :-------- | :----- | :---------------------- |
| `uuid`    | string | O uuid do contato       |

### Exemplo de Requisição

<RequestTabs endpoint='contacts_api' request='delete_contact'/>

### Resposta

| Parâmetro | Tipo   | Descrição                 |
| :-------- | :----- | :------------------------ |
| `status`  | string | Status da operação.       |

### Exemplo de Resposta

```json title=response.json
{
  "status": "contato foi deletado"
}
```