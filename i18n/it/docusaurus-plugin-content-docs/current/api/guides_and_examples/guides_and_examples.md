---
sidebar_position: 4
---

# Guide ed esempi

Questa guida ti mostrerà come utilizzare l'API di Callbell per inviare messaggi, ottenere aggiornamenti e mantenere aggiornate le informazioni di contatto.

## Iniziare con Callbell

Se sei nuovo su Callbell, puoi iniziare con la nostra [Guida introduttiva a Callbell](/bot/introduzione).
Analizzeremo anche alcuni esempi di utilizzo dell'API di Callbell.

Gli esempi si dividono in due categorie: **Eventi causati da Azioni** e **Azioni guidate da Eventi**.

## Eventi causati da Azioni

Gli eventi causati da azioni sono aggiornamenti che avvengono a seguito di un'azione. Ad esempio, quando qualcuno si iscrive al tuo sito web, attiva un nuovo evento. Puoi iscriverti a questi eventi e ricevere una notifica quando si verificano.

Qui troverai esempi di eventi che l'API di Callbell può attivare. Utilizza questi esempi per capire come utilizzare l'API di Callbell per inviare messaggi e aggiornare le informazioni di contatto quando si verifica un nuovo evento.

:::info
Per il punto di ingresso del webhook, puoi utilizzare un servizio come [RequestBin](https://requestbin.com/) o [Webhook.site](https://webhook.site/). Si tratta di punti di ingresso temporanei per testare la tua configurazione. Per un uso effettivo, dovrai creare un tuo punto di ingresso. Avrai bisogno di un server web per ricevere gli eventi ed inviare messaggi ai tuoi clienti utilizzando il tuo punto di ingresso personalizzato. Puoi utilizzare qualsiasi linguaggio di programmazione per farlo.
:::

### Eventi di Messaggi

Puoi utilizzare l'API di Callbell per inviare messaggi quando avviene un nuovo evento.
Utilizzeremo l'[API dei messaggi](/api/reference/messages_api/introduction) per inviare messaggi. Dai un'occhiata alla sezione [Webhooks](/api/reference/webhooks/introduction) per ulteriori informazioni su come iscriverti agli eventi.

Per prima cosa, dobbiamo configurare un punto di ingresso del webhook per ottenere gli eventi. Utilizzeremo [RequestBin](https://requestbin.com/) per creare un punto di ingresso temporaneo.

1. Vai su [RequestBin](https://requestbin.com/) e clicca su **Create a RequestBin**.
2. Copia l'URL del nuovo RequestBin che hai appena creato.
3. Configura il tuo punto di ingresso del webhook su Callbell. Vedi [Webhooks](/api/reference/webhooks/introduction) per ulteriori informazioni.

#### 🤖 Invia un messaggio con un chatbot quando arriva un nuovo messaggio

In questo esempio, vedremo come utilizzare l'API di Callbell per inviare un messaggio con un chatbot quando si verifica un nuovo evento. Supponiamo che vogliamo inviare un messaggio di chatbot quando arriva un nuovo messaggio. Seguiremo i passaggi dell'esempio precedente per configurare un punto di ingresso del webhook e ottenere gli eventi.

Dopo aver configurato il punto di ingresso del webhook, possiamo utilizzare l'API di Callbell per inviare un messaggio di chatbot quando arriva un nuovo messaggio. Dai un'occhiata all'[API dei messaggi](/api/reference/messages_api/introduction) per ulteriori informazioni sull'invio di messaggi.

Ecco un diagramma di come l'API di Callbell invia un messaggio di chatbot quando arriva un nuovo messaggio.

![message_based_messaging](./assets/message_chatbot.png)

### Aggiornamenti dei Contatti

Puoi anche utilizzare l'API di Callbell per mantenere aggiornate le informazioni di contatto.
Utilizzeremo l'[API dei Contatti](/api/reference/contacts_api/introduction) per creare e aggiornare contatti.

#### 📝 Aggiungi un contatto a un CRM quando viene creato un nuovo contatto

In questo esempio, vedremo come utilizzare l'API di Callbell per aggiungere un contatto quando viene creato un nuovo utente.

Supponiamo che vogliamo aggiungere un contatto a un CRM quando viene creato un nuovo contatto su Callbell. Seguiremo i passaggi dell'esempio precedente per configurare un punto di ingresso del webhook e ottenere gli eventi.

Dopo aver configurato il punto di ingresso del webhook, possiamo utilizzare l'API di Callbell per aggiungere un contatto a un CRM quando viene creato un nuovo contatto su Callbell. Dai un'occhiata all'[API dei Contatti](/api/reference/contacts_api/introduction) per ulteriori informazioni sulla creazione di contatti.

:::info
Puoi utilizzare gli stessi passaggi per aggiornare un contatto quando un utente modifica il proprio profilo.
:::

Ecco un diagramma di come l'API di Callbell aggiunge un contatto a un CRM quando viene creato un nuovo contatto su Callbell.

![contact_creation](./assets/create_contact.png)

## Azioni guidate da Eventi

Le azioni guidate da eventi sono attività che avvengono a seguito di un aggiornamento. Ad esempio, quando arriva un nuovo messaggio, puoi inviarne uno al cliente. Puoi utilizzare l'API di Callbell per inviare messaggi e mantenere aggiornate le informazioni di contatto quando si verifica un nuovo evento.

### Invia un messaggio

Qui, vedremo come utilizzare l'API di Callbell per inviare messaggi quando si verifica un nuovo evento. Come mostrato nella sezione [Webhooks](/api/reference/webhooks/introduction), puoi iscriverti a vari eventi e ricevere una notifica quando si verificano.

Dovrai configurare un punto di ingresso del webhook per ottenere gli eventi e quindi utilizzare l'API di Callbell per inviare messaggi ai tuoi clienti.

:::info
Per il punto di ingresso del webhook, puoi utilizzare un servizio come [RequestBin](https://requestbin.com/) o [Webhook.site](https://webhook.site/). Si tratta di punti di ingresso temporanei per testare la tua configurazione. Per un uso effettivo, dovrai creare il tuo punto di ingresso.
Avrai bisogno di un server web per ricevere gli eventi ed inviare messaggi ai tuoi clienti utilizzando il tuo punto di ingresso personalizzato. Puoi utilizzare qualsiasi linguaggio di programmazione per farlo.
:::

#### 🛒 Invia un messaggio quando arriva un nuovo ordine

In questo esempio, vedremo come utilizzare l'API di Callbell per inviare un messaggio a un cliente quando si verifica un nuovo evento.
Supponiamo che vogliamo inviare un messaggio a un cliente quando viene effettuato un nuovo ordine sul nostro negozio online.

Per prima cosa, dobbiamo configurare un punto di ingresso del webhook per ottenere gli eventi. Utilizzeremo [RequestBin](https://requestbin.com/) per creare un punto di ingresso temporaneo.

1. Vai su [RequestBin](https://requestbin.com/) e clicca su **Create a RequestBin**.
2. Copia l'URL del nuovo RequestBin che hai appena creato.
3. Configura il tuo punto di ingresso del webhook su Callbell. Vedi [Webhooks](/api/reference/webhooks/introduction) per ulteriori informazioni.

Ora abbiamo configurato un punto di ingresso del webhook che riceverà gli eventi. Possiamo ora utilizzare l'API di Callbell per inviare un messaggio al cliente.

Dai un'occhiata all'[API dei messaggi](/api/reference/messages_api/introduction) per ulteriori informazioni sull'invio di messaggi.

Ecco un diagramma di come l'API di Callbell invia un messaggio al cliente quando arriva un nuovo ordine.

![event_based_messaging](./assets/orders_example.png)

#### 📅 Invia un messaggio quando viene impostato un nuovo appuntamento

In questo esempio, vedremo come utilizzare l'API di Callbell per inviare un messaggio a un cliente quando si verifica un nuovo evento.
Supponiamo che vogliamo inviare un messaggio a un cliente quando viene impostato un nuovo appuntamento.

Seguiremo i passaggi dell'esempio precedente per configurare un punto di ingresso del webhook e ottenere gli eventi.

Ora abbiamo configurato un punto di ingresso del webhook che riceverà gli eventi. Possiamo ora utilizzare l'API di Callbell per inviare un messaggio al cliente quando viene impostato un nuovo appuntamento. Dai un'occhiata all'[API dei messaggi](/api/reference/messages_api/introduction) per ulteriori informazioni sull'invio di messaggi. Ecco un diagramma di come l'API di Callbell invia un messaggio al cliente quando viene impostato un nuovo appuntamento.

![event_based_messaging](./assets/appointments_example.png)

### Utilizzo di Zapier

Puoi utilizzare Zapier per collegare Callbell con migliaia di altre app. Zapier è uno strumento che ti aiuta a collegare le app tra loro ed automatizzare le attività. Puoi utilizzare Zapier per collegare Callbell ad altre app come Slack, Gmail, Google Sheets e altre ancora.

Sono già disponibili molte integrazioni su Zapier che puoi utilizzare per collegare Callbell ad altre app. Puoi anche creare le tue integrazioni utilizzando Zapier.

Ecco alcuni esempi di Zaps che puoi creare con Zapier:

- Invia un messaggio quando arriva una nuova email (Gmail)
- Invia un messaggio quando viene impostato un nuovo appuntamento (Calendly)
- Invia un messaggio quando arriva un nuovo ordine (Shopify)
- Invia un messaggio quando viene creato un nuovo contatto (HubSpot)
- Invia un messaggio quando viene creato un nuovo contatto (Mailchimp)
- Invia un messaggio quando viene creato un nuovo contatto (Salesforce)
- Invia un messaggio quando viene creato un nuovo contatto (Zendesk)
- Invia un messaggio quando viene creato un nuovo contatto (Intercom)
- Invia un messaggio quando viene creato un nuovo contatto (Pipedrive)
- Invia un messaggio quando viene compilato un nuovo modulo (Typeform)
- Aggiungi un contatto quando viene compilato un nuovo modulo (Typeform)
- Invia un messaggio quando viene compilato un nuovo modulo (Google Forms)
- Aggiungi un contatto quando viene compilato un nuovo modulo (Google Forms)

E molti altri...

Puoi anche creare le tue integrazioni utilizzando Zapier. Dai un'occhiata alla [Piattaforma per Sviluppatori di Zapier](https://zapier.com/developer) per ulteriori informazioni.