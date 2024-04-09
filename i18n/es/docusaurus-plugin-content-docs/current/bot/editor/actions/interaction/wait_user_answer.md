---
sidebar_position: 1
---

import waitUserAnswerUrl from './assets/wait_user_answer.png'
import triggerFallbackDelaySelector from './assets/trigger_fallback_delay_selector.png'
import scheduleBranchExemple from './assets/schedule_branch_exemple.png'

# Esperar respuesta del usuario

<img src={waitUserAnswerUrl} width={180} />

La acción **Esperar respuesta del usuario** se utiliza para esperar la respuesta de un usuario antes de continuar el flujo. Utiliza esta acción siempre que quieras hacer una pregunta a tus clientes y esperar su respuesta.

# Acciones programadas

Siempre que el bot alcance una acción "esperar respuesta del usuario", es posible especificar un fallback si el cliente no responde después de un cierto tiempo. Puedes utilizar el selector para especificar una duración:

<img src={triggerFallbackDelaySelector} width={180} />

Ten en cuenta que si el usuario responde antes del retardo, no se activará el fallback. Lo mismo ocurre si detienes manualmente el bot.

Una vez que haya especificado un retraso, puede interactuar con la rama recién creada como cualquier otra rama:

<img src={scheduleBranchExemple} width={180} />
