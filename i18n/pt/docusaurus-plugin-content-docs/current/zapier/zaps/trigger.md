---
sidebar_position: 2
---

# Usando o Trigger no Zapier

Aqui vamos mostrar como usar o Callbell no Zapier como um **Trigger**

## Como um Trigger

Certifique-se de selecionar o aplicativo Callbell (mais recente):

![Integração do Callbell](../assets/select-trigger.png)

Nossa integração com o callbell permite que você use o Callbell como um trigger. Isso significa que você pode enviar dados do Callbell para outros aplicativos.

### Triggers suportados

- Contato criado
- Contato atualizado
- Contato excluído
- Mensagem criada
- Status de mensagem atualizado
- Evento de entrada (trigger legado)

Recomendamos que você use os primeiros 5 triggers, pois o último será descontinuado em algum momento.

#### Contato criado

Esse trigger será acionado quando um novo contato for criado no Callbell.

#### Contato atualizado

Esse trigger será acionado quando um contato for atualizado no Callbell.

#### Contato excluído

Esse trigger será acionado quando um contato for excluído no Callbell.

#### Mensagem criada

Esse trigger será acionado quando uma nova mensagem for criada no Callbell. A mensagem pode ser de entrada ou de saída.

#### Status de mensagem atualizado

Esse trigger será acionado quando o status de uma mensagem for atualizado no Callbell.

## Exemplo com Trigger de Contato Criado

Vamos supor que você tenha um CRM externo e queira enviar dados do Callbell para o seu CRM. Você pode usar o Zapier para enviar os dados do Callbell para o seu CRM.

O Callbell é o **Trigger** e o seu CRM é a **Ação**.

Configure o seu Zap:

![Trigger e Ação do Zapier](../assets/trigger+action.png)

### Passo 1: Configure o seu Trigger

Neste exemplo, utilizaremos o Callbell como o Trigger.

Selecione o Callbell como o aplicativo Trigger e, em seguida, selecione o trigger "Contato Criado".

### Passo 2: Configure a sua Ação

Selecione o seu CRM como o aplicativo Ação.

Em seguida, clique em "Continuar". Você será solicitado a conectar a sua conta do CRM ao Zapier.

Depois de conectar a sua conta do CRM, você terá que configurar a ação.

Selecione os dados que você deseja enviar para o seu CRM.

Em seguida, clique em "Continuar".

Depois, clique em "Testar e Continuar".

Em seguida, clique em "Ativar Zap".

### Passo 3: Teste o seu Zap

Depois de ativar o seu Zap, você pode testá-lo criando um novo contato no Callbell.