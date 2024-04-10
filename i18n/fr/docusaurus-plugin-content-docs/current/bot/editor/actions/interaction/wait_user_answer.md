---
sidebar_position: 1
---

import waitUserAnswerUrl from './assets/wait_user_answer.png'
import triggerFallbackDelaySelector from './assets/trigger_fallback_delay_selector.png'
import scheduleBranchExemple from './assets/schedule_branch_exemple.png'

# Attendre la réponse de l'utilisateur

<img src={waitUserAnswerUrl} width={180} />

L'action **Attendre la réponse de l'utilisateur** est utilisée pour attendre la réponse d'un utilisateur avant de poursuivre le flux. Utilisez cette action lorsque vous souhaitez poser une question à vos clients et attendre leur réponse.

# Actions programmées

Lorsque le bot atteint une action "attendre la réponse de l'utilisateur", il est possible de spécifier un fallback si le client ne répond pas après un certain temps. Vous pouvez utiliser le sélecteur pour spécifier une durée :

<img src={triggerFallbackDelaySelector} width={180} />

Gardez à l'esprit que si l'utilisateur répond avant la fin du délai, l'action de fallback ne sera pas déclenchée. Il en va de même si vous arrêtez manuellement le bot.

Une fois que vous avez spécifié un délai, vous pouvez interagir avec la branche nouvellement créée comme avec n'importe quelle autre branche :

<img src={scheduleBranchExemple} width={180} />
