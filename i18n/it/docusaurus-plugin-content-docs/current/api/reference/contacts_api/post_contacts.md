---
title: POST /contacts
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# POST /contacts

Crea un nuovo contatto.

### Parametri Obbligatori

| Parametro    | Tipo   | Descrizione                                                                |
| :----------- | :----- | :------------------------------------------------------------------------- |
| `identifier` | String | L'identificatore del contatto (ad esempio, numero di telefono su WhatsApp) |
| `source`     | Source | La fonte del contatto (ad esempio, `whatsapp`)                             |
| `name`       | String | Il nome del contatto                                                       |

### Parametri Opzionali

| Parametro       | Tipo     | Descrizione                                                                                            |
| :-------------- | :------- | :----------------------------------------------------------------------------------------------------- |
| `tags`          | String[] | Un elenco di valori separati da virgola (ad esempio `['Richiamare', 'Interessato']`)                   |
| `custom_fields` | String{} | Un oggetto con i campi personalizzati (ad esempio `{'Indirizzo di fatturazione': 'Via Principale 1'}`) |
| `assigned_user` | String   | L'email dell'utente che si desidera assegnare a un contatto                                            |

:::caution
Quando si passano `custom_fields` o `tags` assicurarsi che esistano nel proprio account. Vedi [tags](https://dash.callbell.eu/settings/tags) e [custom_fields](https://dash.callbell.eu/settings/custom_fields) nelle impostazioni.
Stessa cosa per `assigned_user`, deve essere una email valida di un utente nel proprio account.
:::

### Esempio Richiesta

<RequestTabs endpoint='contacts_api' request="post_contacts"/>

### Risposta

| Parametro | Tipo                                            | Descrizione         |
| :-------- | :---------------------------------------------- | :------------------ |
| `contact` | [Contatto](/api/reference/object_types/contact) | Il contatto creato. |

### Esempio Risposta

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