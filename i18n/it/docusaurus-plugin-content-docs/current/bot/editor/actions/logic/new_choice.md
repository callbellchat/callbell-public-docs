---
sidebar_position: 2
---

importare newChoiceUrl da './assets/new_choice.png
importare newChoiceEditUrl da './assets/new_choice_edit.png
importare newChoiceFallbackUrl da './assets/new_choice_fallback.png'.

# Nuova scelta

<img src={newChoiceUrl} width={180} />

Questa azione consente di creare una nuova scelta nel flusso corrente.

## Configurazione

L'azione consente di personalizzare **il comportamento del flusso** in base all'ultimo messaggio inviato dall'utente o a un valore variabile.

<img src={newChoiceEditUrl} width={300} />

### Inneschi di scelta

È possibile specificare un **trigger** della scelta utilizzando uno dei seguenti operatori di uguaglianza:

- **Equals** - La scelta si attiva se il valore è uguale al valore del campo di destra.
- Contiene** - La scelta si attiva se il valore contiene il valore del campo di destra.
- Inizia con** - La scelta si attiva se il valore inizia con il valore specificato nel campo di destra.
- **Finisce con** - La scelta si attiva se il valore termina con il valore specificato nel campo di destra.
- **Diversa da** - La scelta si attiva se il valore è diverso da quello specificato nel campo di destra.
- **Maggiore di** - La scelta si attiva se il valore è maggiore di quello indicato nel campo di destra.
- **Meno di** - La scelta si attiva se il valore è inferiore al valore nel campo di destra.
- **Maggiore o uguale a** - La scelta si attiva se il valore è maggiore o uguale al valore nel campo di destra.
- **Meno di o uguale a** - La scelta si attiva se il valore è minore o uguale al valore nel campo di destra.
- **E' un numero** - La scelta si attiva se il valore è un numero.
- **E' un messaggio** - La scelta si attiva se il valore è un messaggio.

### Trigger multipli

È possibile specificare più trigger sulla stessa condizione facendo clic sul pulsante **Aggiungi condizione**.

È possibile decidere come unire le condizioni multiple utilizzando gli operatori **AND** o **OR**. Per passare da un operatore all'altro, fare clic sul pulsante **AND** o **OR**.

Ad esempio, utilizzando più **OR** è possibile creare un elenco di sinonimi per la stessa scelta. Ciò è utile se si desidera attivare la stessa scelta per parole diverse.

Allo stesso tempo, è possibile utilizzare più **AND** per creare un elenco di condizioni che devono essere soddisfatte per attivare la scelta. Ad esempio, immaginiamo di verificare la condizione che una variabile sia maggiore di un certo valore e minore di un altro valore.


### Variabili

È possibile confrontare i valori delle variabili, ossia prendere una decisione in base al valore di una variabile. Ciò è utile quando si vuole indirizzare il bot verso un percorso specifico, senza dover chiedere all'utente di fornire un input.

### Fallback

Se nessuna delle condizioni è soddisfatta, il bot prenderà il percorso **Fallback**.

<img src={newChoiceFallbackUrl} width={500} />

I fallback sono utili quando si vogliono gestire tutti i casi non coperti dalle condizioni.