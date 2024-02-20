---
sidebar_position: 4
---

# Note di rilascio

Un elenco di tutti i cambiamenti e miglioramenti introdotti nella nostra API. Utilizzatelo per verificare quando vengono aggiunti nuovi endpoint o modifiche.

## 20 febbraio 2024

### ✨ Novità

- Aggiunto un nuovo endpoint per elencare tutti i [membri del team](/api/reference/teams_api/get_team_members) appartenenti a un team.

### 🛠️ Cambiamenti

- L'endpoint [Send Message](/api/reference/messages_api/post_send_messages) supporta ora un parametro opzionale `fields` per specificare quali campi includere nella risposta. Questo è utile per ridurre le dimensioni della risposta e velocizzare le chiamate API. Attualmente è supportato solo `contact`.

## 14 febbraio 2024

### ✨ Novità

- L'endpoint [Create contact](/api/reference/contacts_api/post_contacts) supporta ora il parametro `channel_uuid` per creare un contatto associato a un canale specifico.

## 9 febbraio 2024

### ✨ Novità

- [API dei canali](/api/reference/channels_api/introduction) per gestire i tuoi canali Callbell in modo programmato. Utilizza questo endpoint per elencare, mostrare e aggiornare i tuoi canali.

### 🛠️ Cambiamenti

- L'endpoint [Send Messages](/api/reference/messages_api/post_send_messages) supporta ora il parametro `channel_uuid` per inviare un messaggio a un canale specifico.

## 11 gennaio 2024

### ✨ Novità

- Endpoint [Contact Conversation Open](/api/reference/contacts_api/post_contact_conversation_open) e [Contact Conversation Close](/api/reference/contacts_api/post_contact_conversation_close) per aprire e chiudere una conversazione associata a un contatto.

## 8 gennaio 2024

### ✨ Novità

Aggiunte informazioni ed esempi su come utilizzare Callbell con Zapier.

## 4 gennaio 2024

### ✨ Novità

- [API dei messaggi di contatto](/api/reference/contacts_api/get_contact_messages) per recuperare tutti i messaggi di un contatto. Questo endpoint è utile per recuperare tutti i messaggi di un contatto, il risultato è paginato e ordinato per data.

## 19 dicembre 2023

### ✨ Novità

- Aggiunto `team_uuid` alle richieste di [invio messaggio](/api/reference/messages_api/post_send_messages) e alle richieste di [creazione](/api/reference/contacts_api/post_contacts) e [aggiornamento](/api/reference/contacts_api/patch_contacts) dei contatti. Questo ti permette di assegnare un contatto a un team tramite l'API.

## 14 dicembre 2023

### 🛠️ Cambiamenti

- L'evento di webhook [Message Created Webhook](/api/reference/webhooks/message_events/message_created) ora include l'intero riferimento `contact`. Questo è utile per avere ulteriori informazioni sul contatto senza dover effettuare una chiamata API aggiuntiva.

## 30 novembre 2023

### ✨ Novità

- [Evento di webhook Conversation Opened](/api/reference/webhooks/conversation_events/conversation_opened)
- [Evento di webhook Conversation Closed](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 novembre 2023

### ✨ Novità

- [Endpoint API dei team](/api/reference/teams_api/introduction)

## 29 giugno 2023

### 🛠️ Cambiamenti

- Consentire l'invio di [Messaggi di template multi-variabili](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 giugno 2023

### ✨ Novità

- L'oggetto [`MessageSendRequest`](/api/reference/object_types/message_send_request) ora include un nuovo attributo: `messageStatusPayload`. Questo attributo fornisce il payload dello stato per il messaggio corrispondente, proveniente direttamente dall'integrazione.
- Questo attributo è utile quando si richiedono gli aggiornamenti dello stato per un messaggio tramite l'API.
- A scopo di risoluzione dei problemi, `messageStatusPayload` può essere anche accessibile tramite l'[Evento di webhook di aggiornamento dello stato dei messaggi](/api/reference/webhooks/message_events/message_status_updated).

## 5 aprile 2023

### ✨ Novità

- L'attributo `assignedUser` è stato aggiunto all'oggetto [Contact](/api/reference/object_types/contact)
- Ora è possibile assegnare gli utenti a un contatto durante la creazione o l'aggiornamento fornendo il parametro `assigned_user` con l'email di un utente (es. `john.doe@email.com`). Assicurati che l'email fornita corrisponda a un utente confermato nel tuo account.
- Per rimuovere un utente da un contatto durante un aggiornamento, includi il parametro `unassign_user` nel corpo della richiesta e impostane il valore su true. Questa azione rimuoverà l'utente assegnato dal contatto.

## 3 marzo 2023

### ✨ Novità

- Snippet di codice multilingue (`curl`, `node`, `go`, `ruby`, `php`, `python`) per tutte le richieste
- Sezione Note di rilascio

### 🛠️ Cambiamenti

- [Contact](/api/reference/object_types/contact) ora include `custom_fields`
- `custom_fields`, `tags` possono essere passati nel corpo delle richieste di [creazione](/api/reference/contacts_api/post_contacts) o [aggiornamento](/api/reference/contacts_api/post_contacts) di un contatto
- L'attributo `phone_number` di [Contact](/api/reference/object_types/contact) non può essere più aggiornato

## 17 gennaio 2023

### ✨ Novità

- [API dei modelli](/api/reference/template_messages_api/introduction)

### 🛠️ Cambiamenti

- Consentire l'invio di [Messaggi di template](/api/reference/messages_api/post_send_messages#send-template-messages)

## 11 novembre 2022

### ✨ Novità

- [API di autenticazione](/api/reference/auth_api/introduction)

## 18 ottobre 2022

### ✨ Novità

- [API dei Webhook](/api/reference/webhooks_api/introduction)