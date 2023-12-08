---
sidebar_position: 2
---

# Iniciando

Este guia passo a passo irá orientá-lo na construção do seu primeiro chatbot com o Callbell.

## Pré-requisitos

Você precisará criar uma conta no Callbell e ter configurado pelo menos **1 canal** para poder seguir este guia.

- Cadastre-se no [Callbell](https://dash.callbell.eu/users/sign_up)
- Veja mais informações sobre nossa [integração com API do WhatsApp Business](https://callbellsupport.zendesk.com/hc/en-us/articles/360007805898-How-to-integrate-WhatsApp-into-Callbell-through-the-WhatsApp-Business-APIs) para usar o construtor de fluxo do bot com o WhatsApp.

## Criando seu primeiro chatbot

Navegue até a seção **Bot Builder** na barra lateral esquerda e clique no botão **Criar novo bot**:

![create_new_bot](./assets/create_new_bot.png)

Será exibido um modal pedindo para você escolher um nome para o seu bot e o canal que você deseja usar:

![create_new_bot_modal](./assets/create_new_bot_modal.png)

Após clicar no botão **Criar bot**, você será redirecionado para a página do construtor do bot onde poderá começar a construir seu primeiro chatbot:

![bot_builder](./assets/bot_builder.png)

## Adicionando uma nova ação

Para que o bot funcione, você precisará adicionar pelo menos uma ação. Por exemplo, vamos responder ao usuário com uma mensagem quando ele enviar uma mensagem para o bot.

Clique no botão **Adicionar nova ação** e selecione a ação **Enviar mensagem**:

![add_new_action](./assets/add_new_action.png)

Um painel será aberto para que você possa configurar a ação. Neste caso, vamos adicionar apenas uma mensagem de texto simples:

![add_new_action_panel](./assets/add_new_action_panel.png)

Após clicar no botão **Salvar**, você será redirecionado para a página do construtor do bot onde poderá ver a ação que acabou de criar:

![bot_builder_action](./assets/bot_builder_action.png)

## Teste seu bot

Para testar seu bot, você precisará clicar no botão **Executar simulador** no canto superior direito da página. Isso abrirá um painel onde você pode testar seu novo fluxo:

![run_simulator](./assets/run_simulator.png)

Basta clicar no botão **Enviar** e você verá o bot respondendo com a mensagem que você acabou de configurar:

![run_simulator_reply](./assets/run_simulator_reply.png)

## Publique seu bot

Depois de estar satisfeito com seu bot, você pode publicá-lo clicando no botão **Publicar rascunho** no canto superior direito da página:

![publish_bot](./assets/publish_bot.png)

Após clicar no botão **Publicar rascunho** e confirmar, seu fluxo de bot será publicado; ao mesmo tempo, você precisará **ativar seu bot** para torná-lo disponível para seus clientes. Você pode fazer isso navegando de volta para a seção "Bots" na barra lateral direita e clicando no botão **Ativar bot**:

![enable_bot](./assets/enable_bot.png)

Você pode confirmar que o bot está ativado verificando o status na seção "Bots":

![bot_enabled](./assets/bot_enabled.png)

## Teste seu bot em produção

Agora que seu bot está ativado, você pode testá-lo em produção enviando uma mensagem para o canal que você o configurou. Neste caso, enviaremos uma mensagem para o número de WhatsApp que configuramos na seção [Pré-requisitos](#prerequisites):

![test_bot_in_production](./assets/test_bot_in_production.gif)

## O que vem a seguir?

Agora que você criou seu primeiro chatbot, você pode explorar as outras ações disponíveis no construtor de bot.