---
title: OBTENIR /webhooks/events
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /events

Lister tous les événements appartenant au webhook. Un filtre peut être spécifié afin d'obtenir des résultats plus spécifiques.

### Paramètres optionnels

| Paramètre       | Type     | Description                                                                               |
| :-------------- | :------- | :---------------------------------------------------------------------------------------- |
| `status`        | string   | Le statut de l'événement (échec, succès)                                                   |
| `page`          | string   | Le numéro de la page                                                                      |
| `items`         | string   | Le nombre d'éléments par page                                                             |
| `subscriptions` | string[] | Valeurs séparées par des virgules des événements auxquels s'abonner à ce webhook (ex. `message_created`) |

### Exemple de requête

<RequestTabs endpoint='webhooks_api' request="get_webhooks_events"/>

### Réponse

| Paramètre          | Type                                                      | Description             |
| :----------------- | :-------------------------------------------------------- | :---------------------- |
| `webhook_events`   | [WebhookEvent](/api/reference/object_types/webhook_event) | Liste des événements du webhook. |

### Exemple de réponse

```json title=response.json
{
  "webhook_events": [
    {
      "event": "message_created",
      "payload": "message_object",
      "response": {
        "body": {},
        "code": 200,
        "headers": {}
      },
      "success": true,
      "createdAt": "2022-11-08T15:41:49Z"
    },
    {
      "event": "message_created",
      "payload": "message_object",
      "response": {
        "body": {},
        "code": 200,
        "headers": {}
      },
      "success": true,
      "createdAt": "2022-11-08T14:52:31Z"
    },
    {
      "event": "message_created",
      "payload": "contact_object",
      "response": {
        "body": {},
        "code": 200,
        "headers": {}
      },
      "success": true,
      "createdAt": "2022-11-08T14:51:51Z"
    }
  ],
  "meta": {
    "page": 1,
    "pages": 2
  }
}
```