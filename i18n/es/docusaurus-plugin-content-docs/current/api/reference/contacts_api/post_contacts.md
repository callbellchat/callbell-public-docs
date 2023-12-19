---
title: POST /contacts
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# POST /contacts

Crea un nuovo contatto.

### Parametri obbligatori

| Parametro    | Tipo   | Descrizione                                                                  |
| :----------- | :----- | :--------------------------------------------------------------------------- |
| `identifier` | String | L'identificatore del contatto (ad esempio, il numero di telefono in WhatsApp) |
| `source`     | Source | La fonte del contatto (ad esempio, `whatsapp`)                                |
| `name`       | String | Il nome del contatto                                                        |

### Parametri opzionali

| Parametro       | Tipo     | Descrizione                                                                      |
| :-------------- | :------- | :------------------------------------------------------------------------------- |
| `tags`          | String[] | Una lista di valori separati da virgola (ad esempio, `['Call back', 'Interested']`) |
| `custom_fields` | String{} | Un oggetto con i campi personalizzati (ad esempio, `{'Indirizzo di fatturazione': 'Via Principale 1'}`) |
| `assigned_user` | String   | Email dell'utente a cui desideri assegnare un contatto                          |
| `team_uuid`     | String   | UUID del team che desideri assegnare a un contatto                              |

:::caution
Quando si passano `custom_fields` o `tags`, assicurarsi che esistano nel proprio account. Vedi [tags](https://dash.callbell.eu/settings/tags) e [custom_fields](https://dash.callbell.eu/settings/custom_fields) nelle impostazioni.

Lo stesso vale per `assigned_user` e `team_uuid`: devono esistere nel proprio account.
:::

### Esempio di richiesta

<RequestTabs endpoint='contacts_api' request="post_contacts"/>

### Risposta

| Parametro  | Tipo                                           | Descrizione                  |
| :--------- | :--------------------------------------------- | :--------------------------- |
| `contact`  | [Contact](/api/reference/object_types/contact) | Il contatto creato.          |

### Esempio di risposta

```json title=response.json
{
  "contact": [
    {
      "uuid": "414a6d692bd645ed803f2e7ce360d4c8",
      "name": "John Doe",
      "phoneNumber": "123456789",
      "avatarUrl": null,
      "createdAt": "2020-11-13T21:08:53Z",
      "source": "whatsapp",
      "href": "https://dash.callbell.eu/contacts/414a6d692bd645ed803f2e7ce360d4c8",
      "tags": [],
      "assignedUser": null,
      "customFields": {}
    }
  ]
}
```