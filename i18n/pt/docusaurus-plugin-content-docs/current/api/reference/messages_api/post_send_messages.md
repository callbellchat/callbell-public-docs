---
title: POST /messages/enviar
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# POST /messages/enviar

:::caution
Após 24 horas sem resposta do cliente, não é possível enviar mensagens regulares. Você precisará usar uma mensagem [modelo](#enviar-mensagens-modelo), veja os exemplos abaixo.
:::

### Parâmetros Obrigatórios

| Parâmetro  | Tipo           | Descrição                                            |
| :--------- | :------------- | :--------------------------------------------------- |
| `to`       | String         | Número de telefone ou identificador da plataforma     |
| `from`     | String         | Identificador do canal (por exemplo, `whatsapp`)      |
| `type`     | MessageType    | Tipo de mensagem a ser enviada                        |
| `content`  | MessageContent | Conteúdo da mensagem                                  |

### Parâmetros Opcionais

| Parâmetro          | Tipo    | Descrição                                                                     |
| :----------------- | :------ | :---------------------------------------------------------------------------- |
| `template_uuid`    | String  | Identificador único da mensagem modelo                                         |
| `optin_contact`    | Boolean | Confirmação de que o contato optou por receber mensagens                       |
| `template_values`  | Array   | Valores para mensagem modelo de múltiplas variáveis                            |
| `assigned_user`    | String  | Mensagem será atribuída ao email deste colaborador                              |

### Exemplo de Requisição

<RequestTabs endpoint='messages_api' request="post_messages"/>

### Resposta

| Parâmetro | Tipo                                                                   | Descrição                                                             |
| :-------- | :--------------------------------------------------------------------- | :-------------------------------------------------------------------- |
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

## Enviar Mensagem com Atribuição Automática de Usuário

É possível enviar uma mensagem via solicitação de API com um usuário atribuído, enviando o email dele no parâmetro `assigned_user`.

:::caution
O usuário precisa fazer parte da sua equipe, caso contrário, a atribuição não funcionará.
:::

<RequestTabs endpoint='messages_api' request="post_messages_with_user_assignment"/>

## Enviar Mensagem com Anexos de Mídia

Você pode usar a API para enviar **mensagens de mídia** contendo **imagens**, **documentos**, **áudio** e **mensagens de vídeo**.

Também é possível adicionar uma _legenda_ ao enviar anexos `imagem` (veja o exemplo de solicitação abaixo).

### Exemplo de Envio de Anexo de Imagem

<RequestTabs endpoint='messages_api' request="post_messages_image"/>

### Exemplo de Envio de Anexo de Imagem e Legenda

<RequestTabs endpoint='messages_api' request="post_messages_image_caption"/>

### Exemplo de Envio de Anexo de Documento

<RequestTabs endpoint='messages_api' request="post_messages_document"/>

### Exemplo de Envio de Anexo de Áudio

:::info
Isso só está disponível para contas que usam a integração oficial do **WhatsApp Business API**.
:::

<RequestTabs endpoint='messages_api' request="post_messages_audio"/>

### Exemplo de Envio de Anexo de Vídeo

:::info
Isso só está disponível para contas que usam a integração oficial do **WhatsApp Business API**.
:::

<RequestTabs endpoint='messages_api' request="post_messages_video"/>

## Enviar Mensagens Modelo

Você pode usar a API para enviar uma [Mensagem Modelo](/api/reference/object_types/template) aprovada.

:::info
Isso só está disponível para contas que usam a integração oficial do **WhatsApp Business API**.
:::

:::caution
Para enviar mensagens modelo, `template_uuid` e `optin_contact` **devem** estar presentes na carga útil.
:::

<RequestTabs endpoint='messages_api' request="post_messages_template"/>

Nesse contexto, `texto` se refere ao espaço reservado da mensagem modelo. Por exemplo, digamos que você tenha uma mensagem modelo assim:

```bash title=exemplo_de_modelo
Olá {{1}}, este é um exemplo de mensagem modelo
```

A substituição do espaço reservado será feita com o valor passado na carga útil, então nesse caso ficará assim:

```bash title=exemplo_de_modelo
Olá João da Silva, este é um exemplo de mensagem modelo
```

## Enviar Mensagens Modelo com Múltiplas Variáveis

Você pode usar a API para enviar uma [Mensagem Modelo](/api/reference/object_types/template) aprovada.

:::info
Isso só está disponível para contas que usam a integração oficial do **WhatsApp Business API**.
:::

:::caution
Para enviar mensagens modelo, `template_uuid` e `optin_contact` **devem** estar presentes na carga útil.
:::

<RequestTabs endpoint='messages_api' request="post_multi_variable_messages_template"/>

Nesse contexto, `template_values` se refere aos espaços reservados da mensagem modelo. Por exemplo, digamos que você tenha uma mensagem modelo assim:

```bash title=exemplo_de_modelo
Olá {{1}}, esta é uma mensagem de modelo {{2}}. {{3}}!
```

As substituições dos espaços reservados serão feitas com os valores passados na carga útil dentro de um array. Nesse caso, ficará assim:

```bash title=exemplo_de_modelo
Olá João, esta é uma mensagem de modelo do WhatsApp Business API. Olá!
```

:::info
Quando `template_values` for válido, os valores em `content` serão ignorados, pois são usados para mensagens modelo com apenas uma variável.
:::

## Enviar Mensagens Modelo com Anexos de Mídia

Você pode usar a API para enviar uma [Mensagem Modelo](/api/reference/object_types/template) aprovada.

:::info
Isso só está disponível para contas que usam a integração oficial do **WhatsApp Business API**.
:::

:::caution
Para enviar mensagens modelo, `template_uuid` e `optin_contact` devem estar presentes na carga útil.
:::

Se você tiver mensagens modelo de mídia aprovadas, poderá enviá-las incluindo uma `url` válida da mídia

### Enviar Anexo de Imagem

<RequestTabs endpoint='messages_api' request="post_messages_template_image"/>

### Enviar Anexo de Documento

<RequestTabs endpoint='messages_api' request="post_messages_template_document"/>

### Enviar Anexo de Vídeo

<RequestTabs endpoint='messages_api' request="post_messages_template_video"/>

:::info
Use a [API de Modelos](/api/reference/template_messages_api/introduction) para obter os `template_uuid` dos seus modelos.
:::