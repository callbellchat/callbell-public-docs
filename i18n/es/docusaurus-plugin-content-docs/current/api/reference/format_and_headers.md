---
title: Formato e Cabeçalhos
sidebar_position: 4
---

Todas as respostas são retornadas no formato JSON. Por outro lado, a API aceita apenas payloads JSON, o que significa que é responsabilidade do cliente enviar um cabeçalho accept como o seguinte:

```
Accept: application/json
```

Seguindo a mesma lógica, todos os endpoints de corpo (por exemplo, em solicitações POST, PUT e PATCH) precisam ser codificados em JSON de acordo.