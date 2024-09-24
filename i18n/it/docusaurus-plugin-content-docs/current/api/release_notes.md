---
sidebar_position: 4
---

# Note di rilascio

Un elenco di tutte le modifiche e miglioramenti introdotti nella nostra API. Utilizzalo per controllare se sono stati aggiunti nuovi endpoint o apportate modifiche.

## 24 settembre 2024

### ✨ Novità

- Aggiunto `conversationHref` a tutti gli endpoint che restituiscono un oggetto [Contact](/api/reference/object_types/contact); questo campo rimanda alla conversazione associata al contatto nella dashboard di Callbell.
- Il campo è presente anche in tutti i webhook relativi a contatti, messaggi e conversazioni.
- Aggiunto un nuovo campo `conversation` al corpo della richiesta dell'endpoint [Send Message](/api/reference/messages_api/post_send_messages). Questo campo consente di restituire la conversazione nella risposta.

## 30 luglio 2024

### ✨ Novità

- Il campo [POST Send Messages ora supporta metadata](/api/reference/messages_api/post_send_messages#send-message-with-metadata) per inviare messaggi con coppie chiave-valore personalizzate.

## 25 luglio 2024

### ✨ Novità

- Aggiunti snippet di codice per **C#**, **Java** e **Rust**

## 15 maggio 2024

### ✨ Novità

- Gli endpoint [Crea contatto](/api/reference/contacts_api/post_contacts), [Modifica contatto](/api/reference/contacts_api/post_contacts) e [Invia messaggio](/api/reference/messages_api/post_send_messages) ora supportano il parametro `bot_status` per impostare lo stato del bot associato a un contatto specifico.

## 11 marzo 2024

### ✨ Novità

- Endpoint [GET Contact Bot](/api/reference/contacts_api/get_contact_bot) per ottenere il bot associato a un contatto specifico.
- Endpoint [POST Contact Bot](/api/reference/contacts_api/post_contact_bot) per modificare lo stato del bot associato a un contatto specifico.

## 5 marzo 2024

### 🛠️ Modifiche

- L'endpoint [Get Contact By Phone](/api/reference/contacts_api/get_contact_by_phone) ora supporta il parametro `channel_uuid` per cercare il contatto per numero di telefono e canale.

## 22 febbraio 2024

### ✨ Novità

- Evento di webhook [Team Membership Updated](/api/reference/webhooks/team_events/team_membership_updated) per notificare quando un membro del team viene aggiunto o rimosso da un team.
- Evento di webhook [Agent Status Updated](/api/reference/webhooks/agent_events/agent_status_updated) per notificare quando un agente cambia il proprio stato.

## 20 febbraio 2024

### ✨ Novità

- Aggiunto un nuovo endpoint per elencare tutti i [membri del team](/api/reference/teams_api/get_team_members) appartenenti a un team.

### 🛠️ Modifiche

- L'endpoint [Send Message](/api/reference/messages_api/post_send_messages) supporta ora un parametro opzionale `fields` per specificare quali campi includere nella risposta. Questo è utile per ridurre le dimensioni della risposta e velocizzare le chiamate API. Attualmente, è supportato solo `contact`.
 
## 14 febbraio 2024

### ✨ Novità

- L'endpoint [Create contact](/api/reference/contacts_api/post_contacts) supporta ora il parametro `channel_uuid` per creare un contatto associato a un canale specifico.

## 9 febbraio 2024

### ✨ Novità

- L'API [Channels](/api/reference/channels_api/introduction) per gestire i tuoi Canali Callbell in modo programmato. Utilizza questo endpoint per elencare, visualizzare e aggiornare i tuoi canali.

### 🛠️ Modifiche

- L'endpoint [Send Messages](/api/reference/messages_api/post_send_messages) supporta ora il parametro `channel_uuid` per inviare un messaggio a un canale specifico.

## 11 gennaio 2024

### ✨ Novità

- Endpoint [Contact Conversation Open](/api/reference/contacts_api/post_contact_conversation_open) e [Contact Conversation Close](/api/reference/contacts_api/post_contact_conversation_close) per aprire e chiudere una conversazione associata a un contatto.

## 8 gennaio 2024

### ✨ Novità

Aggiunte informazioni ed esempi su come utilizzare Callbell con Zapier.

## 4 gennaio 2024

### ✨ Novità

- L'API [Contact messages](/api/reference/contacts_api/get_contact_messages) per recuperare tutti i messaggi di un contatto. Questo endpoint è utile per recuperare tutti i messaggi di un contatto, il risultato è suddiviso in pagine e ordinato per data.

## 19 dicembre 2023

### ✨ Novità

- Aggiunto `team_uuid` alle richieste di [invio messaggi](/api/reference/messages_api/post_send_messages) e di creazione e aggiornamento [contatti](/api/reference/contacts_api/post_contacts). Ciò consente di assegnare un contatto a un team tramite API.

## 14 dicembre 2023

### 🛠️ Modifiche

- L'evento di webhook [Message Created](/api/reference/webhooks/message_events/message_created) ora include l'intero riferimento al `contact`. Questo è utile per avere ulteriori informazioni sul contatto senza dover effettuare una chiamata API aggiuntiva.

## 30 novembre 2023

### ✨ Novità

- Evento di webhook [Conversation Opened](/api/reference/webhooks/conversation_events/conversation_opened)
- Evento di webhook [Conversation Closed](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 novembre 2023

### ✨ Novità

- [Endpoint API Teams](/api/reference/teams_api/introduction)

## 29 giugno 2023

### 🛠️ Modifiche

- Consenti di inviare [Messaggi di Template Multi-Variabili](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 giugno 2023

### ✨ Novità

- L'oggetto [`MessageSendRequest`](/api/reference/object_types/message_send_request) ora include un nuovo attributo: `messageStatusPayload`. Questo attributo fornisce i dati di stato per il messaggio corrispondente, direttamente dall'integrazione.
- Questo attributo è utile quando si [recuperano gli aggiornamenti di stato per un messaggio](/api/reference/messages_api/get_message_status).
- A scopo di risoluzione dei problemi, `messageStatusPayload` può essere ottenuto anche tramite l'evento di webhook [Message Status Update](/api/reference/webhooks/message_events/message_status_updated).

## 5 aprile 2023

### ✨ Novità

- L'attributo `assignedUser` è stato aggiunto all'oggetto [Contact](/api/reference/object_types/contact)
- Ora è possibile assegnare un utente a un contatto durante la creazione o l'aggiornamento fornendo il parametro `assigned_user` con l'email di un utente (ad esempio `john.doe@email.com`). Assicurarsi che l'email fornita corrisponda a un utente confermato nel proprio account.
- Per annullare l'assegnazione di un utente a un contatto durante un aggiornamento, includere il parametro `unassign_user` nel corpo della richiesta e impostarne il valore su true. Questa azione rimuoverà l'utente assegnato dal contatto.

## 3 marzo 2023

### ✨ Novità

- Esempi di codice multilingue (`curl`, `node`, `go`, `ruby`, `php`, `python`) per tutte le richieste
- Sezione Note di Rilascio

### 🛠️ Modifiche

- Il [Contatto](/api/reference/object_types/contact) include ora `custom_fields`
- È possibile passare `custom_fields`, `tags` nel corpo della richiesta durante la [creazione](/api/reference/contacts_api/post_contacts) o l'[aggiornamento](/api/reference/contacts_api/post_contacts) di un contatto
- Non è più possibile aggiornare il campo `phone_number` di un [Contatto](/api/reference/object_types/contact)

## 17 gennaio 2023

### ✨ Novità

- [API dei template](/api/reference/template_messages_api/introduction)

### 🛠️ Modifiche

- Consentire l'invio di [Messaggi di Template](/api/reference/messages_api/post_send_messages#send-template-messages)

## 11 novembre 2022

### ✨ Novità

- [Auth API](/api/reference/auth_api/introduction)

## 18 ottobre 2022

### ✨ Novità

- [Webhooks API](/api/reference/webhooks_api/introduction)
