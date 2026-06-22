---
title: GET /contacts/bsuid/:bsuid
sidebar_position: 5
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /contacts/bsuid/:bsuid

Obtenha um contato específico dado um `bsuid` (ID de usuário do Business Suite). Isso é útil para buscar contatos que podem não ter um número de telefone associado (por exemplo, usuários do WhatsApp com privacidade de nome de usuário).

### Parâmetros obrigatórios

| Parâmetro | Tipo   | Descrição                                    |
| :-------- | :----- | :------------------------------------------- |
| `bsuid`   | string | O ID de usuário do Business Suite do contato |

### Exemplo de requisição

<RequestTabs endpoint='contacts_api' request="get_contact_by_bsuid"/>

### Resposta

| Parâmetro | Tipo                                           | Descrição                          |
| :-------- | :--------------------------------------------- | :--------------------------------- |
| `contact` | [Contato](/api/reference/object_types/contact) | O objeto que representa o contato. |

### Exemplo de resposta

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
    "conversationHref": "https://dash.callbell.eu/chat/f3670b13446b412796238b1cd78899f9",
    "tags": ["sales", "lead"],
    "assignedUser": null,
    "customFields": {
      "Address": "Oxford Street 123"
    },
    "bsuid": "bsuid_abc123"
  }
}
```