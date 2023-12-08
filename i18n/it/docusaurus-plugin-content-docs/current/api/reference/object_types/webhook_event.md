---
title: Oggetto WebhookEvent
sidebar_position: 4
---

### Oggetto WebhookEvent

| Campo       | Tipo     | Descrizione                                                                                                  |
| :---------- | :------- | :---------------------------------------------------------------------------------------------------------- |
| `evento`     | string   | Tipo di evento                                                                                               |
| `risposta`  | string{} | Corpo di risposta restituito dai punti di accesso webhook esterni                                            |
| `payload`   | string{} | Oggetto payload contenente l'oggetto dell'evento (messaggio, contatto)                                       |
| `successo`   | boolean  | Valore booleano che rappresenta lo stato della richiesta dell'evento (`true` se il codice di stato era `200`) |
| `creatoIl` | string   | Data di creazione del webhook (formattata ISO 8601)                                                          |