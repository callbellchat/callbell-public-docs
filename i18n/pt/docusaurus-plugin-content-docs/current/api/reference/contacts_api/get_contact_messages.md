---
title: GET /contacts/:uuid/messages
sidebar_position: 3
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /contacts/:uuid/messages

Listar todas as mensagens pertencentes ao contato. Os resultados são paginados e ordenados por `createdAt` em ordem decrescente.

### Parâmetros opcionais

| Parâmetro | Tipo    | Descrição                                                            |
| :-------- | :------ | :------------------------------------------------------------------- |
| `page`    | Integer | A página das mensagens. Se não especificado, será padrão para página 1. |

### Exemplo de Requisição

<RequestTabs endpoint='contacts_api' request="get_contact_messages"/>

### Resposta

| Parâmetro  | Tipo                                                    | Descrição           |
| :--------- | :------------------------------------------------------ | :------------------ |
| `messages` | [Mensagens[]](/api/reference/object_types/message)       | Uma lista de mensagens. |

### Exemplo de Resposta

```json title=response.json
{
  "messages": [
    {
      "text": "Olá, como posso ajudar?",
      "createdAt": "2023-12-12T10:56:36Z",
      "uuid": "cf839626ac7949879b88bcffd41d34fe",
      "status": "enviado",
      "channel": "whatsapp",
      "from": "391234567890",
      "to": "390987654321"
    },
    {
      "text": "A conversa foi atribuída a John Doe",
      "createdAt": "2023-12-12T10:56:35Z",
      "status": "nota",
      "channel": "whatsapp",
      "from": "390987654321",
      "to": "390987654321"
    },
    {
      "text": "Olá 👋",
      "createdAt": "2023-12-12T10:53:32Z",
      "status": "recebido",
      "channel": "whatsapp",
      "from": "390987654321",
      "to": "391234567890"
    }
  ]
}
```