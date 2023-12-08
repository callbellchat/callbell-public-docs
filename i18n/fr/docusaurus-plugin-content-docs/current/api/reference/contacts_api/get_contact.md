---
title: GET /contacts/:uuid
sidebar_position: 3
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /contact/:uuid

Obtenez un contact spécifique en utilisant un `uuid`.

### Paramètres requis

| Paramètre | Type   | Description             |
| :-------- | :----- | :---------------------- |
| `uuid`    | string | L'uuid du contact       |

### Exemple de requête

<RequestTabs endpoint='contacts_api' request="get_contact"/>

### Réponse

| Paramètre | Type                                           | Description                          |
| :-------- | :--------------------------------------------- | :----------------------------------- |
| `contact` | [Contact](/api/reference/object_types/contact) | L'objet représentant le contact.     |

### Exemple de réponse

```json title=response.json
{
  "contact": [
    {
      "uuid": "414a6d692bd645ed803f2e7ce360d4c8",
      "name": "John Doe",
      "phoneNumber": "+123 456 789",
      "avatarUrl": null,
      "createdAt": "2020-11-13T21:08:53Z",
      "source": "whatsapp",
      "href": "https://dash.callbell.eu/contacts/414a6d692bd645ed803f2e7ce360d4c8",
      "tags": ["sales", "lead"],
      "assignedUser": null,
      "customFields": {
        "Address": "Oxford Street 123",
        "Billing Address": "Oxford Street 123",
        "VAT": "ABC123DCE456"
      }
    }
  ]
}
```