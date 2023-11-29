---
title: Conversation
sidebar_position: 5
---

### Conversation Object

| Field       | Type                    | Description                                         |
| :---------- | :---------------------- | :-------------------------------------------------- |
| `createdAt` | string                  | Date of conversation creation (ISO 8601 formatted)  |
| `closedAt`  | string                  | Date of conversation closure (ISO 8601 formatted)   |
| `team`      | [Team](./team.md)       | Team inbox currently associated to the conversation |
| `contact`   | [Contact](./contact.md) | Contact currently associated to the conversation    |