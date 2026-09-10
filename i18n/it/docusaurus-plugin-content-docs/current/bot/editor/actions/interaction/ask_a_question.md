---
sidebar_position: 1
---

import askQuestionSetMessage from './assets/ask_question_set_message.png'
import askQuestionButtonsFlow from './assets/ask_question_buttons_flow.png'
import askQuestionFreeReplyFlow from './assets/ask_question_free_reply_flow.png'
import askQuestionFallback from './assets/ask_question_fallback.png'

# Fai una domanda

L'azione **Fai una domanda** semplifica una delle configurazioni più comuni dei bot: chiedere un input all'utente, gestire i solleciti quando non risponde e (facoltativamente) gestire le risposte non valide.

## Come si usa

L'azione è divisa in due sezioni: **impostazione del messaggio** e **impostazione del fallback**.

## Passaggio 1: Impostazione del messaggio

### 1. Scrivi il messaggio

Scrivi la domanda o il messaggio che vuoi inviare all'utente.

### 2. Aggiungi pulsanti o un elenco (facoltativo)

Puoi facoltativamente aggiungere pulsanti interattivi o un elenco di opzioni tra cui l'utente può scegliere.

<div class="text--center">
    <img src={askQuestionSetMessage} width={400} />
</div>

**Con pulsanti o un elenco,** ogni opzione che aggiungi crea automaticamente la propria uscita nel flusso, così puoi definire una continuazione diversa per ogni scelta.

<div class="text--center">
    <img src={askQuestionButtonsFlow} width={700} />
</div>

**Senza pulsanti o elenco,** qualsiasi risposta è accettata. Il flusso continua da un'unica uscita "Risposta". Se ti servono continuazioni diverse in base a ciò che l'utente ha risposto, aggiungile come uscite personalizzate sotto "Risposta".

<div class="text--center">
    <img src={askQuestionFreeReplyFlow} width={500} />
</div>

## Passaggio 2: Impostazione del fallback

<div class="text--center">
    <img src={askQuestionFallback} width={400} />
</div>

### 1. Tempo massimo di attesa

Imposta quanto tempo l'azione deve attendere una risposta prima di attivare un sollecito. Puoi scegliere da 5 minuti fino a 23 ore.

### 2. Numero di messaggi di follow-up

Scegli quanti promemoria automatici inviare se l'utente non risponde. Imposta **0** per disattivare i solleciti, oppure fino a un massimo di **5**.

### 3. Messaggio di follow-up

Scrivi il messaggio di promemoria inviato una volta trascorso il tempo di attesa.

### 4. Numero di errori consentiti

Imposta quante risposte non valide può dare l'utente prima che il flusso passi al percorso di errore. Questa opzione compare solo quando sono configurati pulsanti o un elenco, perché una risposta è considerata non valida solo quando non corrisponde a una delle opzioni. Se non sono impostati pulsanti o elenco, qualsiasi risposta è valida e questa opzione è nascosta.

### 5. Messaggio di errore

Scrivi il messaggio inviato quando la risposta dell'utente non corrisponde a una delle opzioni configurate. Obbligatorio se imposti 1 o più errori consentiti.

## Come vengono creati automaticamente i nodi

| Configurazione | ✅ Nodo/i di successo | ❌ Nodo di errore | ⌛️ Nodo di fallback programmato |
| :-: | :-: | :-: | :-: |
| **Senza pulsanti/elenco (risposta libera)** | Un'unica uscita "Risposta" (aggiungi uscite personalizzate sotto di essa se necessario) | Non creato | Configurato automaticamente |
| **Pulsanti** | Un nodo per pulsante | Quando la risposta non è uno dei pulsanti | Configurato automaticamente |
| **Elenco** | Un nodo per opzione | Quando la risposta non è una delle opzioni | Configurato automaticamente |

Per **pulsanti** ed **elenchi**, ogni opzione crea automaticamente il proprio percorso di uscita nel flusso, così puoi definire continuazioni diverse per ogni scelta senza alcuna configurazione aggiuntiva.
