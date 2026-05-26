---
sidebar_position: 9
---

import agentFlowImage1 from './assets/agent_flow_1.png'
import agentFlowImage2 from './assets/agent_flow_2.png'
import agentFlowImage3 from './assets/agent_flow_3.png'
import agentFlowImage4 from './assets/agent_flow_4.png'

# Fluxo de Agente IA

A ação **Fluxo de Agente IA** permite que você execute um agente de IA diretamente dentro do fluxo do seu bot, possibilitando conversas totalmente automatizadas com seus clientes com base nos objetivos e no comportamento que você definiu.

:::note
Antes de usar esta ação, você precisa criar pelo menos um agente de IA. Consulte o [guia de configuração do agente de IA](https://callbellsupport.zendesk.com/hc/articles/27593692327324) para começar.
:::

## Como usar

1. Adicione a ação **Fluxo de Agente IA** ao fluxo do seu bot.
2. Selecione o agente de IA que deseja usar no menu suspenso **Agente de IA selecionado**.
3. Clique em **Salvar**.

A ação será adicionada ao seu fluxo com seus nós de motivos de saída, que definem o que acontece depois que o agente termina — ou interrompe — o atendimento da conversa.

<div class="text--center">
    <img src={agentFlowImage1} width={500} />
</div>

## Motivos de saída

Os motivos de saída definem os diferentes caminhos que o fluxo do bot pode seguir depois que o agente de IA para. Existem **4 motivos de saída padrão** e **3 opcionais** que você pode adicionar com base no seu caso de uso.

### Motivos de saída padrão

| Motivo de saída | Quando é acionado |
| --- | --- |
| **Objetivo alcançado** | O agente determina que o objetivo definido na configuração do agente de IA foi concluído. Uma nota interna com o resultado do agente é adicionada automaticamente. |
| **Solicitação de humano** | O cliente pede explicitamente para falar com um humano. O agente para de enviar mensagens e o fluxo continua por este caminho. Recomenda-se atribuir a conversa a uma equipe ou agente neste ponto. |
| **Sem resposta** | O cliente para de responder. Por padrão, o agente envia 2 mensagens de acompanhamento com um intervalo de 5 minutos entre cada uma. Se ainda não houver resposta, o fluxo continua por este caminho. O número de acompanhamentos e o tempo de espera podem ser personalizados nas **Configurações avançadas**. |
| **Erro** | Acionado quando ocorre um erro inesperado ou quando a carteira de créditos de IA se esgota. Use este caminho para atribuir a conversa a um agente humano ou redirecioná-la para um fluxo de bot tradicional de caminho fixo. |

### Motivos de saída opcionais

Além dos 4 motivos de saída padrão, você pode adicionar até 3 opcionais para um controle mais granular:

<div class="text--center">
    <img src={agentFlowImage2} width={500} />
</div>

| Motivo de saída | Quando é acionado |
| --- | --- |
| **Usuário não interessado** | O cliente declara explicitamente que não está interessado na conversa, no serviço ou no produto. |
| **Usuário frustrado** | O cliente demonstra sinais de frustração ou raiva com as respostas do agente. |
| **Carteira de créditos de IA esgotada** | Acionado especificamente quando a carteira de créditos de IA se esgota, permitindo que você personalize o que acontece nesse cenário de forma independente do caminho genérico de **Erro**. Saiba mais sobre os [créditos de IA](https://callbellsupport.zendesk.com/hc/articles/27543940082844). |

## Conhecimento adicional (opcional)

A ação inclui um campo de texto livre onde você pode passar ao agente de IA informações dinâmicas coletadas anteriormente no fluxo do bot. Isso é útil quando você deseja enriquecer o contexto do agente com dados provenientes de fontes externas, como uma ação de [Webhook](/bot/editor/actions/logic/webhook) ou do [Google Sheets](/bot/editor/actions/logic/google_spreadsheets).

<div class="text--center">
    <img src={agentFlowImage3} width={500} />
</div>

**Exemplo:** recuperar o status do pedido de um cliente a partir de uma ferramenta externa via webhook, armazená-lo em uma variável e passá-lo ao agente para que ele possa fazer referência a essa informação durante a conversa.

## Configurações avançadas

<div class="text--center">
    <img src={agentFlowImage4} width={500} />
</div>

| Configuração | Descrição |
| --- | --- |
| **Permitir que o agente crie botões** | Permite que o agente de IA envie mensagens com botões interativos. O agente pode incluir até 3 botões por mensagem. |
| **Permitir que o agente lembre o usuário** | Define quantas mensagens de acompanhamento automáticas o agente enviará se o cliente parar de responder. |
| **Atraso do acompanhamento** | Define quanto tempo o agente espera antes de enviar uma mensagem de acompanhamento. As opções variam de 5 minutos a 23 horas. |
