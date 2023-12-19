---
title: POST /contacts
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# POST /contacts

Cria um novo contato.

### Parâmetros obrigatórios

| Parâmetro    | Tipo   | Descrição                                                                      |
| :----------- | :----- | :----------------------------------------------------------------------------- |
| `identifier` | String | O identificador do contato (por exemplo, número de telefone no WhatsApp)        |
| `source`     | Source | A origem do contato (por exemplo, `whatsapp`)                                   |
| `name`       | String | O nome do contato                                                              |

### Parâmetros opcionais

| Parâmetro       | Tipo     | Descrição                                                                         |
| :-------------- | :------- | :-------------------------------------------------------------------------------- |
| `tags`          | String[] | Uma lista de valores separados por vírgula (por exemplo, `['Call back', 'Interessado']`) |
| `custom_fields` | String{} | Um objeto com os campos personalizados (por exemplo, `{'Endereço de Cobrança': 'Rua Principal 1'}`) |
| `assigned_user` | String   | Email do usuário que você deseja atribuir a um contato                            |
| `team_uuid`     | String   | UUID da equipe que você deseja atribuir a um contato                             |

:::caution
Ao passar `custom_fields` ou `tags`, verifique se eles existem em sua conta. Veja [tags](https://dash.callbell.eu/settings/tags) e [custom_fields](https://dash.callbell.eu/settings/custom_fields) em suas configurações.

O mesmo se aplica a `assigned_user` e `team_uuid`: eles também precisam existir em sua conta.
:::

### Exemplo de requisição

<RequestTabs endpoint='contacts_api' request="post_contacts"/>

### Resposta

| Parâmetro | Tipo                                           | Descrição                            |
| :-------- | :--------------------------------------------- | :----------------------------------- |
| `contact` | [Contato](/api/reference/object_types/contact) | O contato que foi criado. |

### Exemplo de resposta

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
      "href": "https://dash.callbell.eu/contacts/414a6d692bd645ed803f2e7ce360d4c8",
      "tags": [],
      "assignedUser": null,
      "customFields": {}
    }
  ]
}
```