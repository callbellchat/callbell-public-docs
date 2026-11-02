---
sidebar_position: 1
---

# Panoramica

Collega **Claude**, **ChatGPT** o un altro assistente di IA al tuo account Callbell, poi fagli domande sui tuoi contatti e sulle tue conversazioni con parole tue. Ad esempio:

- "Mostrami gli ultimi messaggi del +34 600 000 000."
- "Quali contatti con il tag `refund-request` sono assegnati al team Supporto?"
- "Aggiungi una nota interna a questo contatto con un riepilogo della conversazione."
- "Invia il nostro modello approvato `order_update` a questo contatto."

## Cosa può e non può fare l'assistente

Al momento della connessione, scegli tra due livelli di accesso: **Sola lettura** (predefinito), oppure **Lettura e scrittura** se selezioni **Consenti a ... di apportare modifiche**.

| | Azione | Sola lettura | Lettura e scrittura |
| :-- | :-- | :-: | :-: |
| **Contatti** | Trovare un contatto per numero di telefono | ✅ | ✅ |
| | Elencare i contatti per tag, team o tipo di canale | ✅ | ✅ |
| | Vedere i dati di un contatto, come tag, campi personalizzati, team, utente assegnato e nota di contatto | ✅ | ✅ |
| | Rinominare un contatto, aggiungere o rimuovere tag, compilare campi personalizzati | ❌ | ✅ |
| | Cercare contatti per nome | ❌ | ❌ |
| | Creare o eliminare un contatto | ❌ | ❌ |
| | Creare nuovi tag o campi personalizzati | ❌ | ❌ |
| | Modificare la nota di contatto | ❌ | ❌ |
| **Conversazioni** | Leggere i messaggi di una conversazione, note interne comprese | ✅ | ✅ |
| | Aggiungere una nota interna | ❌ | ✅ |
| | Spostare una conversazione su un altro team | ❌ | ✅ |
| | Chiudere una conversazione | ❌ | ✅ |
| | Riaprire una conversazione | ❌ | ❌ |
| | Assegnare una conversazione a un utente, o rimuovere l'assegnazione | ❌ | ❌ |
| | Avviare o fermare il bot in una conversazione | ❌ | ❌ |
| | Vedere o cambiare la fase del funnel di una conversazione | ❌ | ❌ |
| **Messaggi** | Inviare un messaggio di testo WhatsApp entro la finestra di assistenza clienti di 24 ore | ❌ | ✅ |
| | Inviare un modello WhatsApp approvato, anche fuori dalla finestra di 24 ore | ❌ | ✅ |
| | Inviare immagini, documenti, audio o video, o modelli con contenuti multimediali | ❌ | ❌ |
| | Inviare un messaggio su Instagram, Facebook Messenger o Telegram | ❌ | ❌ |
| | Avviare una conversazione con un nuovo numero di telefono | ❌ | ❌ |
| | Verificare se un messaggio è stato consegnato o letto | ❌ | ❌ |
| | Eliminare un messaggio | ❌ | ❌ |
| **Account** | Vedere i tuoi canali, team e modelli WhatsApp | ✅ | ✅ |
| | Vedere i membri di un team | ❌ | ❌ |
| | Creare o modificare canali, team o modelli | ❌ | ❌ |
| | Cambiare la disponibilità o lo stato personalizzato di un utente | ❌ | ❌ |

Per le azioni segnate con ❌ in entrambe le colonne, usa direttamente Callbell. Per cambiare il livello di accesso in seguito, disconnetti l'app e riconnettila.

:::caution
L'assistente lavora su tutto l'account Callbell: può vedere tutti i contatti e tutte le conversazioni, non solo quelli assegnati a te. Connetti solo app di cui ti fidi e mantieni l'accesso in sola lettura quando l'assistente non deve modificare nulla.
:::

## Cosa ti serve

- Un'app di IA che supporta i connettori personalizzati, come Claude o ChatGPT.
- Un utente Callbell con accesso alle **impostazioni** dell'account.
- L'indirizzo di Callbell, da incollare nella tua app di IA:

```
https://ai.callbell.eu/mcp
```

Non c'è nessuna chiave API da creare: la prima volta che ti connetti, basta accedere con il tuo utente Callbell.

## Come funziona la connessione

1. Aggiungi Callbell nella tua app di IA con l'indirizzo qui sopra.
2. L'app apre una pagina di Callbell, dove accedi se non l'hai già fatto.
3. Callbell mostra cosa chiede l'app. Scegli cosa può fare e clicchi su **Consentire**.

Ogni connessione è personale: ogni collega si connette con il proprio utente Callbell. Tutte le connessioni sono elencate in Callbell, dove si possono rimuovere in qualsiasi momento (vedi [Gestire le connessioni](./manage_connections.md)). Callbell non condivide mai la tua password con l'app di IA.

## Configurare la tua app di IA

- [Claude (web, desktop e mobile)](./connect_claude.md)
- [ChatGPT](./connect_chatgpt.md)
- [Claude Code, Codex e altri client MCP](./developer_tools.md)

Per vedere o rimuovere le app connesse al tuo account, leggi [Gestire le connessioni](./manage_connections.md).
