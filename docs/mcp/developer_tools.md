---
sidebar_position: 4
---

# Claude Code, Codex and other MCP clients

Developer tools and other MCP clients connect to Callbell with the same server URL and the same Callbell sign-in as Claude and ChatGPT. Each person who uses the connection signs in with their own Callbell user.

## Claude Code

:::tip
If you use Claude Code with your claude.ai account and already added Callbell in Claude (see [Connect Claude](./connect_claude.md)), Callbell is already available in Claude Code.
:::

1. Add the server:

```bash
claude mcp add --transport http callbell https://ai.callbell.eu/mcp
```

By default, the server is only available in the current project. Add `--scope user` to use it in all your projects, or `--scope project` to share it with your team in a `.mcp.json` file (each teammate still signs in with their own Callbell user).

2. Start Claude Code, run `/mcp`, select **callbell** and choose **Authenticate**. You can also run `claude mcp login callbell` from your terminal.
3. Your browser opens the Callbell consent page. Choose the permissions and click **Allow**.

Claude Code stores the connection and renews it automatically.

## Codex

1. Add the server:

```bash
codex mcp add callbell --url https://ai.callbell.eu/mcp
```

2. Codex detects that Callbell uses OAuth and opens your browser. If it doesn't, run:

```bash
codex mcp login callbell
```

3. On the Callbell consent page, choose the permissions and click **Allow**.

You can also add the server by hand in `~/.codex/config.toml`, then run `codex mcp login callbell`:

```toml
[mcp_servers.callbell]
url = "https://ai.callbell.eu/mcp"
```

The Codex CLI, the Codex IDE extension and the ChatGPT desktop app share this configuration.

## Other MCP clients

Any MCP client that supports remote servers over **Streamable HTTP** with **OAuth** sign-in can connect to Callbell. Most clients only need the URL, for example in a JSON configuration:

```json
{
  "mcpServers": {
    "callbell": {
      "type": "http",
      "url": "https://ai.callbell.eu/mcp"
    }
  }
}
```

The client finds the sign-in settings by itself. For reference, here are the technical details:

| Setting | Value |
| :-- | :-- |
| MCP server | `https://ai.callbell.eu/mcp` (Streamable HTTP) |
| Protected resource metadata | `https://ai.callbell.eu/.well-known/oauth-protected-resource` |
| Authorization server | `https://dash.callbell.eu` |
| Authorization server metadata | `https://dash.callbell.eu/.well-known/oauth-authorization-server` |
| Client registration | Dynamic client registration at `https://dash.callbell.eu/oauth/register` |
| Grant type | Authorization code with PKCE (`S256`), with refresh tokens |
| Scopes | `read`, `write` |
| Redirect URIs | Any `https` URL, or `http` on `localhost` or a loopback address for desktop and command line clients |

:::note
The MCP server only accepts the OAuth tokens issued by Callbell's sign-in. Callbell API keys don't work with it: to call Callbell from your own code, use the [Callbell API](/api/reference/introduction).
:::

## Available tools

These are the actions the assistant can perform in Callbell:

| Tool | Permission | What it does |
| :-- | :-- | :-- |
| `find_contacts` | Read | Looks up a contact by phone number, searches contacts by name, or lists contacts filtered by channel, tags, team, conversation state, who sent the latest message, when the contact last wrote or assigned team member. See [Finding conversations](#finding-conversations). |
| `get_contact` | Read | Gets a contact with its tags, custom fields, team, channel and conversation status. |
| `list_messages` | Read | Reads a contact's conversation as a transcript that shows who sent each message, including internal notes. Each call reads up to 100 messages, starting from the most recent. |
| `list_channels` | Read | Lists the connected channels (WhatsApp, Instagram, Facebook Messenger and Telegram). |
| `list_teams` | Read | Lists the account's teams. |
| `list_tags` | Read | Lists the labels of the account's tags. `find_contacts` and `update_contact` only accept these exact labels. |
| `list_custom_fields` | Read | Lists the account's custom fields, with each field's type and, for dropdown and checkbox fields, the allowed options. |
| `list_templates` | Read | Lists the WhatsApp templates and their approval status. |
| `send_message` | Write | Sends a WhatsApp message to an existing contact. Outside the 24-hour customer service window, only approved templates can be sent. |
| `update_contact` | Write | Renames a contact, adds or removes tags, fills custom fields or moves the conversation to another team. |
| `add_note` | Write | Adds an internal note to a conversation. Notes are visible to your team only, never to the contact. |
| `close_conversation` | Write | Closes a contact's conversation. |
| `report_unsupported_request` | Read | Tells Callbell about a request that the other tools cannot do, or can do only in part, so that Callbell can improve them. It sends the user's request and a short description of what is missing, and changes nothing in the account. |

:::note
The assistant can only message contacts that already exist in Callbell: it cannot start a conversation with a new phone number. Authentication templates (one-time codes) cannot be sent from an AI app.
:::

## Finding conversations {#finding-conversations}

`find_contacts` can filter contacts by the state of their conversation. The assistant uses these filters to answer questions such as "which conversations are waiting for a reply?" or "who wrote to us today?" without reading every contact. The filters combine with each other and with the search by name, tags, channel and team.

| Filter | Values | Finds |
| :-- | :-- | :-- |
| `conversation_state` | `open` or `closed` | Contacts whose conversation is open, or closed. |
| `last_message_from` | `contact` or `business` | Contacts who sent the latest message of their conversation, which usually means they are waiting for a reply, or contacts whose latest message was sent from your account (a team member, a bot, a broadcast or the API). |
| `last_inbound_message_after` and `last_inbound_message_before` | An ISO 8601 date and time, for example `2026-11-19T08:00:00Z` | Contacts whose most recent message to you arrived in that time window. Messages sent from your account don't count. |
| `assigned_user` | A team member's email, or `unassigned` | Contacts whose conversation is assigned to that team member, or to nobody. |
| `order` | `created_at` (default) or `last_inbound_message_at` | The newest conversation first, or the contact who wrote most recently first. |

Each contact in the results also shows `lastInboundMessageAt`, when the contact last wrote to you, and `lastMessageFrom`, `contact` or `business`, so the assistant can tell how long a contact has been waiting. The filters work like the matching parameters of [GET /contacts](/api/reference/contacts_api/get_contacts) in the Callbell API.

:::tip
AI apps keep the list of tools they loaded when you connected. If the assistant doesn't use these filters, start a new chat or reconnect Callbell so the app loads the latest tools.
:::
