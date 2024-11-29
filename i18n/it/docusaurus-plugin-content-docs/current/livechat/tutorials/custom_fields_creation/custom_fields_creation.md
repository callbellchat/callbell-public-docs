---
sidebar_position: 1
---

# Come creare campi personalizzati dalla chat in diretta

In questa guida rapida imparerai come creare [campi personalizzati](https://headwayapp.co/callbell-changelog/custom-fields-(for-contacts)-225586) nell'app Callbell utilizzando le informazioni inviate tramite la nostra chat in diretta.

## Step 1: Genera il frammento di codice della chat in diretta

Dopo aver creato un'integrazione di chat in diretta e personalizzarla secondo le tue preferenze, vai alla seconda sezione della pagina di configurazione del widget. Lì vedrai un frammento di codice che è stato generato per essere copiato e incollato nel tuo sito web al fine di far funzionare la chat in diretta.

![livechat_snippet](./assets/livechat_snippet.png)

## Step 2: Modifica il frammento di codice

Nel nostro caso, ciò che vogliamo fare è inviare informazioni dal nostro sito web all'app Callbell ogni volta che un utente inizia a interagire con la chat. Possiamo farlo apportando semplicemente alcune piccole modifiche al frammento di codice generato sopra. Vedi l'esempio qui sotto:

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

In questo esempio, i campi extra sono codificati rigorosamente, ma possono essere informazioni inviate dal tuo backend.

:::info
Nota che il campo `identifier` è obbligatorio. Verrà utilizzato come ID per l'utente che interagisce con la chat in diretta, pertanto deve essere univoco. Se questo campo non viene inviato, l'utente sarà in grado di interagire con la chat e inviare e ricevere messaggi, ma non saranno creati campi personalizzati.
:::

:::info
È possibile inviare un massimo di 20 campi extra per creare campi personalizzati nell'app Callbell.
:::

## Esempio

Nell'esempio qui sotto, stiamo generando un UUID casuale come identificatore e ottenendo la lingua del browser.
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