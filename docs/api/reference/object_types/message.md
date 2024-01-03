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
