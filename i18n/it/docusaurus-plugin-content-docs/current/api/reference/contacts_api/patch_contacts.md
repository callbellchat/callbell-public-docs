---
title: PATCH /contacts/:uuid
sidebar_position: 5
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# PATCH /contacts/:uuid

Aggiorna un contatto esistente.

### Parametri richiesti

| Parametro | Tipo   | Descrizione                                                   |
| :-------- | :----- | :------------------------------------------------------------ |
| `uuid`    | string | L'identificatore del contatto (ad esempio, numero di telefono su WhatsApp) |

### Parametri opzionali

| Parametro       | Tipo     | Descrizione                                                                   |
| :-------------- | :------- | :---------------------------------------------------------------------------- |
| `tags`          | string[] | Una lista di valori separati da virgola (ad esempio, `['Richiama', 'Interessato']`) |
| `custom_fields` | string{} | Un oggetto con i campi personalizzati (ad esempio, `{'Indirizzo di fatturazione': 'Via principale 1'}`) |
| `name`          | string   | Il nome del contatto                                                       |
| `assigned_user` | String   | L'e-mail del collaboratore che desideri assegnare a un contatto            |
| `unassign_user` | Boolean  | `true` se si desidera rimuovere il collaboratore assegnato da un contatto         |
| `team_uuid`     | String   | UUID del team che si desidera assegnare a un contatto                         |

:::caution
Assicurarsi che `custom_fields` e `tags` esistano già nel proprio account prima di passarli. Visita [tags](https://dash.callbell.eu/settings/tags) e [custom_fields](https://dash.callbell.eu/settings/custom_fields) nelle impostazioni per ulteriori informazioni.

Analogamente, per `assigned_user` e `team_uuid`, utilizzare un indirizzo e-mail valido associato a un utente nel proprio account o fare riferimento a un team esistente.
:::

### Esempio di richiesta

<RequestTabs endpoint='contacts_api' request="patch_contacts"/>

### Risposta

| Parametro | Tipo                                           | Descrizione                         |
| :-------- | :--------------------------------------------- | :---------------------------------- |
| `contact` | [Contact](/api/reference/object_types/contact) | Il contatto che è stato aggiornato. |

### Esempio di risposta

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