---
sidebar_position: 4
---

# Come fare ed esempi

Questa guida mostra come utilizzare l'API di Callbell per inviare messaggi, ottenere aggiornamenti e mantenere aggiornate le informazioni di contatto.

## Iniziare con Callbell

Se non conoscete Callbell, potete iniziare con la nostra [Guida introduttiva a Callbell] (/bot/getting_started).
Vedremo anche alcuni esempi di utilizzo delle API di Callbell.

Gli esempi rientrano in due categorie: **Eventi causati da azioni** e **Azioni guidate da eventi**.

## Eventi causati da azioni

Gli eventi causati da azioni sono aggiornamenti che avvengono a causa di un'azione. Ad esempio, quando qualcuno si iscrive al vostro sito web, si attiva un nuovo evento. È possibile iscriversi a questi eventi e ricevere un avviso quando si verificano.

Qui troverete esempi di eventi che l'API Callbell può attivare. Utilizzate questi esempi per capire come usare l'API Callbell per inviare messaggi e aggiornare le informazioni di contatto quando si verifica un nuovo evento.

:::info
Per l'endpoint del webhook, si può usare un servizio come [RequestBin](https://requestbin.com/) o [Webhook.site](https://webhook.site/). Questi sono endpoint temporanei per testare la configurazione. Per l'uso effettivo, è necessario creare il proprio endpoint. È necessario un server web per ricevere gli eventi e inviare messaggi ai clienti utilizzando il proprio endpoint. Per farlo, si può utilizzare qualsiasi linguaggio di programmazione.
:::

### Messaggio Eventi

È possibile utilizzare l'API Callbell per inviare messaggi quando si verifica un nuovo evento.
Per inviare i messaggi useremo la [Messages API](/api/reference/messages_api/introduction). Consultare la sezione [Webhooks](/api/reference/webhooks/introduction) per maggiori informazioni sull'iscrizione agli eventi.

Per prima cosa, dobbiamo impostare un endpoint webhook per ottenere gli eventi. Useremo [RequestBin](https://requestbin.com/) per creare un endpoint temporaneo.

1. Andare a [RequestBin](https://requestbin.com/) e cliccare su **Create a RequestBin**.
2. Copiare l'URL del nuovo RequestBin appena creato.
3. Impostare l'endpoint del webhook su Callbell. Per maggiori informazioni, vedere [Webhooks](/api/reference/webhooks/introduction).

#### 🤖 Inviare un messaggio con un chatbot quando arriva un nuovo messaggio

In questo esempio, vedremo come utilizzare l'API Callbell per inviare un messaggio con un chatbot quando si verifica un nuovo evento. Supponiamo di voler inviare un messaggio al chatbot quando arriva un nuovo messaggio. Seguiremo i passi dell'esempio precedente per impostare un endpoint webhook e ottenere gli eventi.

Dopo aver impostato l'endpoint webhook, possiamo usare l'API Callbell per inviare un messaggio al chatbot quando arriva un nuovo messaggio. Per maggiori informazioni sull'invio di messaggi, consultare l'API [Messages] (/api/reference/messages_api/introduction).

Ecco un diagramma di come l'API Callbell invia un messaggio al chatbot quando arriva un nuovo messaggio.

![message_based_messaging](./assets/message_chatbot.png)

### Aggiornamenti dei contatti

Si può anche usare l'API di Callbell per tenere aggiornate le informazioni sui contatti.
Useremo l'[API Contatti](/api/reference/contacts_api/introduction) per creare e aggiornare i contatti.

#### 📝 Aggiungere un contatto a un CRM quando viene creato un nuovo contatto

In questo esempio, vedremo come utilizzare l'API Callbell per aggiungere un contatto quando un nuovo utente si unisce al CRM.

Supponiamo di voler aggiungere un contatto a un CRM quando viene creato un nuovo contatto in Callbell. Seguiremo i passi dell'esempio precedente per impostare un endpoint webhook e ottenere gli eventi.

Dopo aver impostato l'endpoint webhook, possiamo usare l'API di Callbell per aggiungere un contatto a un CRM quando viene creato un nuovo contatto in Callbell. Per maggiori informazioni sulla creazione di contatti, consultare [Contacts API] (/api/reference/contacts_api/introduction).

:::info
È possibile utilizzare gli stessi passaggi per aggiornare un contatto quando un utente cambia profilo.
:::

Ecco un diagramma di come l'API di Callbell aggiunge un contatto a un CRM quando viene creato un nuovo contatto in Callbell.

![contact_creation](./assets/create_contact.png)

## Azioni guidate dagli eventi

Le azioni guidate da eventi sono cose che accadono a causa di un aggiornamento. Ad esempio, quando arriva un nuovo messaggio, si può inviare un messaggio al cliente. È possibile utilizzare l'API di Callbell per inviare messaggi e mantenere aggiornate le informazioni di contatto quando si verifica un nuovo evento.

### Inviare un messaggio

Qui vedremo come utilizzare l'API Callbell per inviare messaggi quando si verifica un nuovo evento. Come mostrato nella sezione [Webhooks](/api/reference/webhooks/introduction), è possibile iscriversi a vari eventi e ricevere un avviso quando si verificano.

È necessario impostare un endpoint webhook per ottenere gli eventi e poi utilizzare l'API Callbell per inviare messaggi ai clienti.

:::info
Per l'endpoint webhook, si può usare un servizio come [RequestBin](https://requestbin.com/) o [Webhook.site](https://webhook.site/). Questi sono endpoint temporanei per testare la configurazione. Per l'uso effettivo, è necessario creare il proprio endpoint.
È necessario un server web per ricevere gli eventi e inviare messaggi ai clienti utilizzando il proprio endpoint. Per farlo, si può utilizzare qualsiasi linguaggio di programmazione.
:::

#### 🛒 Inviare un messaggio quando arriva un nuovo ordine

In questo esempio, vedremo come utilizzare l'API Callbell per inviare un messaggio a un cliente quando si verifica un nuovo evento.
Supponiamo di voler inviare un messaggio a un cliente quando viene effettuato un nuovo ordine sul nostro negozio online.

Per prima cosa, dobbiamo impostare un endpoint webhook per ottenere gli eventi. Useremo [RequestBin](https://requestbin.com/) per creare un endpoint temporaneo.

1. Andare a [RequestBin](https://requestbin.com/) e cliccare su **Create a RequestBin**.
2. Copiare l'URL del nuovo RequestBin appena creato.
3. Impostare l'endpoint del webhook su Callbell. Per maggiori informazioni, vedere [Webhooks](/api/reference/webhooks/introduction).

Ora abbiamo impostato un endpoint webhook che riceverà gli eventi. Ora possiamo usare l'API di Callbell per inviare un messaggio al cliente.

Per maggiori informazioni sull'invio di messaggi, consultare [Messages API] (/api/reference/messages_api/introduction).

Ecco un diagramma di come l'API Callbell invia un messaggio al cliente quando arriva un nuovo ordine.

![event_based_messaging](./assets/orders_example.png)

#### 📅 Inviare un messaggio quando viene fissato un nuovo appuntamento

In questo esempio, vedremo come utilizzare l'API Callbell per inviare un messaggio a un cliente quando si verifica un nuovo evento.
Supponiamo di voler inviare un messaggio a un cliente quando viene fissato un nuovo appuntamento.

Seguiremo i passi dell'esempio precedente per impostare un endpoint webhook e ottenere gli eventi.

Ora abbiamo impostato un endpoint webhook che otterrà gli eventi. Ora possiamo usare l'API Callbell per inviare un messaggio al cliente quando viene fissato un nuovo appuntamento. Per maggiori informazioni sull'invio di messaggi, consultare l'API [Messages] (/api/reference/messages_api/introduction). Ecco un diagramma di come l'API Callbell invia un messaggio al cliente quando viene fissato un nuovo appuntamento.

![event_based_messaging](./assets/appointments_example.png)

### Utilizzo di Zapier

È possibile utilizzare Zapier per collegare Callbell a migliaia di altre applicazioni. Zapier è uno strumento che aiuta a collegare tra loro le app e ad automatizzare le attività. È possibile utilizzare Zapier per collegare Callbell ad altre app come Slack, Gmail, Google Sheets e altre ancora.

Su Zapier sono già disponibili molte integrazioni che potete utilizzare per collegare Callbell ad altre app. È anche possibile creare le proprie integrazioni utilizzando Zapier.

Ecco alcuni esempi di Zap che si possono creare con Zapier:

- Inviare un messaggio quando arriva una nuova e-mail (Gmail)
- Inviare un messaggio quando viene fissato un nuovo appuntamento (Calendly)
- Inviare un messaggio quando arriva un nuovo ordine (Shopify)
- Inviare un messaggio quando viene creato un nuovo contatto (HubSpot)
- Inviare un messaggio quando viene creato un nuovo contatto (Mailchimp)
- Inviare un messaggio quando viene creato un nuovo contatto (Salesforce)
- Inviare un messaggio quando viene creato un nuovo contatto (Zendesk)
- Inviare un messaggio quando viene creato un nuovo contatto (Intercom)
- Inviare un messaggio quando viene creato un nuovo contatto (Pipedrive)
- Inviare un messaggio quando viene compilato un nuovo modulo (Typeform)
- Aggiungere un contatto quando viene compilato un nuovo modulo (Typeform)
- Inviare un messaggio quando viene compilato un nuovo modulo (Google Forms)
- Aggiungere un contatto quando viene compilato un nuovo modulo (Google Forms)

E molti altri...

È anche possibile creare integrazioni personalizzate utilizzando Zapier. Per maggiori informazioni, consultate la [Zapier Developer Platform] (https://zapier.com/developer).
