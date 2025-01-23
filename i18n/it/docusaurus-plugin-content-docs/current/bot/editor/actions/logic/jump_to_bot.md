---
sidebar_position: 3
---

import jumpToBotAction from './assets/jump_to_bot.png'
import jumpToBotActionBotSelection from './assets/jump_to_bot_select_bot.png'
import jumpToBotActionStepSelection from './assets/jump_to_bot_select_step.png'
import jumpToBotActionPassToChild from './assets/jump_to_bot_pass_to_child.png'
import jumpToBotActionPassToParent from './assets/jump_to_bot_pass_to_parent.png'
import jumpToBotActionExtractTip from './assets/jump_to_bot_extract_tip.png'

# Salta a un Bot

Questa azione ti permette di saltare a un bot diverso.

<img src={jumpToBotAction} width={180} />

Questa funzionalità può essere utile in due casi principali:

- **Semplificare la logica di bot complessi**: Se la logica del tuo bot diventa troppo complessa, puoi suddividerla in parti più piccole e gestibili. Questa azione ti consente di separare la logica del bot principale in bot più mirati.
- **Riutilizzare modelli o logiche**: Se ripeti frequentemente un modello o una logica specifica nel tuo bot, puoi creare un bot "modello" riutilizzabile. Questo caso d'uso avanzato può farti risparmiare tempo, ridurre la complessità e minimizzare gli errori durante la creazione dei bot.

:::tip
Quando usi la funzione copia/incolla nel builder di bot, puoi estrarre il contenuto copiato in un nuovo bot. Per impostazione predefinita, questa funzione sostituirà automaticamente la sezione che hai copiato inizialmente con un'azione di "salta a un bot".

<div class="text--center">
    <img src={jumpToBotActionExtractTip} width={500} />
</div>
:::

## Come Utilizzarlo

### 1. Selezione del Bot e dell'Azione

Per prima cosa, seleziona il bot a cui desideri saltare. Nota che puoi selezionare solo bot che utilizzano lo stesso canale del tuo bot attuale.

<div class="text--center">
    <img src={jumpToBotActionBotSelection} width={500} />
</div>

Dopo aver selezionato il bot, apparirà un popup che ti inviterà a selezionare il passaggio o l'azione specifica nel bot di destinazione. Fai attenzione nella scelta di questo passaggio. Se il bot figlio dipende da variabili inizializzate prima del passaggio selezionato, potrebbe essere necessario specificarne i valori (vedi il punto 2 qui sotto).

<div class="text--center">
    <img src={jumpToBotActionStepSelection} width={500} />
</div>

### 2. Passare Valori al Bot Figlio

In alcuni casi, potresti voler passare valori dal bot genitore al bot figlio. Usa il pulsante "Aggiungi Valore" per trasferire i dati. Ogni riga ti permette di configurare una variabile nel bot figlio con qualsiasi valore desideri. Puoi passare valori fissi o utilizzare variabili dal bot genitore:

<div class="text--center">
    <img src={jumpToBotActionPassToChild} width={500} />
</div>

### 3. Tornare al Bot Genitore Dopo il Bot Figlio

In altri casi, potresti voler continuare il flusso del bot genitore una volta che il bot figlio ha terminato. Invece di creare un'azione separata di "salta a un bot" nel bot figlio per tornare al genitore, attiva semplicemente l'opzione "Continua il flusso qui dopo che il bot figlio è terminato". Questo assicura che, quando il bot figlio completa il suo compito, torni automaticamente al bot genitore.

Puoi anche utilizzare i valori salvati durante l'esecuzione del bot figlio nel bot genitore. Per farlo, salva i valori del bot figlio in variabili del bot genitore:

<div class="text--center">
    <img src={jumpToBotActionPassToParent} width={500} />
</div>
