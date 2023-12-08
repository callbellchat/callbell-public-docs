---
title: PATCH /contacts/:uuid
sidebar_position: 5
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# ATUALIZAÇÃO /contatos/:uuid

Atualiza um contato existente.

### Parâmetros Obrigatórios

| Parâmetro | Tipo   | Descrição                                                     |
| :-------- | :----- | :------------------------------------------------------------ |
| `uuid`    | string | O identificador do contato (por exemplo, número de telefone no WhatsApp) |

### Parâmetros Opcionais

### Parâmetros Opcionais

| Parâmetro       | Tipo     | Descrição                                                                   |
| :-------------- | :------- | :---------------------------------------------------------------------------- |
| `tags`          | string[] | Uma lista de valores separados por vírgula (por exemplo, `['Retorno', 'Interessado']`) |
| `custom_fields` | string{} | Um objeto com os campos personalizados (por exemplo, `{'Endereço de cobrança': 'Rua Principal 1'}`) |
| `name`          | string   | O nome do contato                                                       |
| `assigned_user` | String   | Email do colaborador que deseja atribuir a um contato            |
| `unassign_user` | Boolean  | `true` se você deseja remover o colaborador atribuído de um contato         |

:::caution
Certifique-se de que `custom_fields` e `tags` já existam em sua conta antes de passá-los. Visite [tags](https://dash.callbell.eu/settings/tags) e [custom_fields](https://dash.callbell.eu/settings/custom_fields) em suas configurações para obter mais informações.

Da mesma forma, para `assigned_user`, use um endereço de e-mail válido associado a um usuário em sua conta.
:::

### Exemplo de Solicitação

<RequestTabs endpoint='contacts_api' request="patch_contacts"/>

### Resposta

| Parâmetro | Tipo                                           | Descrição                         |
| :-------- | :--------------------------------------------- | :---------------------------------- |
| `contact` | [Contact](/api/reference/object_types/contact) | O contato que foi atualizado. |

### Exemplo de Resposta

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
      "assignedUser": "user_email@example.com",
      "customFields": {}
    }
  ]
}
```