---
title: Get /auth/me
sidebar_position: 1
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /auth/me

Retorna um código de status `200` se o `api_token` for válido.

### Exemplo de Requisição

<RequestTabs endpoint='auth_api' request="get_me"/>

### Resposta

| Parâmetro     | Tipo   | Descrição                                                          |
| :------------ | :----- | :----------------------------------------------------------------- |
| `status`      | string | O status da requisição (`ok`)                                      |
| `user_email`  | string | Email do usuário da conta                                          |
| `user_name`   | string | Nome do usuário da conta                                           |
| `api_key`     | string | Chave API que gerou o token usado para a requisição                 |

### Exemplo de Resposta

```json title=response.json
{
  "status": "ok",
  "user_email": "john_doe@email.com",
  "user_name": "John Doe",
  "api_key": "test_1234567890"
}
```