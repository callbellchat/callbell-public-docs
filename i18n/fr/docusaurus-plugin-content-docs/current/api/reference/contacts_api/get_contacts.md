---
title: GET /contacts
sidebar_position: 2
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /contacts

Liste tous les contacts appartenant au compte. Un filtre peut être spécifié afin d'obtenir des résultats plus précis.

### Paramètres optionnels

| Paramètre   | Type     | Description                                                                        |
| :---------- | :------- | :--------------------------------------------------------------------------------- |
| `page`      | Integer  | La page de contacts. Si non spécifiée, la page 1 est utilisée par défaut. Les pages au-delà de 500 ne sont pas disponibles — utilisez plutôt la [pagination par curseur](#cursor-pagination). |
| `after`     | string   | Curseur opaque provenant du `meta.next` d'une réponse précédente. Renvoie le lot de contacts qui le suit. Voir [Pagination par curseur](#cursor-pagination). |
| `source`    | Source   | Le type d'intégration (p. ex. `whatsapp`)                                           |
| `tags`      | string[] | Les tags correspondants, séparés par des virgules (p. ex. `sales,lead`). Les tags sont _insensibles à la casse_. |
| `team_uuid`           | string   | L'uuid de l'équipe.                                                      |
| `include_field_types` | boolean  | Lorsque `true`, la réponse inclut `customFieldsMetadata` avec la valeur, le type et les options de chaque champ personnalisé. |

### Pagination par curseur {#cursor-pagination}

La pagination par pages s'arrête à la page 500 (10 000 contacts) : les requêtes au-delà de cette limite renvoient une erreur `400 Bad Request` avec le message `Pagination limit exceeded`. Pour parcourir la liste complète des contacts, utilisez la pagination par curseur :

1. Faites une requête comme d'habitude : chaque réponse inclut un token opaque dans `meta.next`.
2. Renvoyez ce token via le paramètre `after` pour récupérer le lot de contacts suivant.
3. Continuez à suivre `meta.next` jusqu'à ce qu'il vaille `null` — cela marque le dernier lot.

```bash
curl -X GET "https://api.callbell.eu/v1/contacts?after=eyJ0cyI6MTc1NDM4NDQwMDAwMCwiaWQiOjEyMzQ1fQ" \
    -H "Authorization: Bearer test_gshuPaZoeEG6ovbc8M79w0QyM" \
    -H "Content-Type: application/json"
```

Quelques points à garder à l'esprit :

- Traitez le token comme opaque et renvoyez-le tel quel. Un token malformé renvoie une erreur `400 Bad Request` avec le message `Invalid pagination cursor`.
- Le paramètre `page` est ignoré lorsque `after` est présent.
- Les filtres (`source`, `tags`, `team_uuid`) ne sont pas encodés dans le token : envoyez les mêmes filtres avec `after` à chaque requête.
- Les contacts sont renvoyés dans le même ordre que pour les requêtes par pages (conversation la plus récente en premier). Les contacts créés après le début du parcours ne sont pas inclus.

### Exemple de requête

<RequestTabs endpoint='contacts_api' request="get_contacts"/>

### Réponse

| Paramètre  | Type                                             | Description            |
| :--------- | :----------------------------------------------- | :--------------------- |
| `contacts` | [Contact[]](/api/reference/object_types/contact) | Une liste de contacts. |
| `meta`     | object                                           | Métadonnées de pagination : `page` et `pages` pour les requêtes par pages, plus `next`, le curseur pointant vers le lot suivant (`null` pour le dernier lot). |

### Exemple de réponse

```json title=response.json
{
  "contacts": [
    {
      "uuid": "414a6d692bd645ed803f2e7ce360d4c8",
      "name": "John Doe",
      "phoneNumber": "+123 456 789",
      "avatarUrl": null,
      "createdAt": "2020-11-13T21:08:53Z",
      "source": "whatsapp",
      "href": "https://dash.callbell.eu/contacts/414a6d692bd645ed803f2e7ce360d4c8",
      "conversationHref": "https://dash.callbell.eu/chat/f3670b13446b412796238b1cd78899f9",
      "assignedUser": "john.doe@email.com",
      "tags": [
        "sales",
        "lead"
      ],
      "customFields":{
        "Stripe link": "https://stripe.com/contacts/cus1234567",
        "Billing Address": "3 Abbey Rd, London"
      }
    },
    ...
    {
      "uuid": "ff8bec9363bc4c29b8b044eabf2afebd",
      "name": "Mario Rossi",
      "phoneNumber": "+33 11 22 33 44",
      "avatarUrl": null,
      "createdAt": "2021-02-24T20:33:06Z",
      "source": "whatsapp",
      "href": "https://dash.callbell.eu/contacts/ff8bec9363bc4c29b8b044eabf2afebd",
      "conversationHref": "https://dash.callbell.eu/chat/f3670b13446b412796238b1cd78899f9",
      "assignedUser": null,
      "tags": [
        "sales",
        "lead",
        "hot"
      ],
      "customFields":{
        "Stripe link": "https://stripe.com/contacts/cus124124153"
      }
    }
  ],
  "meta": {
    "page": 1,
    "pages": 42,
    "next": "eyJ0cyI6MTc1NDM4NDQwMDAwMCwiaWQiOjEyMzQ1fQ"
  }
}
```

### Exemple de réponse (avec `include_field_types=true`)

```json title=response.json
{
  "contacts": [
    {
      "uuid": "414a6d692bd645ed803f2e7ce360d4c8",
      "name": "John Doe",
      "customFields": {
        "Address": "Oxford Street 123",
        "Join Date": "2024-01-15",
        "Preferences": "[\"Newsletter\", \"Promotions\"]"
      },
      "customFieldsMetadata": {
        "Address": { "value": "Oxford Street 123", "type": "text" },
        "Join Date": { "value": "2024-01-15", "type": "date" },
        "Preferences": { "value": ["Newsletter", "Promotions"], "type": "checkbox", "options": ["Newsletter", "Promotions", "Updates"] }
      }
    }
  ]
}
```
