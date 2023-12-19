---
sidebar_position: 4
---

# Note di rilascio

Un elenco di tutte le modifiche e miglioramenti introdotti nella nostra API. Usalo per verificare quando vengono aggiunti nuovi endpoint o apportate modifiche.

## 19 dicembre 2023

### ✨ Novità

- Aggiunto `team_uuid` alle richieste di [invio messaggi](/api/reference/messages_api/post_send_messages) e alle richieste di [creazione](/api/reference/contacts_api/post_contacts) e [aggiornamento](/api/reference/contacts_api/patch_contacts) dei contatti. Questo ti consente di assegnare un contatto a un team tramite API.

## 14 dicembre 2023

### 🛠️ Modifiche

- L'evento [Messaggio creato tramite webhook](/api/reference/webhooks/message_events/message_created) ora include l'intero riferimento al contatto. Questo è utile per avere ulteriori informazioni sul contatto senza dover effettuare una chiamata API aggiuntiva.

## 30 novembre 2023

### ✨ Novità

- Evento webhook di apertura della conversazione: [Conversation Opened](/api/reference/webhooks/conversation_events/conversation_opened)
- Evento webhook di chiusura della conversazione: [Conversation Closed](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 novembre 2023

### ✨ Novità

- Endpoint API dei team: [Teams API](/api/reference/teams_api/introduction)

## 29 giugno 2023

### 🛠️ Modifiche

- Possibilità di inviare [messaggi con template a variabili multiple](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 giugno 2023

### ✨ Novità

- L'oggetto [`MessageSendRequest`](/api/reference/object_types/message_send_request) include ora un nuovo attributo: `messageStatusPayload`. Questo attributo fornisce il payload dello stato per il messaggio corrispondente, proveniente direttamente dall'integrazione.
- Questo attributo è utile quando si richiedono gli aggiornamenti dello stato per un messaggio: [fetching status updates for a message](/api/reference/messages_api/get_message_status).
- A scopo di risoluzione dei problemi, `messageStatusPayload` può essere accessibile anche tramite l'evento webhook di aggiornamento dello stato del messaggio: [Message Status Update Webhook Event](/api/reference/webhooks/message_events/message_status_updated).

## 5 aprile 2023

### ✨ Novità

- L'attributo `assignedUser` è stato aggiunto all'oggetto [Contact](/api/reference/object_types/contact).
- Ora è possibile assegnare un utente a un contatto durante la creazione o aggiornamento fornendo il parametro `assigned_user` con l'email dell'utente (ad esempio, `john.doe@email.com`). Assicurarsi che l'email fornita corrisponda a un utente confermato nel proprio account.
- Per rimuovere un utente da un contatto durante un aggiornamento, includere il parametro `unassign_user` nel corpo della richiesta e impostare il suo valore su `true`. Questa azione rimuoverà l'utente assegnato dal contatto.

## 3 marzo 2023

### ✨ Novità

- Snippet di codice multilingue (`curl`, `node`, `go`, `ruby`, `php`, `python`) per tutte le richieste
- Sezione Note di rilascio

### 🛠️ Modifiche

- L'oggetto [Contact](/api/reference/object_types/contact) include ora `custom_fields`
- `custom_fields`, `tags` possono essere passati nel corpo della richiesta durante la [creazione](/api/reference/contacts_api/post_contacts) o [aggiornamento](/api/reference/contacts_api/post_contacts) di un contatto
- Il campo `phone_number` dell'oggetto [Contact](/api/reference/object_types/contact) non può più essere aggiornato

## 17 gennaio 2023

### ✨ Novità

- API dei modelli: [Templates API](/api/reference/template_messages_api/introduction)

### 🛠️ Modifiche

- Possibilità di inviare [messaggi con template](/api/reference/messages_api/post_send_messages#send-template-messages)

## 11 novembre 2022

### ✨ Novità

- API di autenticazione: [Auth API](/api/reference/auth_api/introduction)

## 18 ottobre 2022

### ✨ Novità

- API degli webhook: [Webhooks API](/api/reference/webhooks_api/introduction)