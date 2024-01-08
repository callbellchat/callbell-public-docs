---
sidebar_position: 4
---

# Usando Webhooks Avançados

Aqui veremos como usar o Callbell através do Zapier usando o webhook personalizado do Zapier como uma ação.
Esta é uma maneira mais avançada de usar o Callbell no Zapier, mas oferece mais flexibilidade, pois você pode usar nossa API pública para realizar ações.

Consulte a <a href="https://docs.callbell.eu/api/reference/introduction">referência da API</a> para obter mais informações sobre os endpoints e as cargas úteis.

## Usando o Webhook Personalizado do Zapier

Certifique-se de selecionar o aplicativo Callbell correto (mais recente):

![Integração do Callbell](../assets/select-action.png)

Em seguida, selecione "Webhooks by Zapier" como o aplicativo de ação:

![Webhooks by Zapier](../assets/webhook.png)

A ação recomendada neste caso é "Solicitação Personalizada":

Independentemente da ação escolhida, você precisará configurar corretamente a URL do webhook.

### URL do Webhook

A URL do webhook é a URL que o Zapier usará para enviar dados ao Callbell.

:::info

exemplo: https://docs.callbell.eu/api/reference/contacts_api/post_contacts pode ser usado para criar um novo contato

:::

### Carga Útil do Webhook

A carga útil do webhook é os dados que o Zapier enviará ao Callbell.

A carga útil deve estar em formato JSON.

### Autenticação

Você precisará autenticar sua solicitação para o Callbell.

Você pode fazer isso adicionando os seguintes cabeçalhos à sua solicitação:

![Cabeçalhos](../assets/headers.png)

O `Content-Type` definido como `application/json` é **obrigatório**.