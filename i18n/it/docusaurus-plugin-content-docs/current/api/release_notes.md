---
sidebar_position: 4
---

# Note sul rilascio

Elenca tutti i cambiamenti e gli miglioramenti introdotti nella nostra API. Utilizzala per verificare quando vengono aggiunti nuovi endpoint o apportate modifiche.

## 4 gennaio 2024

### ✨ Novità

- [API dei messaggi di contatto](/api/reference/contacts_api/get_contact_messages) per recuperare tutti i messaggi di un contatto. Questo endpoint è utile per recuperare tutti i messaggi di un contatto, i risultati sono paginati e ordinati per data.

## 19 dicembre 2023

### ✨ Novità

- Aggiunto `team_uuid` alle richieste di [invio messaggi](/api/reference/messages_api/post_send_messages) e alle richieste di [creazione](/api/reference/contacts_api/post_contacts) e [aggiornamento](/api/reference/contacts_api/patch_contacts) dei contatti. Questo ti permette di assegnare un contatto a un team tramite API.

## 14 dicembre 2023

### 🛠️ Cambiamenti

- L'evento webhook [Messaggio creato](/api/reference/webhooks/message_events/message_created) include ora tutto il riferimento al `contatto`. Questo è utile per avere ulteriori informazioni sul contatto senza effettuare una chiamata API aggiuntiva.

## 30 novembre 2023

### ✨ Novità

- [Evento webhook di apertura conversazione](/api/reference/webhooks/conversation_events/conversation_opened)
- [Evento webhook di chiusura conversazione](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 novembre 2023

### ✨ Novità

- [Endpoint API dei team](/api/reference/teams_api/introduction)

## 29 giugno 2023

### 🛠️ Cambiamenti

- Possibilità di inviare [messaggi con template multi-variabile](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 giugno 2023

### ✨ Novità

- L'oggetto [`MessageSendRequest`](/api/reference/object_types/message_send_request) ora include un nuovo attributo: `messageStatusPayload`. Questo attributo fornisce il payload dello stato per il messaggio corrispondente, estratto direttamente dall'integrazione.
- Questo attributo è utile quando si [recuperano gli aggiornamenti dello stato di un messaggio](/api/reference/messages_api/get_message_status).
- A scopo di risoluzione dei problemi, `messageStatusPayload` può anche essere accessibile tramite l'[Evento webhook di aggiornamento stato messaggio](/api/reference/webhooks/message_events/message_status_updated).

## 5 aprile 2023

### ✨ Novità

- È stato aggiunto l'attributo `assignedUser` all'oggetto [Contatto](/api/reference/object_types/contact).
- Ora è possibile assegnare utenti a un contatto durante la creazione o l'aggiornamento, fornendo il parametro `assigned_user` con l'email di un utente (ad esempio `john.doe@esempio.com`). Assicurati che l'email fornita corrisponda a un utente confermato nel tuo account.
- Per rimuovere un utente assegnato da un contatto durante un'operazione di aggiornamento, includi il parametro `unassign_user` nel corpo della richiesta e impostane il valore su `true`. Questa azione rimuoverà l'utente assegnato dal contatto.

## 3 marzo 2023

### ✨ Novità

- Frammenti di codice multilingua (`curl`, `node`, `go`, `ruby`, `php`, `python`) per tutte le richieste.
- Sezione Note sul rilascio

### 🛠️ Cambiamenti

- [Contatto](/api/reference/object_types/contact) ora include `custom_fields`.
- `custom_fields` e `tags` possono essere passati nel corpo delle richieste di [creazione](/api/reference/contacts_api/post_contacts) o [aggiornamento](/api/reference/contacts_api/patch_contacts) di un contatto.
- Non è possibile più aggiornare il campo `phone_number` del [Contatto](/api/reference/object_types/contact).

## 17 gennaio 2023

### ✨ Novità

- [API dei template](/api/reference/template_messages_api/introduction)

### 🛠️ Cambiamenti

- Possibilità di inviare [messaggi con template](/api/reference/messages_api/post_send_messages#send-template-messages)

## 11 novembre 2022

### ✨ Novità

- [API di autenticazione](/api/reference/auth_api/introduction)

## 18 ottobre 2022

### ✨ Novità

- [API dei webhook](/api/reference/webhooks_api/introduction)