---
title: Formato e Cabeçalhos
sidebar_position: 4
---

Todos os retornos são feitos no formato JSON. Por outro lado, a API aceita apenas carregamentos em JSON, o que significa que é responsabilidade do cliente enviar um cabeçalho de aceitação como o seguinte:

```
Accept: application/json
```

Seguindo a mesma lógica, todos os endpoints que enviam dados no corpo da requisição (por exemplo, em requisições POST, PUT e PATCH) precisam estar codificados em JSON adequadamente.