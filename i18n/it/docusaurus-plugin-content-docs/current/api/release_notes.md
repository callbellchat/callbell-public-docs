---
sidebar_position: 4
---

# Note di rilascio

Un elenco di tutti i cambiamenti e miglioramenti introdotti nella nostra API. Utilizzalo per verificare quando vengono aggiunti nuovi endpoint o apportate modifiche.

## 14 febbraio 2024

### ✨ Novità

- L'endpoint [Crea contatto](/api/reference/contacts_api/post_contacts) supporta ora il parametro `channel_uuid` per creare un contatto associato a un canale specifico.

## 9 febbraio 2024

### ✨ Novità

- L'API dei canali ([Channels API](/api/reference/channels_api/introduction)) consente di gestire i tuoi canali Callbell in modo programmato. Utilizza questo endpoint per elencare, mostrare e aggiornare i tuoi canali.

### 🛠️ Modifiche

- L'endpoint [Invia messaggi](/api/reference/messages_api/post_send_messages) supporta ora il parametro `channel_uuid` per inviare un messaggio a un canale specifico.

## 11 gennaio 2024

### ✨ Novità

- Gli endpoint [Apri conversazione del contatto](/api/reference/contacts_api/post_contact_conversation_open) e [Chiudi conversazione del contatto](/api/reference/contacts_api/post_contact_conversation_close) consentono di aprire e chiudere una conversazione associata a un contatto.

## 8 gennaio 2024

### ✨ Novità

Aggiunte informazioni ed esempi su come utilizzare Callbell con Zapier.

## 4 gennaio 2024

### ✨ Novità

- L'endpoint [API messaggi del contatto](/api/reference/contacts_api/get_contact_messages) consente di recuperare tutti i messaggi di un contatto. Questo endpoint è utile per recuperare tutti i messaggi di un contatto, il risultato è paginato e ordinato per data.

## 19 dicembre 2023

### ✨ Novità

- Aggiunto `team_uuid` alle richieste di [invio messaggio](/api/reference/messages_api/post_send_messages) e di [creazione](/api/reference/contacts_api/post_contacts) e [aggiornamento](/api/reference/contacts_api/patch_contacts) contatto. Ciò consente di assegnare un contatto a un team tramite API.

## 14 dicembre 2023

### 🛠️ Modifiche

- L'evento webhook [Message Created](/api/reference/webhooks/message_events/message_created) ora include tutto il riferimento al "contatto". Questo è utile per avere ulteriori informazioni sul contatto senza dover eseguire una chiamata API extra.

## 30 novembre 2023

### ✨ Novità

- Eventi webhook [Conversazione aperta](/api/reference/webhooks/conversation_events/conversation_opened)
- Eventi webhook [Conversazione chiusa](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 novembre 2023

### ✨ Novità

- Endpoint [API dei team](/api/reference/teams_api/introduction)

## 29 giugno 2023

### 🛠️ Modifiche

- Consentire l'invio di [Messaggi con modello a variabili multiple](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 giugno 2023

### ✨ Novità

- L'oggetto [`MessageSendRequest`](/api/reference/object_types/message_send_request) include ora un nuovo attributo: `messageStatusPayload`. Questo attributo fornisce il payload dello stato del messaggio corrispondente, proveniente direttamente dall'integrazione.
- Questo attributo è utile quando si recuperano gli aggiornamenti dello stato per un messaggio tramite [get_message_status](/api/reference/messages_api/get_message_status).
- A scopo di risoluzione dei problemi, `messageStatusPayload` può essere anche accessibile tramite l'evento webhook [Message Status Update](/api/reference/webhooks/message_events/message_status_updated).

## 5 aprile 2023

### ✨ Novità

- All'oggetto [Contact](/api/reference/object_types/contact) è stato aggiunto l'attributo `assignedUser`.
- È ora possibile assegnare utenti a un contatto durante la creazione o l'aggiornamento fornendo il parametro `assigned_user` con l'email di un utente (esempio: `john.doe@email.com`). Assicurati che l'email fornita corrisponda a un utente confermato nel tuo account.
- Per annullare l'assegnazione di un utente a un contatto durante un aggiornamento, includi il parametro `unassign_user` nel corpo della richiesta e impostane il valore su `true`. Quest'azione rimuoverà l'utente assegnato dal contatto.

## 3 marzo 2023

### ✨ Novità

- Snippet di codice multilingua (`curl`, `node`, `go`, `ruby`, `php`, `python`) per tutte le richieste
- Sezione Note di rilascio

### 🛠️ Modifiche

- [Contact](/api/reference/object_types/contact) include ora `custom_fields`
- È possibile passare `custom_fields` e `tags` nel corpo della richiesta quando si [crea](/api/reference/contacts_api/post_contacts) o [aggiorna](/api/reference/contacts_api/patch_contacts) un contatto
- Non è più possibile aggiornare il campo `phone_number` del [Contact](/api/reference/object_types/contact)

## 17 gennaio 2023

### ✨ Novità

- [API dei modelli](/api/reference/template_messages_api/introduction)

### 🛠️ Modifiche

- Consentire l'invio di [Messaggi con modello](/api/reference/messages_api/post_send_messages#send-template-messages)

## 11 novembre 2022

### ✨ Novità

- [API di autenticazione](/api/reference/auth_api/introduction)

## 18 ottobre 2022

### ✨ Novità

- [API dei collegamenti](/api/reference/webhooks_api/introduction)