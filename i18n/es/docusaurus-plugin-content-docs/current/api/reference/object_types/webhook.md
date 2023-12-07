---
título: Webhook
sidebar_position: 3
---

### Objeto Webhook

| Campo Tipo Descripción
| :-------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `url` | string | Una url válida a la que se enviarán los eventos desde Callbell | |
| `subscriptions` | string[] | Lista de suscripciones que contienen los eventos suscritos (`message_created`, `message_status_updated`, `contact_created`, `contact_updated`, `contact_deleted`, `conversation_opened`, `conversation_closed`) |
| Boolean Valor booleano que determina si el webhook está habilitado.
| `createdAt` | string | Fecha de creación del webhook (con formato ISO 8601) | `enabled` | Boolean | Valor booleano que determina si el webhook está habilitado
