---
titolo: GET /contatti/:uuid
sidebar_position: 3
---

importare RequestTabs da "@site/src/components/Requests/RequestTabs"

# GET /contatto/:uuid

Ottiene un contatto specifico, dato un `uuid`.

### Parametri richiesti

| Parametro | Tipo | Descrizione |
| :-------- | :----- | :---------------------- |
| `uuid` | stringa | L'uuid del contatto |

### Esempio di richiesta

<RichiestaTabs endpoint='contacts_api' request="get_contact" />

### Risposta

| Parametro | Tipo | Descrizione |
| :-------- | :--------------------------------------------- | :----------------------------------- |
| `contatto` | [Contatto](/api/reference/object_types/contatto) | L'oggetto che rappresenta il contatto. |

### Esempio di risposta

```json title=response.json
{
  "contatto": [
    {
      "uuid": "414a6d692bd645ed803f2e7ce360d4c8",
      "nome": "John Doe",
      "numero di telefono": "+123 456 789",
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
  ]
}
```
