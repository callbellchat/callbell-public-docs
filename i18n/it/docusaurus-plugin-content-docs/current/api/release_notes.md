---
sidebar_position: 4
---

# Note di rilascio

Un elenco di tutti i cambiamenti e miglioramenti introdotti nella nostra API. Utilizzalo per verificare quando vengono aggiunti nuovi endpoint o apportate modifiche.

## 30 novembre 2023

### ✨ Cosa c'è di nuovo

- [Eventi di Webhook - Conversazione Aperta](/api/reference/webhooks/conversation_events/conversation_opened)
- [Eventi di Webhook - Conversazione Chiusa](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 novembre 2023

### ✨ Cosa c'è di nuovo

- [Endpoint API - Team](/api/reference/teams_api/introduction)

## 29 giugno 2023

### 🛠️ Cambiamenti

- Consente di inviare [Messaggi con Template Multi-Variabili](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 giugno 2023

### ✨ Cosa c'è di nuovo

- L'oggetto [`MessageSendRequest`](/api/reference/object_types/message_send_request) ora include un nuovo attributo: `messageStatusPayload`. Questo attributo fornisce il payload dello stato per il messaggio corrispondente, proveniente direttamente dall'integrazione.
- Questo attributo è utile quando si effettuano [aggiornamenti dello stato per un messaggio](/api/reference/messages_api/get_message_status).
- A scopo di risoluzione dei problemi, `messageStatusPayload` può essere anche accessibile tramite l'[Evento Webhook - Aggiornamento Stato Messaggio](/api/reference/webhooks/message_events/message_status_updated).

## 5 aprile 2023

### ✨ Cosa c'è di nuovo

- È stato aggiunto l'attributo `assignedUser` nell'oggetto [Contatto](/api/reference/object_types/contact).
- Ora è possibile assegnare un utente a un contatto durante la creazione o l'aggiornamento fornendo il parametro `assigned_user` con l'email di un utente (es. `john.doe@email.com`). Assicurarsi che l'email fornita corrisponda a un utente confermato nel proprio account.
- Per rimuovere un utente da un contatto durante un aggiornamento, includere il parametro `unassign_user` nel corpo della richiesta e impostare il suo valore su true. Questa azione rimuoverà l'utente assegnato dal contatto.

## 3 marzo 2023

### ✨ Cosa c'è di nuovo

- Esempi di codice multilingua (`curl`, `node`, `go`, `ruby`, `php`, `python`) per tutte le richieste
- Sezione Note di Rilascio

### 🛠️ Cambiamenti

- [Contatto](/api/reference/object_types/contact) ora include `custom_fields`
- È possibile passare i parametri `custom_fields` e `tags` nel corpo della richiesta durante la [creazione](/api/reference/contacts_api/post_contacts) o [aggiornamento](/api/reference/contacts_api/post_contacts) di un contatto
- Non è più possibile aggiornare il `phone_number` del [Contatto](/api/reference/object_types/contact)

## 17 gennaio 2023

### ✨ Cosa c'è di nuovo

- [API dei Template](/api/reference/template_messages_api/introduction)

### 🛠️ Cambiamenti

- Consente di inviare [Messaggi con Template](/api/reference/messages_api/post_send_messages#send-template-messages)

## 11 novembre 2022

### ✨ Cosa c'è di nuovo

- [API di Autenticazione](/api/reference/auth_api/introduction)

## 18 ottobre 2022

### ✨ Cosa c'è di nuovo

- [API dei Webhook](/api/reference/webhooks_api/introduction)