---
title: Richiesta di invio messaggio
sidebar_position: 2
---

### Oggetto MessageSendRequest

`MessageSendRequest` rappresenta una richiesta di invio messaggio. Può essere identificata e recuperata in seguito utilizzando il campo `uuid`.

| Campo                  | Tipo          | Descrizione                          |
| :--------------------- | :------------ | :----------------------------------- |
| `uuid`                 | string        | Un ID univoco generato da Callbell    |
| `status`               | MessageStatus | Lo stato del messaggio                |
| `messageStatusPayload` | JSON          | Il payload grezzo dello stato messaggio |