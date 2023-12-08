---
title: GET /contacts
sidebar_position: 2
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /contacts

Listar todos os contatos pertencentes à conta. Um filtro pode ser especificado para obter resultados mais específicos.

### Parâmetros opcionais

| Parâmetro | Tipo     | Descrição                                                                        |
| :-------- | :------- | :--------------------------------------------------------------------------------- |
| `page`    | Integer  | A página de contatos. Se não especificado, será padrão para a página 1.                  |
| `source`  | Source   | O tipo de integração (por exemplo, `whatsapp`).                                             |
| `tags`    | string[] | As tags correspondentes, separadas por vírgula (por exemplo, `sales,lead`). As tags são _case-insentive_. |

### Exemplo de requisição

<RequestTabs endpoint='contacts_api' request="get_contacts"/>

### Resposta

| Parâmetro  | Tipo                                             | Descrição         |
| :--------- | :----------------------------------------------- | :------------------ |
| `contacts` | [Contact[]](/api/reference/object_types/contact) | Uma lista de contatos. |

### Exemplo de resposta

```json title=response.json
{
  "contacts": [
    {
      "uuid": "414a6d692bd645ed803f2e7ce360d4c8",
      "name": "John Doe",
      "phoneNumber": "+123 456 789",
      "avatarUrl": null,
      "createdAt": "2020-11-13T21:08:53Z",
      "source": "whatsapp",
      "href": "https://dash.callbell.eu/contacts/414a6d692bd645ed803f2e7ce360d4c8",
      "assignedUser": "john.doe@email.com",
      "tags": [
        "sales",
        "lead"
      ],
      "customFields":{
        "Stripe link": "https://stripe.com/contacts/cus1234567",
        "Billing Address": "3 Abbey Rd, London"
      }
    },
    ...
    {
      "uuid": "ff8bec9363bc4c29b8b044eabf2afebd",
      "name": "Mario Rossi",
      "phoneNumber": "+33 11 22 33 44",
      "avatarUrl": null,
      "createdAt": "2021-02-24T20:33:06Z",
      "source": "whatsapp",
      "href": "https://dash.callbell.eu/contacts/ff8bec9363bc4c29b8b044eabf2afebd",
      "assignedUser": null,
      "tags": [
        "sales",
        "lead",
        "hot"
      ],
      "customFields":{
        "Stripe link": "https://stripe.com/contacts/cus124124153"
      }
    }
  ]
}
```