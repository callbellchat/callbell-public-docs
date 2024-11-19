---
title: MessageReaction
sidebar_position: 3
---

### MessageReaction Object

| Field       | Type     | Description                                          |
| :---------- | :------- | :--------------------------------------------------- |
| `emoji`     | string   | Emoji used for reaction                              |
| `createdAt` | string   | Date of reaction creation (ISO 8601 formatted)       |
| `target`    | string{} | Target message for reaction                          |
| `text`      | string   | Text of target message                               |
| `createdAt` | string   | Date of target message creation (ISO 8601 formatted) |
| `status`    | string   | Status of the target message (`sent`, `received`)    |
