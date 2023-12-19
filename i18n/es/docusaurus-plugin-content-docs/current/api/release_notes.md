---
sidebar_position: 4
---

# Notas de lançamento

Uma lista de todas as alterações e melhorias que foram introduzidas em nossa API. Use-a para verificar sempre que novos endpoints forem adicionados ou alterações forem feitas.

## 19 de dezembro de 2023

### ✨ O que há de novo

- Adicionado `team_uuid` às solicitações de [envio de mensagens](/api/reference/messages_api/post_send_messages) e criação e atualização de [contatos](/api/reference/contacts_api/post_contacts) e [contatos](/api/reference/contacts_api/patch_contacts). Isso permite atribuir um contato a uma equipe via API.

## 14 de dezembro de 2023

### 🛠️ Alterações

- O evento do Webhook de [Mensagem Criada](/api/reference/webhooks/message_events/message_created) agora inclui a referência completa do `contato`. Isso é útil para obter informações adicionais sobre o contato sem ter que realizar uma chamada de API extra.

## 30 de novembro de 2023

### ✨ O que há de novo

- Evento do Webhook de [Conversa Aberta](/api/reference/webhooks/conversation_events/conversation_opened)
- Evento do Webhook de [Conversa Fechada](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 de novembro de 2023

### ✨ O que há de novo

- Endpoint da API de [Equipes](/api/reference/teams_api/introduction)

## 29 de junho de 2023

### 🛠️ Alterações

- Permitir o envio de [Mensagens de Template com Múltiplas Variáveis](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 de junho de 2023

### ✨ O que há de novo

- O objeto [`MessageSendRequest`](/api/reference/object_types/message_send_request) agora inclui um novo atributo: `messageStatusPayload`. Esse atributo fornece a carga de status para a mensagem correspondente, obtida diretamente da integração.
- Esse atributo é útil ao [recuperar atualizações de status para uma mensagem](/api/reference/messages_api/get_message_status).
- Para fins de solução de problemas, `messageStatusPayload` também pode ser acessado via o evento de Webhook de [Atualização de Status da Mensagem](/api/reference/webhooks/message_events/message_status_updated).

## 5 de abril de 2023

### ✨ O que há de novo

- O atributo `assignedUser` foi adicionada ao objeto [Contato](/api/reference/object_types/contact)
- Agora é possível atribuir usuários a um contato durante a criação ou atualização, fornecendo o parâmetro `assigned_user` com o email do usuário (por exemplo, `john.doe@email.com`). Certifique-se de que o email fornecido corresponda a um usuário confirmado em sua conta.
- Para desatribuir um usuário de um contato durante uma atualização, inclua o parâmetro `unassign_user` no corpo da solicitação e defina seu valor como true. Essa ação removerá o usuário atribuído do contato.

## 3 de março de 2023

### ✨ O que há de novo

- Trechos de código multi-idiomas (`curl`, `node`, `go`, `ruby`, `php`, `python`) para todas as solicitações
- Seção de Notas de Lançamento

### 🛠️ Alterações

- [Contato](/api/reference/object_types/contact) agora inclui `custom_fields`
- `custom_fields`, `tags` podem ser passados no corpo ao [criar](/api/reference/contacts_api/post_contacts) ou [atualizar](/api/reference/contacts_api/post_contacts) um contato
- `phone_number` do [Contato](/api/reference/object_types/contact) não pode mais ser atualizado

## 17 de janeiro de 2023

### ✨ O que há de novo

- API de [Modelos](/api/reference/template_messages_api/introduction)

### 🛠️ Alterações

- Permitir o envio de [Mensagens de Modelo](/api/reference/messages_api/post_send_messages#send-template-messages)

## 11 de novembro de 2022

### ✨ O que há de novo

- API de [Autenticação](/api/reference/auth_api/introduction)

## 18 de outubro de 2022

### ✨ O que há de novo

- API de [Webhooks](/api/reference/webhooks_api/introduction)