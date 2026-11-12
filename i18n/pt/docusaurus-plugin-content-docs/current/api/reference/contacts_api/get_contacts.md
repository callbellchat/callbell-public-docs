---
title: GET /contacts
sidebar_position: 2
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /contacts

Lista os contatos pertencentes à conta. Por padrão, os contatos são ordenados pela data de criação da conversa, do mais recente para o mais antigo. Os parâmetros opcionais abaixo filtram a lista por atividade da conversa, origem, tags ou equipe, e podem alterar a ordem.

### Parâmetros opcionais

| Parâmetro   | Tipo     | Descrição                                                                          |
| :---------- | :------- | :--------------------------------------------------------------------------------- |
| `page`      | Integer  | A página de contatos. Se não for especificada, o padrão é a página 1. Páginas além da 500 não estão disponíveis — use a [paginação por cursor](#cursor-pagination). |
| `after`     | string   | Cursor opaco obtido do `meta.next` de uma resposta anterior. Retorna o lote de contatos seguinte. Veja [Paginação por cursor](#cursor-pagination). |
| `source`    | Source   | O tipo de integração (ex.: `whatsapp`)                                              |
| `tags`      | string[] | As tags correspondentes, separadas por vírgulas (ex.: `sales,lead`). As tags são _case-insensitive_. |
| `team_uuid`           | string   | O uuid da equipe.                                                         |
| `conversation_state`  | string   | `open` ou `closed`. Retorna apenas os contatos cuja conversa está nesse estado. |
| `last_message_from`   | string   | `contact` retorna os contatos que enviaram a última mensagem da conversa, o que geralmente significa que estão aguardando uma resposta. `business` retorna os contatos cuja última mensagem foi enviada pela sua conta (um membro da equipe, um bot, uma transmissão ou a API). |
| `last_inbound_message_after`  | string | Uma data e hora ISO 8601, por exemplo `2026-11-12T08:00:00Z`. Retorna os contatos cuja mensagem mais recente enviada para você foi recebida nesse horário ou depois. Uma data sem hora (`2026-11-12`) significa meia-noite UTC. Mensagens enviadas pela sua conta não contam. |
| `last_inbound_message_before` | string | Uma data e hora ISO 8601. Retorna os contatos cuja mensagem mais recente enviada para você foi recebida nesse horário ou antes. Contatos que nunca enviaram uma mensagem são excluídos sempre que `last_inbound_message_after` ou `last_inbound_message_before` estiver definido. |
| `assigned_user`       | string   | O e-mail de um membro da equipe, para retornar apenas as conversas atribuídas a essa pessoa, ou `unassigned`, para retornar apenas as conversas sem nenhum membro da equipe atribuído. |
| `order`               | string   | `created_at` (padrão) ordena pela data de criação da conversa. `last_inbound_message_at` ordena pelo horário da mensagem mais recente recebida do contato; contatos que nunca enviaram uma mensagem ficam por último. As duas ordens vão do mais recente para o mais antigo. |
| `include_field_types` | boolean  | Quando `true`, a resposta inclui `customFieldsMetadata` com o valor, tipo e opções de cada campo personalizado. |

### Filtrar por atividade da conversa {#filtering-by-conversation-activity}

Os filtros de conversa podem ser combinados entre si e com `source`, `tags` e `team_uuid`. Por exemplo, esta requisição lista as conversas abertas cuja última mensagem veio do contato, começando pelo contato que escreveu mais recentemente:

```bash
curl -X GET "https://api.callbell.eu/v1/contacts?conversation_state=open&last_message_from=contact&order=last_inbound_message_at" \
    -H "Authorization: Bearer test_gshuPaZoeEG6ovbc8M79w0QyM" \
    -H "Content-Type: application/json"
```

Para listar quem escreveu para você desde as 8:00 UTC de hoje e não está atribuído a ninguém, use `last_inbound_message_after=2026-11-12T08:00:00Z&assigned_user=unassigned`.

Os parâmetros `last_inbound_message_*` e a ordem `last_inbound_message_at` consideram apenas as mensagens recebidas do contato. Uma resposta da sua equipe não os altera.

Um valor não suportado retorna um erro `400 Bad Request` que indica cada parâmetro inválido:

```json title=response.json
{
  "error": {
    "conversation_state": ["must be one of: open, closed"],
    "assigned_user": ["must be the email of a user inside the account, or unassigned"]
  }
}
```

### Paginação por cursor {#cursor-pagination}

A paginação por páginas para na página 500 (10.000 contatos): requisições além desse limite retornam um erro `400 Bad Request` com a mensagem `Pagination limit exceeded`. Para percorrer a lista completa de contatos, use a paginação por cursor:

1. Faça uma requisição normalmente: cada resposta inclui um token opaco em `meta.next`.
2. Envie o token de volta pelo parâmetro `after` para obter o próximo lote de contatos.
3. Continue seguindo `meta.next` até que ele seja `null` — isso marca o último lote.

```bash
curl -X GET "https://api.callbell.eu/v1/contacts?after=eyJ0cyI6MTc1NDM4NDQwMDAwMCwiaWQiOjEyMzQ1fQ" \
    -H "Authorization: Bearer test_gshuPaZoeEG6ovbc8M79w0QyM" \
    -H "Content-Type: application/json"
```

Alguns pontos importantes:

- Trate o token como opaco e envie-o de volta sem alterações. Um token malformado retorna um erro `400 Bad Request` com a mensagem `Invalid pagination cursor`.
- O parâmetro `page` é ignorado quando `after` está presente.
- Os filtros e a ordem não são codificados no token: envie os mesmos filtros e o mesmo `order` junto com `after` em cada requisição.
- Os contatos são retornados na mesma ordem das requisições por páginas. Contatos criados após o início do percurso não são incluídos. Com `order=last_inbound_message_at`, um contato que escreve para você durante o percurso passa para o topo da lista, então o percurso pode pular esse contato ou retorná-lo duas vezes.

### Exemplo de requisição

<RequestTabs endpoint='contacts_api' request="get_contacts"/>

### Resposta

| Parâmetro  | Tipo                                             | Descrição               |
| :--------- | :----------------------------------------------- | :---------------------- |
| `contacts` | [Contato[]](/api/reference/object_types/contact) | Uma lista de contatos.  |
| `meta`     | object                                           | Metadados de paginação: `page` e `pages` para requisições por páginas, além de `next`, o cursor que aponta para o próximo lote (`null` no último lote). |

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
      "conversationHref": "https://dash.callbell.eu/chat/f3670b13446b412796238b1cd78899f9",
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
      "conversationHref": "https://dash.callbell.eu/chat/f3670b13446b412796238b1cd78899f9",
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
  ],
  "meta": {
    "page": 1,
    "pages": 42,
    "next": "eyJ0cyI6MTc1NDM4NDQwMDAwMCwiaWQiOjEyMzQ1fQ"
  }
}
```

### Exemplo de resposta (com `include_field_types=true`)

```json title=response.json
{
  "contacts": [
    {
      "uuid": "414a6d692bd645ed803f2e7ce360d4c8",
      "name": "John Doe",
      "customFields": {
        "Address": "Oxford Street 123",
        "Join Date": "2024-01-15",
        "Preferences": "[\"Newsletter\", \"Promotions\"]"
      },
      "customFieldsMetadata": {
        "Address": { "value": "Oxford Street 123", "type": "text" },
        "Join Date": { "value": "2024-01-15", "type": "date" },
        "Preferences": { "value": ["Newsletter", "Promotions"], "type": "checkbox", "options": ["Newsletter", "Promotions", "Updates"] }
      }
    }
  ]
}
```
