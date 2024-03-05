---
sidebar_position: 4
---

# Notas de lançamento

Uma lista de todas as mudanças e melhorias que foram introduzidas na nossa API. Use para verificar quando novos endpoints são adicionados, ou quando ocorrem alterações.

## 5 de março de 2024

### 🛠️ Mudanças

- O endpoint [Obter Contato por Telefone](/api/reference/contacts_api/get_contact_by_phone) agora suporta o parâmetro `channel_uuid` para pesquisar o contato pelo número de telefone e canal.

## 22 de fevereiro de 2024

### ✨ O que há de novo

- Evento de webhook [Membros da Equipe Atualizados](/api/reference/webhooks/team_events/team_membership_updated) para notificar quando um membro da equipe é adicionado ou removido de uma equipe.
- Evento de webhook [Status do Agente Atualizado](/api/reference/webhooks/agent_events/agent_status_updated) para notificar quando um agente altera seu status.

## 20 de fevereiro de 2024

### ✨ O que há de novo

- Adicionado um novo endpoint para listar todos os [membros da equipe](/api/reference/teams_api/get_team_members) pertencentes a uma equipe.

### 🛠️ Mudanças

- O endpoint [Enviar Mensagem](/api/reference/messages_api/post_send_messages) agora suporta um parâmetro opcional `fields` para especificar quais campos incluir na resposta. Isso é útil para reduzir o tamanho da resposta e acelerar as chamadas da API. Atualmente, apenas `contact` é suportado.
 
## 14 de fevereiro de 2024

### ✨ O que há de novo

- O endpoint [Criar contato](/api/reference/contacts_api/post_contacts) agora suporta o parâmetro `channel_uuid` para criar um contato associado a um canal específico.

## 9 de fevereiro de 2024

### ✨ O que há de novo

- [API de Canais](/api/reference/channels_api/introduction) para gerenciar seus canais do Callbell programaticamente. Use este endpoint para listar, mostrar e atualizar seus canais.

### 🛠️ Mudanças

- O endpoint [Enviar Mensagens](/api/reference/messages_api/post_send_messages) agora suporta o parâmetro `channel_uuid` para enviar uma mensagem para um canal específico.

## 11 de janeiro de 2024

### ✨ O que há de novo

- Endpoints [Abrir Conversa do Contato](/api/reference/contacts_api/post_contact_conversation_open) e [Fechar Conversa do Contato](/api/reference/contacts_api/post_contact_conversation_close) para abrir e fechar uma conversa associada a um contato.

## 8 de janeiro de 2024

### ✨ O que há de novo

Adicionadas informações e exemplos sobre como usar o Callbell com o Zapier.

## 4 de janeiro de 2024

### ✨ O que há de novo

- [API de Mensagens do Contato](/api/reference/contacts_api/get_contact_messages) para buscar todas as mensagens de um contato. Este endpoint é útil para buscar todas as mensagens de um contato, o resultado é paginado e ordenado por data.

## 19 de dezembro de 2023

### ✨ O que há de novo

- Adicionado `team_uuid` para a criação de [solicitações de envio de mensagem](/api/reference/messages_api/post_send_messages) e solicitações de criação e atualização de contatos [creation](/api/reference/contacts_api/post_contacts) e [update](/api/reference/contacts_api/patch_contacts). Isso permite atribuir um contato a uma equipe por meio da API.

## 14 de dezembro de 2023

### 🛠️ Mudanças

- O evento de webhook [Mensagem Criada](/api/reference/webhooks/message_events/message_created) agora inclui a referência completa do `contact`. Isso é útil para ter mais informações sobre o contato sem precisar fazer uma chamada extra à API.

## 30 de novembro de 2023

### ✨ O que há de novo

- Evento de webhook [Conversa Aberta](/api/reference/webhooks/conversation_events/conversation_opened)
- Evento de webhook [Conversa Fechada](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 de novembro de 2023

### ✨ O que há de novo

- [Endpoint de Equipes](/api/reference/teams_api/introduction)

## 29 de junho de 2023

### 🛠️ Mudanças

- Permitir enviar [Mensagens de Modelo com Múltiplas Variáveis](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 de junho de 2023

### ✨ O que há de novo

- O objeto [`MessageSendRequest`](/api/reference/object_types/message_send_request) agora inclui um novo atributo: `messageStatusPayload`. Este atributo fornece os dados de status para a mensagem correspondente, obtidos diretamente da integração.
- Este atributo é útil ao [buscar atualizações de status para uma mensagem](/api/reference/messages_api/get_message_status).
- Para fins de solução de problemas, `messageStatusPayload` também pode ser acessado por meio do evento de webhook [Atualização de Status da Mensagem](/api/reference/webhooks/message_events/message_status_updated).

## 5 de abril de 2023

### ✨ O que há de novo

- O atributo `assignedUser` foi adicionado ao objeto [Contato](/api/reference/object_types/contact)
- Agora é possível atribuir usuários a um contato durante a criação ou atualização, fornecendo o parâmetro `assigned_user` com o email do usuário (por exemplo, `e-mail@exemplo.com`). Certifique-se de que o email fornecido corresponde a um usuário confirmado em sua conta.
- Para desatribuir um usuário de um contato durante uma atualização, inclua o parâmetro `unassign_user` no corpo da solicitação e defina seu valor como true. Essa ação removerá o usuário atribuído do contato.

## 3 de março de 2023

### ✨ O que há de novo

- Snippets de código em vários idiomas (`curl`, `node`, `go`, `ruby`, `php`, `python`) para todas as solicitações
- Seção de Notas de Lançamento

### 🛠️ Mudanças

- [Contato](/api/reference/object_types/contact) agora inclui `custom_fields`
- `custom_fields` e `tags` podem ser passados no corpo ao [criar](/api/reference/contacts_api/post_contacts) ou [atualizar](/api/reference/contacts_api/post_contacts) um contato
- `phone_number` do [Contato](/api/reference/object_types/contact) não pode mais ser atualizado

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