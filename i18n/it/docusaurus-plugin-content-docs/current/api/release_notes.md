---
sidebar_position: 4
---

# Note sulla versione

Un elenco di tutti i cambiamenti e miglioramenti introdotti nella nostra API. Utilizzalo per verificare quando vengono aggiunti nuovi endpoint o vengono apportate modifiche.

## 11 gennaio 2024

### ✨ Cosa c'è di nuovo

- Endpoint [Apri conversazione contatto](/api/reference/contacts_api/post_contact_conversation_open) e [Chiudi conversazione contatto](/api/reference/contacts_api/post_contact_conversation_close) per aprire e chiudere una conversazione associata a un contatto.

## 8 gennaio 2024

### ✨ Cosa c'è di nuovo

Aggiunte informazioni ed esempi su come utilizzare Callbell con Zapier.

## 4 gennaio 2024

### ✨ Cosa c'è di nuovo

- [API dei messaggi dei contatti](/api/reference/contacts_api/get_contact_messages) per recuperare tutti i messaggi di un contatto. Questo endpoint è utile per recuperare tutti i messaggi di un contatto, il risultato è paginato e ordinato per data.

## 19 dicembre 2023

### ✨ Cosa c'è di nuovo

- Aggiunto `team_uuid` alle richieste di [invio messaggio](/api/reference/messages_api/post_send_messages) e alle richieste di [creazione](/api/reference/contacts_api/post_contacts) e [aggiornamento](/api/reference/contacts_api/patch_contacts) di contatti. Questo ti permette di assegnare un contatto a un team tramite API.

## 14 dicembre 2023

### 🛠️ Cambiamenti

- L'evento di webhook [Messaggio creato](/api/reference/webhooks/message_events/message_created) ora include l'intero riferimento al `contatto`. Questo è utile per avere ulteriori informazioni sul contatto senza dover eseguire una chiamata API aggiuntiva.

## 30 novembre 2023

### ✨ Cosa c'è di nuovo

- [Evento Webhook Apertura conversazione](/api/reference/webhooks/conversation_events/conversation_opened)
- [Evento Webhook Chiusura conversazione](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 novembre 2023

### ✨ Cosa c'è di nuovo

- [Endpoint API dei Team](/api/reference/teams_api/introduction)

## 29 giugno 2023

### 🛠️ Cambiamenti

- Consentire di inviare [Messaggi con template multi-variabili](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 giugno 2023

### ✨ Cosa c'è di nuovo

- L'oggetto [`MessageSendRequest`](/api/reference/object_types/message_send_request) ora include un nuovo attributo: `messageStatusPayload`. Questo attributo fornisce lo stato del messaggio corrispondente, proveniente direttamente dall'integrazione.
- Questo attributo è utile quando [si recuperano gli aggiornamenti dello stato per un messaggio](/api/reference/messages_api/get_message_status).
- A scopo di risoluzione dei problemi, `messageStatusPayload` può anche essere accessibile tramite l'[Evento Webhook Aggiornamento stato messaggio](/api/reference/webhooks/message_events/message_status_updated).

## 5 aprile 2023

### ✨ Cosa c'è di nuovo

- È stato aggiunto l'attributo `assignedUser` all'oggetto [Contatto](/api/reference/object_types/contact)
- Ora è possibile assegnare un utente a un contatto durante la creazione o l'aggiornamento fornendo il parametro `assigned_user` con l'email di un utente (ad es. `john.doe@email.com`). Assicurarsi che l'email fornita corrisponda a un utente confermato nel proprio account.
- Per rimuovere un utente da un contatto durante un aggiornamento, includere il parametro `unassign_user` nel corpo della richiesta e impostare il suo valore su `true`. Questa azione rimuoverà l'utente assegnato dal contatto.

## 3 marzo 2023

### ✨ Cosa c'è di nuovo

- Codici di esempio in multi-lingua (`curl`, `node`, `go`, `ruby`, `php`, `python`) per tutte le richieste
- Sezione Note sulla versione

### 🛠️ Cambiamenti

- [Contatto](/api/reference/object_types/contact) ora include `custom_fields`
- I `custom_fields` e le `tags` possono essere passate nel corpo della richiesta durante la [creazione](/api/reference/contacts_api/post_contacts) o l'[aggiornamento](/api/reference/contacts_api/post_contacts) di un contatto
- Il `phone_number` di [Contatto](/api/reference/object_types/contact) non può più essere aggiornato

## 17 gennaio 2023

### ✨ Cosa c'è di nuovo

- [API dei modelli](/api/reference/template_messages_api/introduction)

### 🛠️ Cambiamenti

- Consentire di inviare [Messaggi con template](/api/reference/messages_api/post_send_messages#send-template-messages)

## 11 novembre 2022

### ✨ Cosa c'è di nuovo

- [API di autenticazione](/api/reference/auth_api/introduction)

## 18 ottobre 2022

### ✨ Cosa c'è di nuovo

- [API dei Webhook](/api/reference/webhooks_api/introduction)