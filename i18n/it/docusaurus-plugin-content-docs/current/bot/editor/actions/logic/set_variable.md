---
sidebar_position: 4
---

import setVariableUrl from './assets/set_variable.png'
import setVariableEditUrl from './assets/set_variable_edit.png'

# Imposta variabile

<img src={setVariableUrl} width={180} />

L'azione **Imposta variabile** viene utilizzata per assegnare un valore specifico a una variabile.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/LhJmOoV-dAM" title="Come usare l&#39;azione &quot;imposta variabile&quot; - Callbell Chatbot" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Come usarla

Dopo aver aggiunto l'azione, è possibile selezionare una variabile esistente oppure crearne una nuova. Nel secondo caso, digitare semplicemente il nome della variabile e cliccare sul pulsante **Crea**.

<img src={setVariableEditUrl} width={400} />

### Creazione di una nuova variabile

La creazione di una nuova variabile richiederà di selezionare il tipo di variabile. È possibile scegliere tra **Stringa**, **Numero** e **Lista**.

Dopo aver selezionato il tipo di variabile, è possibile specificare il valore della variabile. A seconda del tipo di variabile selezionato, sarà possibile specificare un'operazione da applicare alla variabile.

### Variabili di tipo Stringa

Se si è creato o selezionato una variabile di tipo **Stringa**, è possibile eseguire le seguenti azioni:

- **Sostituisci testo** - Sostituisci il valore della variabile con il testo specificato.
- **Aggiungi al testo** - Aggiungi il testo specificato al valore della variabile.

### Variabili di tipo Numero

Se si è creato o selezionato una variabile di tipo **Numero**, è possibile eseguire le seguenti azioni:

- **Sostituisci numero** - Sostituisci il valore della variabile con il numero specificato.
- **Aggiungi numero** - Aggiungi il numero specificato al valore della variabile.
- **Sottrai numero** - Sottrai il numero specificato dal valore della variabile.
- **Moltiplica per numero** - Moltiplica il valore della variabile per il numero specificato.
- **Dividi per numero** - Dividi il valore della variabile per il numero specificato.

:::info
Per impostazione predefinita, il valore della variabile è impostato su `0`.
:::

### Variabili di tipo Lista

Se si è creato o selezionato una variabile di tipo **Lista**, è possibile eseguire le seguenti azioni:

- **Aggiungi alla lista** - Aggiungi il testo specificato alla lista.
- **Rimuovi dalla lista** - Rimuovi il testo specificato dalla lista.
- **Svuota la lista** - Svuota la lista.

### Uso di variabili con altre variabili

È anche possibile utilizzare variabili con altre variabili. Ad esempio, è possibile impostare una variabile sul valore di un'altra variabile. Ciò è utile se si sta creando una lista di valori e si desidera aggiungere un nuovo valore alla lista o, ad esempio, si desidera tenere traccia del punteggio di un utente.