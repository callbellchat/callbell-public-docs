---
title: Message
sidebar_position: 3
---

### Message Object

| Field       | Type   | Description                                          |
| :---------- | :----- | :--------------------------------------------------- |
| `createdAt` | string | Date of conversation creation (ISO 8601 formatted)   |
| `uuid`      | string | Unique identifier of the message                     |
| `text`      | string | Text of the message                                  |
| `status`    | string | Status of the message (`sent`, `received` or `note`) |
| `channel`   | string | Channel of the message (`whatsapp`, `telegram`, ...) |
| `from`      | string | Sender of the message                                |
| `to`        | string | Receiver of the message                              |
| `sender`    | object | Who sent the message, see [Sender Object](#sender-object) |

### Sender Object

The `sender` object tells who wrote or sent the message. It is present on every message returned by [GET /contacts/:uuid/messages](/api/reference/contacts_api/get_contact_messages) and by the [message_created](/api/reference/webhooks/message_events/message_created) webhook.

| Field  | Type           | Description                                                                                          |
| :----- | :------------- | :--------------------------------------------------------------------------------------------------- |
| `type` | string         | The kind of sender, one of the values listed below                                                   |
| `user` | object \| null | The team member behind the message (`uuid`, `name` and `email`), or `null` when there is no team member |

| `type`       | Meaning                                                                                                                                                                                                         |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contact`    | The contact sent the message.                                                                                                                                                                                   |
| `agent`      | A team member sent the reply or wrote the internal note. `user` is that team member. For a message sent from another app connected to the same number (for example the WhatsApp Business app), `user` is the team member assigned to the conversation at that time. |
| `api`        | The message was sent with [POST /messages/send](/api/reference/messages_api/post_send_messages). `user` is the team member passed as `assigned_user`, including the account owner, and `null` when no `assigned_user` was passed. |
| `bot`        | A Callbell bot sent the message, including AI agent steps of a bot.                                                                                                                                             |
| `automation` | An automatic message sent by Callbell: away, closing and automatic routing messages, and scheduled reminders.                                                                                                   |
| `broadcast`  | The message was sent as part of a broadcast.                                                                                                                                                                    |
| `ai_agent`   | Meta's Business AI agent replied on the WhatsApp number.                                                                                                                                                        |
| `system`     | Callbell generated the message, for example a note recording that a conversation was assigned or closed.                                                                                                        |
| `unknown`    | Callbell did not record who sent the message, which is the case for some messages created before this field existed.                                                                                           |

`user` is `null` for every `type` other than `agent` and `api`. It is also `null` when the team member has since been deleted, and for outbound messages imported from the WhatsApp Business app history. For `api` messages sent before the account owner could be named (see the [release notes](/api/release_notes)), `user` is `null` for the account owner, even if the owner was passed as `assigned_user`.

```json title=sender.json
{
  "type": "agent",
  "user": {
    "uuid": "8a1f3c0e2b7d4e5f9a6b1c2d3e4f5a6b",
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
}
```
