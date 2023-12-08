---
title: Objeto Webhook
sidebar_position: 3
---

### Objeto Webhook

| Campo           | Tipo     | Descripción                                                                                                                                                                                            |
| :-------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`           | string   | Una URL válida donde se enviarán los eventos desde Callbell                                                                                                                                                |
| `subscriptions` | string[] | Lista de suscripciones que contienen eventos suscritos (`message_created`, `message_status_updated`, `contact_created`, `contact_updated`, `contact_deleted`, `conversation_opened`, `conversation_closed`) |
| `enabled`       | Boolean  | Valor booleano que determina si el webhook está habilitado                                                                                                                                                |
| `createdAt`     | string   | Fecha de creación del webhook (formato ISO 8601)                                                                                                                                                          |