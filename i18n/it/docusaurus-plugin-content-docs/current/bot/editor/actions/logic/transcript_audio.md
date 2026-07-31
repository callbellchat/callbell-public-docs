---
sidebar_position: 10
---

import transcribeChoice from './assets/transcribe_1.png'
import transcribeAction from './assets/transcribe_2.png'

# Trascrivere l'audio

Questa azione trascrive i messaggi audio inviati dagli utenti all'interno di un flusso del bot, convertendoli in testo e salvando il risultato in una variabile da utilizzare nelle azioni successive.

:::note
Se stai utilizzando l'azione [Flusso Agente IA](/bot/editor/actions/logic/agent_flow), la trascrizione audio è già gestita automaticamente. Non è necessario aggiungere questa azione separatamente se il tuo bot utilizza un Agente IA.
:::

## Come funziona

Per trascrivere un messaggio audio servono due cose nel tuo flusso del bot: un modo per rilevare quando l'utente invia un audio e l'azione Trascrivere l'audio per elaborarlo.

### Passaggio 1: rilevare l'audio con un nodo Scelta

Aggiungi un nodo [Nuova Scelta](/bot/editor/actions/logic/new_choice) dopo un'azione [Attendere la risposta dell'utente](/bot/editor/actions/interaction/wait_user_answer). All'interno della scelta, imposta la condizione:

- **Tipo di risposta dell'ultimo utente** → **è** → **Audio**

In questo modo si crea un percorso dedicato che si attiva solo quando l'utente invia un messaggio audio. Assegnagli un nome coerente (ad esempio, «Audio ricevuto») per mantenere il flusso leggibile.

<div class="text--center">
    <img src={transcribeChoice} width={600} />
</div>

### Passaggio 2: aggiungere l'azione Trascrivere l'audio

Sul percorso dell'audio, aggiungi l'azione **Trascrivere l'audio** e configura i campi descritti di seguito.

<div class="text--center">
    <img src={transcribeAction} width={400} />
</div>

## Configurazione

### Token OpenAI

La trascrizione viene elaborata da **OpenAI** esternamente a Callbell. Ci sono due opzioni:

- **Gestito da Callbell** (consigliato): nessuna configurazione richiesta. Il costo viene detratto dal tuo [portafoglio crediti IA](https://callbellsupport.zendesk.com/hc/articles/27543940082844).
- **Token personalizzato**: usa la tua chiave API di OpenAI e paga direttamente OpenAI.

### Audio da trascrivere

Seleziona quale audio trascrivere:

- **Ultimo audio ricevuto dall'utente:** trascrive il messaggio audio più recente ricevuto nella conversazione.
- **URL audio personalizzato:** trascrive qualsiasi audio fornendone l'URL. Utile quando l'audio proviene da una fonte esterna.

### Salva la trascrizione in

Seleziona la variabile in cui verrà salvato il testo trascritto. Questa variabile può poi essere utilizzata nelle azioni successive, come l'invio di un messaggio, l'aggiunta di una nota o l'invio di dati a un webhook.

### Memorizzare il fallimento (se presente) in

Seleziona una variabile in cui salvare l'eventuale messaggio di errore nel caso in cui la trascrizione non riesca. In questo modo puoi gestire gli errori in modo controllato nel tuo flusso del bot.
