---
title: GET /contacts
sidebar_position: 2
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /contacts

Elenca tutti i contatti appartenenti all'account. È possibile specificare un filtro per ottenere risultati più specifici.

### Parametri opzionali

| Parametro | Tipo     | Descrizione                                                                                        |
| :-------- | :------- | :------------------------------------------------------------------------------------------------- |
| `pagina`  | Intero   | La pagina dei contatti. Se non viene specificata, la pagina predefinita sarà la pagina 1.          |
| `source`  | Source   | Il tipo di integrazione (ad esempio, `whatsapp`)                                                   |
| `tags`    | string[] | I tag corrispondenti, separati da virgole (ad esempio, `sales,lead`). I tag sono _case-insentive_. |

### Esempio di richiesta

<RichiestaTabs endpoint='contacts_api' request="get_contacts" />

### Risposta

| Parametro  | Tipo                                              | Descrizione            |
| :--------- | :------------------------------------------------ | :--------------------- |
| `contacts` | [Contacts[]](/api/reference/object_types/contact) | Un elenco di contatti. |

### Esempio di risposta

```json title=response.json
{
  "contatti": [
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
        "Indirizzo di fatturazione": "3 Abbey Rd, London"
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
