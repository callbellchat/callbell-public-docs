---
title: GET /contacts/bsuid/:bsuid
sidebar_position: 5
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /contacts/bsuid/:bsuid

Recupera un contatto specifico dato un `bsuid` (Business Suite User ID). È utile per cercare contatti che potrebbero non avere un numero di telefono associato (ad es. utenti WhatsApp con privacy sul nome utente).

### Parametri richiesti

| Parametro | Tipo   | Descrizione                              |
| :-------- | :----- | :---------------------------------------- |
| `bsuid`   | string | L'ID utente di Business Suite del contatto |

### Esempio di richiesta

<RequestTabs endpoint='contacts_api' request="get_contact_by_bsuid"/>

### Risposta

| Parametro | Tipo                                           | Descrizione                          |
| :-------- | :--------------------------------------------- | :----------------------------------- |
| `contact` | [Contatto](/api/reference/object_types/contact) | L'oggetto che rappresenta il contatto. |

### Esempio di risposta

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