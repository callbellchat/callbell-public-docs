---
sidebar_position: 1
---

# Sleep, pause bot

The **Sleep** action is used to pause the bot for a short amount of time. You can enter a duration between 1 second to 3600 seconds (equivalent to 1 hour).

This can be useful for different use cases:

- If you want to simulate more human like interactions in the conversation.
- Sending many messages at the same time can trick Whatsapp to not order them correctly. Adding a small delay of 1 second can help.

:::tip
Remember that when the bot is in sleep, unlike the "wait for user's answer" action, it won't react to any user input until the end of the duration you have specified.
:::
