---
sidebar_position: 1
---

# Panoramica

Collega **Claude**, **ChatGPT** o un altro assistente di IA al tuo account Callbell, poi fagli domande sui tuoi contatti e sulle tue conversazioni con parole tue. Ad esempio:

- "Mostrami gli ultimi messaggi del +34 600 000 000."
- "Quali contatti con il tag `refund-request` sono assegnati al team Supporto?"
- "Aggiungi una nota interna a questo contatto con un riepilogo della conversazione."
- "Invia il nostro modello approvato `order_update` a questo contatto."

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

## Cosa può fare l'assistente

Al momento della connessione, scegli tra due livelli di accesso.

**Sola lettura** (predefinito). L'assistente può:

- trovare contatti per numero di telefono, tag, team o canale,
- leggere i dati dei contatti e i messaggi delle conversazioni, note interne comprese,
- vedere i tuoi canali, team e modelli WhatsApp.

**Lettura e scrittura**, solo se selezioni **Consenti a ... di apportare modifiche**. L'assistente può anche:

- inviare messaggi WhatsApp ai tuoi contatti esistenti (fuori dalla finestra di assistenza clienti di 24 ore, solo modelli approvati),
- aggiornare i contatti: nome, tag, campi personalizzati e team,
- aggiungere note interne,
- chiudere conversazioni.

Per cambiare il livello di accesso in seguito, disconnetti l'app e riconnettila.

:::caution
L'assistente lavora su tutto l'account Callbell: può vedere tutti i contatti e tutte le conversazioni, non solo quelli assegnati a te. Connetti solo app di cui ti fidi e mantieni l'accesso in sola lettura quando l'assistente non deve modificare nulla.
:::

## Configurare la tua app di IA

- [Claude (web, desktop e mobile)](./connect_claude.md)
- [ChatGPT](./connect_chatgpt.md)
- [Claude Code, Codex e altri client MCP](./developer_tools.md)

Per vedere o rimuovere le app connesse al tuo account, leggi [Gestire le connessioni](./manage_connections.md).
