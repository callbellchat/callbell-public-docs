---
sidebar_position: 4
---

# Notas de lançamento

Uma lista de todas as alterações e melhorias que foram introduzidas em nossa API. Use para verificar sempre que novos pontos de extremidade são adicionados ou alterações são feitas.

## 11 de janeiro de 2024

### ✨ Novidades

- [Abrir Conversa de Contato](/api/reference/contacts_api/post_contact_conversation_open) e pontos de extremidade [Fechar Conversa de Contato](/api/reference/contacts_api/post_contact_conversation_close) para abrir e fechar uma conversa associada a um contato.

## 8 de janeiro de 2024

### ✨ Novidades

Adicionadas informações e exemplos sobre como usar o Callbell com o Zapier.

## 4 de janeiro de 2024

### ✨ Novidades

- [API de mensagens do contato](/api/reference/contacts_api/get_contact_messages) para buscar todas as mensagens de um contato. Este ponto de extremidade é útil para buscar todas as mensagens de um contato, o resultado é paginado e ordenado por data.

## 19 de dezembro de 2023

### ✨ Novidades

- Adicionado `team_uuid` para solicitações de [envio de mensagens](/api/reference/messages_api/post_send_messages) e criação de contato [creation](/api/reference/contacts_api/post_contacts) e solicitações de [atualização](/api/reference/contacts_api/patch_contacts). Isso permite que você atribua um contato a uma equipe via API.

## 14 de dezembro de 2023

### 🛠️ Mudanças

- O evento Webhook [Mensagem Criada](/api/reference/webhooks/message_events/message_created) agora inclui toda a referência `contact`. Isso é útil para obter mais informações sobre o contato sem ter que fazer uma chamada extra para a API.

## 30 de novembro de 2023

### ✨ Novidades

- [Evento Webhook de Conversa Aberta](/api/reference/webhooks/conversation_events/conversation_opened)
- [Evento Webhook de Conversa Fechada](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 de novembro de 2023

### ✨ Novidades

- [Ponto de Extremidade da API de Equipes](/api/reference/teams_api/introduction)

## 29 de junho de 2023

### 🛠️ Mudanças

- Permitir o envio de [Mensagens de Modelo com Múltiplas Variáveis](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 de junho de 2023

### ✨ Novidades

- O objeto [`MessageSendRequest`](/api/reference/object_types/message_send_request) agora inclui um novo atributo: `messageStatusPayload`. Este atributo fornece o payload de status para a mensagem correspondente, obtido diretamente da integração.
- Este atributo é útil ao buscar atualizações de status para uma mensagem (/api/reference/messages_api/get_message_status).
- Para fins de solução de problemas, `messageStatusPayload` também pode ser acessado por meio do [Evento Webhook de Atualização de Status da Mensagem](/api/reference/webhooks/message_events/message_status_updated).

## 5 de abril de 2023

### ✨ Novidades

- O atributo `assignedUser` foi adicionado ao objeto [Contato](/api/reference/object_types/contact)
- Os usuários agora podem ser atribuídos a um contato durante a criação ou atualização, fornecendo o parâmetro assigned_user com o email de um usuário (por exemplo, `john.doe@email.com`). Certifique-se de que o email fornecido corresponda a um usuário confirmado em sua conta.
- Para desatribuir um usuário de um contato durante uma atualização, inclua o parâmetro unassign_user no corpo da solicitação e defina seu valor como true. Essa ação removerá o usuário atribuído do contato.

## 3 de março de 2023

### ✨ Novidades

- Trechos de código em vários idiomas (`curl`, `node`, `go`, `ruby`, `php`, `python`) para todas as solicitações
- Seção de Notas de Lançamento

### 🛠️ Mudanças

- O [Contato](/api/reference/object_types/contact) agora inclui `custom_fields`
- `custom_fields`, `tags` podem ser passados no corpo ao [criar](/api/reference/contacts_api/post_contacts) ou [atualizar](/api/reference/contacts_api/post_contacts) um contato
- `phone_number` do [Contato](/api/reference/object_types/contact) não pode mais ser atualizado

## 17 de janeiro de 2023

### ✨ Novidades

- [API de Modelos](/api/reference/template_messages_api/introduction)

### 🛠️ Mudanças

- Permitir o envio de [Mensagens de Modelo](/api/reference/messages_api/post_send_messages#send-template-messages)

## 11 de novembro de 2022

### ✨ Novidades

- [API de Autenticação](/api/reference/auth_api/introduction)

## 18 de outubro de 2022

### ✨ Novidades

- [API de Webhooks](/api/reference/webhooks_api/introduction)