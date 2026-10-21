---
sidebar_position: 4
---

# Claude Code, Codex e altri client MCP

Gli strumenti per sviluppatori e gli altri client MCP si collegano a Callbell con lo stesso URL del server e lo stesso accesso Callbell di Claude e ChatGPT. Ogni persona che usa la connessione accede con il proprio utente Callbell.

## Claude Code

:::tip
Se usi Claude Code con il tuo account claude.ai e hai già aggiunto Callbell in Claude (vedi [Connettere Claude](./connect_claude.md)), Callbell è già disponibile in Claude Code.
:::

1. Aggiungi il server:

```bash
claude mcp add --transport http callbell https://ai.callbell.eu/mcp
```

Per impostazione predefinita, il server è disponibile solo nel progetto corrente. Aggiungi `--scope user` per usarlo in tutti i tuoi progetti, oppure `--scope project` per condividerlo con il tuo team in un file `.mcp.json` (ogni collega accede comunque con il proprio utente Callbell).

2. Avvia Claude Code, esegui `/mcp`, seleziona **callbell** e scegli **Authenticate**. Puoi anche eseguire `claude mcp login callbell` dal terminale.
3. Il browser apre la pagina di consenso di Callbell. Scegli i permessi e clicca su **Consentire**.

Claude Code salva la connessione e la rinnova automaticamente.

## Codex

1. Aggiungi il server:

```bash
codex mcp add callbell --url https://ai.callbell.eu/mcp
```

2. Codex rileva che Callbell usa OAuth e apre il browser. Se non lo fa, esegui:

```bash
codex mcp login callbell
```

3. Nella pagina di consenso di Callbell, scegli i permessi e clicca su **Consentire**.

Puoi anche aggiungere il server a mano in `~/.codex/config.toml`, poi eseguire `codex mcp login callbell`:

```toml
[mcp_servers.callbell]
url = "https://ai.callbell.eu/mcp"
```

La CLI di Codex, l'estensione Codex per IDE e l'app desktop di ChatGPT condividono questa configurazione.

## Altri client MCP

Qualsiasi client MCP che supporta i server remoti in **Streamable HTTP** con accesso **OAuth** può connettersi a Callbell. La maggior parte dei client ha bisogno solo dell'URL, ad esempio in una configurazione JSON:

```json
{
  "mcpServers": {
    "callbell": {
      "type": "http",
      "url": "https://ai.callbell.eu/mcp"
    }
  }
}
```

Il client trova da solo le impostazioni di accesso. Come riferimento, ecco i dettagli tecnici:

| Impostazione | Valore |
| :-- | :-- |
| Server MCP | `https://ai.callbell.eu/mcp` (Streamable HTTP) |
| Metadati della risorsa protetta | `https://ai.callbell.eu/.well-known/oauth-protected-resource` |
| Server di autorizzazione | `https://dash.callbell.eu` |
| Metadati del server di autorizzazione | `https://dash.callbell.eu/.well-known/oauth-authorization-server` |
| Registrazione del client | Registrazione dinamica su `https://dash.callbell.eu/oauth/register` |
| Tipo di concessione | Codice di autorizzazione con PKCE (`S256`), con token di aggiornamento |
| Scope | `read`, `write` |
| URI di reindirizzamento | Qualsiasi URL `https`, oppure `http` su `localhost` o un indirizzo di loopback per i client desktop e da riga di comando |

:::note
Il server MCP accetta solo i token OAuth emessi dall'accesso Callbell. Le chiavi API di Callbell non funzionano con esso: per chiamare Callbell dal tuo codice, usa l'[API di Callbell](/api/reference/introduction).
:::

## Strumenti disponibili

Queste sono le azioni che l'assistente può eseguire in Callbell:

| Strumento | Permesso | Cosa fa |
| :-- | :-- | :-- |
| `find_contacts` | Lettura | Cerca un contatto per numero di telefono, oppure elenca i contatti filtrati per canale, tag o team. Non c'è ricerca per nome. |
| `get_contact` | Lettura | Recupera un contatto con i suoi tag, campi personalizzati, team, canale e stato della conversazione. |
| `list_messages` | Lettura | Legge i messaggi della conversazione di un contatto, dal più recente, note interne comprese. |
| `list_channels` | Lettura | Elenca i canali connessi (WhatsApp, Instagram, Facebook Messenger e Telegram). |
| `list_teams` | Lettura | Elenca i team dell'account. |
| `list_templates` | Lettura | Elenca i modelli WhatsApp e il loro stato di approvazione. |
| `send_message` | Scrittura | Invia un messaggio WhatsApp a un contatto esistente. Fuori dalla finestra di assistenza clienti di 24 ore si possono inviare solo modelli approvati. |
| `update_contact` | Scrittura | Rinomina un contatto, aggiunge o rimuove tag, compila campi personalizzati o sposta la conversazione su un altro team. |
| `add_note` | Scrittura | Aggiunge una nota interna a una conversazione. Le note sono visibili solo al tuo team, mai al contatto. |
| `close_conversation` | Scrittura | Chiude la conversazione di un contatto. |

:::note
L'assistente può scrivere solo ai contatti che esistono già in Callbell: non può avviare una conversazione con un nuovo numero. I modelli di autenticazione (codici monouso) non possono essere inviati da un'app di IA.
:::
