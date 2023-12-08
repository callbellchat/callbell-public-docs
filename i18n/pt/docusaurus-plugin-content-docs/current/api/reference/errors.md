---
sidebar_position: 6
---

# Erros

Callbell utiliza códigos de resposta HTTP padrão:

- Respostas na faixa **2xx** significa que a solicitação foi executada com sucesso

- Respostas na faixa **4xx** significa que a solicitação não foi bem-sucedida devido a um erro do cliente, como autenticação, limite de taxa alcançado ou parâmetros incorretos

- Respostas na faixa **5xx** significa que a solicitação não foi bem-sucedida devido a um erro interno do servidor. Geralmente é seguro tentar novamente essas solicitações com um atraso ou em um momento posterior