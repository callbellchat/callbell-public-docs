---
title: MessageSendRequest
sidebar_position: 3
---

### Objet MessageSendRequest

`MessageSendRequest` représente une demande d'envoi de message. Il peut être identifié et récupéré ultérieurement en utilisant le champ `uuid`.

| Champ                  | Type                    | Description                                                                                                                                                                  |
| :--------------------- | :---------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `uuid`                 | string                  | Un identifiant unique généré par Callbell                                                                                                                                          |
| `status`               | MessageStatus           | Le statut du message                                                                                                                                                           |
| `messageStatusPayload` | JSON                    | La charge utile du statut du message                                                                                                                                               |
| `contact`              | [Contact](./contact.md) | Le contact auquel le message a été envoyé (retourné uniquement lors de la spécification de la propriété `contact` à l'intérieur de `fields` dans [envoyer un message](../messages_api/post_send_messages.md)) |