---
title: PATCH /contacts/:uuid
sidebar_position: 5
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# PATCH /contacts/:uuid

Aggiorna un contatto esistente.

### Parametri richiesti

| Parametro | Tipo   | Descrizione                                                                   |
| :-------- | :----- | :---------------------------------------------------------------------------- |
| `uuid`    | string | L'identificatore del contatto (ad esempio, il numero di telefono in WhatsApp) |

### Parametri opzionali

### Parametri opzionali

| Parametro       | Tipo     | Descrizione                                                                                        |
| :-------------- | :------- | :------------------------------------------------------------------------------------------------- |
| `tags`          | string[] | Un elenco di valori separati da virgola (ad es. `['Richiamami', 'Interessato']`)                   |
| `custom_fields` | string{} | Un oggetto con i campi personalizzati (ad es., `{'Indirizzo di fatturazione': 'Via Principale 1}`) |
| `name`          | string   | Il nome del contatto                                                                               |
| `assigned_user` | String   | Email del collaboratore che si desidera assegnare a un contatto                                    |
| `unassign_user` | Boolean  | `true` se si desidera rimuovere il collaboratore assegnato da un contatto                          |

:::caution
Assicurarsi che `custom_fields` e `tags` esistano già nel proprio account prima di passarli. Visitare [tags](https://dash.callbell.eu/settings/tags) e [custom_fields](https://dash.callbell.eu/settings/custom_fields) nelle impostazioni per ulteriori informazioni.

Inoltre, per `assigned_user`, utilizzare un indirizzo email valido associato a un utente nel proprio account.
:::

### Esempio richiesta

<RequestTabs endpoint='contacts_api' request="patch_contacts"/>

### Risposta

| Parametro | Tipo                                           | Descrizione                         |
| :-------- | :--------------------------------------------- | :---------------------------------- |
| `contact` | [Contact](/api/reference/object_types/contact) | Il contatto che è stato aggiornato. |

### Esempio risposta

```json title=response.json
{
  "contact": [
    {
      "uuid": "414a6d692bd645ed803f2e7ce360d4c8",
      "name": "UPDATE Doe",
      "phoneNumber": "123456789",
      "avatarUrl": null,
      "createdAt": "2020-11-13T21:08:53Z",
      "source": "whatsapp",
      "href": "https://dash.callbell.eu/contacts/414a6d692bd645ed803f2e7ce360d4c8",
      "tags": [],
      "assignedUser": "jane.doe@email.com",
      "customFields": {}
    }
  ]
}
```