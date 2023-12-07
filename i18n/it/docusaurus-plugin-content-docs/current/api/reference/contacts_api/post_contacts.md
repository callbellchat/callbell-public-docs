---
title: POST /contatti
sidebar_position: 4
---

import RequestTabs from"@site/src/components/Requests/RequestTabs"

# POST /contatti

Crea un nuovo contatto.

### Parametri richiesti

| Parametro        | Tipo    | Descrizione                                                                  |
| :--------------- | :------ | :--------------------------------------------------------------------------- |
| `identificatore` | Stringa | L'identificatore del contatto (ad esempio il numero di telefono in WhatsApp) |
| `source`         | Source  | La fonte del contatto (ad es. `whatsapp`)                                    |
| `name`           | Stringa | Il nome del contatto                                                         |

### Parametri opzionali

| Parametro       | Tipo     | Descrizione                                                                                          |
| :-------------- | :------- | :--------------------------------------------------------------------------------------------------- |
| `tags`          | String[] | Un elenco di valori separati da virgole (ad esempio `['Richiamato', 'Interessato']`)                 |
| `custom_fields` | String{} | Un oggetto con i campi personalizzati (ad esempio, `{'Indirizzo di fatturazione': 'Main Street 1'}`) |
| `assigned_user` | Stringa  | Email dell'utente che si vuole assegnare a un contatto                                               |

:::attenzione
Quando si passano `campi_personalizzati` o `tags`, assicurarsi che esistano nel proprio account. Vedere [tags](https://dash.callbell.eu/settings/tags) e [custom_fields](https://dash.callbell.eu/settings/custom_fields) nelle impostazioni.
Lo stesso vale per `assigned_user`, deve essere un'email valida di un utente del proprio account.
:::

### Esempio di richiesta

<RequestTabs endpoint='contacts_api' request="post_contacts" />

### Risposta

| Parametro | Tipo                                           | Descrizione                     |
| :-------- | :--------------------------------------------- | :------------------------------ |
| `contact` | [Contact](/api/reference/object_types/contact) | Il contatto che è stato creato. |

### Esempio di risposta

```json title=response.json
{
  "contatto": [
    {
      "uuid": "414a6d692bd645ed803f2e7ce360d4c8",
      "name": "John Doe",
      "phoneNumber": "123456789",
      "avatarUrl": null,
      "createdAt": "2020-11-13T21:08:53Z",
      "fonte": "whatsapp",
      "href": "https://dash.callbell.eu/contacts/414a6d692bd645ed803f2e7ce360d4c8",
      "tags": [],
      "assignedUser": null,
      "customFields": {}
    }
  ]
}
```
