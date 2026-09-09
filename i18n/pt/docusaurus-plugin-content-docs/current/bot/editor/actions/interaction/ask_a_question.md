---
sidebar_position: 1
---

import askQuestionSetMessage from './assets/ask_question_set_message.png'
import askQuestionButtonsFlow from './assets/ask_question_buttons_flow.png'
import askQuestionFreeReplyFlow from './assets/ask_question_free_reply_flow.png'
import askQuestionFallback from './assets/ask_question_fallback.png'

# Fazer uma pergunta

A ação **Fazer uma pergunta** simplifica uma das configurações mais comuns de bots: pedir uma resposta ao usuário, lidar com os acompanhamentos quando ele não responde e (opcionalmente) tratar respostas inválidas.

## Como usar

A ação é dividida em duas seções: **configuração da mensagem** e **configuração do fallback**.

## Passo 1: Configuração da mensagem

### 1. Escreva a mensagem

Escreva a pergunta ou a mensagem que você quer enviar ao usuário.

### 2. Adicione botões ou uma lista (opcional)

Opcionalmente, você pode adicionar botões interativos ou uma lista de opções para o usuário escolher.

<div class="text--center">
    <img src={askQuestionSetMessage} width={400} />
</div>

**Com botões ou uma lista,** cada opção que você adiciona cria automaticamente a sua própria saída no fluxo, para que você possa definir uma continuação diferente para cada escolha.

<div class="text--center">
    <img src={askQuestionButtonsFlow} width={700} />
</div>

**Sem botões ou lista,** qualquer resposta é aceita. O fluxo continua a partir de uma única saída "Respondida". Se você precisar de continuações diferentes com base no que o usuário respondeu, adicione-as como saídas personalizadas abaixo de "Respondida".

<div class="text--center">
    <img src={askQuestionFreeReplyFlow} width={500} />
</div>

## Passo 2: Configuração do fallback

<div class="text--center">
    <img src={askQuestionFallback} width={400} />
</div>

### 1. Tempo máximo de espera

Defina por quanto tempo a ação deve aguardar uma resposta antes de disparar um acompanhamento. Você pode escolher de 5 minutos até 23 horas.

### 2. Número de mensagens de acompanhamento

Escolha quantos lembretes automáticos enviar se o usuário não responder. Defina **0** para desativar os acompanhamentos, ou até um máximo de **5**.

### 3. Mensagem de acompanhamento

Escreva a mensagem de lembrete enviada depois que o tempo de espera terminar.

### 4. Número de erros permitidos

Defina quantas respostas inválidas o usuário pode dar antes que o fluxo passe para o caminho de erro. Esta opção só aparece quando botões ou uma lista estão configurados, já que uma resposta só conta como inválida quando não corresponde a uma das opções. Se não houver botões ou lista configurados, qualquer resposta é válida e esta opção fica oculta.

### 5. Mensagem de erro

Escreva a mensagem enviada quando a resposta do usuário não corresponder a uma das opções configuradas. Obrigatória se você definir 1 ou mais erros permitidos.

## Como os nós são criados automaticamente

| Configuração | ✅ Nó(s) de sucesso | ❌ Nó de erro | ⌛️ Nó de fallback programado |
| :-: | :-: | :-: | :-: |
| **Sem botões/lista (resposta livre)** | Uma única saída "Respondida" (adicione saídas personalizadas abaixo dela se necessário) | Não é criado | Configurado automaticamente |
| **Botões** | Um nó por botão | Quando a resposta não é um dos botões | Configurado automaticamente |
| **Lista** | Um nó por opção | Quando a resposta não é uma das opções | Configurado automaticamente |

Para **botões** e **listas**, cada opção cria automaticamente o seu próprio caminho de saída no fluxo, para que você possa definir continuações diferentes para cada escolha sem nenhuma configuração extra.
