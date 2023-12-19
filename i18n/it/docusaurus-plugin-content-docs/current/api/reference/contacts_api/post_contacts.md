---
title: POST /contatti
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# POST /contatti

Crea un nuovo contatto.

### Parametri obbligatori

| Parametro    | Tipo   | Descrizione                                                    |
| :----------- | :----- | :------------------------------------------------------------- |
| `identificativo` | String | L'identificativo del contatto (ad esempio il numero di telefono in WhatsApp) |
| `origine`     | Origine | L'origine del contatto (ad esempio `whatsapp`)                   |
| `nome`       | String | Il nome del contatto                                       |

### Parametri opzionali

| Parametro       | Tipo     | Descrizione                                                                    |
| :-------------- | :------- | :----------------------------------------------------------------------------- |
| `tag`          | Array di Stringhe | Una lista di valori separati da virgola (es. `['Richiamare', 'Interessato']`)           |
| `campi_personalizzati` | Oggetto {} | Un oggetto con i campi personalizzati (es. `{'Indirizzo fatturazione': 'Via Principale 1'}`) |
| `utente_assegnato` | Stringa   | Email dell'utente a cui si desidera assegnare un contatto                         |
| `team_uuid`     | Stringa   | UUID del team a cui si desidera assegnare un contatto                          |

:::caution
Quando si passano i `campi_personalizzati` o i `tag`, assicurarsi che esistano nel proprio account. Vedere [tag](https://dash.callbell.eu/settings/tags) e [campi_personalizzati](https://dash.callbell.eu/settings/custom_fields) nelle impostazioni.

Lo stesso vale per `utente_assegnato` e `team_uuid`: devono esistere nel proprio account.
:::

### Esempio di richiesta

<RequestTabs endpoint='contacts_api' request="post_contacts"/>

### Risposta

| Parametro | Tipo                                           | Descrizione                     |
| :-------- | :--------------------------------------------- | :------------------------------ |
| `contatto` | [Contatto](/api/reference/object_types/contact) | Il contatto appena creato. |

### Esempio di risposta

```json title=response.json
{
  "contatto": [
    {
      "uuid": "414a6d692bd645ed803f2e7ce360d4c8",
      "nome": "Mario Rossi",
      "numeroTelefono": "123456789",
      "avatarUrl": null,
      "createdAt": "2020-11-13T21:08:53Z",
      "origine": "whatsapp",
      "href": "https://dash.callbell.eu/contacts/414a6d692bd645ed803f2e7ce360d4c8",
      "tag": [],
      "utenteAssegnato": null,
      "campiPersonalizzati": {}
    }
  ]
}
```