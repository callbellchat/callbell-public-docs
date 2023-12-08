---
sidebar_position: 4
---

# Notas de lançamento

Uma lista de todas as mudanças e melhorias que foram introduzidas na nossa API. Use para verificar sempre que novos endpoints forem adicionados ou alterações sejam feitas.

## 30 de novembro de 2023

### ✨ O que há de novo

- [Evento de Abertura de Conversa com Webhook](/api/reference/webhooks/conversation_events/conversation_opened)
- [Evento de Fechamento de Conversa com Webhook](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 de novembro de 2023

### ✨ O que há de novo

- [Endpoint da API de Equipes](/api/reference/teams_api/introduction)

## 29 de junho de 2023

### 🛠️ Mudanças

- Permitir enviar [Mensagens de Modelo com Múltiplas Variáveis](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 de junho de 2023

### ✨ O que há de novo

- O objeto [`MessageSendRequest`](/api/reference/object_types/message_send_request) agora inclui um novo atributo: `messageStatusPayload`. Este atributo fornece o payload de status para a mensagem correspondente, obtida diretamente da integração.
- Esse atributo é útil ao [buscar atualizações de status para uma mensagem](/api/reference/messages_api/get_message_status).
- Para fins de solução de problemas, `messageStatusPayload` também pode ser acessado através do [Evento de Atualização de Status da Mensagem com Webhook](/api/reference/webhooks/message_events/message_status_updated).

## 5 de abril de 2023

### ✨ O que há de novo

- O atributo `assignedUser` foi adicionado ao objeto [Contato](/api/reference/object_types/contact).
- Agora os usuários podem ser atribuídos a um contato durante a criação ou atualização, fornecendo o parâmetro assigned_user com o email do usuário (por exemplo, `john.doe@email.com`). Certifique-se de que o email fornecido corresponde a um usuário confirmado em sua conta.
- Para desatribuir um usuário de um contato durante uma atualização, inclua o parâmetro unassign_user no corpo da requisição e defina seu valor como true. Essa ação removerá o usuário atribuído do contato.

## 3 de março de 2023

### ✨ O que há de novo

- Trechos de código multilíngue (`curl`, `node`, `go`, `ruby`, `php`, `python`) para todas as requisições
- Seção de Notas de Lançamento

### 🛠️ Mudanças

- [Contato](/api/reference/object_types/contact) agora inclui `custom_fields`
- `custom_fields`, `tags` podem ser passados no corpo da requisição ao [criar](/api/reference/contacts_api/post_contacts) ou [atualizar](/api/reference/contacts_api/post_contacts) um contato
- `phone_number` de [Contato](/api/reference/object_types/contact) não pode mais ser atualizado

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