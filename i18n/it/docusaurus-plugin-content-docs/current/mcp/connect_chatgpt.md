---
sidebar_position: 3
---

import chatgptOpenAdd from './assets/chatgpt_open_add.png'
import chatgptAddCustomMcp from './assets/chatgpt_add_custom_mcp.png'
import chatgptConnect from './assets/chatgpt_connect.png'
import chatgptConsent from './assets/chatgpt_consent.png'
import chatgptInstalled from './assets/chatgpt_installed.png'
import chatgptPermissions from './assets/chatgpt_permissions.png'
import chatgptMention from './assets/chatgpt_mention.png'
import chatgptPrompt from './assets/chatgpt_prompt.png'
import chatgptAnswer from './assets/chatgpt_answer.png'
import chatgptManage from './assets/chatgpt_manage.png'

# Connettere ChatGPT

In [ChatGPT](https://chatgpt.com), colleghi Callbell aggiungendolo come **server MCP personalizzato** dalla pagina **Plugins**. La configurazione si fa da ChatGPT sul web.

Le etichette dell'interfaccia di ChatGPT sono indicate in inglese, come negli screenshot.

:::info Spazi di lavoro Business, Enterprise ed Edu
Negli spazi di lavoro aziendali, a volte un amministratore o un proprietario deve prima creare il plugin Callbell e pubblicarlo nello spazio di lavoro. Poi i membri lo installano e si connettono con il proprio utente Callbell. Consulta [l'articolo di assistenza di OpenAI](https://help.openai.com/en/articles/12584461) per le regole del tuo piano.
:::

Guarda il video passo passo, oppure segui i passaggi qui sotto.

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
    <iframe src="https://cap.callbell.eu/embed/k19cbznc662mdvp" title="Collegare ChatGPT a Callbell passo passo" frameBorder="0" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></iframe>
</div>

## Passo 1: creare il plugin Callbell

1. In ChatGPT, clicca su **Plugins** nella barra laterale.
2. Clicca su **Add**, poi su **Add custom MCP server**.

<div class="text--center">
    <img src={chatgptOpenAdd} alt="Plugins, Add, Add custom MCP server" width={800} />
</div>

3. Compila il modulo:
    1. **Name**: `Callbell` (la descrizione è facoltativa).
    2. **Connection**, **Server URL**: `https://ai.callbell.eu/mcp`
    3. **Authentication**: lascia **OAuth**. Non serve modificare gli **Advanced OAuth settings**.
    4. Seleziona **I understand and want to continue**.
    5. Clicca su **Create as a plugin**.

<div class="text--center">
    <img src={chatgptAddCustomMcp} alt="Modulo Add custom MCP server compilato con Callbell e https://ai.callbell.eu/mcp" width={600} />
</div>

## Passo 2: connettere il tuo account Callbell

1. ChatGPT ti chiede di connettere Callbell: clicca su **Connect Callbell**.

<div class="text--center">
    <img src={chatgptConnect} alt="Il pulsante Connect Callbell" width={480} />
</div>

2. ChatGPT apre Callbell. Accedi con il tuo utente Callbell se non hai già effettuato l'accesso.
3. Controlla la richiesta di accesso:
    1. Seleziona **Consenti a ChatGPT di apportare modifiche** solo se vuoi che ChatGPT invii messaggi, aggiorni contatti, aggiunga note e chiuda conversazioni. Lasciala deselezionata per un accesso in sola lettura.
    2. Clicca su **Consentire**.

<div class="text--center">
    <img src={chatgptConsent} alt="Pagina di consenso di Callbell con la casella per consentire le modifiche e il pulsante per consentire" width={800} />
</div>

Torni in ChatGPT. Callbell ora compare nella pagina **Plugins**, nella scheda **Personal**.

<div class="text--center">
    <img src={chatgptInstalled} alt="Il plugin Callbell nella scheda Personal" width={480} />
</div>

## Passo 3: scegliere quando ChatGPT chiede il permesso

1. In ChatGPT, vai su **Settings** > **Plugins** e apri **Callbell**.
2. Clicca su **Permission** e scegli quando ChatGPT ha bisogno della tua approvazione per usare Callbell.

<div class="text--center">
    <img src={chatgptPermissions} alt="Opzioni di permesso del plugin Callbell" width={700} />
</div>

:::tip
Scegli **Allow read-only tools**: ChatGPT legge i tuoi dati Callbell senza chiedere, ma ti chiede l'approvazione prima di ogni modifica, come l'invio di un messaggio.
:::

## Passo 4: usare Callbell in una chat

1. In una nuova chat, digita **@** e scegli **Callbell**.

<div class="text--center">
    <img src={chatgptMention} alt="Scelta di Callbell dopo aver digitato @ in una chat" width={760} />
</div>

2. Fai una domanda sul tuo account Callbell, ad esempio "Quali team abbiamo in Callbell?".

<div class="text--center">
    <img src={chatgptPrompt} alt="Una domanda a Callbell nella casella dei messaggi di ChatGPT" width={760} />
</div>

3. ChatGPT risponde con i dati del tuo account Callbell.

<div class="text--center">
    <img src={chatgptAnswer} alt="Risposta di ChatGPT con Callbell" width={760} />
</div>

## Disconnettere ChatGPT

In ChatGPT, vai su **Settings** > **Plugins** e apri **Callbell**:

1. Per disconnettere il tuo account Callbell, clicca su **...** accanto all'account, poi su **Disconnect**.
2. Per rimuovere completamente il plugin, clicca su **Uninstall**.

<div class="text--center">
    <img src={chatgptManage} alt="Disconnect e Uninstall nelle impostazioni del plugin Callbell" width={760} />
</div>

Puoi anche rimuovere l'accesso da Callbell, vedi [Gestire le connessioni](./manage_connections.md).
