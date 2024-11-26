---
sidebar_position: 1
---

# Come creare campi personalizzati dalla chat live

In questa breve guida imparerai come creare [campi personalizzati](https://headwayapp.co/callbell-changelog/custom-fields-(for-contacts)-225586) nell'app Callbell utilizzando informazioni inviate tramite la nostra chat live.

## Passo 1: Generare il frammento di codice della chat live

Dopo aver creato un'integrazione di chat live e personalizzata in base alle tue preferenze, vai alla seconda sezione della pagina di configurazione del widget. Lì vedrai un frammento di codice che è stato generato per essere copiato e incollato nel tuo sito web al fine di far funzionare la chat live.

![snippet](./assets/snippet.png)

## Passo 2: Modificare il frammento di codice

Nel nostro caso, ciò che vogliamo fare è inviare informazioni dal nostro sito web all'app Callbell ogni volta che un utente inizia a interagire con la chat. Possiamo ottenere ciò semplicemente apportando alcune piccole modifiche al frammento di codice generato in precedenza. Vedi l'esempio qui sotto:

```html
<script>
  if (!window.callbellSettings) {
    window.callbellSettings = {}
  }
  window.callbellSettings["uuid"] = "000000-0000-abcd-1234-0000000000";
  window.callbellSettings["script_token"] = "script_token";
  window.callbellSettings["extra_params"] = {
    "identifier": '12345567',
    "course": "Scienze informatiche",
    "semestre": "4°"
  }
</script>
<script>
  (function(){var ...);
</script>
```

In questo esempio, i campi extra sono codificati direttamente, ma possono essere informazioni inviate dal tuo backend.

:::info
Nota che il campo `identifier` è obbligatorio. Sarà utilizzato come un ID per l'utente che interagisce con la chat live, pertanto deve essere univoco. Se questo campo non viene inviato, l'utente potrà interagire con la chat e inviare e ricevere messaggi, ma non verranno creati campi personalizzati.
:::

:::info
Puoi inviare fino a un massimo di 20 campi extra per creare campi personalizzati nell'app Callbell.
:::

## Esempio

Nell'esempio sottostante, stiamo generando un UUID casuale come identificatore e ottenendo la lingua del browser.
```html
<script>
  if (!window.callbellSettings) {
    window.callbellSettings = {}
  }
  window.callbellSettings["uuid"] = "000000-0000-abcd-1234-0000000000";
  window.callbellSettings["script_token"] = "script_token";
  window.callbellSettings["extra_params"] = {
    identifier: self.crypto.randomUUID(),
    language: navigator.language,
  }
</script>
<script>
  (function(){var ...);
</script>
````

E così verrà mostrato nell'app Callbell.
![custom_fields](./assets/custom_fields.png)