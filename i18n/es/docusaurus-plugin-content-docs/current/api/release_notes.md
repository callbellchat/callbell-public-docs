---
sidebar_position: 4
---

# Notas de lançamento

Uma lista de todas as mudanças e melhorias que foram introduzidas em nossa API. Use para verificar sempre que novos endpoints forem adicionados ou mudanças forem feitas.

## 14 de dezembro de 2023

### 🛠️ Mudanças

- [Evento de webhook de mensagem criada](/api/reference/webhooks/message_events/message_created) agora inclui a referência completa do `contato`. Isso é útil para ter informações adicionais sobre o contato sem precisar fazer uma chamada extra à API.

## 30 de novembro de 2023

### ✨ O que há de novo

- [Evento de webhook de conversa aberta](/api/reference/webhooks/conversation_events/conversation_opened)
- [Evento de webhook de conversa fechada](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 de novembro de 2023

### ✨ O que há de novo

- [Endpoint da API de equipes](/api/reference/teams_api/introduction)

## 29 de junho de 2023

### 🛠️ Mudanças

- Permitir enviar [Mensagens de Modelo com Múltiplas Variáveis](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 de junho de 2023

### ✨ O que há de novo

- O objeto [`MessageSendRequest`](/api/reference/object_types/message_send_request) agora inclui um novo atributo: `messageStatusPayload`. Este atributo fornece a carga de status da mensagem correspondente, obtida diretamente da integração.
- Este atributo é útil ao [buscar atualizações de status para uma mensagem](/api/reference/messages_api/get_message_status).
- Para fins de solução de problemas, `messageStatusPayload` também pode ser acessado através do [Evento de webhook de atualização de status da mensagem](/api/reference/webhooks/message_events/message_status_updated).

## 5 de abril de 2023

### ✨ O que há de novo

- O atributo `assignedUser` foi adicionado ao objeto [Contato](/api/reference/object_types/contact)
- Agora os usuários podem ser atribuídos a um contato durante a criação ou atualização, fornecendo o parâmetro `assigned_user` com o email de um usuário (exemplo: `john.doe@email.com`). Certifique-se de que o email fornecido corresponda a um usuário confirmado em sua conta.
- Para desatribuir um usuário de um contato durante uma atualização, inclua o parâmetro `unassign_user` no corpo da solicitação e defina seu valor como true. Essa ação removerá o usuário atribuído do contato.

## 3 de março de 2023

### ✨ O que há de novo

- Trechos de código em vários idiomas (`curl`, `node`, `go`, `ruby`, `php`, `python`) para todas as solicitações
- Seção de Notas de Lançamento

### 🛠️ Mudanças

- [Contato](/api/reference/object_types/contact) agora inclui `custom_fields`
- `custom_fields`, `tags` podem ser passados ​​no corpo ao [criar](/api/reference/contacts_api/post_contacts) ou [atualizar](/api/reference/contacts_api/post_contacts) um contato
- `phone_number` de [Contato](/api/reference/object_types/contact) não pode ser mais atualizado

## 17 de janeiro de 2023

### ✨ O que há de novo

- [API de Modelos](/api/reference/template_messages_api/introduction)

### 🛠️ Mudanças

- Permitir enviar [Mensagens de Modelo](/api/reference/messages_api/post_send_messages#send-template-messages)

## 11 de novembro de 2022

### ✨ O que há de novo

- [API de Autenticação](/api/reference/auth_api/introduction)

## 18 de outubro de 2022

### ✨ O que há de novo

- [API de Webhooks](/api/reference/webhooks_api/introduction)