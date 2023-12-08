---
title: Objet WebhookEvent
sidebar_position: 4
---

### Objet WebhookEvent

| Champs      | Type     | Description                                                                                  |
| :---------- | :------- | :------------------------------------------------------------------------------------------- |
| `event`     | string   | Type d'événement                                                                             |
| `response`  | string{} | Corps de la réponse retourné par les points de terminaison de webhook externes                |
| `payload`   | string{} | Objet de chargement contenant le sujet de l'événement (message, contact)                       |
| `success`   | boolean  | Valeur booléenne représentant l'état de la demande d'événement (`true` si le code de statut était `200`) |
| `createdAt` | string   | Date de création du webhook (format ISO 8601)                                                |