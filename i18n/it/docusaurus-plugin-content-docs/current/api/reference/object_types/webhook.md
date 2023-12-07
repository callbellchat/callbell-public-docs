---
title: Webhook
sidebar_position: 3
---

### Oggetto Webhook

| Campo           | Tipo     | Descrizione                                                                                                                                                                                                                     |
| :-------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `url`           | stringa  | Un url valido dove gli eventi saranno inviati da Callbell                                                                                                                                                                       |
| `subscriptions` | string[] | Elenco di sottoscrizioni contenenti gli eventi sottoscritti (`messaggio_creato`, `messaggio_stato_aggiornato`, `contatto_creato`, `contatto_aggiornato`, `contatto_cancellato`, `conversazione_aperta`, `conversazione_chiusa`) |
| `enabled`       | Boolean  | Valore booleano che determina se il webhook è abilitato                                                                                                                                                                         |
| `createdAt`     | stringa  | Data di creazione del webhook (formattata ISO 8601)                                                                                                                                                                             |
