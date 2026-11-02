---
sidebar_position: 1
---

# Overview

Connect **Claude**, **ChatGPT** or another AI assistant to your Callbell account, then ask it about your contacts and conversations in your own words. For example:

- "Show me the last messages from +34 600 000 000."
- "Which contacts tagged `refund-request` are assigned to the Support team?"
- "Add an internal note to this contact with a summary of the conversation."
- "Send our approved `order_update` template to this contact."

## What the assistant can and can't do

When you connect, you choose between two levels of access: **Read only** (the default), or **Read and write** if you tick **Allow ... to make changes**.

| | Action | Read only | Read and write |
| :-- | :-- | :-: | :-: |
| **Contacts** | Find a contact by phone number | ✅ | ✅ |
| | List contacts by tag, team or channel type | ✅ | ✅ |
| | See a contact's details, such as tags, custom fields, team, assigned user and contact note | ✅ | ✅ |
| | Rename a contact, add or remove tags, fill in custom fields | ❌ | ✅ |
| | Search contacts by name | ❌ | ❌ |
| | Create or delete a contact | ❌ | ❌ |
| | Create new tags or custom fields | ❌ | ❌ |
| | Edit the contact note | ❌ | ❌ |
| **Conversations** | Read a conversation's messages, including internal notes | ✅ | ✅ |
| | Add an internal note | ❌ | ✅ |
| | Move a conversation to another team | ❌ | ✅ |
| | Close a conversation | ❌ | ✅ |
| | Reopen a conversation | ❌ | ❌ |
| | Assign a conversation to a user, or unassign it | ❌ | ❌ |
| | Start or stop the bot in a conversation | ❌ | ❌ |
| | See or change a conversation's funnel stage | ❌ | ❌ |
| **Messages** | Send a WhatsApp text message within the 24-hour customer service window | ❌ | ✅ |
| | Send an approved WhatsApp template, also outside the 24-hour window | ❌ | ✅ |
| | Send images, documents, audio or video, or media templates | ❌ | ❌ |
| | Send a message on Instagram, Facebook Messenger or Telegram | ❌ | ❌ |
| | Start a conversation with a new phone number | ❌ | ❌ |
| | Check whether a message was delivered or read | ❌ | ❌ |
| | Delete a message | ❌ | ❌ |
| **Account** | See your channels, teams and WhatsApp templates | ✅ | ✅ |
| | See the members of a team | ❌ | ❌ |
| | Create or edit channels, teams or templates | ❌ | ❌ |
| | Change a user's availability or custom status | ❌ | ❌ |

For the actions marked ❌ in both columns, use Callbell directly. To change the level of access later, disconnect the app and connect it again.

:::caution
The assistant works with the whole Callbell account: it can see all contacts and conversations, not only the ones assigned to you. Only connect apps you trust, and keep read-only access when the assistant doesn't need to change anything.
:::

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

## Set up your AI app

- [Claude (web, desktop and mobile)](./connect_claude.md)
- [ChatGPT](./connect_chatgpt.md)
- [Claude Code, Codex and other MCP clients](./developer_tools.md)

To see or remove the apps connected to your account, read [Manage connections](./manage_connections.md).
