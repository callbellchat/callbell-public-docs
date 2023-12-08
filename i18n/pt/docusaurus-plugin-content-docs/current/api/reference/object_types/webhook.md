---
title: Objeto Webhook
sidebar_position: 3
---

### Objeto Webhook

| Campo           | Tipo     | Descrição                                                                                                                                                                                            |
| :-------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`           | string   | Uma url válida para onde os eventos serão enviados do Callbell                                                                                                                                                |
| `subscriptions` | string[] | Lista de assinaturas contendo eventos assinados (`message_created`, `message_status_updated`, `contact_created`, `contact_updated`, `contact_deleted`, `conversation_opened`, `conversation_closed`) |
| `enabled`       | Boolean  | Valor booleano que determina se o webhook está habilitado                                                                                                                                                |
| `createdAt`     | string   | Data de criação do webhook (formatada em ISO 8601)                                                                                                                                                          |