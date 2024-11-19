---
title: MessageForward
sidebar_position: 3
---

### MessageForward Object

| Field       | Type     | Description                                        |
| :---------- | :------- | :------------------------------------------------- |
| `target`    | string{} | Reply message                                      |
| `source`    | string{} | Message being replied                              |
| `text`      | string   | Text of reply message                              |
| `createdAt` | string   | Date of conversation creation (ISO 8601 formatted) |
| `status`    | string   | Status of the message (`sent`, `received`)         |
