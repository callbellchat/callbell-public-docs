---
sidebar_position: 4
---

# Nota di rilascio

Un elenco di tutti i cambiamenti e miglioramenti che sono stati introdotti nella nostra API. Usalo per controllare quando vengono aggiunti nuovi endpoint o apportate modifiche.

## 9 febbraio 2024

### ✨ Novità

- [API dei canali](/api/reference/channels_api/introduction) per gestire i tuoi canali Callbell in modo programmato. Utilizza questo endpoint per elencare, mostrare e aggiornare i tuoi canali.

### 🛠️ Cambiamenti

- L'endpoint [Invia Messaggi](/api/reference/messages_api/post_send_messages) ora supporta il parametro `channel_uuid` per inviare un messaggio a un canale specifico.

## 11 gennaio 2024

### ✨ Novità

- Endpoint [Apri Conversazione di Contatto](/api/reference/contacts_api/post_contact_conversation_open) e [Chiudi Conversazione di Contatto](/api/reference/contacts_api/post_contact_conversation_close) per aprire e chiudere una conversazione associata a un contatto.

## 8 gennaio 2024

### ✨ Novità

Aggiunte informazioni ed esempi su come usare Callbell con Zapier.

## 4 gennaio 2024

### ✨ Novità

- [API dei messaggi dei contatti](/api/reference/contacts_api/get_contact_messages) per recuperare tutti i messaggi di un contatto. Questo endpoint è utile per recuperare tutti i messaggi di un contatto, il risultato è paginato e ordinato per data.

## 19 dicembre 2023

### ✨ Novità

- Aggiunto `team_uuid` alle richieste di [invio messaggio](/api/reference/messages_api/post_send_messages) e creazione/[aggiornamento](/api/reference/contacts_api/patch_contacts) contatto. Questo ti permette di assegnare un contatto a un team tramite l'API.

## 14 dicembre 2023

### 🛠️ Cambiamenti

- L'evento Webhook [Messaggio Creato](/api/reference/webhooks/message_events/message_created) ora include l'intero riferimento al `contatto`. Questo è utile per avere ulteriori informazioni sul contatto senza dover effettuare una chiamata API extra.

## 30 novembre 2023

### ✨ Novità

- Evento Webhook [Conversazione Aperta](/api/reference/webhooks/conversation_events/conversation_opened)
- Evento Webhook [Conversazione Chiusa](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 novembre 2023

### ✨ Novità

- Endpoint [API dei team](/api/reference/teams_api/introduction)

## 29 giugno 2023

### 🛠️ Cambiamenti

- Consenti di inviare [Messaggi con Template Multi-Variabili](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 giugno 2023

### ✨ Novità

- L'oggetto [`MessageSendRequest`](/api/reference/object_types/message_send_request) ora include un nuovo attributo: `messageStatusPayload`. Questo attributo fornisce il payload dello stato per il messaggio corrispondente, ricavato direttamente dall'integrazione.
- Questo attributo è utile quando si richiedono aggiornamenti dello stato per un messaggio, è possibile accedere a `messageStatusPayload` tramite l'evento Webhook [Aggiornamento Stato Messaggio](/api/reference/webhooks/message_events/message_status_updated) per scopi di troubleshooting.

## 5 aprile 2023

### ✨ Novità

- L'attributo `assignedUser` è stato aggiunto all'oggetto [Contatto](/api/reference/object_types/contact)
- Ora è possibile assegnare gli utenti a un contatto durante la creazione o l'aggiornamento fornendo il parametro `assigned_user` con l'email di un utente (es. `john.doe@email.com`). Assicurarsi che l'email fornita corrisponda a un utente confermato nel proprio account.
- Per rimuovere un utente da un contatto durante un aggiornamento, includere il parametro `unassign_user` nel corpo della richiesta e impostare il suo valore su `true`. Questa azione rimuoverà l'utente assegnato dal contatto.

## 3 marzo 2023

### ✨ Novità

- Esempi di codice multi-lingua (`curl`, `node`, `go`, `ruby`, `php`, `python`) per tutte le richieste
- Sezione Note di Rilascio

### 🛠️ Cambiamenti

- [Contatto](/api/reference/object_types/contact) ora include `custom_fields`
- `custom_fields`, `tags` possono essere passati nel corpo della richiesta durante la [creazione](/api/reference/contacts_api/post_contacts) o l'[aggiornamento](/api/reference/contacts_api/post_contacts) di un contatto
- Non è più possibile aggiornare il campo `phone_number` di [Contatto](/api/reference/object_types/contact)

## 17 gennaio 2023

### ✨ Novità

- [API dei template](/api/reference/template_messages_api/introduction)

### 🛠️ Cambiamenti

- Consenti di inviare [Messaggi con Template](/api/reference/messages_api/post_send_messages#send-template-messages)

## 11 novembre 2022

### ✨ Novità

- [API di autenticazione](/api/reference/auth_api/introduction)

## 18 ottobre 2022

### ✨ Novità

- [API dei webhook](/api/reference/webhooks_api/introduction)