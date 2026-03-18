---
sidebar_position: 1
---

import csatActionPanel from './assets/csat_action_panel.png'
import lastCsatAnswer from './assets/last_csat_answer.png'
import csatBranches from './assets/csat_branches.png'
import csatAnalytics from './assets/csat_analytics.png'
import csatLogs from './assets/csat_logs.png'

# Flusso CSAT

L'azione **Flusso CSAT** ti permette di inviare un messaggio di soddisfazione del cliente e gestire il flusso in base alla risposta.

<iframe width="560" height="315" src="https://www.youtube.com/embed/EJh1prZJg1Q?si=NFIcdD3UIQTylKMZ" title="Fidelizza i Tuoi Clienti su WhatsApp" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
:::info
Questa azione non è disponibile per i canali **QR** o **Twilio**.
:::

## Come utilizzarlo

Posiziona questa azione nella parte del flusso più adatta per attivare il sondaggio.

<img src={csatActionPanel} width={400} />

Ti verrà chiesto di compilare la domanda di CSAT per il tuo sondaggio e le possibili risposte che verranno categorizzate come "Promotore", "Neutrale" o "Detrattore". Le possibili risposte verranno inviate come pulsanti per il cliente da cliccare e scegliere.
Puoi anche scegliere se avere un fallback programmato o meno. Ciò significa che:

- Se abilitato, dopo 23 ore il flusso del bot continuerà e l'utente non potrà più rispondere al sondaggio;
- Se disabilitato, il flusso del bot continuerà solo se l'utente risponde al sondaggio (con una risposta valida o meno).

<img src={csatBranches} width={500} />

Ecco come apparirà il flusso del bot una volta che l'azione sarà stata aggiunta con successo.

<img src={lastCsatAnswer} width={150} />

La risposta dell'utente verrà memorizzata in una variabile chiamata "Ultima Risposta CSAT" (varierà in base alla lingua impostata).
Se l'utente non sceglie nessuno dei pulsanti validi e invia un testo casuale, o non risponde affatto, potrai saperlo controllando il valore memorizzato in "Ultima Risposta CSAT".

## Analitica

Infine, potrai visualizzare i risultati del tuo sondaggio CSAT nella sezione di analitica dell'app Callbell (scheda di performance), così come i log delle risposte.

<img src={csatAnalytics} width={800} />
<br/>
<img src={csatLogs} width={800} />
