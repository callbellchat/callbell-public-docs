---
sidebar_position: 9
---

import agentFlowImage1 from './assets/agent_flow_1.png'
import agentFlowImage2 from './assets/agent_flow_2.png'
import agentFlowImage3 from './assets/agent_flow_3.png'
import agentFlowImage4 from './assets/agent_flow_4.png'

# Flusso Agente IA

L'azione **Flusso Agente IA** ti permette di eseguire un agente IA direttamente all'interno del flusso del tuo bot, consentendo conversazioni completamente automatizzate con i tuoi clienti basate sugli obiettivi e sul comportamento che hai definito.

:::note
Prima di utilizzare questa azione, devi creare almeno un agente IA. Consulta la [guida alla configurazione dell'agente IA](https://callbellsupport.zendesk.com/hc/articles/27593692327324) per iniziare.
:::

## Come utilizzarlo

1. Aggiungi l'azione **Flusso Agente IA** al flusso del tuo bot.
2. Seleziona l'agente IA che desideri utilizzare dal menu a discesa **Agente IA selezionato**.
3. Fai clic su **Salva**.

L'azione verrà aggiunta al tuo flusso con i suoi nodi dei motivi di uscita, che definiscono cosa succede dopo che l'agente ha terminato — o interrotto — la gestione della conversazione.

<div class="text--center">
    <img src={agentFlowImage1} width={500} />
</div>

## Motivi di uscita

I motivi di uscita definiscono i diversi percorsi che il flusso del bot può seguire dopo che l'agente IA si interrompe. Ci sono **4 motivi di uscita predefiniti** e **3 opzionali** che puoi aggiungere in base al tuo caso d'uso.

### Motivi di uscita predefiniti

| Motivo di uscita | Quando si attiva |
| --- | --- |
| **Obiettivo raggiunto** | L'agente determina che l'obiettivo definito nella configurazione dell'agente IA è stato completato. Viene aggiunta automaticamente una nota interna con l'output dell'agente. |
| **Richiesta umana** | Il cliente chiede esplicitamente di parlare con un umano. L'agente smette di inviare messaggi e il flusso continua su questo percorso. Si consiglia di assegnare la conversazione a un team o a un agente a questo punto. |
| **Nessuna risposta** | Il cliente smette di rispondere. Per impostazione predefinita, l'agente invia 2 messaggi di follow-up con un intervallo di 5 minuti tra ciascuno. Se non c'è ancora risposta, il flusso continua su questo percorso. Il numero di follow-up e il tempo di attesa possono essere personalizzati nelle **Impostazioni avanzate**. |
| **Errore** | Si attiva quando si verifica un errore inatteso o quando il portafoglio di crediti IA si esaurisce. Utilizza questo percorso per assegnare la conversazione a un agente umano o per reindirizzarla a un flusso bot tradizionale a percorso fisso. |

### Motivi di uscita opzionali

Oltre ai 4 motivi di uscita predefiniti, puoi aggiungerne fino a 3 opzionali per un controllo più granulare:

<div class="text--center">
    <img src={agentFlowImage2} width={500} />
</div>

| Motivo di uscita | Quando si attiva |
| --- | --- |
| **Utente non interessato** | Il cliente afferma esplicitamente di non essere interessato alla conversazione, al servizio o al prodotto. |
| **Utente frustrato** | Il cliente mostra segni di frustrazione o rabbia verso le risposte dell'agente. |
| **Portafoglio crediti IA esaurito** | Si attiva specificamente quando il portafoglio di crediti IA si esaurisce, permettendoti di personalizzare cosa succede in questo scenario indipendentemente dal percorso generico di **Errore**. Scopri di più sui [crediti IA](https://callbellsupport.zendesk.com/hc/articles/27543940082844). |

## Conoscenze aggiuntive (opzionale)

L'azione include un campo di testo libero in cui puoi passare all'agente IA informazioni dinamiche raccolte in precedenza nel flusso del bot. Questo è utile quando vuoi arricchire il contesto dell'agente con dati provenienti da fonti esterne, come un'azione [Webhook](/bot/editor/actions/logic/webhook) o [Google Sheets](/bot/editor/actions/logic/google_spreadsheets).

<div class="text--center">
    <img src={agentFlowImage3} width={500} />
</div>

**Esempio:** recuperare lo stato dell'ordine di un cliente da uno strumento esterno tramite webhook, memorizzarlo in una variabile e passarlo all'agente in modo che possa fare riferimento a tali informazioni durante la conversazione.

## Impostazioni avanzate

<div class="text--center">
    <img src={agentFlowImage4} width={500} />
</div>

| Impostazione | Descrizione |
| --- | --- |
| **Consenti all'agente di creare pulsanti** | Abilita l'agente IA a inviare messaggi con pulsanti interattivi. L'agente può includere fino a 3 pulsanti per messaggio. |
| **Consenti all'agente di ricordare all'utente** | Imposta quanti messaggi di follow-up automatici invierà l'agente se il cliente smette di rispondere. |
| **Ritardo del follow-up** | Imposta quanto tempo l'agente attende prima di inviare un messaggio di follow-up. Le opzioni vanno da 5 minuti a 23 ore. |
