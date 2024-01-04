---
sidebar_position: 4
---

# Notas de lançamento

Uma lista de todas as mudanças e aprimoramentos que foram introduzidos em nossa API. Use-a para verificar quando novos endpoints são adicionados ou mudanças são feitas.

## 4 de janeiro de 2024

### ✨ O que há de novo

- [API de mensagens de contato](/api/reference/contacts_api/get_contact_messages) para buscar todas as mensagens de um contato. Este endpoint é útil para buscar todas as mensagens de um contato, o resultado é paginado e ordenado por data.

## 19 de dezembro de 2023

### ✨ O que há de novo

- Adicionado `team_uuid` às solicitações de [envio de mensagens](/api/reference/messages_api/post_send_messages) e às solicitações de criação e atualização de contato [/api/reference/contacts_api/post_contacts](/api/reference/contacts_api/patch_contacts). Isso permite que você atribua um contato a uma equipe via API.

## 14 de dezembro de 2023

### 🛠️ Mudanças

- O evento Webhook [Message Created](/api/reference/webhooks/message_events/message_created) agora inclui a referência completa do `contact`. Isso é útil para obter mais informações sobre o contato sem precisar fazer uma chamada extra à API.

## 30 de novembro de 2023

### ✨ O que há de novo

- [Evento Webhook de Conversa Iniciada](/api/reference/webhooks/conversation_events/conversation_opened)
- [Evento Webhook de Conversa Encerrada](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 de novembro de 2023

### ✨ O que há de novo

- [Endpoint da API de Equipes](/api/reference/teams_api/introduction)

## 29 de junho de 2023

### 🛠️ Mudanças

- Permitir o envio de [Mensagens de Modelo Multi-Variáveis](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 de junho de 2023

### ✨ O que há de novo

- O objeto [`MessageSendRequest`](/api/reference/object_types/message_send_request) agora inclui um novo atributo: `messageStatusPayload`. Este atributo fornece a carga de status para a mensagem correspondente, obtida diretamente da integração.
- Esse atributo é útil ao [buscar atualizações de status para uma mensagem](/api/reference/messages_api/get_message_status).
- Para fins de solução de problemas, `messageStatusPayload` também pode ser acessado via o [Evento Webhook de Atualização de Status da Mensagem](/api/reference/webhooks/message_events/message_status_updated).

## 5 de abril de 2023

### ✨ O que há de novo

- O atributo `assignedUser` foi adicionado ao objeto [Contato](/api/reference/object_types/contact).
- Os usuários agora podem ser atribuídos a um contato durante a criação ou atualização, fornecendo o parâmetro assigned_user com o email do usuário (por exemplo, `john.doe@email.com`). Certifique-se de que o email fornecido corresponda a um usuário confirmado em sua conta.
- Para desatribuir um usuário de um contato durante uma atualização, inclua o parâmetro unassign_user no corpo da solicitação e defina seu valor como true. Essa ação removerá o usuário atribuído do contato.

## 3 de março de 2023

### ✨ O que há de novo

- Trechos de código em vários idiomas (`curl`, `node`, `go`, `ruby`, `php`, `python`) para todas as solicitações.
- Seção de Notas de Lançamento

### 🛠️ Mudanças

- [Contato](/api/reference/object_types/contact) agora inclui `custom_fields`
- `custom_fields` e `tags` podem ser passados no corpo ao [criar](/api/reference/contacts_api/post_contacts) ou [atualizar](/api/reference/contacts_api/post_contacts) um contato
- O `phone_number` do [Contato](/api/reference/object_types/contact) não pode mais ser atualizado

## 17 de janeiro de 2023

### ✨ O que há de novo

- [API de Modelos](/api/reference/template_messages_api/introduction)

### 🛠️ Mudanças

- Permitir o envio de [Mensagens de Modelo](/api/reference/messages_api/post_send_messages#send-template-messages)

## 11 de novembro de 2022

### ✨ O que há de novo

- [API de Autenticação](/api/reference/auth_api/introduction)

## 18 de outubro de 2022

### ✨ O que há de novo

- [API de Webhooks](/api/reference/webhooks_api/introduction)