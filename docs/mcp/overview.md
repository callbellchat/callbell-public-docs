---
sidebar_position: 1
---

# Overview

Connect **Claude**, **ChatGPT** or another AI assistant to your Callbell account, then ask it about your contacts and conversations in your own words. For example:

- "Show me the last messages from +34 600 000 000."
- "Which contacts tagged `refund-request` are assigned to the Support team?"
- "Add an internal note to this contact with a summary of the conversation."
- "Send our approved `order_update` template to this contact."

## What you need

- An AI app that supports custom connectors, such as Claude or ChatGPT.
- A Callbell user with access to the account **settings**.
- The Callbell address, which you paste in your AI app:

```
https://ai.callbell.eu/mcp
```

There is no API key to create: the first time you connect, you simply log in with your Callbell user.

## How the connection works

1. You add Callbell in your AI app with the address above.
2. The app opens a Callbell page, where you log in if you aren't logged in already.
3. Callbell shows what the app is asking for. You choose what it may do and click **Allow**.

Each connection is personal: every teammate connects with their own Callbell login. All connections are listed in Callbell, where they can be removed at any time (see [Manage connections](./manage_connections.md)). Callbell never shares your password with the AI app.

## What the assistant can do

When you connect, you choose between two levels of access.

**Read only** (the default). The assistant can:

- find contacts by phone number, tag, team or channel,
- read contact details and conversation messages, including internal notes,
- see your channels, teams and WhatsApp templates.

**Read and write**, only if you tick **Allow ... to make changes**. The assistant can also:

- send WhatsApp messages to your existing contacts (outside the 24-hour customer service window, only approved templates),
- update contacts: name, tags, custom fields and team,
- add internal notes,
- close conversations.

To change the level of access later, disconnect the app and connect it again.

:::caution
The assistant works with the whole Callbell account: it can see all contacts and conversations, not only the ones assigned to you. Only connect apps you trust, and keep read-only access when the assistant doesn't need to change anything.
:::

## Set up your AI app

- [Claude (web, desktop and mobile)](./connect_claude.md)
- [ChatGPT](./connect_chatgpt.md)
- [Claude Code, Codex and other MCP clients](./developer_tools.md)

To see or remove the apps connected to your account, read [Manage connections](./manage_connections.md).
