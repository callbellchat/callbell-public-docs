---
titolo: WebhookEvent
sidebar_position: 4
---

## Oggetto WebhookEvent

| Campo | Tipo | Descrizione |
| :---------- | :------- | :------------------------------------------------------------------------------------------- |
| `event` | stringa | Tipo di evento |
| `response` | string{} | Corpo della risposta restituita da endpoint webhook esterni |
| `payload` | string{} | Oggetto payload contenente l'oggetto dell'evento (messaggio, contatto) |
| `success` | boolean | Valore booleano che rappresenta lo stato della richiesta di evento (`true` se il codice di stato era `200`) |
| `createdAt` | stringa | Data di creazione del webhook (formattata ISO 8601) |
