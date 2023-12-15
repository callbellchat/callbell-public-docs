---
sidebar_position: 4
---

# Note di rilascio

Un elenco di tutti i cambiamenti e miglioramenti introdotti nella nostra API. Utilizzalo per verificare quando vengono aggiunti nuovi endpoint o vengono apportate modifiche.

## 14 dicembre 2023

### 🛠️ Cambiamenti

- [Evento webBook di creazione messaggio](/api/reference/webhooks/message_events/message_created) ora include il riferimento `contact`. Questo è utile per avere ulteriori informazioni sul contatto senza dover effettuare una chiamata API aggiuntiva.

## 30 novembre 2023

### ✨ Novità

- [Evento WebBook conversazione aperta](/api/reference/webhooks/conversation_events/conversation_opened)
- [Evento WebBook conversazione chiusa](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 novembre 2023

### ✨ Novità

- [Endpoint delle squadre API](/api/reference/teams_api/introduction)

## 29 giugno 2023

### 🛠️ Cambiamenti

- Consentire l'invio di [messaggi di modello con variabili multiple](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 giugno 2023

### ✨ Novità

- L'oggetto [`MessageSendRequest`](/api/reference/object_types/message_send_request) ora include un nuovo attributo: `messageStatusPayload`. Questo attributo fornisce il payload dello stato del messaggio corrispondente, ottenuto direttamente dall'integrazione.
- Questo attributo è utile quando [si recuperano gli aggiornamenti dello stato di un messaggio](/api/reference/messages_api/get_message_status).
- A scopo di risoluzione dei problemi, `messageStatusPayload` può essere accessibile anche tramite l'[Evento del webhook di aggiornamento dello stato del messaggio](/api/reference/webhooks/message_events/message_status_updated).

## 5 aprile 2023

### ✨ Novità

- Nell'oggetto `assignedUser` è stato aggiunto l'attributo [Contact](/api/reference/object_types/contact)
- Ora è possibile assegnare utenti a un contatto durante la creazione o l'aggiornamento fornendo il parametro assigned_user con l'email di un utente (ad es. `john.doe@email.com`). Assicurarsi che l'email fornita corrisponda a un utente confermato nel proprio account.
- Per rimuovere l'assegnazione di un utente da un contatto durante un aggiornamento, includere il parametro unassign_user nel corpo della richiesta e impostare il suo valore su true. Questa azione rimuoverà l'utente assegnato dal contatto.

## 3 marzo 2023

### ✨ Novità

- Esempi di codice multilingue (`curl`, `node`, `go`, `ruby`, `php`, `python`) per tutte le richieste
- Sezione Note di rilascio

### 🛠️ Cambiamenti

- [Contact](/api/reference/object_types/contact) ora include `custom_fields`
- `custom_fields` e `tags` possono essere passati nel body quando si [crea](/api/reference/contacts_api/post_contacts) o [aggiorna](/api/reference/contacts_api/post_contacts) un contatto
- Il campo `phone_number` di [Contact](/api/reference/object_types/contact) non può più essere aggiornato

## 17 gennaio 2023

### ✨ Novità

- [API dei modelli](/api/reference/template_messages_api/introduction)

### 🛠️ Cambiamenti

- Consentire l'invio di [messaggi di modello](/api/reference/messages_api/post_send_messages#send-template-messages)

## 11 novembre 2022

### ✨ Novità

- [API di autenticazione](/api/reference/auth_api/introduction)

## 18 ottobre 2022

### ✨ Novità

- [API dei webhook](/api/reference/webhooks_api/introduction)