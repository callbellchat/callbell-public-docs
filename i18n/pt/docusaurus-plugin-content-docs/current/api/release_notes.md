---
sidebar_position: 4
---

# Notas de lançamento

Uma lista de todas as mudanças e melhorias que foram introduzidas em nossa API. Use-a para verificar sempre que novos endpoints forem adicionados ou alterações forem feitas.

## 20 de fevereiro de 2024

### ✨ Novidades

- Adicionado um novo endpoint para listar todos os [membros da equipe](/api/reference/teams_api/get_team_members) pertencentes a uma equipe.

### 🛠️ Mudanças

- O endpoint [Enviar Mensagem](/api/reference/messages_api/post_send_messages) agora suporta um parâmetro opcional `fields` para especificar quais campos incluir na resposta. Isso é útil para reduzir o tamanho da resposta e acelerar as chamadas à API. Atualmente, apenas `contact` é suportado.
 
## 14 de fevereiro de 2024

### ✨ Novidades

- O endpoint [Criar contato](/api/reference/contacts_api/post_contacts) agora suporta o parâmetro `channel_uuid` para criar um contato associado a um canal específico.

## 9 de fevereiro de 2024

### ✨ Novidades

- API de [Canais](/api/reference/channels_api/introduction) para gerenciar seus Canais do Callbell programaticamente. Use este endpoint para listar, mostrar e atualizar seus canais.

### 🛠️ Mudanças

- O endpoint [Enviar Mensagens](/api/reference/messages_api/post_send_messages) agora suporta o parâmetro `channel_uuid` para enviar uma mensagem para um canal específico.

## 11 de janeiro de 2024

### ✨ Novidades

- Endpoints [Contact Conversation Open](/api/reference/contacts_api/post_contact_conversation_open) e [Contact Conversation Close](/api/reference/contacts_api/post_contact_conversation_close) para abrir e fechar uma conversa associada a um contato.

## 8 de janeiro de 2024

### ✨ Novidades

Adicionadas informações e exemplos sobre como usar o Callbell com o Zapier.

## 4 de janeiro de 2024

### ✨ Novidades

- API de mensagens de contato [Contact messages API](/api/reference/contacts_api/get_contact_messages) para buscar todas as mensagens de um contato. Este endpoint é útil para buscar todas as mensagens de um contato, o resultado é paginado e ordenado por data.

## 19 de dezembro de 2023

### ✨ Novidades

- Adicionado `team_uuid` às solicitações de [envio de mensagem](/api/reference/messages_api/post_send_messages) e solicitações de criação e atualização de contato [creation](/api/reference/contacts_api/post_contacts) and [update](/api/reference/contacts_api/patch_contacts). Isso permite atribuir um contato a uma equipe via API.

## 14 de dezembro de 2023

### 🛠️ Mudanças

- O evento de webhook [Message Created](/api/reference/webhooks/message_events/message_created) agora inclui a referência completa do `contact`. Isso é útil para obter mais informações sobre o contato sem precisar fazer uma chamada adicional à API.

## 30 de novembro de 2023

### ✨ Novidades

- Evento de webhook [Conversation Opened](/api/reference/webhooks/conversation_events/conversation_opened)
- Evento de webhook [Conversation Closed](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 de novembro de 2023

### ✨ Novidades

- API de [Equipes](/api/reference/teams_api/introduction)

## 29 de junho de 2023

### 🛠️ Mudanças

- Permitir enviar [Mensagens de Modelo com Múltiplas Variáveis](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 de junho de 2023

### ✨ Novidades

- O objeto [`MessageSendRequest`](/api/reference/object_types/message_send_request) agora inclui um novo atributo: `messageStatusPayload`. Esse atributo fornece o payload de status para a mensagem correspondente, obtido diretamente da integração.
- Esse atributo é útil ao [buscar atualizações de status para uma mensagem](/api/reference/messages_api/get_message_status).
- Para fins de solução de problemas, `messageStatusPayload` também pode ser acessado através do evento de webhook [Message Status Update](/api/reference/webhooks/message_events/message_status_updated).

## 5 de abril de 2023

### ✨ Novidades

- O atributo `assignedUser` foi adicionado ao objeto [Contact](/api/reference/object_types/contact).
- Agora é possível atribuir usuários a um contato durante a criação ou atualização, fornecendo o parâmetro `assigned_user` com o e-mail de um usuário (ex: `john.doe@email.com`). Certifique-se de que o e-mail fornecido corresponde a um usuário confirmado em sua conta.
- Para desatribuir um usuário de um contato durante uma atualização, inclua o parâmetro `unassign_user` no corpo da solicitação e defina seu valor como true. Essa ação removerá o usuário atribuído do contato.

## 3 de março de 2023

### ✨ Novidades

- Fragments de código multilíngue (`curl`, `node`, `go`, `ruby`, `php`, `python`) para todas as solicitações
- Seção de Notas de Lançamento

### 🛠️ Mudanças

- [Contact](/api/reference/object_types/contact) agora inclui `custom_fields`
- `custom_fields` e `tags` podem ser enviados no corpo ao [criar](/api/reference/contacts_api/post_contacts) ou [atualizar](/api/reference/contacts_api/patch_contacts) um contato
- O número de telefone do [Contact](/api/reference/object_types/contact) não pode mais ser atualizado

## 17 de janeiro de 2023

### ✨ Novidades

- API de [Templates](/api/reference/template_messages_api/introduction)

### 🛠️ Mudanças

- Permitir enviar [Mensagens de Modelo](/api/reference/messages_api/post_send_messages#send-template-messages)

## 11 de novembro de 2022

### ✨ Novidades

- API de [Autenticação](/api/reference/auth_api/introduction)

## 18 de outubro de 2022

### ✨ Novidades

- API de [Webhooks](/api/reference/webhooks_api/introduction)