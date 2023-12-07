---
titolo: PATCH /contatti/:uuid
posizione della barra laterale: 5
---

import RequestTabs from"@site/src/components/Requests/RequestTabs"

# PATCH /contatti/:uuid

Aggiorna un contatto esistente.

### Parametri richiesti

| Parametro | Tipo    | Descrizione                                                                  |
| :-------- | :------ | :--------------------------------------------------------------------------- |
| `uuid`    | stringa | L'identificativo del contatto (ad esempio il numero di telefono in WhatsApp) |

### Parametri opzionali

### Parametri opzionali

| Parametro       | Tipo     | Descrizione                                                                                         |
| :-------------- | :------- | :-------------------------------------------------------------------------------------------------- |
| `tags`          | string[] | Un elenco di valori separati da virgole (ad esempio `['Richiamato', 'Interessato']`)                |
| `custom_fields` | string{} | Un oggetto con i campi personalizzati (ad esempio, `{'Indirizzo di fatturazione': 'Main Street 1}`) |
| `nome`          | stringa  | Il nome del contatto                                                                                |
| `assigned_user` | Stringa  | Email del collaboratore che si vuole assegnare a un contatto                                        |
| `assegn_utente` | Booleano | `true` se si vuole rimuovere il collaboratore assegnato da un contatto                              |

:::attenzione
Assicurarsi che `custom_fields` e `tags` esistano già nel proprio account prima di passarli. Per ulteriori informazioni, visitare [tags](https://dash.callbell.eu/settings/tags) e [custom_fields](https://dash.callbell.eu/settings/custom_fields) nelle impostazioni.

Allo stesso modo, per `assigned_user`, utilizzare un indirizzo e-mail valido associato a un utente del proprio account.
:::

### Esempio di richiesta

<RequestTabs endpoint='contacts_api' request="patch_contacts" />

### Risposta

| Parametro | Tipo                                           | Descrizione                         |
| :-------- | :--------------------------------------------- | :---------------------------------- |
| `Contact` | [Contact](/api/reference/object_types/contact) | Il contatto che è stato aggiornato. |

### Esempio di risposta

```json title=response.json
{
  "contatto": [
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
