---
sidebar_position: 3
---

# Zapier: Integração com Slack

## Automatize Notificações Internas a partir da Callbell

Nos guias a seguir, você aprenderá como integrar a Callbell com o Slack usando o Zapier. Essa integração ajuda sua equipe a se manter informada em tempo real, enviando mensagens automatizadas no Slack com base em eventos específicos na Callbell.

Com essa configuração, você pode:

- Notificar sua equipe no Slack quando um novo contato for criado na Callbell.
- Notificar sua equipe no Slack quando uma conversa for aberta na Callbell.
- Notificar sua equipe no Slack quando uma conversa for encerrada na Callbell.

Cada guia apresenta instruções passo a passo para configurar esses fluxos de trabalho usando Callbell, Zapier e Slack.

---

## Guia 1: Notifique o Slack Quando um Novo Contato For Criado na Callbell

Publique automaticamente uma mensagem no Slack sempre que um novo contato for criado na Callbell.

### 1. Crie um Zap: Callbell como Trigger

1. Acesse o Zapier e clique em **Create Zap**.
2. Escolha a Callbell como aplicativo de gatilho (trigger app).
3. Selecione o evento de gatilho: **New Contact Created**.
4. Conecte sua conta Callbell.
5. Teste o gatilho para garantir que está recuperando os dados do novo contato (nome, número de telefone, etc.).

### 2. Adicione o Slack como Ação

1. Clique em **+ Add Action**.
2. Selecione o Slack como aplicativo de ação.
3. Selecione o evento de ação: **Send Channel Message** ou **Send Direct Message**, dependendo do fluxo da sua equipe.
4. Conecte sua conta Slack e escolha o canal de destino (ex: `#novos-leads`, `#suporte`, ou uma mensagem direta para um usuário do Slack, como você mesmo).
5. Escreva o texto da mensagem. Você pode inserir campos dinâmicos do passo anterior da Callbell, como nome do contato ou número de telefone.

![zapier_integration_slack_guide_1](../../assets/zapier_integration_slack_guide_1.png)

### 3. Personalize as Configurações da Mensagem no Slack

- Opcional: Você pode personalizar ainda mais a mensagem, adicionando um ícone ou imagem, incluindo o link do Zap ou o link do contato na Callbell (se disponível).
- Na mensagem, também é possível adicionar emojis, mencionar usuários específicos com menções do Slack (ex: `<!here>` ou `<@U123456>`), além de utilizar outras opções de formatação conforme mostrado aqui.

### Notas finais

Esse fluxo de trabalho mantém sua equipe atualizada assim que um novo contato entra na Callbell, permitindo que vendas ou suporte ajam rapidamente.

Para mais ajuda, consulte:

- [Base de conhecimentos da Callbell](https://callbellsupport.zendesk.com/hc/pt)
- [Documentação de Ajuda do Zapier](https://help.zapier.com/hc/en-us)

---

## Guia 2: Notifique o Slack Quando uma Conversa For Aberta na Callbell

Publique automaticamente uma mensagem no Slack sempre que uma conversa for aberta na Callbell.

### 1. Crie um Zap: Callbell como Trigger

1. Acesse o Zapier e clique em **Create Zap**.
2. Escolha a Callbell como aplicativo de gatilho.
3. Selecione o evento de gatilho: **Conversation Opened**.
4. Conecte sua conta Callbell.
5. Teste o gatilho para garantir que ele está recuperando os dados corretos da conversa.

### 2. Adicione o Slack como Ação

1. Clique em **+ Add Action**.
2. Selecione o Slack como aplicativo de ação.
3. Selecione o evento de ação: **Send Channel Message** ou **Send Direct Message**, conforme o fluxo da sua equipe.
4. Conecte sua conta Slack e escolha o canal de destino (ex: `#atividade`, `#mensagens-suporte`, ou uma mensagem direta para um usuário específico).
5. Escreva o texto da mensagem. Você pode inserir campos dinâmicos do passo anterior da Callbell, como o nome do contato.

![zapier_integration_slack_guide_2](../../assets/zapier_integration_slack_guide_2.png)

### 3. Personalize as Configurações da Mensagem no Slack

- Opcional: Você pode personalizar ainda mais a mensagem adicionando um ícone ou imagem, incluindo o link do Zap ou o link da conversa/mensagem da Callbell (se disponível).
- Na mensagem, também é possível adicionar emojis, mencionar usuários específicos com menções do Slack (ex: `<!here>` ou `<@U123456>`), além de utilizar outras opções de formatação [como mostrado aqui](https://slack.com/help/articles/202288908-Format-your-messages).

### Notas Finais

Esse fluxo de trabalho permite que sua equipe fique informada em tempo real sempre que uma nova conversa for aberta na Callbell. É especialmente útil para acompanhar solicitações recebidas, melhorar o tempo de resposta e garantir que nenhum atendimento passe despercebido.

Para mais ajuda, consulte:

- [Base de conhecimentos da Callbell](https://callbellsupport.zendesk.com/hc/pt)
- [Documentação de Ajuda do Zapier](https://help.zapier.com/hc/en-us)

---

## Guia 3: Notifique o Slack Quando uma Conversa For Encerrada na Callbell

Publique automaticamente uma mensagem no Slack sempre que uma conversa for encerrada na Callbell.

### 1. Crie um Zap: Callbell como Trigger

1. Acesse o Zapier e clique em **Create Zap**.
2. Escolha a Callbell como aplicativo de gatilho.
3. Selecione o evento de gatilho: **Conversation Closed**.
4. Conecte sua conta Callbell.
5. Teste o gatilho para garantir que ele está recuperando os dados corretos da conversa.

### 2. Adicione o Slack como Ação

1. Clique em **+ Add Action**.
2. Selecione o Slack como aplicativo de ação.
3. Selecione o evento de ação: **Send Channel Message** ou **Send Direct Message**, conforme o fluxo da sua equipe.
4. Conecte sua conta Slack e escolha o canal de destino (ex: `#conversas-encerradas`, `#logs-suporte`, ou uma mensagem direta para um usuário do Slack, como você mesmo).
5. Escreva o texto da mensagem. Você pode inserir campos dinâmicos do passo anterior da Callbell, como o horário de encerramento da conversa.

![zapier_integration_slack_guide_3](../../assets/zapier_integration_slack_guide_3.png)

### 3. Personalize as Configurações da Mensagem no Slack

- Opcional: Você pode personalizar ainda mais a mensagem, adicionando um ícone ou imagem, incluindo o link do Zap ou o link da conversa na Callbell (se disponível).
- Na mensagem, também é possível adicionar emojis, mencionar usuários específicos com menções do Slack (ex: `<!here>` ou `<@U123456>`), além de utilizar outras opções de formatação [como mostrado aqui](https://slack.com/help/articles/202288908-Format-your-messages).

### Notas Finais

Esse fluxo de trabalho ajuda sua equipe a se manter informada sempre que uma conversa for encerrada na Callbell, permitindo que gestores ou colegas revisem os atendimentos ou façam acompanhamentos quando necessário.

Para mais ajuda, consulte:

- [Base de conhecimentos da Callbell](https://callbellsupport.zendesk.com/hc/pt)
- [Documentação de Ajuda do Zapier](https://help.zapier.com/hc/en-us)
