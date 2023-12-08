# Messaggio stato aggiornato

:::caution
Si noti che le **notifiche di recapito dei messaggi** sono disponibili solo su **WhatsApp Business API** e **WhatsApp QR API**.
:::

:::info
Gli eventi vengono inoltrati solo per i **messaggi in uscita**. I messaggi in entrata non generano aggiornamenti di stato.
:::

Questo evento verrà inviato ogni volta che lo stato di un messaggio viene **aggiornato**. Questo può assumere uno dei seguenti valori:

- `enqueued`
- `sent`
- `delivered`
- `read`
- `failed`
- `mismatch`
- `deleted`


### Stati del messaggio

#### Inserito in coda

Inviato quando il messaggio viene inviato con successo al client API di WhatsApp Business o al client API di QR.

#### Inviato

Questo stato viene inviato ogni volta che il messaggio viene inviato al dispositivo dell'utente finale.

#### Consegnato

Inviato quando il messaggio viene finalmente consegnato al dispositivo dell'utente finale.

#### Letto

Indica che il messaggio è stato letto correttamente dall'utente finale.

#### Fallito

Questo stato viene generato ogni volta che la consegna del messaggio non è stata possibile. Nel payload interno viene anche specificato il motivo del fallimento (ad esempio _"numero non esiste su WhatsApp"_)

#### Incompatibilità

Questo stato dell'evento viene inviato ogni volta che WhatsApp Business API esegue automaticamente una correzione del numero di telefono. L'identificatore del numero di telefono corretto sarà presente all'interno del payload interno dell'evento.

### Eliminato 
:::caution
Questo evento è stato deprecato poiché non è più supportato da Meta.
:::

Rappresenta l'eliminazione di un messaggio da parte dell'utente finale, sia per _"elimina solo per me"_ che per _"elimina per tutti"_.


### Nome dell'evento

`message_status_updated`

### Campi del payload

| Campo                  | Tipo   | Descrizione                        |
| :--------------------- | :----- | :--------------------------------- |
| `uuid`                 | string | L'identificatore univoco del messaggio |
| `status`               | string | Lo stato di consegna del messaggio   |
| `messageStatusPayload` | JSON   | Il payload dello stato del messaggio in formato JSON |

### Esempio di payload

```json title=payload.json
{
  "event": "message_status_updated",
  "payload": {
    "uuid": "adf3d1216d4c4dcd908199d6700f2381",
    "status": "read",
    "messageStatusPayload":{
      "id":"gBGGM2MSRxl_Aglqmg5KQXU7ABC",
      "gsId":"2b34bfb7-2631-4763-89fb-1b3c65a4babc",
      "type":"read",
      "payload":{
        "ts":1686563913
      },
      "destination":"1122334455"
    }
  }
}
```