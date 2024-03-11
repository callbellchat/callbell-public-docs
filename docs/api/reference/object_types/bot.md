---
title: Bot
sidebar_position: 6
---

# Bot

Bots are the automated agents that can interact with your customers. They can be used to automate repetitive tasks and provide instant responses to your customers.

You can start or stop a bot for a specific contact using the [POST /contacts/:uuid/bot](/api/reference/contacts_api/post_contact_bot) endpoint.

## Properties

| Parameter               | Type    | Description                                                                      |
| :---------------------- | :------ | :------------------------------------------------------------------------------- |
| `uuid`                  | string  | The unique identifier of the bot.                                                |
| `name`                  | string  | The name of the bot.                                                             |
| `status`                | string  | The status of the bot. Possible values are `in_progress`, `started` and `ended`. |
| `conversationStartedAt` | string  | The date and time when the conversation with the bot started.                    |
| `version`               | integer | The version of the bot.                                                          |
| `latestBotVersion`      | boolean | Indicates if the bot is the latest version.                                      |

## Example

```json title=response.json
{
  "bot": {
    "uuid": "f7155fc557b74597b429bd3dbb5ca677",
    "name": "My Bot",
    "status": "in_progress",
    "conversationStartedAt": "2024-03-11T17:57:09Z",
    "version": 5,
    "latestBotVersion": true
  }
}
```