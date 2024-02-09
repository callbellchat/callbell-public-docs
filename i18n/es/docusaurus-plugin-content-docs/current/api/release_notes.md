---
sidebar_position: 4
---

# Notas de lançamento

Uma lista de todas as alterações e melhorias que foram introduzidas em nossa API. Use-a para verificar sempre que novos endpoints forem adicionados ou alterações forem feitas.

## 9 de fevereiro de 2024

### ✨ Novidades

- [API de Canais](/api/reference/channels_api/introduction) para gerenciar seus Canais do Callbell de forma programática. Use este endpoint para listar, mostrar e atualizar seus canais.

### 🛠️ Alterações

- Agora o endpoint [Enviar Mensagens](/api/reference/messages_api/post_send_messages) suporta o parâmetro `channel_uuid` para enviar uma mensagem para um canal específico.

## 11 de janeiro de 2024

### ✨ Novidades

- Endpoints [Contact Conversation Open](/api/reference/contacts_api/post_contact_conversation_open) e [Contact Conversation Close](/api/reference/contacts_api/post_contact_conversation_close) para abrir e fechar uma conversa associada a um contato.

## 8 de janeiro de 2024

### ✨ Novidades

Adicionadas informações e exemplos sobre como utilizar o Callbell com o Zapier.

## 4 de janeiro de 2024

### ✨ Novidades

- [API de mensagens do contato](/api/reference/contacts_api/get_contact_messages) para buscar todas as mensagens de um contato. Este endpoint é útil para buscar todas as mensagens de um contato, o resultado é paginado e ordenado por data.

## 19 de dezembro de 2023

### ✨ Novidades

- Adicionado `team_uuid` às solicitações de [envio de mensagem](/api/reference/messages_api/post_send_messages) e criação e atualização de contatos [contatos](/api/reference/contacts_api/post_contacts) e [atualização](/api/reference/contacts_api/patch_contacts). Isso permite que você atribua um contato a uma equipe via API.

## 14 de dezembro de 2023

### 🛠️ Alterações

- O evento de webhook [Message Created](/api/reference/webhooks/message_events/message_created) agora inclui a referência completa do `contact`. Isso é útil para ter mais informações sobre o contato sem precisar fazer uma chamada extra à API.

## 30 de novembro de 2023

### ✨ Novidades

- Evento de webhook [Conversation Opened](/api/reference/webhooks/conversation_events/conversation_opened)
- Evento de webhook [Conversation Closed](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 de novembro de 2023

### ✨ Novidades

- [Endpoint de Equipes](/api/reference/teams_api/introduction)

## 29 de junho de 2023

### 🛠️ Alterações

- Permite enviar [Mensagens de Template com Variáveis Múltiplas](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 de junho de 2023

### ✨ Novidades

- O objeto [`MessageSendRequest`](/api/reference/object_types/message_send_request) agora inclui um novo atributo: `messageStatusPayload`. Esse atributo fornece o estado da mensagem correspondente, obtido diretamente da integração.
- Esse atributo é útil ao [buscar atualizações de status para uma mensagem](/api/reference/messages_api/get_message_status).
- Para fins de solução de problemas, o `messageStatusPayload` também pode ser acessado através do evento de webhook [Message Status Update](/api/reference/webhooks/message_events/message_status_updated).

## 5 de abril de 2023

### ✨ Novidades

- O atributo `assignedUser` foi adicionado ao objeto [Contact](/api/reference/object_types/contact)
- Os usuários agora podem ser atribuídos a um contato durante a criação ou atualização, fornecendo o parâmetro `assigned_user` com o e-mail do usuário (por exemplo, `john.doe@email.com`). Certifique-se de que o e-mail fornecido corresponda a um usuário confirmado em sua conta.
- Para desatribuir um usuário de um contato durante uma atualização, inclua o parâmetro `unassign_user` no corpo da solicitação e defina seu valor como true. Essa ação removerá o usuário atribuído do contato.

## 3 de março de 2023

### ✨ Novidades

- Snippets de código multilíngues (`curl`, `node`, `go`, `ruby`, `php`, `python`) para todas as solicitações
- Seção de Notas de Lançamento

### 🛠️ Alterações

- [Contact](/api/reference/object_types/contact) agora inclui `custom_fields`
- `custom_fields`, `tags` podem ser passados no corpo ao [criar](/api/reference/contacts_api/post_contacts) ou [atualizar](/api/reference/contacts_api/post_contacts) um contato
- O `phone_number` do [Contact](/api/reference/object_types/contact) não pode mais ser atualizado

## 17 de janeiro de 2023

### ✨ Novidades

- [API de Modelos](/api/reference/template_messages_api/introduction)

### 🛠️ Alterações

- Permite enviar [Mensagens de Template](/api/reference/messages_api/post_send_messages#send-template-messages)

## 11 de novembro de 2022

### ✨ Novidades

- [API de Autenticação](/api/reference/auth_api/introduction)

## 18 de outubro de 2022

### ✨ Novidades

- [API de Webhooks](/api/reference/webhooks_api/introduction)