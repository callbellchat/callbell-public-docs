---
title: Objeto WebhookEvent
sidebar_position: 4
---

### Objeto WebhookEvent

| Campo       | Tipo     | Descrição                                                                             |
| :---------- | :------- | :----------------------------------------------------------------------------------- |
| `evento`     | string   | Tipo de evento                                                                        |
| `resposta`  | string{} | Corpo de resposta retornado dos pontos de extremidade de webhook externos             |
| `payload`   | string{} | Objeto de carga útil contendo o assunto do evento (mensagem, contato)                  |
| `sucesso`   | boolean  | Valor booleano que representa o status da solicitação do evento (`true` se o código de status foi `200`) |
| `criadoEm` | string   | Data de criação do webhook (formato ISO 8601)                                        |