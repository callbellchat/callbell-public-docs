---
title: GET /contacts/phone/:number
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /contacts/phone/:numero

Ottieni un contatto specifico dato un `numero_di_telefono`.

### Parametri richiesti

| Parametro            | Tipo   | Descrizione                        |
| :------------------- | :----- | :--------------------------------- |
| `numero_di_telefono` | string | Il numero di telefono del contatto |

### Esempio di richiesta

<RequestTabs endpoint='contacts_api' request="get_contact_by_phone"/>

### Risposta

| Parametro  | Tipo                                            | Descrizione                            |
| :--------- | :---------------------------------------------- | :------------------------------------- |
| `contatto` | [Contatto](/api/reference/object_types/contact) | L'oggetto che rappresenta il contatto. |

### Esempio di risposta

```json title=response.json
{
  "contatto": {
    "uuid": "414a6d692bd645ed803f2e7ce360d4c8",
    "nome": "Mario Rossi",
    "numeroDiTelefono": "+123 456 789",
    "urlAvatar": null,
    "creatoIl": "2020-11-13T21:08:53Z",
    "origine": "whatsapp",
    "href": "https://dash.callbell.eu/contacts/414a6d692bd645ed803f2e7ce360d4c8",
    "tag": ["vendite", "lead"],
    "utenteAssegnato": null,
    "campiPersonalizzati": {
      "Indirizzo": "Via Roma 123",
      "Indirizzo di fatturazione": "Via Roma 123",
      "Partita IVA": "ABC123DCE456"
    }
  }
}
```