---
title: DELETE /webhooks/unsubscribe
sidebar_position: 3
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# DELETE /webhooks/unsubscribe

Exclui o webhook da conta atual.

### Exemplo de Requisição

<RequestTabs endpoint='webhooks_api' request="delete_webhooks_unsubscribe"/>

### Resposta

| Parâmetro  | Tipo   | Descrição               |
| :--------- | :----- | :---------------------- |
| `status`   | string | Status da operação       |

### Exemplo de Resposta

```json title=response.json
{
  "status": "webhook foi destruído"
}
```