---
sidebar_position: 10
---

import blockContact from './assets/block_contact.png'

# Block Contact

<img src={blockContact} width={180} />

This action allows you to block a contact from interacting with the bot.

This is useful whenever you need to prevent a specific contact from continuing the conversation or accessing the bot in the future.

:::danger
The bot won't be able to unblock the contact, because we won't receive any more messages from it. So this is a one way action.
:::
