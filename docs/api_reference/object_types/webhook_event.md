---
title: WebhookEvent
sidebar_position: 4
---

### WebhookEvent Object

| Field       | Type     | Description                                                                                  |
| :---------- | :------- | :------------------------------------------------------------------------------------------- |
| `event`     | string   | Event type                                                                                   |
| `response`  | string{} | Response body returned from external webhook endpoints                                       |
| `payload`   | string{} | Payload object containing the subject of the event (message, contact)                        |
| `success`   | boolean  | Boolean value representing the status of the event request (`true` if status code was `200`) |
| `createdAt` | string   | Date of webhook creation (ISO 8601 formatted)                                                |
