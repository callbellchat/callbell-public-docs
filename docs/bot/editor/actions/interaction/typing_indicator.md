---
sidebar_position: 1
---

# Typing Indicator

The **Typing Indicator** action sends typing dots ("...") to the customer on WhatsApp, simulating a more natural conversation. The dots are automatically dismissed when the next message is sent or after 25 seconds.

This action is only available for **WhatsApp Cloud API** channels.

## How to use it

Place this action right after receiving a user message (either at the start of the flow or after a "Wait for user's answer" action). It works best before a heavy processing step like an **AI Agent**, **OpenAI**, or **Webhook** action, where the user would otherwise see no activity while the bot processes their request.

**Example flow:**

1. User sends a message
2. **Typing indicator** (dots appear)
3. AI Agent / Webhook processes the request
4. Send message (dots disappear, response arrives)

:::tip
The typing indicator also marks the user's message as "read" (blue ticks) on WhatsApp.
:::

:::info
This action is available exclusively for WhatsApp Cloud API channels and will not appear in the action list for other channel types.
:::
