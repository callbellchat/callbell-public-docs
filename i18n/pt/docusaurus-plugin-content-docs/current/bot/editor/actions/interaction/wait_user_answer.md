---
sidebar_position: 1
---

import waitUserAnswerUrl from './assets/wait_user_answer.png'
import triggerFallbackDelaySelector from './assets/trigger_fallback_delay_selector.png'
import scheduleBranchExemple from './assets/schedule_branch_exemple.png'

# Aguarde a resposta do usuário

<img src={waitUserAnswerUrl} width={180} />

A ação **Esperar resposta do usuário** é usada para aguardar a resposta de um usuário antes de continuar o fluxo. Use essa ação sempre que quiser fazer uma pergunta aos seus clientes e aguardar a resposta deles.

# Ações programadas

Sempre que o bot alcançar uma ação "esperar resposta do usuário", é possível especificar um fallback se o cliente não responder após um determinado período de tempo. Você pode usar o seletor para especificar uma duração:

<img src={triggerFallbackDelaySelector} width={180} />

Lembre-se de que, se o usuário responder antes do período especificado, o fallback não será acionado. O mesmo acontece se você interromper manualmente o bot.

Depois de especificar um atraso, você poderá interagir com a ramificação recém-criada como qualquer outra ramificação:

<img src={scheduleBranchExemple} width={180} />
