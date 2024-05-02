---
sidebar_position: 3
---

import openAIAPIKey from './assets/openAI_api_key.png'

# OpenAI

Questa azione consente di generare testo basato su un prompt e sui messaggi precedenti della conversazione. Può essere applicata a vari scenari, che vanno dalle interazioni classiche in stile chat con un assistente ad azioni specifiche come riassumere conversazioni per i tuoi agenti, fornire consigli o individuare comportamenti potenziali degli utenti. L'efficacia dell'azione dipende principalmente dalla qualità del prompt fornito.

:::tip
Prima di utilizzare questa azione, è consigliabile familiarizzare con l'ingegneria del prompt, che puoi trovare [qui](https://platform.openai.com/docs/guides/prompt-engineering).
:::

<iframe width="100%" height="500" src="https://www.youtube.com/embed/qvKuamQ207k" title="Come utilizzare l'azione &quot;OpenAI&quot; - Chatbot Callbell" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Come funziona questa azione

Ecco alcune spiegazioni su come funziona questa azione e le sue limitazioni:

- Il bot esegue sempre questa azione in modo sincrono, ovvero attende che l'API OpenAI restituisca una risposta prima di procedere al passaggio successivo. Simile all'azione Webhook, se hai più Azioni OpenAI consecutive, verranno eseguite in sequenza anziché per batch.

- Il bot continuerà il suo flusso anche se l'azione OpenAI fallisce per qualsiasi motivo, come un timeout.

- È tua responsabilità gestire la risposta, che sia positiva o negativa. Dovrai specificare le variabili per memorizzare la risposta di OpenAI. Poi, spetta a te utilizzare queste variabili successivamente nel bot, ad esempio come condizioni in un blocco di scelta, in messaggi o note.

## Come utilizzarla

Solo il token e il prompt sono obbligatori.

### Parametro Token OpenAI

Puoi trovare la chiave API sul tuo [account OpenAI](https://platform.openai.com/api-keys).

:::tip
Puoi incollare direttamente la chiave nel campo di input, oppure puoi salvarla come variabile con un valore predefinito, che può essere utile per il riutilizzo in più azioni:

<div class="text--center">
    <img src={openAIAPIKey} width={500} />
</div>
:::

### Parametro Prompt

Il prompt ti consente di costruire un assistente personalizzato. Puoi inserire variabili al suo interno per renderlo più dinamico.

### Messaggi precedenti analizzati

<table>
  <tr>
    <th>Tipo</th>
    <th>Azione</th>
  </tr>
  <tr>
    <td>Tutti dalla conversazione</td>
    <td>Invia l'intera conversazione a OpenAI. Ogni messaggio inviato è interpretato come "Assistente" da OpenAI, e ogni messaggio ricevuto è interpretato come "Utente".</td>
  </tr>
  <tr>
    <td>Solo dalla sessione corrente del bot</td>
    <td>Invia i messaggi all'interno della stessa "filo del bot", a partire dall'ultimo riavvio del bot all'interno della conversazione.</td>
  </tr>
  <tr>
    <td>Solo l'ultimo messaggio</td>
    <td>L'ultima risposta dell'utente.</td>
  </tr>
  <tr>
    <td>Solo il prompt</td>
    <td>Viene utilizzato solo il prompt per interrogare l'API OpenAI.</td>
  </tr>
</table>

### Gestione della risposta di OpenAI

Anche dopo aver configurato correttamente l'azione OpenAI, possono verificarsi occasionali fallimenti (principalmente a causa di timeout). Se il comportamento del tuo bot dipende dalla risposta di OpenAI, è cruciale gestire gli errori in modo appropriato. Eventuali errori incontrati verranno memorizzati nella variabile specificata, o verrà utilizzata la variabile `last webhook failure`:

Spetta a te decidere come gestire questi errori. L'approccio consigliato è creare una variabile specifica per ogni webhook e quindi utilizzare un blocco di scelta per verificare se la variabile contiene un messaggio.
