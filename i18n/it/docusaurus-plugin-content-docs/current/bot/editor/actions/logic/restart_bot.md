---
sidebar_position: 1
---

import restartBotUrl from './assets/restart_bot.png'

# Restart Bot

<img src={restartBotUrl} width={180} />

This action allows you to restart the bot sequence.

This is useful when you want to restart the bot sequence from a specific point, for example, when the user is not able to answer a question.

Note that this action will also close the conversation and will reset any variables. If you want to restart the bot sequence without closing the conversation, you can use the [Jump to Action](/bot/editor/actions/logic/jump_to).