pt-BR

---
title: POST /messages/send
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# POST /messages/send

:::caution
Após 24 horas sem resposta do cliente, não é possível enviar mensagens regulares, você precisará usar uma mensagem [Template](#send-template-messages), veja os exemplos abaixo.
:::

### Parâmetros Obrigatórios

| Parâmetro | Tipo           | Descrição                          |
| :-------- | :------------- | :----------------------------------- |
| `to`      | String         | Número de telefone ou identificador de plataforma  |
| `from`    | String         | Identificador do canal (por exemplo, `whatsapp`) |
| `type`    | MessageType    | Tipo de mensagem a ser enviada           |
| `content` | MessageContent | Conteúdo da mensagem               |

### Parâmetros Opcionais

| Parâmetro         | Tipo    | Descrição                                                                                     |
| :---------------- | :------ | :---------------------------------------------------------------------------------------------- |
| `template_uuid`   | String  | Identificador exclusivo da mensagem do modelo |
| `optin_contact`   | Boolean | Confirmação de que o contato optou por receber mensagens                               |
| `template_values` | Array   | Valores para mensagem de modelo multi-variável                                                      |
| `assigned_user`   | String  | A mensagem será atribuída ao email deste colaborador                                           |
| `team_uuid`       | String  | A mensagem será atribuída a esta equipe                                                           |
| `channel_uuid`    | String  | A mensagem será enviada deste canal (quando omitido, usará o canal principal padrão) |
| `fields`          | String  | Campos separados por vírgula a serem retornados na mensagem. Valores suportados: `contact`               |

### Exemplo de Requisição

<RequestTabs endpoint='messages_api' request="post_messages"/>

### Resposta

| Parâmetro | Tipo                                                                   | Descrição                                                              |
| :-------- | :--------------------------------------------------------------------- | :----------------------------------------------------------------------- |
| message   | [MessageSendRequest](/api/reference/object_types/message_send_request) | A solicitação de envio de mensagem. O sistema inicialmente enfileirará a mensagem. |

### Exemplo de Resposta

```json title=response.json
{
  "message": {
    "uuid": "adf3d1216d4c4dcd908199d6700f2381",
    "status": "enqueued"
  }
}
```

### Exemplo de Resposta (com `fields=contact`)

```json title=response.json
{
  "message": {
    "uuid": "adf3d1216d4c4dcd908199d6700f2381",
    "status": "enqueued",
    "contact": {
      "uuid": "c7b3d1216d4c4dcd908199d6700f2381",
      "name": "John Doe",
      "phone": "+1234567890",
      "email": "john@doe.com"
    }
  }
}
```

## Enviar mensagem com atribuição automática de usuário

É possível enviar uma mensagem por meio de uma solicitação API com um usuário atribuído, enviando seu e-mail no parâmetro `assigned_user`.

:::caution
O usuário deve fazer parte da sua equipe, caso contrário, a atribuição não funcionará.
:::

<RequestTabs endpoint='messages_api' request="post_messages_with_user_assignment"/>

## Enviar mensagens com anexos de mídia

Você pode usar a API para enviar mensagens **de mídia** contendo **imagens**, **documentos**, **áudio** e **vídeo**.

Também é possível adicionar uma _legenda_ ao enviar anexos de `mensagem de imagem` (veja o exemplo de solicitação abaixo).

### Exemplo de Envio de Anexo de Imagem

<RequestTabs endpoint='messages_api' request="post_messages_image"/>

### Exemplo de Envio de Anexo de Imagem e Legenda

<RequestTabs endpoint='messages_api' request="post_messages_image_caption"/>

### Exemplo de Envio de Anexo de Documento

<RequestTabs endpoint='messages_api' request="post_messages_document"/>

### Exemplo de Envio de Anexo de Áudio

:::info
Isso está disponível apenas para contas que usam a integração oficial do **WhatsApp Business API**.
:::

<RequestTabs endpoint='messages_api' request="post_messages_audio"/>

### Exemplo de Envio de Anexo de Vídeo

:::info
Isso está disponível apenas para contas que usam a integração oficial do **WhatsApp Business API**.
:::

<RequestTabs endpoint='messages_api' request="post_messages_video"/>

## Enviar mensagens de modelo

Você pode usar a API para enviar uma mensagem de [Modelo](/api/reference/object_types/template) aprovada.

:::info
Isso está disponível apenas para contas que usam a integração oficial do **WhatsApp Business API**.
:::

:::caution
Para enviar mensagens de modelo, `template_uuid` e `optin_contact` **devem** estar presentes na carga útil.
:::

<RequestTabs endpoint='messages_api' request="post_messages_template"/>

Neste contexto, `text` refere-se ao espaço reservado da mensagem do modelo, por exemplo, digamos que você tenha uma mensagem de modelo como esta:

```bash title=template_example
Olá {{1}}, este é um exemplo de mensagem de modelo
```

A substituição do espaço reservado será feita com o valor passado na carga útil, então neste caso ficará assim:

```bash title=template_example
Olá John Doe, este é um exemplo de mensagem de modelo
```

## Enviar mensagens de modelo multi-variáveis

Você pode usar a API para enviar uma mensagem de [Modelo](/api/reference/object_types/template) aprovada.

:::info
Isso está disponível apenas para contas que usam a integração oficial do **WhatsApp Business API**.
:::

:::caution
Para enviar mensagens de modelo, `template_uuid` e `optin_contact` **devem** estar presentes na carga útil.
:::

<RequestTabs endpoint='messages_api' request="post_multi_variable_messages_template"/>

Neste contexto, `template_values` refere-se aos espaços reservados da mensagem do modelo, por exemplo, digamos que você tenha uma mensagem de modelo como esta:

```bash title=template_example
Olá {{1}}, este é um exemplo de mensagem de modelo {{2}}. {{3}}!
```

A substituição dos espaços reservados será feita com os valores passados na carga útil dentro de um array, então neste caso ficará assim:

```bash title=template_example
Olá Jack, este é um exemplo de mensagem de modelo. Cheers!
```

:::info
Quando os `template_values` são válidos, os valores dentro de `content` serão ignorados, pois são usados para mensagens de modelo com apenas uma variável.
:::

## Enviar mensagens de modelo com anexos de mídia

Você pode usar a API para enviar uma mensagem de [Modelo](/api/reference/object_types/template) aprovada

:::info
Isso está disponível apenas para contas que usam a integração oficial do **WhatsApp Business API**.
:::

:::caution
Para enviar mensagens de modelo, `template_uuid` e `optin_contact` devem estar presentes na carga útil.
:::

Se você tiver mensagens de modelo de mídia aprovadas, poderá enviá-las incluindo uma `url` válida da mídia

### Enviar Anexo de Imagem

<RequestTabs endpoint='messages_api' request="post_messages_template_image"/>

### Enviar Anexo de Documento

<RequestTabs endpoint='messages_api' request="post_messages_template_document"/>

### Enviar Anexo de Vídeo

<RequestTabs endpoint='messages_api' request="post_messages_template_video"/>

:::info
Use a [API de Modelos](/api/reference/template_messages_api/introduction) para obter os `template_uuid` dos seus modelos.