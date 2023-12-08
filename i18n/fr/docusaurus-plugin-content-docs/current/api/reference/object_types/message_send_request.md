---
title: Objet MessageSendRequest
sidebar_position: 2
---

### Objet MessageSendRequest

`MessageSendRequest` représente une demande d'envoi de message. Elle peut être identifiée et récupérée ultérieurement en utilisant le champ `uuid`.

| Champ                  | Type          | Description                        |
| :--------------------- | :------------ | :--------------------------------- |
| `uuid`                 | string        | Un identifiant unique généré par Callbell |
| `status`               | MessageStatus | Le statut du message          |
| `messageStatusPayload` | JSON          | La charge utile brute de l'état du message     |