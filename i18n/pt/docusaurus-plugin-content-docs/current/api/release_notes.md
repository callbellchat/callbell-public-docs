---
sidebar_position: 4
---

# Notas de lançamento

Uma lista de todas as alterações e melhorias que foram introduzidas em nossa API. Use-a para verificar sempre que novos endpoints forem adicionados ou alterações forem feitas.

## 14 de dezembro de 2023

### 🛠️ Alterações

- O evento de webhook [Message Created](/api/reference/webhooks/message_events/message_created) agora inclui toda a referência ao `contact`. Isso é útil para obter mais informações sobre o contato sem a necessidade de fazer uma chamada extra à API.

## 30 de novembro de 2023

### ✨ O que há de novo

- O evento de webhook [Conversation Opened](/api/reference/webhooks/conversation_events/conversation_opened)
- O evento de webhook [Conversation Closed](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 de novembro de 2023

### ✨ O que há de novo

- O endpoint da API [Teams](/api/reference/teams_api/introduction)

## 29 de junho de 2023

### 🛠️ Alterações

- Permitir o envio de [Mensagens de Modelo com Múltiplas Variáveis](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 de junho de 2023

### ✨ O que há de novo

- O objeto [`MessageSendRequest`](/api/reference/object_types/message_send_request) agora inclui um novo atributo: `messageStatusPayload`. Este atributo fornece o status da mensagem correspondente, obtido diretamente da integração.
- Este atributo é útil ao [buscar atualizações de status para uma mensagem](/api/reference/messages_api/get_message_status).
- Para fins de solução de problemas, o `messageStatusPayload` também pode ser acessado através do evento de webhook [Message Status Update](/api/reference/webhooks/message_events/message_status_updated).

## 5 de abril de 2023

### ✨ O que há de novo

- O atributo `assignedUser` foi adicionado ao objeto [Contact](/api/reference/object_types/contact)
- Agora é possível atribuir usuários a um contato durante a criação ou atualização, fornecendo o parâmetro `assigned_user` com o e-mail do usuário (por exemplo, `john.doe@email.com`). Certifique-se de que o e-mail fornecido corresponda a um usuário confirmado em sua conta.
- Para remover um usuário atribuído a um contato durante uma atualização, inclua o parâmetro `unassign_user` no corpo da solicitação e defina seu valor como true. Essa ação removerá o usuário atribuído do contato.

## 3 de março de 2023

### ✨ O que há de novo

- Trechos de código em vários idiomas (`curl`, `node`, `go`, `ruby`, `php`, `python`) para todas as solicitações
- Seção de Notas de Lançamento

### 🛠️ Alterações

- O objeto [Contact](/api/reference/object_types/contact) agora inclui `custom_fields`
- `custom_fields` e `tags` podem ser passados no corpo ao [criar](/api/reference/contacts_api/post_contacts) ou [atualizar](/api/reference/contacts_api/post_contacts) um contato
- O número de telefone do [Contact](/api/reference/object_types/contact) não pode mais ser atualizado

## 17 de janeiro de 2023

### ✨ O que há de novo

- [API de Modelos](/api/reference/template_messages_api/introduction)

### 🛠️ Alterações

- Permitir o envio de [Mensagens de Modelo](/api/reference/messages_api/post_send_messages#send-template-messages)

## 11 de novembro de 2022

### ✨ O que há de novo

- [API de Autenticação](/api/reference/auth_api/introduction)

## 18 de outubro de 2022

### ✨ O que há de novo

- [API de Webhooks](/api/reference/webhooks_api/introduction)