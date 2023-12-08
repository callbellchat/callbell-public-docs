---
title: Objet Webhook
sidebar_position: 3
---

### Objet Webhook

| Champ           | Type     | Description                                                                                                                                                                                            |
| :-------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`           | string   | Une URL valide où les événements seront envoyés depuis Callbell                                                                                                                                                |
| `subscriptions` | string[] | Liste d'abonnements contenant des événements souscrits (`message_created`, `message_status_updated`, `contact_created`, `contact_updated`, `contact_deleted`, `conversation_opened`, `conversation_closed`) |
| `enabled`       | Boolean  | Valeur booléenne qui détermine si le webhook est activé                                                                                                                                                |
| `createdAt`     | string   | Date de création du webhook (format ISO 8601)                                                                                                                                                          |