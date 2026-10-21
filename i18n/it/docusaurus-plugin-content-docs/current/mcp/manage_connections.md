---
sidebar_position: 5
---

import callbellConnectedApps from './assets/callbell_connected_apps.png'

# Gestire le connessioni

Tutte le app di IA connesse al tuo account Callbell sono elencate in Callbell, così sai sempre chi ha connesso cosa.

## Vedere le app connesse

1. In Callbell, vai su **Impostazioni**, apri **Integrazioni** e clicca su **Impostazioni API**.
2. Apri la scheda **App connesse**.

<div class="text--center">
    <img src={callbellConnectedApps} alt="La scheda App connesse nelle impostazioni API di Callbell" width={800} />
</div>

Ogni riga è una connessione:

| Colonna | Significato |
| :-- | :-- |
| **Applicazione** | L'app di IA, ad esempio Claude o ChatGPT. |
| **Connessa da** | L'utente Callbell che ha approvato la connessione. |
| **Connessa il** | Quando è stata approvata la connessione. |
| **Permessi** | **Lettura**, oppure **Lettura** e **Scrittura** se l'utente ha consentito all'app di apportare modifiche. |
| **Usato l'ultima volta** | L'ultima volta che l'app ha chiamato Callbell. |

Tutti gli utenti con accesso alle impostazioni vedono tutte le connessioni dell'account, comprese quelle dei colleghi.

## Disconnettere un'app

3. Clicca su **Disconnetti** sulla connessione da rimuovere, poi conferma.

L'app perde subito l'accesso all'account. Viene rimossa solo quella connessione: la stessa app connessa da altri utenti continua a funzionare.

Per usare di nuovo Callbell da quell'app, connettila di nuovo dall'app (ad esempio con **Connect** sul connettore Callbell in Claude).

:::tip
Disconnetti e riconnetti un'app per passare la sua connessione da sola lettura a lettura e scrittura, o viceversa.
:::

## Risoluzione dei problemi

| Messaggio o problema | Cosa fare |
| :-- | :-- |
| "Le app di IA esterne non sono ancora abilitate su questo account." | Contatta il nostro team di supporto per attivare la funzione sul tuo account. |
| "Solo gli utenti con accesso alle impostazioni dell'account possono connettere un'app." | Chiedi a un amministratore di darti accesso alle impostazioni, o di connettere l'app. |
| "Completa la configurazione del tuo account Callbell prima di connettere un'app." | Completa la configurazione del tuo account in Callbell, poi riprova. |
| "Questa azione è temporaneamente bloccata sul tuo utente per motivi di sicurezza." | Contatta il nostro team di supporto. |
| L'assistente può leggere i tuoi dati ma non può inviare messaggi né modificare nulla. | La connessione ha solo il permesso **Lettura**. Disconnettila e riconnettila selezionando **Consenti a ... di apportare modifiche**. |
| L'assistente dice che ci sono troppe richieste. | Ogni connessione ha un limite di richieste. Attendi un minuto e riprova. |
| L'app ha smesso di funzionare dopo una disconnessione. | Riconnetti l'app dalle impostazioni del suo connettore. |
