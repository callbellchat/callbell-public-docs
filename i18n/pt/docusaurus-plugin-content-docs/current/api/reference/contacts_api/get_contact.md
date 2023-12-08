---
title: OBTENHA /contatos/:uuid
sidebar_position: 3
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /contato/:uuid

Obtenha um contato específico dado um `uuid`.

### Parâmetros obrigatórios

| Parâmetro | Tipo   | Descrição               |
| :-------- | :----- | :---------------------- |
| `uuid`    | string | O uuid do contato       |

### Exemplo de solicitação

<RequestTabs endpoint='contacts_api' request="get_contact"/>

### Resposta

| Parâmetro | Tipo                                                   | Descrição                                  |
| :-------- | :----------------------------------------------------- | :----------------------------------------- |
| `contact` | [Contato](/api/reference/object_types/contact)         | O objeto que representa o contato           |

### Exemplo de resposta

```json title=response.json
{
  "contact": [
    {
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
        "Billing Address": "Oxford Street 123",
        "VAT": "ABC123DCE456"
      }
    }
  ]
}
```