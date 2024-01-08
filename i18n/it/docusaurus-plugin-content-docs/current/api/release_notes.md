---
sidebar_position: 4
---

# Note sulla versione

Elenco di tutti i cambiamenti e miglioramenti introdotti nella nostra API. Utilizzalo per verificare quando vengono aggiunti nuovi endpoint o apportate modifiche.

## 8 gennaio 2024

### ✨ Novità

Aggiunte informazioni ed esempi su come utilizzare Callbell con Zapier.

## 4 gennaio 2024

### ✨ Novità

- [API dei messaggi dei contatti](/api/reference/contacts_api/get_contact_messages) per recuperare tutti i messaggi di un contatto. Questo endpoint è utile per recuperare tutti i messaggi di un contatto, il risultato è suddiviso in pagine e ordinato per data.

## 19 dicembre 2023

### ✨ Novità

- Aggiunto `team_uuid` alle richieste di [invio messaggi](/api/reference/messages_api/post_send_messages) e [creazione](/api/reference/contacts_api/post_contacts) e [aggiornamento](/api/reference/contacts_api/patch_contacts) dei contatti. Ciò ti consente di assegnare un contatto a un team tramite API.

## 14 dicembre 2023

### 🛠️ Modifiche

- L'evento di webhook [Message Created](/api/reference/webhooks/message_events/message_created) ora include l'intero riferimento al `contact`. Questo è utile per avere ulteriori informazioni sul contatto senza dover eseguire una chiamata API aggiuntiva.

## 30 novembre 2023

### ✨ Novità

- Evento di webhook [Conversation Opened](/api/reference/webhooks/conversation_events/conversation_opened)
- Evento di webhook [Conversation Closed](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 novembre 2023

### ✨ Novità

- [Endpoint delle squadre API](/api/reference/teams_api/introduction)

## 29 giugno 2023

### 🛠️ Modifiche

- Consentire di inviare [Messaggi di template multi-variabili](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 giugno 2023

### ✨ Novità

- L'oggetto [`MessageSendRequest`](/api/reference/object_types/message_send_request) ora include un nuovo attributo: `messageStatusPayload`. Questo attributo fornisce il payload dello stato per il messaggio corrispondente, proveniente direttamente dall'integrazione.
- Questo attributo è utile quando si recuperano gli aggiornamenti dello stato per un messaggio tramite [fetching status updates for a message](/api/reference/messages_api/get_message_status).
- Per scopi di risoluzione dei problemi, `messageStatusPayload` può anche essere accessibile tramite l'evento di webhook [Message Status Update](/api/reference/webhooks/message_events/message_status_updated).

## 5 aprile 2023

### ✨ Novità

- All'oggetto `Contact` è stato aggiunto l'attributo `assignedUser`
- Ora è possibile assegnare utenti a un contatto durante la creazione o l'aggiornamento fornendo il parametro `assigned_user` con l'email di un utente (ad esempio, `john.doe@email.com`). Assicurarsi che l'email fornita corrisponda a un utente confermato nel proprio account.
- Per togliere un utente da un contatto durante un aggiornamento, includere il parametro `unassign_user` nel corpo della richiesta e impostare il suo valore su true. Questa azione rimuoverà l'utente assegnato dal contatto.

## 3 marzo 2023

### ✨ Novità

- Esempi di codice multilingue (`curl`, `node`, `go`, `ruby`, `php`, `python`) per tutte le richieste
- Sezione delle note sulla versione

### 🛠️ Modifiche

- [Contact](/api/reference/object_types/contact) ora include `custom_fields`
- `custom_fields`, `tags` possono essere passati nel corpo della richiesta durante la [creazione](/api/reference/contacts_api/post_contacts) o l'[aggiornamento](/api/reference/contacts_api/post_contacts) di un contatto
- `phone_number` di [Contact](/api/reference/object_types/contact) non può più essere aggiornato

## 17 gennaio 2023

### ✨ Novità

- [API dei modelli](/api/reference/template_messages_api/introduction)

### 🛠️ Modifiche

- Consentire di inviare [Messaggi di template](/api/reference/messages_api/post_send_messages#send-template-messages)

## 11 novembre 2022

### ✨ Novità

- [Auth API](/api/reference/auth_api/introduction)

## 18 ottobre 2022

### ✨ Novità

- [API dei webhooks](/api/reference/webhooks_api/introduction)