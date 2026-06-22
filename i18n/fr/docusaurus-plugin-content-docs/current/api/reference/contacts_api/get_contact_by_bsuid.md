---
title: GET /contacts/bsuid/:bsuid
sidebar_position: 5
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /contacts/bsuid/:bsuid

Récupérez un contact spécifique à partir d’un `bsuid` (Business Suite User ID). Utile pour rechercher des contacts qui n’ont peut-être pas de numéro de téléphone associé (par exemple, des utilisateurs WhatsApp dont le nom d’utilisateur est privé).

### Paramètres requis

| Paramètre | Type   | Description                             |
| :-------- | :----- | :-------------------------------------- |
| `bsuid`   | string | L’ID utilisateur Business Suite du contact |

### Exemple de requête

<RequestTabs endpoint='contacts_api' request="get_contact_by_bsuid"/>

### Réponse

| Paramètre | Type                                           | Description                       |
| :-------- | :--------------------------------------------- | :-------------------------------- |
| `contact` | [Contact](/api/reference/object_types/contact) | L’objet représentant le contact. |

### Exemple de réponse

```json title=response.json
{
  "contact": {
    "uuid": "414a6d692bd645ed803f2e7ce360d4c8",
    "name": "John Doe",
    "phoneNumber": "+123 456 789",
    "avatarUrl": null,
    "createdAt": "2020-11-13T21:08:53Z",
    "source": "whatsapp",
    "href": "https://dash.callbell.eu/contacts/414a6d692bd645ed803f2e7ce360d4c8",
    "conversationHref": "https://dash.callbell.eu/chat/f3670b13446b412796238b1cd78899f9",
    "tags": ["sales", "lead"],
    "assignedUser": null,
    "customFields": {
      "Address": "Oxford Street 123"
    },
    "bsuid": "bsuid_abc123"
  }
}
```