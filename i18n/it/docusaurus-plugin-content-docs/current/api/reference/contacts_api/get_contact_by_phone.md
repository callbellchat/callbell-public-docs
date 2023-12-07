---
titolo: GET /contatti/telefono/:numero
sidebar_position: 4
---

import RequestTabs from"@site/src/components/Requests/RequestTabs"

# GET /contatti/telefono/:numero

Ottiene un contatto specifico dato un `numero_di_telefono`.

### Parametri richiesti

| Parametro      | Tipo    | Descrizione                        |
| :------------- | :------ | :--------------------------------- |
| `phone_number` | stringa | Il numero di telefono del contatto |

### Esempio di richiesta

<RequestTabs endpoint='contacts_api' request="get_contact_by_phone"/>

### Risposta

| Parametro | Tipo                                           | Descrizione                            |
| :-------- | :--------------------------------------------- | :------------------------------------- |
| `contact` | [Contact](/api/reference/object_types/contact) | L'oggetto che rappresenta il contatto. |

### Esempio di risposta

```json title=response.json
{
  "contact": {
    "uuid": "414a6d692bd645ed803f2e7ce360d4c8",
    "name": "John Doe",
    "phoneNumber": "+123 456 789",
    "avatarUrl": null,
    "createdAt": "2020-11-13T21:08:53Z",
    "source": "whatsapp",
    "href": "https://dash.callbell.eu/contacts/414a6d692bd645ed803f2e7ce360d4c8",
    "tags": ["sales", "lead"],
    "assignedUser": null,
    "customFields": {
      "Address": "Oxford Street 123",
      "Indirizzo di fatturazione": "Oxford Street 123",
      "IVA": "ABC123DCE456"
    }
  }
}
```
