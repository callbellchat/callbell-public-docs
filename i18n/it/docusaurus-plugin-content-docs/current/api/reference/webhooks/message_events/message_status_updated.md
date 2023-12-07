# Stato del messaggio aggiornato

:::attenzione
Si noti che le **notifiche di consegna dei messaggi** sono disponibili solo su **WhatsApp Business API** e **WhatsApp QR API**.
:::

:::info
Gli eventi vengono inoltrati solo per i **messaggi in uscita**. I messaggi in arrivo non attivano alcun aggiornamento di stato.
:::

Questo evento viene inviato ogni volta che lo stato di un messaggio viene **aggiornato**. Può essere uno dei seguenti valori:

- `in attesa`
- `inviato`
- `consegnato`
- `letto`
- `inadempiuto`
- `mismatch`
- `cancellato`


### Stati dei messaggi

#### In attesa

Inviato quando il messaggio è stato inviato con successo al client API di WhatsApp Business o al client API QR.

#### Inviato

Questo stato viene inviato ogni volta che il messaggio viene inviato al dispositivo dell'utente finale.

#### Consegnato

Inviato quando il messaggio è stato finalmente consegnato al dispositivo dell'utente finale.

#### Letto

Rappresenta che il messaggio è stato letto con successo dall'utente finale.

#### Fallito

Questo stato viene emesso quando la consegna del messaggio non è stata possibile. Nel payload interno viene specificato anche il motivo del fallimento (ad esempio _"il numero non esiste su WhatsApp"_).

#### Mismatch

Questo stato dell'evento viene inviato ogni volta che l'API di WhatsApp Business esegue automaticamente una correzione del numero di telefono. L'identificatore del numero di telefono corretto sarà presente nel payload interno dell'evento.

### Soppresso
:::attenzione
Questo evento è stato deprecato perché non è più supportato da Meta.
:::

Rappresenta la cancellazione di un messaggio da parte dell'utente finale, sia per _"cancella solo per me"_ che per _"cancella per tutti"_.


### Nome evento

Messaggio_stato_aggiornato

### Campi del carico utile

| Campo | Tipo | Descrizione |
| :--------------------- | :----- | :----------------------------------- |
| `uuid` | stringa | L'identificativo univoco del messaggio |
| `status` | stringa | Lo stato di consegna del messaggio |
| `messageStatusPayload` | JSON | Il payload grezzo dello stato del messaggio |

### Esempio di carico utile

```json title=payload.json
{
  "evento": "message_status_updated",
  "payload": {
    "uuid": "adf3d1216d4c4dcd908199d6700f2381",
    "status": "read",
    "messageStatusPayload":{
      "id": "gBGGM2MSRxl_Aglqmg5KQXU7ABC",
      "gsId":"2b34bfb7-2631-4763-89fb-1b3c65a4babc",
      "tipo: "read",
      "payload":{
        "ts":1686563913
      },
      "destination":"1122334455"
    }
  }
}
```
