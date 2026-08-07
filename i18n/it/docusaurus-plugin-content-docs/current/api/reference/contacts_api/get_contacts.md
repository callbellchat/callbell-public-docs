---
title: GET /contacts
sidebar_position: 2
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /contacts

Elenca tutti i contatti appartenenti all'account. È possibile specificare un filtro per ottenere risultati più specifici.

### Parametri opzionali

| Parametro   | Tipo     | Descrizione                                                                        |
| :---------- | :------- | :--------------------------------------------------------------------------------- |
| `page`      | Integer  | La pagina di contatti. Se non specificata, il valore predefinito è la pagina 1. Le pagine oltre la 500 non sono disponibili — usa invece la [paginazione a cursore](#cursor-pagination). |
| `after`     | string   | Cursore opaco preso da `meta.next` di una risposta precedente. Restituisce il gruppo di contatti successivo. Vedi [Paginazione a cursore](#cursor-pagination). |
| `source`    | Source   | Il tipo di integrazione (es. `whatsapp`)                                            |
| `tags`      | string[] | I tag corrispondenti, separati da virgole (es. `sales,lead`). I tag sono _case-insensitive_. |
| `team_uuid`           | string   | L'uuid del team.                                                          |
| `include_field_types` | boolean  | Quando è `true`, la risposta include `customFieldsMetadata` con valore, tipo e opzioni per ogni campo personalizzato. |

### Paginazione a cursore {#cursor-pagination}

La paginazione a pagine si ferma alla pagina 500 (10.000 contatti): le richieste oltre questo limite restituiscono un errore `400 Bad Request` con il messaggio `Pagination limit exceeded`. Per scorrere l'elenco completo dei contatti, usa la paginazione a cursore:

1. Fai una richiesta come al solito: ogni risposta include un token opaco in `meta.next`.
2. Rimanda il token tramite il parametro `after` per ottenere il gruppo di contatti successivo.
3. Continua a seguire `meta.next` finché non vale `null`: quello segna l'ultimo gruppo.

```bash
curl -X GET "https://api.callbell.eu/v1/contacts?after=eyJ0cyI6MTc1NDM4NDQwMDAwMCwiaWQiOjEyMzQ1fQ" \
    -H "Authorization: Bearer test_gshuPaZoeEG6ovbc8M79w0QyM" \
    -H "Content-Type: application/json"
```

Alcune cose da tenere a mente:

- Tratta il token come opaco e rimandalo senza modificarlo. Un token malformato restituisce un errore `400 Bad Request` con il messaggio `Invalid pagination cursor`.
- Il parametro `page` viene ignorato quando `after` è presente.
- I filtri (`source`, `tags`, `team_uuid`) non sono codificati nel token: invia gli stessi filtri insieme ad `after` in ogni richiesta.
- I contatti vengono restituiti nello stesso ordine delle richieste a pagine (conversazione più recente per prima). I contatti creati dopo l'inizio dello scorrimento non sono inclusi.

### Esempio di richiesta

<RequestTabs endpoint='contacts_api' request="get_contacts"/>

### Risposta

| Parametro  | Tipo                                              | Descrizione              |
| :--------- | :------------------------------------------------ | :----------------------- |
| `contacts` | [Contatto[]](/api/reference/object_types/contact) | Un elenco di contatti.   |
| `meta`     | object                                            | Metadati di paginazione: `page` e `pages` per le richieste a pagine, più `next`, il cursore che punta al gruppo successivo (`null` nell'ultimo gruppo). |

### Esempio di risposta

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

### Esempio di risposta (con `include_field_types=true`)

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
