---
title: POST /contacts/:uuid/conversation/close
sidebar_position: 7
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# POST /contacts/:uuid/conversation/close

Feche a conversa associada ao contato. `closedAt` será definido com a data UTC atual.

### Exemplo de Solicitação

<RequestTabs endpoint='contacts_api' request="post_contact_conversation_close"/>

### Resposta

| Parâmetro | Tipo                                           | Descrição                     |
| :-------- | :--------------------------------------------- | :---------------------------- |
| `contact` | [Contato](/api/reference/object_types/contact) | O contato que foi atualizado. |

### Exemplo de Resposta

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
      "closedAt": "2020-11-13T21:08:53Z",
      "href": "https://dash.callbell.eu/contacts/414a6d692bd645ed803f2e7ce360d4c8",
      "tags": [],
      "assignedUser": null,
      "customFields": {}
    }
  ]
}
```