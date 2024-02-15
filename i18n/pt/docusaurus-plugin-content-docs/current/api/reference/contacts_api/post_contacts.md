---
title: POST /contacts
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# POST /contacts

Cria um novo contato.

### Parâmetros obrigatórios

| Parâmetro    | Tipo   | Descrição                                                                                          
| :----------- | :----- | :--------------------------------------------------------------------------------------------------- 
| `identificador` | String | O identificador do contato (por exemplo, número de telefone no WhatsApp)                          |
| `fonte`     | Fonte | A fonte do contato (por exemplo, `whatsapp`)                                                       |
| `nome`       | String | O nome do contato                                                                                  |

### Parâmetros opcionais

| Parâmetro        | Tipo     | Descrição                                                                                                         |
| :-------------- | :------- | :---------------------------------------------------------------------------------------------------------------- 
| `tags`           | String[] | Uma lista de valores separados por vírgula (por exemplo, `['Retornar ligação', 'Interessado']`)                |
| `campos_personalizados` | String{} | Um objeto com os campos personalizados (por exemplo, `{'Endereço de cobrança': 'Rua Principal 1'}`)        |
| `usuario_designado` | String   | Email do usuário que você deseja atribuir a um contato                                                        |
| `equipe_uuid`     | String   | UUID da equipe que você deseja atribuir a um contato                                                           |
| `canal_uuid`  | String   | A mensagem será enviada deste canal (quando omitido, será usado o canal principal padrão)                      |

:::caution
Ao passar `campos_personalizados` ou `tags`, verifique se eles existem em sua conta. Veja [tags](https://dash.callbell.eu/settings/tags) e [campos_personalizados](https://dash.callbell.eu/settings/custom_fields) em suas configurações.

O mesmo se aplica para `usuario_designado` e `equipe_uuid`: eles precisam existir em sua conta.
:::

### Exemplo de Requisição

<RequestTabs endpoint='contacts_api' request="post_contacts"/>

### Resposta

| Parâmetro | Tipo                                                  | Descrição                    |
| :-------- | :----------------------------------------------------- | :----------------------------- 
| `contato` | [Contato](/api/reference/object_types/contact) | O contato que foi criado.

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
      "href": "https://dash.callbell.eu/contacts/414a6d692bd645ed803f2e7ce360d4c8",
      "tags": [],
      "assignedUser": null,
      "customFields": {}
    }
  ]
}
```