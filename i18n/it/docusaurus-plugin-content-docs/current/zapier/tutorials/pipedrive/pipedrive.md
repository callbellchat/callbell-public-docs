---
sidebar_position: 3
---

# Integrazione Pipedrive

## Automatizza la comunicazione CRM su WhatsApp con Callbell

Impara a integrare Pipedrive con Callbell utilizzando Zapier per automatizzare le comunicazioni su WhatsApp.

## Introduzione

> In questa guida, imparerai come integrare Pipedrive con Callbell utilizzando Zapier. Questa integrazione ti permetterà di automatizzare le comunicazioni su WhatsApp basate sulle attività di Pipedrive, garantendo un processo di vendita e gestione clienti fluido.

### Con questa configurazione, potrai:

- Creare automaticamente nuovi contatti da Pipedrive in Callbell
- Inviare automaticamente template WhatsApp quando uno stato di un deal cambia in Pipedrive
- Inviare automaticamente template WhatsApp quando un deal viene vinto

Ogni guida fornirà istruzioni dettagliate su come impostare questi flussi di lavoro utilizzando Zapier, Pipedrive e Callbell.

## Guida 1: Creare automaticamente nuovi contatti da Pipedrive in Callbell

In questa guida, ti mostreremo come creare automaticamente nuovi contatti in Callbell ogni volta che viene aggiunto un nuovo contatto in Pipedrive. Questa integrazione assicura che i tuoi contatti CRM siano automaticamente disponibili in Callbell.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/qyhEpHlzlvY?si=sh0wQlaTU4HM-8cw" title="Crea automaticamente nuovi contatti da Pipedrive in Callbell" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Spiegazione passo a passo

#### 1. Creare uno Zap: Pipedrive come trigger

- Accedi a Zapier e crea un nuovo Zap.
- Imposta il trigger su "Nuova Persona" (questo attiverà lo Zap ogni volta che viene aggiunto un nuovo contatto in Pipedrive).
- Collega il tuo account Pipedrive.
- Testa il trigger per assicurarti che Zapier recuperi correttamente i dati del nuovo contatto da Pipedrive.

<img src={require('../../assets/create_zap_pipedrive.png').default} style={{ width: '50%', display: 'block', margin: 'auto' }} />

#### 2. Creare un contatto su Callbell

- Seleziona Callbell come app di azione.
- Imposta l'azione su "Crea Contatto" (questo creerà un nuovo contatto in Callbell quando attivato).
- Collega il tuo account Callbell.
- Mappa i campi da Pipedrive a Callbell:
  - **Nome** → Mappa dal nome del contatto in Pipedrive.
  - **Numero di telefono** → Mappa dal numero di telefono del contatto in Pipedrive.
  - Mappa eventuali altri campi rilevanti, se necessario.
- Testa l'azione per assicurarti che Zapier crei correttamente un contatto in Callbell.

<img src={require('../../assets/create_contact_callbell_pipedrive.png').default} style={{ width: '50%', display: 'block', margin: 'auto' }} />

### Note finali

Con questa configurazione, ogni nuovo contatto aggiunto in Pipedrive verrà automaticamente creato in Callbell. Questo flusso di lavoro consente di risparmiare tempo, riduce l'inserimento manuale dei dati e assicura che il tuo team possa interagire immediatamente con i nuovi contatti.

**Per ulteriore aiuto, consulta:**

- [Centro assistenza Callbell](https://callbellsupport.zendesk.com/hc/en-us)
- [Documentazione di supporto Zapier](https://help.zapier.com/hc/en-us)

## Guida 2: Inviare automaticamente messaggi WhatsApp quando un deal cambia stato in Pipedrive

In questa guida, ti mostreremo come inviare automaticamente un messaggio WhatsApp tramite Callbell ogni volta che un deal cambia stato in Pipedrive.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/eImOAikwXzE?si=g57C_RbyXxbNcpb9" title="Invia automaticamente messaggi modello WhatsApp quando un affare cambia il suo stato in Pipedrive" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Spiegazione passo a passo

#### 1. Preparare i template dei messaggi in Callbell

- Crea il template del messaggio da inviare.
- Usa variabili personalizzate (es. `{{variabile 1}}, {{variabile 2}}`) per personalizzare il messaggio.
- Scopri di più sulla creazione di template con variabili in Callbell: [Guida ai template di Callbell](https://callbellsupport.zendesk.com/hc/en-us/articles/360007759237-What-are-message-templates-and-what-are-they-for)

#### 2. Creare uno Zap: Pipedrive come trigger

- Accedi a Zapier e crea un nuovo Zap.
- Imposta il trigger su "Updated Deal".
- Collega il tuo account Pipedrive.
- Testa il trigger per assicurarti che Zapier recuperi correttamente i dati aggiornati del deal.

#### 3. Formattare il numero di telefono

- Aggiungi l'azione "Formatter" di Zapier.
- Seleziona l'azione "Numeri".
- Scegli "Formatta numero di telefono".
- Seleziona il formato di output **E164**.

<img src={require('../../assets/format_phone_number_pipedrive.png').default} style={{ width: '50%', display: 'block', margin: 'auto' }} />

#### 4. Inviare il template WhatsApp con Callbell

- Aggiungi un'azione "Invia messaggio con template".
- Collega il tuo account Callbell.
- Copia e incolla l'UUID del template e del canale.
- Compila le variabili del template.

<img src={require('../../assets/send_template_message_pipedrive.png').default} style={{ width: '50%', display: 'block', margin: 'auto' }} />

## Guida 3: Inviare automaticamente template WhatsApp quando un deal viene vinto

In questa guida, ti mostreremo come inviare automaticamente un messaggio WhatsApp tramite Callbell ogni volta che un deal viene segnato come vinto in Pipedrive.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/49KS65U0WfM?si=MhNPtNKze2_zkpUJ" title="Invia automaticamente modelli WhatsApp quando si conclude un affare" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Spiegazione passo a passo

#### Creare uno Zap: Pipedrive come trigger

- Accedi a Zapier e crea un nuovo Zap.
- Imposta il trigger su "Updated Deal".
- Collega il tuo account Pipedrive.
- Nel campo **Filtra per**, seleziona **Deal Status**.
- Nel campo **Stato del deal**, seleziona **Vinto**.
- Testa il trigger per verificare che Zapier recuperi correttamente i dati.

<img src={require('../../assets/create_zap_pipedrive_2.png').default} style={{ width: '50%', display: 'block', margin: 'auto' }} />

### Note finali

Con questa configurazione, ogni volta che un deal viene vinto in Pipedrive, verrà inviato automaticamente un messaggio WhatsApp tramite Callbell.

**Per ulteriore aiuto, consulta:**

- [Centro assistenza Callbell](https://callbellsupport.zendesk.com/hc/en-us)
- [Documentazione di supporto Zapier](https://help.zapier.com/hc/en-us)
