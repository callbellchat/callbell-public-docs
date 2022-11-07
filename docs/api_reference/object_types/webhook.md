---
title: Webhook
sidebar_position: 3
---

### Webhook Object

| Field           | Type     | Description                                                                                                                                               |
| :-------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`           | string   | A valid url where the events will be sent from Callbell                                                                                                   |
| `subscriptions` | string[] | List of subcriptions containing subscribed events (`message_created`, `message_status_updated`, `contact_created`, `contact_updated`, `contact_deleted©`) |
| `enabled`       | Boolean  | Boolean value which determins if the webhook is enabled                                                                                                   |
| `createdAt`     | string   | Date of webhook creation (ISO 8601 formatted)                                                                                                             |
