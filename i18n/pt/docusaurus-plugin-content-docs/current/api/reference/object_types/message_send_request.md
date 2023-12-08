---
title: Objeto MessageSendRequest
sidebar_position: 2
---

### Objeto MessageSendRequest

`MessageSendRequest` representa uma solicitação de envio de mensagem. Ele pode ser identificado e recuperado posteriormente usando o campo `uuid`.

| Campo                  | Tipo          | Descrição                           |
| :--------------------- | :------------ | :---------------------------------- |
| `uuid`                 | string        | Um ID único gerado pelo Callbell     |
| `status`               | MessageStatus | O status da mensagem                 |
| `messageStatusPayload` | JSON          | A carga bruta do status da mensagem  |