---
sidebar_position: 10
---

import transcribeChoice from './assets/transcribe_1.png'
import transcribeAction from './assets/transcribe_2.png'

# Transcrever áudio

Esta ação transcreve as mensagens de áudio enviadas pelos usuários dentro de um fluxo de bot, convertendo-as em texto e armazenando o resultado em uma variável para uso nas ações seguintes.

:::note
Se você estiver usando a ação [Fluxo de Agente de IA](/bot/editor/actions/logic/agent_flow), a transcrição de áudio já é tratada automaticamente. Não é necessário adicionar esta ação separadamente se o seu bot usa um Agente de IA.
:::

## Como funciona

Para transcrever uma mensagem de áudio, você precisa de duas coisas no seu fluxo de bot: uma forma de detectar quando o usuário envia um áudio e a ação Transcrever áudio para processá-lo.

### Passo 1: detectar o áudio com um nó de Escolha

Adicione um nó de [Nova Escolha](/bot/editor/actions/logic/new_choice) após uma ação [Aguarde a resposta do usuário](/bot/editor/actions/interaction/wait_user_answer). Dentro da escolha, defina a condição:

- **Tipo de resposta do último usuário** → **é** → **Áudio**

Isso cria um caminho dedicado que só é acionado quando o usuário envia uma mensagem de áudio. Dê um nome adequado a ele (por exemplo, "Áudio recebido") para manter o seu fluxo legível.

<div class="text--center">
    <img src={transcribeChoice} width={600} />
</div>

### Passo 2: adicionar a ação Transcrever áudio

No caminho do áudio, adicione a ação **Transcrever áudio** e configure os campos descritos abaixo.

<div class="text--center">
    <img src={transcribeAction} width={400} />
</div>

## Configuração

### Token OpenAI

A transcrição é processada pela **OpenAI**, externamente à Callbell. Existem duas opções:

- **Gerido pela Callbell** (recomendado): nenhuma configuração necessária. O custo é descontado da sua [carteira de créditos de IA](https://callbellsupport.zendesk.com/hc/articles/27543940082844).
- **Token personalizado**: use sua própria chave de API da OpenAI e pague diretamente à OpenAI.

### Áudio a transcrever

Selecione qual áudio deve ser transcrito:

- **Último áudio recebido do utilizador:** transcreve a mensagem de áudio mais recente recebida na conversa.
- **URL de áudio personalizada:** transcreve qualquer áudio informando a sua URL. Útil quando o áudio vem de uma fonte externa.

### Guardar a transcrição em

Selecione a variável onde o texto transcrito será salvo. Essa variável pode então ser usada nas ações seguintes, como enviar uma mensagem, adicionar uma nota ou enviar dados para um webhook.

### Armazenar a falha (se houver) em

Selecione uma variável para armazenar qualquer mensagem de erro caso a transcrição falhe. Isso permite tratar as falhas de forma controlada no seu fluxo de bot.
