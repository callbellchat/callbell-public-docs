---
sidebar_position: 4
---

# Como fazer e exemplos

Este guia irá mostrar como usar a API do Callbell para enviar mensagens, obter atualizações e manter as informações de contato atualizadas.

## Primeiros passos com Callbell

Se você é novo no Callbell, pode começar com nosso [Guia de Introdução ao Callbell](/bot/getting_started).
Também veremos alguns exemplos de como usar a API do Callbell.

Os exemplos se dividem em duas categorias: **Eventos causados por ações** e **Ações impulsionadas por eventos**.

## Eventos causados por ações

Eventos causados por ações são atualizações que acontecem devido a uma ação. Por exemplo, quando alguém se junta ao seu site, isso desencadeia um novo evento. Você pode se inscrever para esses eventos e receber uma notificação quando eles acontecerem.

Aqui você encontrará exemplos de eventos que a API do Callbell pode desencadear. Use esses exemplos para entender como usar a API do Callbell para enviar mensagens e atualizar as informações de contato quando um novo evento acontecer.

:::info
Para o endpoint de webhook, você pode usar um serviço como [RequestBin](https://requestbin.com/) ou [Webhook.site](https://webhook.site/). Esses são endpoints temporários para testar sua configuração. Para uso real, você precisará criar seu próprio endpoint. Você precisará de um servidor web para receber os eventos e enviar mensagens para seus clientes usando seu próprio endpoint. Você pode usar qualquer linguagem de programação para isso.
:::

### Eventos de mensagens

Você pode usar a API do Callbell para enviar mensagens quando um novo evento acontece.
Vamos usar a [API de Mensagens](/api/reference/messages_api/introduction) para enviar mensagens. Confira a seção [Webhooks](/api/reference/webhooks/introduction) para mais informações sobre como se inscrever para eventos.

Primeiro, precisamos configurar um endpoint de webhook para receber os eventos. Vamos usar o [RequestBin](https://requestbin.com/) para criar um endpoint temporário.

1. Acesse [RequestBin](https://requestbin.com/) e clique em **Criar um RequestBin**.
2. Copie a URL do novo RequestBin que você acabou de criar.
3. Configure seu endpoint de webhook no Callbell. Consulte [Webhooks](/api/reference/webhooks/introduction) para mais informações.

#### 🤖 Enviar uma mensagem com um chatbot quando uma nova mensagem chegar

Neste exemplo, veremos como usar a API do Callbell para enviar uma mensagem com um chatbot quando um novo evento acontecer. Vamos supor que queremos enviar uma mensagem de chatbot quando uma nova mensagem chegar. Vamos seguir as etapas do exemplo anterior para configurar um endpoint de webhook e receber os eventos.

Depois de configurar o endpoint de webhook, podemos usar a API do Callbell para enviar uma mensagem de chatbot quando uma nova mensagem chegar. Confira a [API de Mensagens](/api/reference/messages_api/introduction) para mais informações sobre o envio de mensagens.

Aqui está um diagrama de como a API do Callbell envia uma mensagem de chatbot quando uma nova mensagem chega.

![message_based_messaging](./assets/message_chatbot.png)

### Atualizações de contato

Você também pode usar a API do Callbell para manter as informações de contato atualizadas.
Vamos usar a [API de Contatos](/api/reference/contacts_api/introduction) para criar e atualizar contatos.

#### 📝 Adicionar um contato a um CRM quando um novo contato for feito

Neste exemplo, veremos como usar a API do Callbell para adicionar um contato quando um novo usuário se juntar.

Vamos supor que queremos adicionar um contato a um CRM quando um novo contato for feito no Callbell. Vamos seguir as etapas do exemplo anterior para configurar um endpoint de webhook e receber os eventos.

Depois de configurar o endpoint de webhook, podemos usar a API do Callbell para adicionar um contato a um CRM quando um novo contato for feito no Callbell. Confira a [API de Contatos](/api/reference/contacts_api/introduction) para mais informações sobre a criação de contatos.

:::info
Você pode usar as mesmas etapas para atualizar um contato quando um usuário altera seu perfil.
:::

Aqui está um diagrama de como a API do Callbell adiciona um contato a um CRM quando um novo contato é feito no Callbell.

![contact_creation](./assets/create_contact.png)

## Ações impulsioadas por eventos

Ações impulsionadas por eventos são coisas que acontecem devido a uma atualização. Por exemplo, quando uma nova mensagem chega, você pode enviar uma mensagem para o cliente. Você pode usar a API do Callbell para enviar mensagens e manter as informações de contato atualizadas quando um novo evento acontecer.

### Enviar uma mensagem

Aqui, veremos como usar a API do Callbell para enviar mensagens quando um novo evento acontecer. Como mostrado na seção [Webhooks](/api/reference/webhooks/introduction), você pode se inscrever para vários eventos e receber uma notificação quando eles acontecerem.

Você precisará configurar um endpoint de webhook para receber os eventos e, em seguida, usar a API do Callbell para enviar mensagens para seus clientes.

:::info
Para o endpoint de webhook, você pode usar um serviço como [RequestBin](https://requestbin.com/) ou [Webhook.site](https://webhook.site/). Esses são endpoints temporários para testar sua configuração. Para uso real, você precisará criar seu próprio endpoint.
Você precisará de um servidor web para receber os eventos e enviar mensagens para seus clientes usando seu próprio endpoint. Você pode usar qualquer linguagem de programação para isso.
:::

#### 🛒 Enviar uma mensagem quando um novo pedido chegar

Neste exemplo, veremos como usar a API do Callbell para enviar uma mensagem para um cliente quando um novo evento acontecer.
Vamos supor que queremos enviar uma mensagem para um cliente quando um novo pedido for feito em nossa loja online.

Primeiro, precisamos configurar um endpoint de webhook para receber os eventos. Vamos usar o [RequestBin](https://requestbin.com/) para criar um endpoint temporário.

1. Acesse [RequestBin](https://requestbin.com/) e clique em **Criar um RequestBin**.
2. Copie a URL do novo RequestBin que você acabou de criar.
3. Configure seu endpoint de webhook no Callbell. Consulte [Webhooks](/api/reference/webhooks/introduction) para mais informações.

Agora configuramos um endpoint de webhook que receberá os eventos. Agora podemos usar a API do Callbell para enviar uma mensagem para o cliente.

Confira a [API de Mensagens](/api/reference/messages_api/introduction) para mais informações sobre o envio de mensagens.

Aqui está um diagrama de como a API do Callbell envia uma mensagem para o cliente quando um novo pedido chega.

![event_based_messaging](./assets/orders_example.png)

#### 📅 Enviar uma mensagem quando um novo compromisso for marcado

Neste exemplo, veremos como usar a API do Callbell para enviar uma mensagem para um cliente quando um novo evento acontecer.
Vamos supor que queremos enviar uma mensagem para um cliente quando um novo compromisso for marcado.

Vamos seguir as etapas do exemplo anterior para configurar um endpoint de webhook e receber os eventos.

Agora configuramos um endpoint de webhook que receberá os eventos. Agora podemos usar a API do Callbell para enviar uma mensagem para o cliente quando um novo compromisso for marcado. Confira a [API de Mensagens](/api/reference/messages_api/introduction) para mais informações sobre o envio de mensagens. Aqui está um diagrama de como a API do Callbell envia uma mensagem para o cliente quando um novo compromisso é marcado.

![event_based_messaging](./assets/appointments_example.png)

### Usando Zapier

Você pode usar o Zapier para conectar o Callbell a milhares de outros aplicativos. O Zapier é uma ferramenta que ajuda você a conectar aplicativos e automatizar tarefas. Você pode usar o Zapier para conectar o Callbell a outros aplicativos como Slack, Gmail, Google Sheets e muito mais.

Já existem muitas integrações disponíveis no Zapier que você pode usar para conectar o Callbell a outros aplicativos. Você também pode criar suas próprias integrações usando o Zapier.

Aqui estão alguns exemplos de Zaps que você pode criar com o Zapier:

- Enviar uma mensagem quando um novo e-mail chegar (Gmail)
- Enviar uma mensagem quando um novo compromisso for marcado (Calendly)
- Enviar uma mensagem quando um novo pedido chegar (Shopify)
- Enviar uma mensagem quando um novo contato for feito (HubSpot)
- Enviar uma mensagem quando um novo contato for feito (Mailchimp)
- Enviar uma mensagem quando um novo contato for feito (Salesforce)
- Enviar uma mensagem quando um novo contato for feito (Zendesk)
- Enviar uma mensagem quando um novo contato for feito (Intercom)
- Enviar uma mensagem quando um novo contato for feito (Pipedrive)
- Enviar uma mensagem quando um novo formulário for preenchido (Typeform)
- Adicionar um contato quando um novo formulário for preenchido (Typeform)
- Enviar uma mensagem quando um novo formulário for preenchido (Google Forms)
- Adicionar um contato quando um novo formulário for preenchido (Google Forms)

E muitos mais...

Você também pode criar suas próprias integrações usando o Zapier. Confira a [Plataforma de Desenvolvedores do Zapier](https://zapier.com/developer) para mais informações.