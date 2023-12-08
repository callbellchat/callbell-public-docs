pt

---
title: GET /contatos/telefone/:numero
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /contatos/telefone/:numero

Obtenha um contato específico dado um `numero_de_telefone`.

### Parâmetros Obrigatórios

| Parâmetro           | Tipo   | Descrição                       |
| :------------------ | :----- | :------------------------------ |
| `numero_de_telefone`| string | O número de telefone do contato |

### Exemplo de Requisição

<RequestTabs endpoint='contacts_api' request="get_contact_by_phone"/>

### Resposta

| Parâmetro  | Tipo                                                     | Descrição                                |
| :--------- | :------------------------------------------------------- | :--------------------------------------- |
| `contato`  | [Contato](/api/reference/object_types/contact)            | O objeto que representa o contato.       |

### Exemplo de Resposta

```json title=response.json
{
  "contato": {
    "uuid": "414a6d692bd645ed803f2e7ce360d4c8",
    "nome": "John Doe",
    "numeroDeTelefone": "+123 456 789",
    "urlFoto": null,
    "criadoEm": "2020-11-13T21:08:53Z",
    "origem": "whatsapp",
    "href": "https://dash.callbell.eu/contatos/414a6d692bd645ed803f2e7ce360d4c8",
    "tags": ["vendas", "lead"],
    "usuarioResponsavel": null,
    "camposCustomizados": {
      "Endereço": "Oxford Street 123",
      "Endereço de Cobrança": "Oxford Street 123",
      "CNPJ": "ABC123DCE456"
    }
  }
}
```