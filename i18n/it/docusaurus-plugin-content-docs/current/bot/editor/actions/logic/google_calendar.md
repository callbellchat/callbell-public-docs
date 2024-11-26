---
sidebar_position: 8
---

import googleCredentials from './assets/google_credentials.png'
import googleCredentialsWarning from './assets/google_credentials_warning.png'
import googleCalendarVariables from './assets/google_calendar_variables.png'
import googleCalendarFullSetup from './assets/google_calendar_full_setup.png'
import googleCalendarEventCreated from './assets/google_calendar_event_created.png'

# Google Calendar

Questa azione consente al tuo bot di interagire con Google Calendar creando eventi dinamicamente durante le interazioni dell'utente.

# Utilizzo:

- Creazione di promemoria nel tuo calendario di Google.
- Creazione di riunioni utilizzando link per riunioni autogenerati.

# Come usarlo:

## 1. Aggiunta di un'azione di Google Calendar

Per aggiungere un'azione di Google Calendar nell'editor di Callbell flow, segui questi passaggi:

1. Apri il Flow Builder e seleziona il punto della conversazione in cui desideri integrare Google Calendar.
2. Aggiungi una nuova azione cliccando sul pulsante Aggiungi azione e selezionando Google Calendar dalla lista delle azioni disponibili, all'interno della sezione "Logica".

## 2. Autenticazione al tuo account Google

Clicca sul pulsante "Connetti a Google" e segui le istruzioni.

:::tip
Assicurati di selezionare tutti i permessi. Il bot Callbell non funzionerà correttamente se manca qualche permesso.

<div class="text--center">
    <img src={googleCredentials} width={500} />
</div>

Potresti anche incontrare questo avviso da Google:

<div class="text--center">
    <img src={googleCredentialsWarning} width={500} />
</div>

Si tratta solo di un avviso temporaneo. In questo caso, assicurati di continuare cliccando su "Avanzate" e poi su "Procedi con Callbell"
:::

## 3. Configurazione dell'azione

Dovrai configurare l'integrazione compilando i seguenti campi:

**Seleziona calendario**: Scegli il calendario di Google con cui desideri interagire. Ogni account Google può avere più calendari; quello contrassegnato con un indirizzo email è il tuo calendario principale.

**Seleziona azione**: Attualmente, `crea evento` è l'unica opzione disponibile.

**Riassunto evento**: Il titolo dell'evento come apparirà nel calendario.

**Mese evento**: Il mese in cui verrà creato l'evento.

**Giorno evento**: Il giorno in cui verrà creato l'evento.

**Ora di inizio evento**: L'ora in cui inizierà l'evento. Il formato orario richiesto è: `HH:MM`.

**Durata evento (in minuti)**: La durata dell'evento in minuti.

**Invia aggiornamenti evento a**: I destinatari che riceveranno aggiornamenti sull'evento. Le opzioni sono: `Nessuno` o `Tutti`.

**Crea link per riunione**: Opzione per generare un link per una riunione virtuale associata all'evento.

:::tip
Puoi utilizzare variabili per popolare dinamicamente questi dettagli
:::

## 4. Gestione del successo

In caso di una risposta positiva dall'API, il risultato indicherà lo stato di creazione dell'evento: "confermato". Di default, questo valore verrà salvato come "Ultimo webhook di successo", ma puoi configurare la variabile che preferisci. Se l'opzione "Crea link per riunione" è attiva, l'URL della riunione verrà memorizzato nella variabile.

## 5. Gestione del fallimento

In caso di errore dell'API, puoi memorizzare la risposta negativa in una variabile dedicata per analisi o ripetizioni future.
Puoi, ad esempio, immaginare un'esecuzione del flusso logico che verifichi l'errore e riprovi con un'azione "jump".

## 6. Esempio

Questo è un esempio di come puoi configurare l'azione e usarla con le variabili.

1. In questo esempio, abbiamo creato 2 variabili:

<img src={googleCalendarVariables} width={500} />

2. `Summary`, `month` e `duration` sono stati impostati come valori fissi.

3. Abbiamo utilizzato una combinazione di azioni per recuperare dinamicamente il giorno:

- [Invia messaggio](/bot/editor/actions/interaction/send_message) per inviare il messaggio che chiede quale giorno è il migliore.
- [Aspetta risposta dell'utente](/bot/editor/actions/interaction/wait_user_answer) per ottenere la risposta.
- [Imposta variabile](/bot/editor/actions/logic/set_variable) per salvare il risultato della risposta nella nostra variabile `day`.

4. Abbiamo fatto lo stesso per recuperare l'`ora`.

5. Ora è finito, questo è il risultato:

<img src={googleCalendarFullSetup} width={500} />

<img src={googleCalendarEventCreated} width={500} />

# Migliori pratiche:

- Assicurati sempre che l'API di Google sia connessa e abbia le autorizzazioni corrette per il bot per accedere al calendario.
- Testa attentamente l'integrazione per gestire eventuali errori dell'API (ad esempio, problemi di accesso al calendario di Google, problemi di formato data errato). Il simulatore del bot ti aiuterà in questa questione.