---
title: Oggetto MessageSendRequest
sidebar_position: 3
---

### Oggetto MessageSendRequest

`MessageSendRequest` rappresenta una richiesta di invio messaggio. Può essere identificato e recuperato successivamente utilizzando il campo `uuid`.

| Campo                  | Tipo                    | Descrizione                                                                                                                                                                                                 |
| :--------------------- | :---------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `uuid`                 | string                  | Un ID univoco generato da Callbell                                                                                                                                                                          |
| `status`               | MessageStatus           | Lo stato del messaggio                                                                                                                                                                                      |
| `messageStatusPayload` | JSON                    | Carico utile dello stato del messaggio                                                                                                                                                                      |
| `contact`              | [Contact](./contact.md) | Il contatto a cui è stato inviato il messaggio (restituito solo quando si specifica la proprietà `contatto` all'interno di `campi` all'interno di [invia messaggio](../messages_api/post_send_messages.md)) |