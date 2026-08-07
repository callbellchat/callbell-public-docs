---
title: GET /contacts
sidebar_position: 2
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /contacts

Lista todos os contatos pertencentes à conta. Um filtro pode ser especificado para obter resultados mais específicos.

### Parâmetros opcionais

| Parâmetro   | Tipo     | Descrição                                                                          |
| :---------- | :------- | :--------------------------------------------------------------------------------- |
| `page`      | Integer  | A página de contatos. Se não for especificada, o padrão é a página 1. Páginas além da 500 não estão disponíveis — use a [paginação por cursor](#cursor-pagination). |
| `after`     | string   | Cursor opaco obtido do `meta.next` de uma resposta anterior. Retorna o lote de contatos seguinte. Veja [Paginação por cursor](#cursor-pagination). |
| `source`    | Source   | O tipo de integração (ex.: `whatsapp`)                                              |
| `tags`      | string[] | As tags correspondentes, separadas por vírgulas (ex.: `sales,lead`). As tags são _case-insensitive_. |
| `team_uuid`           | string   | O uuid da equipe.                                                         |
| `include_field_types` | boolean  | Quando `true`, a resposta inclui `customFieldsMetadata` com o valor, tipo e opções de cada campo personalizado. |

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
- Os filtros (`source`, `tags`, `team_uuid`) não são codificados no token: envie os mesmos filtros junto com `after` em cada requisição.
- Os contatos são retornados na mesma ordem das requisições por páginas (conversa mais recente primeiro). Contatos criados após o início do percurso não são incluídos.

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
