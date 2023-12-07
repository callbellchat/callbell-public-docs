---
sidebar_position: 4
---

import setVariableUrl from './assets/set_variable.png'
import setVariableEditUrl from './assets/set_variable_edit.png'

# Imposta variabile

<img src={setVariableUrl} width={180} />

L'azione **Set Variable** è usata per impostare una variabile a un valore specifico.

## Come usarla

Dopo aver aggiunto l'azione, è possibile selezionare una variabile esistente o crearne una nuova. In quest'ultimo caso, è sufficiente digitare il nome della variabile e poi fare clic sul pulsante **Crea**.

<img src={setVariableEditUrl} width={400} />

### Creazione di una nuova variabile

La creazione di una nuova variabile richiede la selezione del tipo di variabile. È possibile scegliere tra **Stringa**, **Numero** e **Elenco**.

Dopo aver selezionato il tipo di variabile, è possibile specificare il valore della variabile. A seconda del tipo di variabile selezionata, sarà possibile specificare un'operazione da applicare alla variabile.

### Variabili stringa

Se è stata creata o selezionata una variabile **Stringa**, è possibile eseguire le seguenti operazioni:

- **Replace text** - Sostituisce il valore della variabile con il testo specificato.
- **Aggiungi al testo** - Aggiunge il testo specificato al valore della variabile.

### Variabili numeriche

Se è stata creata o selezionata una variabile **Numero**, è possibile eseguire le seguenti azioni:

- **Replace number** - Sostituisce il valore della variabile con il numero specificato.
- **Aggiungi numero** - Aggiunge il numero specificato al valore della variabile.
- **Subtract number** - Sottrae il numero specificato dal valore della variabile.
- **Moltiplica numero** - Moltiplica il valore della variabile per il numero specificato.
- Dividere numero** - Divide il valore della variabile per il numero specificato.

:::info
Per impostazione predefinita, il valore della variabile è impostato su `0`.
:::

### Elenco variabili

Se è stata creata o selezionata una variabile **Elenco**, è possibile eseguire le seguenti azioni:

- **Aggiungi all'elenco** - Aggiunge il testo specificato all'elenco.
- **Rimuovi da elenco** - Rimuove il testo specificato dall'elenco.
- **Vuota elenco** - Svuota l'elenco.

### Utilizzo di variabili con altre variabili

È possibile utilizzare le variabili con altre variabili. Ad esempio, è possibile impostare una variabile sul valore di un'altra variabile. Questo è utile se si sta costruendo un elenco di valori e si vuole aggiungere un nuovo valore all'elenco o, ad esempio, se si vuole tenere traccia del punteggio di un utente.