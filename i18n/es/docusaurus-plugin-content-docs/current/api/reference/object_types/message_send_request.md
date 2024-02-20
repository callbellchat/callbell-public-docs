---
title: Objeto MessageSendRequest
sidebar_position: 3
---

### Objeto MessageSendRequest

`MessageSendRequest` representa uma solicitação de envio de mensagem. Ele pode ser identificado e recuperado posteriormente usando o campo `uuid`.

| Field                  | Type                    | Description                                                                                                                                                                  |
| :--------------------- | :---------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `uuid`                 | string                  | Um ID único gerado pelo Callbell                                                                                                                                              |
| `status`               | MessageStatus           | O status da mensagem                                                                                                                                                          |
| `messageStatusPayload` | JSON                    | O payload bruto de status da mensagem                                                                                                                                         |
| `contact`              | [Contact](./contact.md) | O contato para quem a mensagem foi enviada (retornado apenas ao especificar a propriedade `contact` dentro de `fields` em [enviar mensagem](../messages_api/post_send_messages.md)) |