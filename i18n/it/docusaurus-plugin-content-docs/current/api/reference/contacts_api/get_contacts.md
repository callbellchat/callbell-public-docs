---
title: GET /contacts
sidebar_position: 2
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /contacts

Elenca i contatti appartenenti all'account. Per impostazione predefinita, i contatti sono ordinati per data di creazione della loro conversazione, dal più recente al meno recente. I parametri opzionali qui sotto filtrano l'elenco per attività della conversazione, sorgente, tag o team, e possono cambiare l'ordinamento.

### Parametri opzionali

| Parametro   | Tipo     | Descrizione                                                                        |
| :---------- | :------- | :--------------------------------------------------------------------------------- |
| `page`      | Integer  | La pagina di contatti. Se non specificata, il valore predefinito è la pagina 1. Le pagine oltre la 500 non sono disponibili — usa invece la [paginazione a cursore](#cursor-pagination). |
| `after`     | string   | Cursore opaco preso da `meta.next` di una risposta precedente. Restituisce il gruppo di contatti successivo. Vedi [Paginazione a cursore](#cursor-pagination). |
| `source`    | Source   | Il tipo di integrazione (es. `whatsapp`)                                            |
| `tags`      | string[] | I tag corrispondenti, separati da virgole (es. `sales,lead`). I tag sono _case-insensitive_. |
| `team_uuid`           | string   | L'uuid del team.                                                          |
| `conversation_state`  | string   | `open` o `closed`. Restituisce solo i contatti la cui conversazione si trova in quello stato. |
| `last_message_from`   | string   | `contact` restituisce i contatti che hanno inviato l'ultimo messaggio della loro conversazione, il che di solito significa che stanno aspettando una risposta. `business` restituisce i contatti il cui ultimo messaggio è stato inviato dal tuo account (un membro del team, un bot, un broadcast o l'API). |
| `last_inbound_message_after`  | string | Una data e ora ISO 8601, per esempio `2026-11-12T08:00:00Z`. Restituisce i contatti il cui messaggio più recente inviato a te è stato ricevuto in quel momento o dopo. Una data senza ora (`2026-11-12`) indica la mezzanotte UTC. I messaggi inviati dal tuo account non contano. |
| `last_inbound_message_before` | string | Una data e ora ISO 8601. Restituisce i contatti il cui messaggio più recente inviato a te è stato ricevuto in quel momento o prima. I contatti che non hanno mai inviato un messaggio vengono esclusi ogni volta che è impostato `last_inbound_message_after` o `last_inbound_message_before`. |
| `assigned_user`       | string   | L'indirizzo email di un membro del team, per restituire solo le conversazioni assegnate a quella persona, oppure `unassigned`, per restituire solo le conversazioni senza alcun membro del team assegnato. |
| `order`               | string   | `created_at` (predefinito) ordina per data di creazione della conversazione. `last_inbound_message_at` ordina per ora del messaggio più recente ricevuto dal contatto; i contatti che non hanno mai inviato un messaggio vengono per ultimi. Entrambi gli ordinamenti vanno dal più recente al meno recente. |
| `include_field_types` | boolean  | Quando è `true`, la risposta include `customFieldsMetadata` con valore, tipo e opzioni per ogni campo personalizzato. |

### Filtrare per attività della conversazione {#filtering-by-conversation-activity}

I filtri sulla conversazione possono essere combinati tra loro e con `source`, `tags` e `team_uuid`. Per esempio, questa richiesta elenca le conversazioni aperte il cui ultimo messaggio proviene dal contatto, a partire dal contatto che ha scritto più di recente:

```bash
curl -X GET "https://api.callbell.eu/v1/contacts?conversation_state=open&last_message_from=contact&order=last_inbound_message_at" \
    -H "Authorization: Bearer test_gshuPaZoeEG6ovbc8M79w0QyM" \
    -H "Content-Type: application/json"
```

Per elencare chi ti ha scritto dalle 8:00 UTC di oggi e non è assegnato a nessuno, usa `last_inbound_message_after=2026-11-12T08:00:00Z&assigned_user=unassigned`.

I parametri `last_inbound_message_*` e l'ordinamento `last_inbound_message_at` considerano solo i messaggi ricevuti dal contatto. Una risposta del tuo team non li modifica.

Un valore non supportato restituisce un errore `400 Bad Request` che indica ogni parametro non valido:

```json title=response.json
{
  "error": {
    "conversation_state": ["must be one of: open, closed"],
    "assigned_user": ["must be the email of a user inside the account, or unassigned"]
  }
}
```

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
- I filtri e l'ordinamento non sono codificati nel token: invia gli stessi filtri e lo stesso `order` insieme ad `after` in ogni richiesta.
- I contatti vengono restituiti nello stesso ordine delle richieste a pagine. I contatti creati dopo l'inizio dello scorrimento non sono inclusi. Con `order=last_inbound_message_at`, un contatto che ti scrive durante lo scorrimento passa in cima all'elenco, quindi lo scorrimento può saltare quel contatto o restituirlo due volte.

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
