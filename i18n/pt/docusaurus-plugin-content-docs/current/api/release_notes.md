---
sidebar_position: 4
---

# Notas de lançamento

Uma lista de todas as alterações e aprimoramentos que foram introduzidos em nossa API. Use-a para verificar sempre que novos pontos de extremidade forem adicionados ou alterações forem feitas.

## 8 de janeiro de 2024

### ✨ Novidades

Adicionadas informações e exemplos sobre como usar o Callbell com o Zapier.

## 4 de janeiro de 2024

### ✨ Novidades

- [API de mensagens de contato](/api/reference/contacts_api/get_contact_messages) para buscar todas as mensagens de um contato. Este ponto de extremidade é útil para buscar todas as mensagens de um contato, o resultado é paginado e ordenado por data.

## 19 de dezembro de 2023

### ✨ Novidades

- Adicionado `team_uuid` para [solicitações de envio de mensagem](/api/reference/messages_api/post_send_messages) e solicitações de criação e atualização de contato [post_contacts](/api/reference/contacts_api/post_contacts) e [patch_contacts](/api/reference/contacts_api/patch_contacts). Isso permite atribuir um contato a uma equipe por meio da API.

## 14 de dezembro de 2023

### 🛠️ Alterações

- O evento do webhook [Mensagem criada](/api/reference/webhooks/message_events/message_created) agora inclui a referência completa do `contato`. Isso é útil para obter mais informações sobre o contato sem precisar fazer uma chamada extra à API.

## 30 de novembro de 2023

### ✨ Novidades

- [Evento do webhook de conversa iniciada](/api/reference/webhooks/conversation_events/conversation_opened)
- [Evento do webhook de conversa encerrada](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 de novembro de 2023

### ✨ Novidades

- [Ponto de extremidade da API de equipes](/api/reference/teams_api/introduction)

## 29 de junho de 2023

### 🛠️ Alterações

- Permite enviar [Mensagens de Modelo Multivariáveis](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 de junho de 2023

### ✨ Novidades

- O objeto [`MessageSendRequest`](/api/reference/object_types/message_send_request) agora inclui um novo atributo: `messageStatusPayload`. Esse atributo fornece o status da mensagem correspondente, obtido diretamente da integração.
- Esse atributo é útil ao [buscar atualizações de status para uma mensagem](/api/reference/messages_api/get_message_status).
- Para fins de solução de problemas, `messageStatusPayload` também pode ser acessado por meio do [Evento de webhook de atualização de status da mensagem](/api/reference/webhooks/message_events/message_status_updated).

## 5 de abril de 2023

### ✨ Novidades

- O atributo `assignedUser` foi adicionado ao objeto [Contato](/api/reference/object_types/contact)
- Agora é possível atribuir usuários a um contato durante a criação ou atualização, fornecendo o parâmetro assigned_user com o e-mail do usuário (por exemplo, `john.doe@email.com`). Certifique-se de que o e-mail fornecido corresponda a um usuário confirmado em sua conta.
- Para desatribuir um usuário de um contato durante uma atualização, inclua o parâmetro unassign_user no corpo da solicitação e defina seu valor como true. Essa ação removerá o usuário atribuído do contato.

## 3 de março de 2023

### ✨ Novidades

- Snippets de código em vários idiomas (`curl`, `node`, `go`, `ruby`, `php`, `python`) para todas as solicitações
- Seção de Notas de Lançamento

### 🛠️ Alterações

- [Contato](/api/reference/object_types/contact) agora inclui `custom_fields`
- `custom_fields`, `tags` podem ser passados no corpo ao [criar](/api/reference/contacts_api/post_contacts) ou [atualizar](/api/reference/contacts_api/post_contacts) um contato
- O `phone_number` do [Contato](/api/reference/object_types/contact) não pode mais ser atualizado

## 17 de janeiro de 2023

### ✨ Novidades

- [API de Templates](/api/reference/template_messages_api/introduction)

### 🛠️ Alterações

- Permite enviar [Mensagens de Modelo](/api/reference/messages_api/post_send_messages#send-template-messages)

## 11 de novembro de 2022

### ✨ Novidades

- [API de Autenticação](/api/reference/auth_api/introduction)

## 18 de outubro de 2022

### ✨ Novidades

- [API de Webhooks](/api/reference/webhooks_api/introduction)