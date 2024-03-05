---

sidebar_position: 4

# Note di rilascio

Un elenco di tutte le modifiche e migliorie introdotte nella nostra API. Utilizzalo per verificare quando vengono aggiunti nuovi endpoint, o vengono apportate modifiche.

## 5 marzo 2024

### 🛠️ Modifiche

- L'endpoint [Ottieni contatto per numero di telefono](/api/reference/contacts_api/get_contact_by_phone) supporta ora il parametro `channel_uuid` per cercare il contatto per numero di telefono e canale.

## 22 febbraio 2024

### ✨ Novità

- Evento webhook di aggiornamento della membership del team [Team Membership Updated](/api/reference/webhooks/team_events/team_membership_updated) per notificare quando un membro del team viene aggiunto o rimosso da un team.
- Evento webhook di aggiornamento dello stato dell'agente [Agent Status Updated](/api/reference/webhooks/agent_events/agent_status_updated) per notificare quando un agente cambia il proprio stato.

## 20 febbraio 2024

### ✨ Novità

- Aggiunto un nuovo endpoint per elencare tutti i [membri del team](/api/reference/teams_api/get_team_members) appartenenti a un team.

### 🛠️ Modifiche

- L'endpoint [Invia messaggio](/api/reference/messages_api/post_send_messages) supporta ora il parametro opzionale `fields` per specificare quali campi includere nella risposta. Questo è utile per ridurre la dimensione della risposta e velocizzare le chiamate API. Attualmente, è supportato solo `contact`.

## 14 febbraio 2024

### ✨ Novità

- L'endpoint [Crea contatto](/api/reference/contacts_api/post_contacts) supporta ora il parametro `channel_uuid` per creare un contatto associato a un canale specifico.

## 9 febbraio 2024

### ✨ Novità

- [API dei canali](/api/reference/channels_api/introduction) per gestire i tuoi canali di Callbell in modo programmatico. Utilizza questo endpoint per elencare, mostrare e aggiornare i tuoi canali.

### 🛠️ Modifiche

- L'endpoint [Invia messaggi](/api/reference/messages_api/post_send_messages) supporta ora il parametro `channel_uuid` per inviare un messaggio a un canale specifico.

## 11 gennaio 2024

### ✨ Novità

- Endpoint [Contact Conversation Open](/api/reference/contacts_api/post_contact_conversation_open) e [Contact Conversation Close](/api/reference/contacts_api/post_contact_conversation_close) per aprire e chiudere una conversazione associata a un contatto.

## 8 gennaio 2024

### ✨ Novità

Aggiunte informazioni ed esempi su come utilizzare Callbell con Zapier.

## 4 gennaio 2024

### ✨ Novità

- [API messaggi contatto](/api/reference/contacts_api/get_contact_messages) per recuperare tutti i messaggi di un contatto. Questo endpoint è utile per recuperare tutti i messaggi di un contatto, il risultato è paginato e ordinato per data.

## 19 dicembre 2023

### ✨ Novità

- Aggiunto `team_uuid` alle richieste di [invio messaggi](/api/reference/messages_api/post_send_messages) e di [creazione](/api/reference/contacts_api/post_contacts) e [aggiornamento](/api/reference/contacts_api/patch_contacts) dei contatti. Questo ti consente di assegnare un contatto a un team tramite API.

## 14 dicembre 2023

### 🛠️ Modifiche

- L'evento webhook [Message Created](/api/reference/webhooks/message_events/message_created) ora include l'intero riferimento `contact`. Questo è utile per avere ulteriori informazioni sul contatto senza dover effettuare una chiamata API extra.

## 30 novembre 2023

### ✨ Novità

- Evento webhook di apertura conversazione [Conversation Opened](/api/reference/webhooks/conversation_events/conversation_opened)
- Evento webhook di chiusura conversazione [Conversation Closed](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 novembre 2023

### ✨ Novità

- [Endpoint API dei team](/api/reference/teams_api/introduction)

## 29 giugno 2023

### 🛠️ Modifiche

- Consenti di inviare [Messaggi di modelli multi-variabili](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 giugno 2023

### ✨ Novità

- L'oggetto [`MessageSendRequest`](/api/reference/object_types/message_send_request) ora include un nuovo attributo: `messageStatusPayload`. Questo attributo fornisce il payload dello stato per il messaggio corrispondente, proveniente direttamente dall'integrazione.
- Questo attributo è utile quando si [recuperano gli aggiornamenti dello stato per un messaggio](/api/reference/messages_api/get_message_status).
- A scopo di risoluzione dei problemi, `messageStatusPayload` può anche essere accessibile tramite l'evento webhook [Message Status Updated](/api/reference/webhooks/message_events/message_status_updated).

## 5 aprile 2023

### ✨ Novità

- L'attributo `assignedUser` è stato aggiunto all'oggetto [Contact](/api/reference/object_types/contact)
- Ora è possibile assegnare un utente a un contatto durante la creazione o l'aggiornamento fornendo il parametro `assigned_user` con l'email dell'utente (es. `john.doe@email.com`). Assicurarsi che l'email fornita corrisponda a un utente confermato nel proprio account.
- Per annullare l'assegnazione di un utente da un contatto durante un aggiornamento, includere il parametro `unassign_user` nel corpo della richiesta e impostare il suo valore su true. Questa azione rimuoverà l'utente assegnato dal contatto.

## 3 marzo 2023

### ✨ Novità

- Snippet di codice multilingue (`curl`, `node`, `go`, `ruby`, `php`, `python`) per tutte le richieste
- Sezione Note di rilascio

### 🛠️ Modifiche

- [Contatto](/api/reference/object_types/contact) include ora `custom_fields`
- `custom_fields`, `tags` possono essere passati nel corpo della richiesta durante la [creazione](/api/reference/contacts_api/post_contacts) o [creazione](/api/reference/contacts_api/post_contacts) di un contatto
- Non è più possibile aggiornare il `numero di telefono` del [Contatto](/api/reference/object_types/contact)

## 17 gennaio 2023

### ✨ Novità

- [API dei modelli](/api/reference/template_messages_api/introduction)

### 🛠️ Modifiche

- Consenti di inviare [Messaggi di modelli](/api/reference/messages_api/post_send_messages#send-template-messages)

## 11 novembre 2022

### ✨ Novità

- [API di autenticazione](/api/reference/auth_api/introduction)

## 18 ottobre 2022

### ✨ Novità

- [API Webhooks](/api/reference/webhooks_api/introduction)