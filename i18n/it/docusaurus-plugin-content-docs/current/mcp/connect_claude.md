---
sidebar_position: 2
---

import claudeOpenConnectors from './assets/claude_open_connectors.png'
import claudeAddCustomConnector from './assets/claude_add_custom_connector.png'
import claudeConnect from './assets/claude_connect.png'
import callbellConsent from './assets/callbell_consent.png'
import claudeToolPermissions from './assets/claude_tool_permissions.png'
import claudeEnableInChat from './assets/claude_enable_in_chat.png'
import claudeToolApproval from './assets/claude_tool_approval.png'
import claudeChatAnswer from './assets/claude_chat_answer.png'

# Connettere Claude

Questa guida collega Callbell a [Claude](https://claude.ai) come connettore personalizzato. Lo configuri una sola volta su claude.ai, e poi Callbell è disponibile anche nelle app di Claude per desktop e mobile.

Le etichette dell'interfaccia di Claude sono indicate in inglese, come negli screenshot.

:::info Piani
I connettori personalizzati sono disponibili con tutti i piani di Claude (il piano Free è limitato a un connettore personalizzato). Con i piani **Team** ed **Enterprise**, solo un Owner dell'organizzazione può aggiungere un connettore personalizzato: vedi [Piani Team ed Enterprise](#team-and-enterprise-plans) qui sotto.
:::

Guarda il video passo passo, oppure segui i passaggi qui sotto.

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
    <iframe src="https://cap.callbell.eu/embed/d9wjzmnq4r95rr6" title="Collegare Claude a Callbell passo passo" frameBorder="0" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></iframe>
</div>

## Passo 1: aggiungere il connettore Callbell

1. In Claude, clicca su **Customize** nella barra laterale, poi su **Connectors**.
2. Clicca su **+ Add**, poi su **Add custom connector**.

<div class="text--center">
    <img src={claudeOpenConnectors} alt="Customize, Connectors, Add, Add custom connector" width={800} />
</div>

3. Compila il modulo:
    - **Name**: `Callbell`
    - **MCP server URL**: `https://ai.callbell.eu/mcp`
4. Clicca su **Continue**.

<div class="text--center">
    <img src={claudeAddCustomConnector} alt="Modulo Add custom connector compilato con Callbell e https://ai.callbell.eu/mcp" width={560} />
</div>

Se Claude mostra poi delle impostazioni di autenticazione, lascia attivo l'accesso e, in **OAuth client**, scegli **Register automatically**. Poi clicca su **Add**.

### Piani Team ed Enterprise {#team-and-enterprise-plans}

Con i piani Team ed Enterprise, un Owner aggiunge Callbell una sola volta per tutta l'organizzazione:

1. Vai su **Organization settings** > **Connectors**.
2. Clicca su **Add**, scegli **Custom**, poi **Web**.
3. Inserisci gli stessi **Name** e **MCP server URL** indicati sopra, poi conferma.

I membri trovano poi **Callbell** (con l'etichetta **Custom**) in **Customize** > **Connectors** e passano direttamente al passo 2. Ogni membro si connette con il proprio utente Callbell.

## Passo 2: connettere il tuo account Callbell {#step-2-connect-your-callbell-account}

1. Apri il connettore **Callbell** e clicca su **Connect**.

<div class="text--center">
    <img src={claudeConnect} alt="Pulsante Connect del connettore Callbell" width={460} />
</div>

2. Claude apre Callbell. Accedi con il tuo utente Callbell se non hai già effettuato l'accesso.
3. Controlla la richiesta di accesso:
    1. Seleziona **Consenti a Claude di apportare modifiche** solo se vuoi che Claude invii messaggi, aggiorni contatti, aggiunga note e chiuda conversazioni. Lasciala deselezionata per un accesso in sola lettura.
    2. Clicca su **Consentire**.

<div class="text--center">
    <img src={callbellConsent} alt="Pagina di consenso di Callbell con la casella per consentire le modifiche e il pulsante per consentire" width={800} />
</div>

Torni in Claude, e il connettore Callbell ora elenca i suoi strumenti.

## Passo 3: scegliere quando Claude può usare ogni strumento

La pagina del connettore elenca gli strumenti di Callbell. Per impostazione predefinita, Claude ti chiede l'approvazione prima di ogni utilizzo (**Needs approval**). Usa le icone accanto a ogni strumento, o il menu accanto a ogni gruppo, per lasciare che Claude usi uno strumento senza chiedere, ti chieda ogni volta o non lo usi mai.

<div class="text--center">
    <img src={claudeToolPermissions} alt="Permessi degli strumenti del connettore Callbell" width={700} />
</div>

:::tip
Mantieni **Needs approval** sugli strumenti di scrittura (inviare messaggi, aggiornare contatti, aggiungere note, chiudere conversazioni) per controllare ogni modifica prima che Claude la faccia.
:::

## Passo 4: usare Callbell in una chat

1. In una chat, clicca su **+**, poi su **Connectors**, e verifica che **Callbell** sia attivo.

<div class="text--center">
    <img src={claudeEnableInChat} alt="L'interruttore Callbell nel menu Connectors di una chat" width={520} />
</div>

2. Fai una domanda sul tuo account Callbell, ad esempio "Quali team abbiamo in Callbell?". Quando Claude vuole usare uno strumento di Callbell, te lo chiede prima: clicca su **Allow once**, oppure su **Always allow** per non ricevere più la richiesta per questo strumento.

<div class="text--center">
    <img src={claudeToolApproval} alt="Claude chiede di usare List teams di Callbell" width={620} />
</div>

3. Claude risponde con i dati del tuo account Callbell.

<div class="text--center">
    <img src={claudeChatAnswer} alt="Risposta di Claude dopo aver usato il connettore Callbell" width={700} />
</div>

## Disconnettere Claude

Nella pagina del connettore Callbell in Claude, clicca su **Disconnect**. Puoi anche rimuovere l'accesso da Callbell, vedi [Gestire le connessioni](./manage_connections.md).
