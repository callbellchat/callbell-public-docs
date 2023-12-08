---
title: GET /contacts
sidebar_position: 2
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /contacts

Elencare tutti i contatti appartenenti all'account. È possibile specificare un filtro per ottenere risultati più specifici.

### Parametri Opzionali

| Parametro | Tipo     | Descrizione                                                                                      |
| :-------- | :------- | :----------------------------------------------------------------------------------------------- |
| `page`    | Integer  | La pagina dei contatti. Se non specificato, sarà impostata di default a pagina 1.                |
| `source`  | Source   | Il tipo di integrazione (ad esempio, `whatsapp`)                                                 |
| `tags`    | string[] | Tag corrispondenti, separati da virgola (ad esempio, `sales,lead`). I tag sono _case-insentive_. |

### Esempio di Richiesta

<RequestTabs endpoint='contacts_api' request="get_contacts"/>

### Risposta

| Parametro  | Tipo                                             | Descrizione            |
| :--------- | :----------------------------------------------- | :--------------------- |
| `contacts` | [Contact[]](/api/reference/object_types/contact) | Una lista di contatti. |

### Esempio di Risposta

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
  ]
}
```