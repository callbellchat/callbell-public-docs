---
sidebar_position: 3
---

import googleSpreadsheetValidFormat from './assets/google_spreadsheet_valid_format.png'
import googleCredentials from './assets/google_credentials.png'
import googleSpreadsheetInsertLast from './assets/google_spreadsheet_insert_last.png'
import googleSpreadsheetInsert from './assets/google_spreadsheet_insert.png'
import googleSpreadsheetInsert2 from './assets/google_spreadsheet_insert_2.png'
import googleSpreadsheetUpdate from './assets/google_spreadsheet_update.png'
import googleSpreadsheetUpdate2 from './assets/google_spreadsheet_update_2.png'
import googleSpreadsheetSelect from './assets/google_spreadsheet_select.png'
import googleSpreadsheetSelect2 from './assets/google_spreadsheet_select_2.png'

# Foglio elettronico di Google

Questa azione consente al bot di interagire con un documento di Google Sheets, inserendo, aggiornando e selezionando righe in modo dinamico durante le interazioni dell'utente. Può essere utilizzata per memorizzare, recuperare e modificare i dati raccolti dalle conversazioni del bot.

# Casi d'uso:

- Memorizzazione delle risposte degli utenti direttamente in un file di Google Sheets per una successiva elaborazione.
- Aggiornamento di voci specifiche in Google Sheets in base agli input dell'utente.
- Recupero di dati da un foglio Google per utilizzarli all'interno di una conversazione o come condizioni nel flusso del bot.

# Come si usa:

## 1. Aggiunta di un'azione di Google Sheets

Per aggiungere un'azione di Google Sheets nell'editor di flusso di Callbell, procedere come segue:

1. Aprite il Flow Builder e selezionate il punto della conversazione in cui volete integrare Google Sheets.
2. Aggiungere una nuova azione facendo clic sul pulsante Aggiungi azione e selezionando Google Sheets dall'elenco delle azioni disponibili, all'interno della sezione "Logica".

## 2. Autenticatevi con il vostro account Google

Fare clic sul pulsante "Google connect" e seguire le istruzioni.

:::suggerimento
Assicurarsi di selezionare tutti i diritti. Il bot Callbell non funziona correttamente se manca uno dei diritti "File di Google Drive" o "Foglio di calcolo di Google".

<div class="text--center">
    <img src={googleCredentials} width={500} />
</div>
:::

## 3. Configurazione dell'azione

È necessario configurare l'integrazione compilando i seguenti campi:

**Foglio di calcolo**: Scegliere il documento di Google Sheets con cui si desidera interagire. Assicurarsi che l'API di Google Sheets sia impostata correttamente.

**Foglio**: Selezionare il foglio specifico all'interno del documento (ad esempio, "Foglio1").

**Azione di selezione**:

- Inserisci riga: consente di aggiungere una nuova riga nel foglio con i dati dell'utente.
- Aggiorna riga: consente di aggiornare una riga esistente in base all'input dell'utente.
- Seleziona riga: consente di recuperare i dati dal foglio per visualizzarli nella conversazione del bot.

:::consiglio
Assicuratevi di avere fogli di calcolo disponibili nel vostro account. Callbell non sarà in grado di crearne uno automaticamente per voi.
Inoltre, Callbell supporterà solo fogli di calcolo con intestazioni (con nomi di colonne) in alto come questo:

<div class="text--center">
    <img src={googleSpreadsheetValidFormat} width={500} />
</div>
:::

## 4. Inserimento di dati in Google Sheets

Quando si seleziona l'opzione Inserisci riga:

- Inserisci posizione: Scegliere la riga in cui inserire i nuovi dati.

  "Prima" inserirà una riga alla riga 1.

  "Personalizzato" inserisce una riga a qualsiasi indice specificato. È possibile rendere questo valore dinamico utilizzando una variabile, ma assicurarsi che il valore sia sempre un numero. Il Bot restituirà un errore e continuerà il suo flusso se l'indice non è un numero.

  "Ultimo" inserisce la riga alla prima riga vuota trovata.

  Si noti che se il foglio di calcolo presenta dei "buchi", la riga potrebbe non essere inserita nel punto desiderato.

<div class="text--center">
    <img src={googleSpreadsheetInsertLast} width={500} />
</div>

- Valori delle colonne: Mappare i dati che verranno inseriti.

È possibile aggiungere più colonne in base ai dati che si desidera inserire e alle colonne disponibili nel foglio di calcolo.
Se si omette il valore di una colonna, questa rimarrà vuota nel foglio di calcolo.

Ad esempio, questi parametri:

<div class="text--center">
    <img src={googleSpreadsheetInsert} width={500} />
</div>
Il risultato sarà questo inserimento:
<div class="text--center">
    <img src={googleSpreadsheetInsert2} width={500} />
</div>

## 5. Aggiornamento dei dati in Google Sheets

Quando si seleziona l'opzione Aggiorna riga:

- Aggiorna posizione: Esattamente come in questo inserimento, definire quale riga aggiornare. Si noti che, a causa di una limitazione di Google, non è possibile aggiornare direttamente l'ultima riga.

- Valori delle colonne: Come per l'inserimento, definire le colonne da aggiornare con i valori forniti dall'utente. Qualsiasi colonna specificata qui sostituisce il valore della riga precedente. Se si vuole mantenere il valore della colonna precedente, basta non specificare alcuna colonna.

Ad esempio, un'azione definita in questo modo:

<div class="text--center">
    <img src={googleSpreadsheetUpdate} width={500} />
</div>

Il risultato sarà l'aggiornamento della riga 3 in questo modo:

<div class="text--center">
    <img src={googleSpreadsheetUpdate2} width={500} />
</div>

## 6. Selezionare i dati da Google Sheets

Per cercare e recuperare una riga è necessario:

- **La colonna da cercare** : Il bot che itera e cerca solo su una determinata colonna.
- **Valore della cella da trovare** : Il valore che la colonna deve contenere
- Memorizzare i dati della riga in variabili. È possibile accedere a qualsiasi dato della colonna e memorizzarlo in qualsiasi variabile creata.

Ad esempio, un'azione impostata in questo modo:

<div class="text--center">
    <img src={googleSpreadsheetSelect} width={500} />
</div>

restituirebbe questo valore:

<div class="text--center">
    <img src={googleSpreadsheetSelect2} width={500} />
</div>

E memorizzarlo nella variabile "numero di telefono del foglio elettronico".

:::tip
Si noti che la ricerca restituirà solo il primo risultato. Se ci sono più righe che corrispondono al valore della cella, verrà restituito solo il primo. Se il risultato che si cerca non è il primo, creare una nuova colonna nel foglio di calcolo con valori più specifici/unici
:::

## 7. Gestione dei fallimenti

In caso di fallimento dell'API, è possibile memorizzare la risposta al fallimento in una variabile dedicata per analisi o tentativi futuri.
Si può, ad esempio, immaginare una logica che verifichi il fallimento e ritenti con un'azione di "salto".

# Migliori pratiche:

- Assicurarsi sempre che l'API di Google Sheets sia connessa e abbia le autorizzazioni adeguate per consentire al bot di accedere al documento.
- Testare a fondo l'integrazione per gestire eventuali errori API (ad esempio, problemi di accesso a Google Sheets). Il simulatore di bot vi aiuterà in questo senso.
