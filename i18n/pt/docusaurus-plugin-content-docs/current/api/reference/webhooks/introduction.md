---
sidebar_position: 1
---

# Introdução

A API do Callbell fornece **Webhooks HTTP** para os eventos mais comuns de aplicativos:

- **Eventos de Mensagem**
- **Eventos de Status de Notificação de Mensagem**
- **Eventos de Contato**
- **Eventos de Conversa**

## Como se inscrever em eventos

:::info
Isso também pode ser feito programaticamente a partir de [WebhooksEndpoint](./../webhooks_api/introduction.md)
:::

No painel do Callbell, navegue até a seção [**"Configurações da API"**](https://dash.callbell.eu/settings/api_settings/webhooks) e clique na aba "Webhooks":

![webhook_tab](./assets/webhook_tab.jpg)

No campo URL, adicione a URL do seu endpoint (por exemplo, `https://myapp.com/callbell_endpoint`) e selecione os eventos para os quais deseja se inscrever:

![webhook_create](./assets/webhook_create.jpg)

:::info
Certifique-se também de **incluir** o protocolo (`http` ou `https`) dentro do seu endpoint de webhook:

✅ **Bom**: `https://www.myexample.com`

❌ **Ruim**: `www.example.com`
:::

Após clicar em "Criar novo webhook", você deve receber uma notificação de sucesso. Você sempre pode editar os eventos do Webhook posteriormente:

![webhook_edit](./assets/webhook_edit.jpg)

:::caution
Callbell não suporta `localhost` como URL de webhook. Se você precisar depurar um aplicativo local, use um serviço para expor seu ambiente de desenvolvimento local como o [Ngrok](https://ngrok.com).
:::