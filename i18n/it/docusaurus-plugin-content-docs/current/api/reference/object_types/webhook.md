---
title: Oggetto Webhook
sidebar_position: 3
---

### Oggetto Webhook

| Campo           | Tipo     | Descrizione                                                                                                                                                                                            |
| :-------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`           | string   | Un URL valido a cui gli eventi verranno inviati da Callbell                                                                                                                                                |
| `subscriptions` | string[] | Elenco di abbonamenti contenenti eventi sottoscritti (`message_created`, `message_status_updated`, `contact_created`, `contact_updated`, `contact_deleted`, `conversation_opened`, `conversation_closed`) |
| `enabled`       | Boolean  | Valore booleano che determina se il webhook è abilitato                                                                                                                                                |
| `createdAt`     | string   | Data di creazione del webhook (formattato secondo ISO 8601)                                                                                                                                                          |