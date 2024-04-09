---
sidebar_position: 3
---

import urlParams from './assets/url_params.png'
import queryParams from './assets/query_params.png'
import responseQuickView from './assets/response_quick_view.png'
import webhookValidationErrors from './assets/webhook_validation_errors.png'
import parameterVariable from './assets/parameter_variable.png'
import pathHelper from './assets/path_helper.png'
import flatMapExemple from './assets/flat_map_exemple.png'
import responseFailureVariable from './assets/response_failure_variable.png'
import failureHandling from './assets/failure_handling.png'
import simulatorWebhookChoices from './assets/simulator_webhook_choices.png'
import fakeSuccessWebhook from './assets/fake_success_webhook.png'
import multipleResponseVariables from './assets/multiple_response_variables.png'

# Webhook

Questa azione consente di effettuare richieste HTTP a qualsiasi servizio esterno.
È utile per inviare informazioni dal bot a un altro servizio o per recuperare informazioni da un altro servizio e utilizzarle nel bot.

:::tip
Prima di utilizzare questa azione, è necessario disporre di conoscenze tecniche sulle [richieste HTTP e i loro parametri] (https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview).
:::

<iframe width="100%" height="500" src="https://www.youtube.com/embed/0pbU9KPXcWI" title="Come utilizzare l'azione &quot;Webhook&quot; - Callbell Chatbot" frameborder="0" allow="accelerometro; autoplay; clipboard-write; encrypted-media; giroscopio; picture-in-picture; web-share" allowfullscreen></iframe>.

## Come funziona questa azione

Ecco alcune spiegazioni sul funzionamento di questa azione e sulle sue limitazioni:

- Il bot esegue sempre questa azione in modo sincrono, cioè aspetta che la richiesta riceva un risultato (sia esso un successo o un fallimento) prima di procedere alla fase successiva. Se si hanno più azioni webhook una dopo l'altra, esse saranno eseguite in sequenza, non in batch.

- Il timeout per la query è impostato internamente a 15 secondi. Qualsiasi query di lunga durata fallirà oltre questa durata.

- Il bot continuerà anche se l'azione webhook fallisce per qualsiasi motivo.

- È responsabilità dell'utente gestire la risposta, sia essa positiva o negativa. È necessario specificare le variabili per memorizzare i risultati della richiesta. Poi, sarà possibile utilizzare queste variabili in un secondo momento nel bot, ad esempio come condizione in un blocco di scelta.

## Come usarlo

### Parametri della richiesta

L'unico parametro obbligatorio è l'URL. È possibile aggiungere direttamente dei parametri di richiesta ad esso:

<div class="text--center">
    <img src={urlParams} width={500} />
</div>

oppure utilizzare l'helper:

<div class="text--center">.
    <img src={queryParams} width={500} />
</div>

Tutti gli altri parametri (intestazioni e corpo) sono facoltativi. Si possono aggiungere con la stessa logica, utilizzando i pulsanti "aggiungi intestazione" o "aggiungi corpo" in alto a destra.

:::tip
È possibile inserire variabili per inviare informazioni precedentemente memorizzate in qualsiasi campo: URL, params, header o body. È sufficiente fare clic sul piccolo pulsante variabile a destra.

<div class="text--center">
    <img src={parameterVariable} width={500} />
</div>
:::

Una volta scelto il metodo giusto, si può fare clic sul pulsante `Test URL`. Se la richiesta va a buon fine, apparirà un piccolo pulsante "occhio" sul lato destro, che consentirà di dare una rapida occhiata al layout della risposta:

<div class="text--center">
    <img src={responseQuickView} width={500} />
</div>

### Errori di validazione della richiesta

Durante l'impostazione e il test dell'azione, si possono incontrare diversi tipi di errori:

<div class="text--center">
    <img src={webhookValidationErrors} width={500} />
</div>

Elaboriamo le richieste sul nostro server e identifichiamo gli errori più comuni:

 <table>
  <tr>
    <th>Tipo</th>
    <th>Motivi</th>
    <th>Azione</th>
  </tr>
  <tr>
    <td>MissingParameter</td>
    <td>Url o metodo mancante</td>
    <td>Controlla che l'URL e il metodo siano specificati correttamente.</td>
  </tr>
  <tr>
    <td>BadRequest</td>
    <td>Url, corpo, parametri o intestazione non validi</td>
    <td>Controllare la validità di ogni parametro. Usare client come Postman per controllare i parametri.</td>
  </tr>
  <tr>
    <td>BadResponse</td>
    <td>Stato della risposta diverso da 200 o risposta non in formato JSON</td>
    <td>Controllare lo stato del server.</td>
  </tr>
  <tr>
    <td>KeyError</td>
    <td>Il percorso specificato non corrisponde al payload della risposta</td>
    <td>Controllare la validità del percorso inserito nell'azione webhook per ogni variabile</td>.
  </tr>
</table>

### Parsing e memorizzazione delle risposte alle richieste in variabili

Una volta che la richiesta riceve una risposta positiva, si può scegliere una variabile che memorizzerà il risultato. Si può anche selezionare la parte della risposta che si vuole memorizzare, usando l'helper "path":

<div class="text--center">
    <img src={pathHelper} width={500} />
</div>

Se si sta cercando di selezionare un array come valore, l'helper suggerisce di usare la funzione `flatMap`, che dà la possibilità di estrarre qualsiasi valore dall'array.

Per esempio, supponiamo che la struttura dei dati della risposta della richiesta abbia questo aspetto:

```
{
  "prodotti": [
    {
      "id": 1,
      "title": "iPhone 9",
      "descrizione": "Un cellulare apple che non ha nulla di apple",
      "prezzo": 549,
      "valutazione": 4.69,
      "stock": 94,
      "marca": "Apple",
      "categoria": "smartphone",
      "immagini": [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",
        "https://cdn.dummyjson.com/product-images/1/2.jpg"
      ]
    },
    {
      "id": 2,
      "titolo": "iPhone X",
      "descrizione": "SIM-Free, modello A19211 Display Super Retina HD da 6,5 pollici con tecnologia OLED Chip A12 Bionic con ...",
      "prezzo": 899,
      "valutazione": 4.44,
      "stock": 34,
      "marca": "Apple",
      "categoria": "smartphone",
      "immagini": [
        "https://cdn.dummyjson.com/product-images/2/1.jpg"
      ]
    }
  ]
}
```

E si vuole memorizzare nella variabile `webhook success` un array di soli titoli di prodotti:

```
["iPhone 9", "iPhone X"]
```

L'utilizzo del seguente valore soddisfa le vostre esigenze:

<div class="text--center">
    <img src={flatMapExemple} width={500} />
</div>

Se si vuole accedere alla categoria del secondo prodotto, si può utilizzare questo percorso:

```
prodotti[1].categoria
```

:::tip
È possibile memorizzare più parti della risposta in variabili diverse. In questo modo si eviterà di eseguire più volte la stessa richiesta di webhook

<div class="text--center">
    <img src={multipleResponseVariables} width={500} />
</div>
:::

### Gestire le richieste fallite

È possibile che, anche dopo aver impostato correttamente l'azione webhook, questa fallisca occasionalmente (errori del server, parametri non gestiti correttamente ecc.).
Se il comportamento del bot dipende dal risultato della richiesta, è importante gestire gli errori.
Il bot memorizzerà gli errori nella variabile specificata o utilizzerà la variabile `last webhook failure`:

<div class="text--center">
    <img src={responseFailureVariable} width={500} />
</div>

Sta a voi gestire o meno questo errore. Il modo migliore è creare una variabile specifica per ogni webhook e poi controllare tramite un blocco di scelta se la variabile contiene un messaggio:

<div class="text--center">
    <img src={failureHandling} width={600} />
</div>

## Testare la richiesta nel simulatore

Si dovrebbe sempre verificare se il bot si comporta come previsto tramite il simulatore, assicurandosi che sia le richieste riuscite che quelle fallite siano gestite correttamente.
Quando il simulatore raggiunge un'azione webhook, a differenza del bot reale, si mette in pausa e chiede di specificare a cosa dovrebbe assomigliare la richiesta:

<div class="text--center">
    <img src={simulatorWebhookChoices} width={500} />
</div>

- Finto successo: Richiederà una modale per specificare il carico della richiesta andata a buon fine. Quindi, utilizzerà ogni percorso specificato nell'azione webhook per analizzare e memorizzare le variabili corrispondenti. Si noti che se si memorizza una variabile di tipo elenco, il simulatore si aspetta che il payload fornito contenga un array nel percorso giusto. In caso contrario, verrà visualizzato un errore nella finestra modale, impedendo ulteriori progressi.

<div class="text-center">
    <img src={fakeSuccessWebhook} width={500} />
</div>

- Finto fallimento: Mostrerà la stessa maschera e consentirà di specificare il payload da salvare nella variabile fail specificata nell'azione.

- Attivazione di un webhook vero e proprio: proxy la richiesta al nostro server e restituisce il risultato effettivo. Può essere utile per verificare se tutto funziona bene, ma ricordate che verrà effettuata una vera richiesta HTTP. Se si intende aggiungere un utente al CRM tramite l'azione webhook, l'uso di questa scelta nel simulatore potrebbe aggiungere dati indesiderati al CRM.
