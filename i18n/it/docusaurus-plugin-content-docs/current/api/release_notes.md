---
sidebar_position: 4
---

# Note di rilascio

Un elenco di tutte le modifiche e i miglioramenti introdotti nella nostra API. Utilizzatelo per controllare ogni volta che vengono aggiunti nuovi endpoint o che vengono apportate modifiche.

## 30 novembre 2023

### ✨ Cosa c'è di nuovo

- Evento Webhook [Conversazione aperta](/api/reference/webhooks/conversation_events/conversation_opened)
- Evento webhook [Conversazione chiusa](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 novembre 2023

### ✨ Cosa c'è di nuovo

- Endpoint dell'API Teams](/api/reference/teams_api/introduction)

## 29 giugno 2023

### 🛠️ Modifiche

- Consentire l'invio di [messaggi modello multivariabili] (/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 giugno 2023

### ✨ Cosa c'è di nuovo

- L'oggetto [`MessageSendRequest`](/api/reference/object_types/message_send_request) ora include un nuovo attributo: `messageStatusPayload`. Questo attributo fornisce il payload di stato per il messaggio corrispondente, proveniente direttamente dall'integrazione.
- Questo attributo è utile quando [si recuperano gli aggiornamenti di stato di un messaggio] (/api/reference/messages_api/get_message_status).
- Per la risoluzione dei problemi, è possibile accedere a `messageStatusPayload` anche tramite l'evento [Message Status Update Webhook] (/api/reference/webhooks/message_events/message_status_updated).

## 5 aprile 2023

### ✨ Novità

- L'attributo `assignedUser` è stato aggiunto all'oggetto [Contact](/api/reference/object_types/contact)
- Gli utenti possono ora essere assegnati a un contatto durante la creazione o l'aggiornamento, fornendo al parametro assigned_user l'email dell'utente (ad esempio, `john.doe@email.com`). Assicurarsi che l'email fornita corrisponda a un utente confermato nel proprio account.
- Per disassegnare un utente da un contatto durante un aggiornamento, includere il parametro unassign_user nel corpo della richiesta e impostare il suo valore su true. Questa azione rimuoverà l'utente assegnato dal contatto.

## 3 marzo 2023

### ✨ Novità

- Snippet di codice multilingue (`curl`, `node`, `go`, `ruby`, `php`, `python`) per tutte le richieste
- Sezione Note di rilascio

### 🛠️ Modifiche

- [Contact](/api/reference/object_types/contact) ora include `custom_fields`
- `custom_fields`, `tags` possono essere passati nel corpo quando si [crea](/api/reference/contacts_api/post_contacts) o [crea](/api/reference/contacts_api/post_contacts) un contatto
- Il `numero_di_telefono` di [Contact](/api/reference/object_types/contact) non può più essere aggiornato

## 17 gennaio 2023

### ✨ Cosa c'è di nuovo

- API dei template](/api/reference/template_messages_api/introduzione)

### 🛠️ Modifiche

- Consentire l'invio di [Messaggi dei template](/api/reference/messages_api/post_send_messages#send-template-messages)

## 11 novembre 2022

### ✨ Cosa c'è di nuovo

- [Auth API](/api/reference/auth_api/introduzione)

## 18 ottobre 2022

### ✨ Cosa c'è di nuovo

- API Webhooks](/api/reference/webhooks_api/introduzione)
