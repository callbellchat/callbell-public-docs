---
sidebar_position: 2
---

import newChoiceUrl from './assets/new_choice.png'
import newChoiceEditUrl from './assets/new_choice_edit.png'
import newChoiceFallbackUrl from './assets/new_choice_fallback.png'

# Nuova Scelta

<img src={newChoiceUrl} width={180} />

Questa azione ti consente di creare una nuova scelta nel flusso corrente.

## Configurazione

L'azione ti consente di personalizzare **come il flusso dovrebbe comportarsi** in base all'ultimo messaggio inviato dall'utente o al valore di una variabile.

<img src={newChoiceEditUrl} width={300} />

### Trigger della scelta

Puoi specificare un **trigger** della scelta utilizzando uno degli operatori di uguaglianza seguenti:

- **Uguale** - Il trigger della scelta si attiva se il valore è uguale al valore nel campo a destra.
- **Contiene** - Il trigger della scelta si attiva se il valore contiene il valore nel campo a destra.
- **Inizia con** - Il trigger della scelta si attiva se il valore inizia con il valore specificato nel campo a destra.
- **Finisce con** - Il trigger della scelta si attiva se il valore finisce con il valore specificato nel campo a destra.
- **Diverso da** - Il trigger della scelta si attiva se il valore è diverso dal valore nel campo a destra.
- **Maggiore di** - Il trigger della scelta si attiva se il valore è maggiore del valore nel campo a destra.
- **Minore di** - Il trigger della scelta si attiva se il valore è minore del valore nel campo a destra.
- **Maggiore o uguale a** - Il trigger della scelta si attiva se il valore è maggiore o uguale al valore nel campo a destra.
- **Minore o uguale a** - Il trigger della scelta si attiva se il valore è minore o uguale al valore nel campo a destra.
- **È un numero** - Il trigger della scelta si attiva se il valore è un numero.
- **È un messaggio** - Il trigger della scelta si attiva se il valore è un messaggio.

### Trigger Multipli

Puoi specificare trigger multipli sulla stessa condizione cliccando sul pulsante **Aggiungi condizione**.

Puoi decidere come unire le condizioni multiple utilizzando gli operatori **E** o **O**. Se vuoi passare tra i due operatori, clicca sul pulsante **E** o **O**.

Ad esempio, utilizzando più **O** puoi creare un elenco di sinonimi per la stessa scelta. Questo è utile se vuoi attivare la stessa scelta per parole diverse.

Allo stesso tempo, puoi utilizzare più **E** per creare un elenco di condizioni che devono essere soddisfatte per attivare la scelta. Ad esempio, immagina di verificare che una variabile sia maggiore di un certo valore e minore di un altro valore.

### Variabili

Puoi confrontare i valori delle variabili, il che significa che puoi prendere una decisione basata sul valore di una variabile. Questo è utile quando vuoi indirizzare il bot a seguire un percorso specifico senza dover chiedere all'utente di inserire un input.

### Fallback

Se nessuna delle condizioni è soddisfatta, il bot prenderà il percorso del **Fallback**.

<img src={newChoiceFallbackUrl} width={500} />

I fallback sono utili quando vuoi gestire tutti i casi che non sono coperti dalle condizioni.