---
sidebar_position: 4
---

# Notas de lançamento

Uma lista de todas as alterações e melhorias que foram introduzidas em nossa API. Use-a para verificar sempre que novos pontos de extremidade forem adicionados ou alterações forem feitas.

## 11 de janeiro de 2024

### ✨ O que há de novo

- [Abrir conversa de contato](/api/reference/contacts_api/post_contact_conversation_open) e pontos de extremidade [Fechar conversa de contato](/api/reference/contacts_api/post_contact_conversation_close) para abrir e fechar uma conversa associada a um contato.

## 8 de janeiro de 2024

### ✨ O que há de novo

Adicionadas informações e exemplos sobre como usar o Callbell com o Zapier.

## 4 de janeiro de 2024

### ✨ O que há de novo

- API de mensagens do contato [/api/reference/contacts_api/get_contact_messages](/api/reference/contacts_api/get_contact_messages) para buscar todas as mensagens de um contato. Este ponto de extremidade é útil para buscar todas as mensagens de um contato, o resultado é paginado e ordenado por data.

## 19 de dezembro de 2023

### ✨ O que há de novo

- Adicionado `team_uuid` às solicitações de [envio de mensagem](/api/reference/messages_api/post_send_messages) e criação e atualização de contato [solicitações](/api/reference/contacts_api/post_contacts) e [patch](/api/reference/contacts_api/patch_contacts). Isso permite atribuir um contato a uma equipe via API.

## 14 de dezembro de 2023

### 🛠️ Mudanças

- O evento de webhook [Message Created](/api/reference/webhooks/message_events/message_created) agora inclui a referência completa do `contato`. Isso é útil para obter mais informações sobre o contato sem precisar realizar uma chamada extra à API.

## 30 de novembro de 2023

### ✨ O que há de novo

- [Evento de webhook Conversation Opened](/api/reference/webhooks/conversation_events/conversation_opened)
- [Evento de webhook Conversation Closed](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 de novembro de 2023

### ✨ O que há de novo

- [Ponto de extremidade da API Teams](/api/reference/teams_api/introduction)

## 29 de junho de 2023

### 🛠️ Mudanças

- Permitir o envio de [Mensagens de Modelo com Múltiplas Variáveis](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 de junho de 2023

### ✨ O que há de novo

- O objeto [`MessageSendRequest`](/api/reference/object_types/message_send_request) agora inclui um novo atributo: `messageStatusPayload`. Este atributo fornece a carga de status da mensagem correspondente, obtida diretamente da integração.
- Este atributo é útil ao [buscar atualizações de status para uma mensagem](/api/reference/messages_api/get_message_status).
- Para fins de solução de problemas, `messageStatusPayload` também pode ser acessado através do [Evento de webhook Message Status Update](/api/reference/webhooks/message_events/message_status_updated).

## 5 de abril de 2023

### ✨ O que há de novo

- O atributo `assignedUser` foi adicionado ao objeto [Contato](/api/reference/object_types/contact).
- Os usuários agora podem ser atribuídos a um contato durante a criação ou atualização fornecendo o parâmetro `assigned_user` com o e-mail de um usuário (por exemplo, `john.doe@email.com`). Certifique-se de que o e-mail fornecido corresponda a um usuário confirmado em sua conta.
- Para desatribuir um usuário de um contato durante uma atualização, inclua o parâmetro `unassign_user` no corpo da solicitação e defina seu valor como true. Essa ação removerá o usuário atribuído do contato.

## 3 de março de 2023

### ✨ O que há de novo

- Trechos de código em vários idiomas (`curl`, `node`, `go`, `ruby`, `php`, `python`) para todas as solicitações
- Seção de notas de lançamento

### 🛠️ Mudanças

- O [Contato](/api/reference/object_types/contact) agora inclui `custom_fields`
- `custom_fields`, `tags` podem ser passados no corpo ao [criar](/api/reference/contacts_api/post_contacts) ou [atualizar](/api/reference/contacts_api/post_contacts) um contato
- `phone_number` do [Contato](/api/reference/object_types/contact) não pode mais ser atualizado

## 17 de janeiro de 2023

### ✨ O que há de novo

- [API de Templates](/api/reference/template_messages_api/introduction)

### 🛠️ Mudanças

- Permitir o envio de [Mensagens de Modelo](/api/reference/messages_api/post_send_messages#send-template-messages)

## 11 de novembro de 2022

### ✨ O que há de novo

- [API de Autenticação](/api/reference/auth_api/introduction)

## 18 de outubro de 2022

### ✨ O que há de novo

- [API de Webhooks](/api/reference/webhooks_api/introduction)