---
sidebar_position: 1
---

import waitUserAnswerUrl from './assets/wait_user_answer.png'
import triggerFallbackDelaySelector from './assets/trigger_fallback_delay_selector.png'
import scheduleBranchExemple from './assets/schedule_branch_exemple.png'

# Attendere la risposta dell'utente

<img src={waitUserAnswerUrl} width={180} />

L'azione **Attendi risposta utente** è usata per attendere la risposta di un utente prima di continuare il flusso. Utilizzare questa azione ogni volta che si desidera porre una domanda ai clienti e attendere la loro risposta.

# Azioni programmate

Ogni volta che il bot raggiunge un'azione "Attendi risposta utente", è possibile specificare un ripiego se il cliente non risponde dopo un certo periodo di tempo. È possibile utilizzare il selettore per specificare una durata:

<img src={triggerFallbackDelaySelector} width={180} />

Si tenga presente che se l'utente risponde prima del ritardo, il fallback non verrà attivato. Lo stesso vale se si arresta manualmente il bot.

Una volta specificato il ritardo, è possibile interagire con il ramo appena creato come qualsiasi altro ramo:

<img src={scheduleBranchExemple} width={180} />
