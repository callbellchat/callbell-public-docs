sidebar_position: 4

# Notas de lançamento

Uma lista de todas as alterações e melhorias que foram introduzidas em nossa API. Use-a para verificar sempre que novos endpoints forem adicionados ou alterações forem feitas.

## 14 de fevereiro de 2024

### ✨ O que há de novo

- O endpoint [Criar contato](/api/reference/contacts_api/post_contacts) agora suporta o parâmetro `channel_uuid` para criar um contato associado a um canal específico.

## 9 de fevereiro de 2024

### ✨ O que há de novo

- API de Canais para gerenciar seus canais do Callbell programaticamente. Use este endpoint para listar, exibir e atualizar seus canais.

### 🛠️ Alterações

- O endpoint [Enviar mensagens](/api/reference/messages_api/post_send_messages) agora suporta o parâmetro `channel_uuid` para enviar uma mensagem para um canal específico.

## 11 de janeiro de 2024

### ✨ O que há de novo

- Endpoints [Contact Conversation Open](/api/reference/contacts_api/post_contact_conversation_open) e [Contact Conversation Close](/api/reference/contacts_api/post_contact_conversation_close) para abrir e fechar uma conversa associada a um contato.

## 8 de janeiro de 2024

### ✨ O que há de novo

Adicionadas informações e exemplos sobre como usar o Callbell com o Zapier.

## 4 de janeiro de 2024

### ✨ O que há de novo

- API de mensagens de contato para buscar todas as mensagens de um contato. Este endpoint é útil para buscar todas as mensagens de um contato, o resultado é paginado e ordenado por data.

## 19 de dezembro de 2023

### ✨ O que há de novo

- Adicionado `team_uuid` para as solicitações de [envio de mensagem](/api/reference/messages_api/post_send_messages) e criação e atualização de contato em [contacts_api](/api/reference/contacts_api/post_contacts) e solicitações [patch_contacts](/api/reference/contacts_api/patch_contacts). Isso permite que você atribua um contato a uma equipe via API.

## 14 de dezembro de 2023

### 🛠️ Alterações

- O evento do webhook [Message Created Webhook event](/api/reference/webhooks/message_events/message_created) agora inclui a referência completa ao `contact`. Isso é útil para obter mais informações sobre o contato sem precisar fazer uma chamada extra para a API.

## 30 de novembro de 2023

### ✨ O que há de novo

- Evento de webhook [Conversation Opened Webhook Event](/api/reference/webhooks/conversation_events/conversation_opened)
- Evento de webhook [Conversation Closed Webhook Event](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 de novembro de 2023

### ✨ O que há de novo

- [Endpoint da API de Equipes](/api/reference/teams_api/introduction)

## 29 de junho de 2023

### 🛠️ Alterações

- Permitir enviar [Mensagens de Modelo com Múltiplas Variáveis](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 de junho de 2023

### ✨ O que há de novo

- O objeto [`MessageSendRequest`](/api/reference/object_types/message_send_request) agora inclui um novo atributo: `messageStatusPayload`. Este atributo fornece o payload de status para a mensagem correspondente, obtido diretamente da integração.
- Este atributo é útil ao [buscar atualizações de status para uma mensagem](/api/reference/messages_api/get_message_status).
- Para fins de solução de problemas, `messageStatusPayload` também pode ser acessado por meio do evento de webhook [Message Status Update Webhook Event](/api/reference/webhooks/message_events/message_status_updated).

## 5 de abril de 2023

### ✨ O que há de novo

- O atributo `assignedUser` foi adicionado ao objeto [Contato](/api/reference/object_types/contact)
- Agora é possível atribuir usuários a um contato durante a criação ou atualização, fornecendo o parâmetro assigned_user com o e-mail de um usuário (por exemplo, `john.doe@email.com`). Verifique se o e-mail fornecido corresponde a um usuário confirmado em sua conta.
- Para desassociar um usuário de um contato durante uma atualização, inclua o parâmetro unassign_user no corpo da solicitação e defina seu valor como true. Essa ação removerá o usuário atribuído do contato.

## 3 de março de 2023

### ✨ O que há de novo

- Trechos de código multilíngues (`curl`, `node`, `go`, `ruby`, `php`, `python`) para todas as solicitações
- Seção Notas de lançamento

### 🛠️ Alterações

- [Contato](/api/reference/object_types/contact) agora inclui `custom_fields`
- `custom_fields`, `tags` podem ser passados no corpo ao [criar](/api/reference/contacts_api/post_contacts) ou [atualizar](/api/reference/contacts_api/post_contacts) um contato
- O `phone_number` do [Contato](/api/reference/object_types/contact) não pode mais ser atualizado

## 17 de janeiro de 2023

### ✨ O que há de novo

- [API de modelos](/api/reference/template_messages_api/introduction)

### 🛠️ Alterações

- Permitir enviar [Mensagens de Modelo](/api/reference/messages_api/post_send_messages#send-template-messages)

## 11 de novembro de 2022

### ✨ O que há de novo

- [API de autenticação](/api/reference/auth_api/introduction)

## 18 de outubro de 2022

### ✨ O que há de novo

- [API de webhooks](/api/reference/webhooks_api/introduction)