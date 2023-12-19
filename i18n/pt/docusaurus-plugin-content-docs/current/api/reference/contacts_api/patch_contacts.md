---
title: PATCH /contacts/:uuid
sidebar_position: 5
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# PATCH /contacts/:uuid

Atualiza um contato existente.

### Parâmetros obrigatórios

| Parâmetro | Tipo   | Descrição                                                    |
| :-------- | :----- | :----------------------------------------------------------- |
| `uuid`    | string | O identificador do contato (por exemplo, número de telefone no WhatsApp) |

### Parâmetros opcionais

### Parâmetros opcionais

| Parâmetro       | Tipo     | Descrição                                                                        |
| :-------------- | :------- | :------------------------------------------------------------------------------- |
| `tags`          | string[] | Uma lista de valores separados por vírgula (por exemplo `['Call back', 'Interested']`) |
| `custom_fields` | string{} | Um objeto com campos personalizados (por exemplo, `{'Endereço de cobrança': 'Rua Principal 1}`) |
| `name`          | string   | O nome do contato                                                               |
| `assigned_user` | String   | Email do colaborador que deseja atribuir a um contato                              |
| `unassign_user` | Boolean  | `true` se você deseja remover o colaborador atribuído de um contato                |
| `team_uuid`     | String   | UUID da equipe que você deseja atribuir a um contato                              |

:::caution
Verifique se `custom_fields` e `tags` já existem em sua conta antes de passá-los. Visite [tags](https://dash.callbell.eu/settings/tags) e [custom_fields](https://dash.callbell.eu/settings/custom_fields) em suas configurações para obter mais informações.

Da mesma forma, para `assigned_user` e `team_uuid`, use um endereço de e-mail válido associado a um usuário em sua conta ou faça referência a uma equipe existente.
:::

### Exemplo de requisição

<RequestTabs endpoint='contacts_api' request="patch_contacts"/>

### Resposta

| Parâmetro | Tipo                                           | Descrição                              |
| :-------- | :--------------------------------------------- | :------------------------------------- |
| `contact` | [Contact](/api/reference/object_types/contact) | O contato que foi atualizado. |

### Exemplo de resposta

```json title=response.json
{
  "contact": [
    {
      "uuid": "414a6d692bd645ed803f2e7ce360d4c8",
      "name": "UPDATE Doe",
      "phoneNumber": "123456789",
      "avatarUrl": null,
      "createdAt": "2020-11-13T21:08:53Z",
      "source": "whatsapp",
      "href": "https://dash.callbell.eu/contacts/414a6d692bd645ed803f2e7ce360d4c8",
      "tags": [],
      "assignedUser": "jane.doe@email.com",
      "customFields": {}
    }
  ]
}
```