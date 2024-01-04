---
sidebar_position: 4
---

# Notas de lançamento

Uma lista de todas as alterações e melhorias que foram introduzidas em nossa API. Use-a para verificar sempre que novos endpoints forem adicionados ou alterações forem feitas.

## 4 de Janeiro de 2024

### ✨ O que há de novo

- [API de mensagens de contato](/api/reference/contacts_api/get_contact_messages) para buscar todas as mensagens de um contato. Este endpoint é útil para buscar todas as mensagens de um contato, o resultado é paginado e ordenado por data.

## 19 de Dezembro de 2023

### ✨ O que há de novo

- Adicionado `team_uuid` às solicitações de [envio de mensagem](/api/reference/messages_api/post_send_messages) e criação e atualização de contato nas solicitações de contato. Isso permite que você atribua um contato a uma equipe por meio da API.

## 14 de Dezembro de 2023

### 🛠️ Alterações

- O evento Webhook [Mensagem Criada](/api/reference/webhooks/message_events/message_created) agora inclui a referência completa do `contato`. Isso é útil para obter mais informações sobre o contato sem precisar fazer uma chamada de API extra.

## 30 de Novembro de 2023

### ✨ O que há de novo

- Evento Webhook [Conversa Iniciada](/api/reference/webhooks/conversation_events/conversation_opened)
- Evento Webhook [Conversa Encerrada](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 de Novembro de 2023

### ✨ O que há de novo

- [Endpoint da API de Equipes](/api/reference/teams_api/introduction)

## 29 de Junho de 2023

### 🛠️ Alterações

- Permitir o envio de [Mensagens de Template com Múltiplas Variáveis](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 de Junho de 2023

### ✨ O que há de novo

- O objeto [`MessageSendRequest`](/api/reference/object_types/message_send_request) agora inclui um novo atributo: `messageStatusPayload`. Este atributo fornece o payload de status para a mensagem correspondente, obtido diretamente da integração.
- Este atributo é útil ao [buscar atualizações de status para uma mensagem](/api/reference/messages_api/get_message_status).
- Para fins de solução de problemas, `messageStatusPayload` também pode ser acessado por meio do evento Webhook [Atualização de Status da Mensagem](/api/reference/webhooks/message_events/message_status_updated).

## 5 de Abril de 2023

### ✨ O que há de novo

- O atributo `assignedUser` foi adicionado ao objeto [Contato](/api/reference/object_types/contact).
- Agora, os usuários podem ser atribuídos a um contato durante a criação ou atualização, fornecendo o parâmetro `assigned_user` com o e-mail de um usuário (por exemplo, `john.doe@email.com`). Certifique-se de que o e-mail fornecido corresponda a um usuário confirmado em sua conta.
- Para desatribuir um usuário de um contato durante uma atualização, inclua o parâmetro `unassign_user` no corpo da solicitação e defina seu valor como true. Esta ação irá remover o usuário atribuído do contato.

## 3 de Março de 2023

### ✨ O que há de novo

- Trechos de código multilíngues (`curl`, `node`, `go`, `ruby`, `php`, `python`) para todas as solicitações
- Seção de Notas de Lançamento

### 🛠️ Alterações

- [Contato](/api/reference/object_types/contact) agora inclui `custom_fields`
- `custom_fields`, `tags` podem ser passados no corpo ao [criar](/api/reference/contacts_api/post_contacts) ou [atualizar](/api/reference/contacts_api/post_contacts) um contato
- `phone_number` do [Contato](/api/reference/object_types/contact) não pode mais ser atualizado

## 17 de Janeiro de 2023

### ✨ O que há de novo

- [API de Templates](/api/reference/template_messages_api/introduction)

### 🛠️ Alterações

- Permitir o envio de [Mensagens de Template](/api/reference/messages_api/post_send_messages#send-template-messages)

## 11 de Novembro de 2022

### ✨ O que há de novo

- [API de Autenticação](/api/reference/auth_api/introduction)

## 18 de Outubro de 2022

### ✨ O que há de novo

- [API de Webhooks](/api/reference/webhooks_api/introduction)