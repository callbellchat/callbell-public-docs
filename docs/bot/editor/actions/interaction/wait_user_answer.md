---
sidebar_position: 1
---

import waitUserAnswerUrl from './assets/wait_user_answer.png'
import triggerFallbackDelaySelector from './assets/trigger_fallback_delay_selector.png'
import scheduleBranchExemple from './assets/schedule_branch_exemple.png'

# Wait User Answer

<img src={waitUserAnswerUrl} width={180} />

The **Wait User Answer** action is used to wait for a user's reply before continuing the flow. Use this action whenever you want ask a question to your customers and wait for their reply.

# Scheduled actions

Whenever the bot reach a "wait user answer" action, it's possible to specify a fallback if the client does not answer after a certain amount of time. You can use the selector to specify a duration:

<img src={triggerFallbackDelaySelector} width={180} />

Keep in mind that if the user answer before the delay, the fallback won't be triggered. Same goes if you manually stop the bot.

Once you have specified a delay, you can intereact with the newly created branch like any other branches:

<img src={scheduleBranchExemple} width={180} />
