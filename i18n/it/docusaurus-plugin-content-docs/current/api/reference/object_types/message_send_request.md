---
titolo: MessaggioInvioRichiesta
sidebar_position: 2
---

## Oggetto MessageSendRequest

MessageSendRequest" rappresenta una richiesta di invio di un messaggio. Può essere identificato e recuperato in seguito utilizzando il campo `uuid`.

| Campo | Tipo | Descrizione |
| :--------------------- | :------------ | :--------------------------------- |
| `uuid` | stringa | Un ID univoco generato da Callbell |
| `status` | MessageStatus | Lo stato del messaggio |
| `messageStatusPayload` | JSON | Il payload grezzo dello stato del messaggio |