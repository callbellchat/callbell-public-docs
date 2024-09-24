---
sidebar_position: 4
---

# Notas de lançamento

Uma lista de todas as alterações e melhorias que foram introduzidas em nossa API. Use para verificar sempre que novos endpoints forem adicionados ou alterações forem feitas.

## 24 de setembro de 2024

### ✨ Novidades

- Adicionado `conversationHref` a todos os pontos de extremidade que retornam um objeto [Contact](/api/reference/object_types/contact); esse campo é vinculado à conversa associada ao contato no painel da Callbell.
- O campo também está presente em todos os webhooks relacionados a contatos, mensagens e conversas.
- Foi adicionado um novo campo `conversation` ao corpo da solicitação do ponto final [Send Message] (/api/reference/messages_api/post_send_messages). Esse campo permite retornar a conversa na resposta.

## 30 de julho de 2024

### ✨ Novidades 

- O [POST Send Messages agora oferece suporte ao campo de metadados](/api/reference/messages_api/post_send_messages#send-message-with-metadata) para enviar mensagens com pares de valores-chave personalizados.

## 25 de julho de 2024

### ✨ Novidades

- Adicionados trechos de código para **C#**, **Java** e **Rust**

## 15 de maio de 2024

### ✨ Novidades

- Os pontos de extremidade [Create Contact](/api/reference/contacts_api/post_contacts), [Edit Contact](/api/reference/contacts_api/post_contacts) e [Send Message](/api/reference/messages_api/post_send_messages) agora suportam o parâmetro `bot_status` para definir o status do bot associado a um contato específico.

## 11 de março de 2024

### ✨ Novidades

- O endpoint [GET Contact Bot](/api/reference/contacts_api/get_contact_bot) para obter o bot associado a um contato específico.
- O endpoint [POST Contact Bot](/api/reference/contacts_api/post_contact_bot) para alterar o status do bot associado a um contato específico.

## 5 de março de 2024

### 🛠️ Alterações

- O endpoint [Get Contact By Phone] (/api/reference/contacts_api/get_contact_by_phone) agora suporta o parâmetro `channel_uuid` para pesquisar o contato por número de telefone e canal

## 22 de fevereiro de 2024

### ✨ Novidades

- Evento de webhook [Atualização de Membresia da Equipe](/api/reference/webhooks/team_events/team_membership_updated) para notificar quando um membro da equipe é adicionado ou removido de uma equipe.
- Evento de webhook [Atualização de Status do Agente](/api/reference/webhooks/agent_events/agent_status_updated) para notificar quando um agente altera seu status.

## 20 de fevereiro de 2024

### ✨ Novidades

- Adicionado um novo endpoint para listar todos os [membros da equipe](/api/reference/teams_api/get_team_members) pertencentes a uma equipe.

### 🛠️ Alterações

- O endpoint [Enviar Mensagem](/api/reference/messages_api/post_send_messages) agora suporta um parâmetro opcional `fields` para especificar quais campos incluir na resposta. Isso é útil para reduzir o tamanho da resposta e acelerar as chamadas à API. Atualmente, apenas `contact` é suportado.
 
## 14 de fevereiro de 2024

### ✨ Novidades

- O endpoint [Criar contato](/api/reference/contacts_api/post_contacts) agora suporta o parâmetro `channel_uuid` para criar um contato associado a um canal específico.

## 9 de fevereiro de 2024

### ✨ Novidades

- [API de Canais](/api/reference/channels_api/introduction) para gerenciar seus canais do Callbell de forma programática. Use este endpoint para listar, mostrar e atualizar seus canais.

### 🛠️ Alterações

- O endpoint [Enviar Mensagens](/api/reference/messages_api/post_send_messages) agora suporta o parâmetro `channel_uuid` para enviar uma mensagem para um canal específico.

## 11 de janeiro de 2024

### ✨ Novidades

- Endpoints [Abrir Conversa de Contato](/api/reference/contacts_api/post_contact_conversation_open) e [Fechar Conversa de Contato](/api/reference/contacts_api/post_contact_conversation_close) para abrir e fechar uma conversa associada a um contato.

## 8 de janeiro de 2024

### ✨ Novidades

Adicionadas informações e exemplos sobre como usar o Callbell com o Zapier.

## 4 de janeiro de 2024

### ✨ Novidades

- [API de Mensagens de Contato](/api/reference/contacts_api/get_contact_messages) para buscar todas as mensagens de um contato. Este endpoint é útil para buscar todas as mensagens de um contato, o resultado é paginado e ordenado por data.

## 19 de dezembro de 2023

### ✨ Novidades

- Adicionado `team_uuid` às solicitações de [envio de mensagem](/api/reference/messages_api/post_send_messages) e solicitações de [criação](/api/reference/contacts_api/post_contacts) e [atualização](/api/reference/contacts_api/patch_contacts) de contato. Isso permite atribuir um contato a uma equipe via API.

## 14 de dezembro de 2023

### 🛠️ Alterações

- O evento de webhook [Mensagem Criada](/api/reference/webhooks/message_events/message_created) agora inclui a referência completa do `contact`. Isso é útil para ter informações adicionais sobre o contato sem precisar fazer uma chamada extra à API.

## 30 de novembro de 2023

### ✨ Novidades

- Evento de webhook [Conversa Aberta](/api/reference/webhooks/conversation_events/conversation_opened)
- Evento de webhook [Conversa Fechada](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 de novembro de 2023

### ✨ Novidades

- [Endpoint de Equipes da API](/api/reference/teams_api/introduction)

## 29 de junho de 2023

### 🛠️ Alterações

- Permitir enviar [Mensagens de Modelos Multi-Variáveis](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 de junho de 2023

### ✨ Novidades

- O objeto [`MessageSendRequest`](/api/reference/object_types/message_send_request) agora inclui um novo atributo: `messageStatusPayload`. Este atributo fornece o payload de status para a mensagem correspondente, obtido diretamente da integração.
- Este atributo é útil ao [buscar atualizações de status para uma mensagem](/api/reference/messages_api/get_message_status).
- Para fins de solução de problemas, é possível acessar `messageStatusPayload` também via Evento de webhook [Atualização de Status da Mensagem](/api/reference/webhooks/message_events/message_status_updated).

## 5 de abril de 2023

### ✨ Novidades

- O atributo `assignedUser` foi adicionado ao objeto [Contact](/api/reference/object_types/contact).
- Agora é possível atribuir usuários a um contato durante a criação ou atualização, fornecendo o parâmetro `assigned_user` com o email de um usuário (por exemplo, `joao.silva@email.com`). Certifique-se de que o email fornecido corresponda a um usuário confirmado em sua conta.
- Para desatribuir um usuário de um contato durante uma atualização, inclua o parâmetro `unassign_user` no corpo da solicitação e defina seu valor como true. Essa ação removerá o usuário atribuído do contato.

## 3 de março de 2023

### ✨ Novidades

- Snippets de código multi-idioma (`curl`, `node`, `go`, `ruby`, `php`, `python`) para todas as solicitações
- Seção de Notas de Lançamento

### 🛠️ Alterações

- [Contato](/api/reference/object_types/contact) agora inclui `custom_fields`
- `custom_fields`, `tags` podem ser passados no corpo ao [criar](/api/reference/contacts_api/post_contacts) ou [atualizar](/api/reference/contacts_api/post_contacts) um contato
- `phone_number` de [Contato](/api/reference/object_types/contact) não pode ser atualizado mais

## 17 de janeiro de 2023

### ✨ Novidades

- [API de Modelos](/api/reference/template_messages_api/introduction)

### 🛠️ Alterações

- Permitir enviar [Mensagens de Modelo](/api/reference/messages_api/post_send_messages#send-template-messages)

## 11 de novembro de 2022

### ✨ Novidades

- [API de Autenticação](/api/reference/auth_api/introduction)

## 18 de outubro de 2022

### ✨ Novidades

- [API de Webhooks](/api/reference/webhooks_api/introduction)