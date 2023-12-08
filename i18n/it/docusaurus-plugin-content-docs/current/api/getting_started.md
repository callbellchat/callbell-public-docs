---
sidebar_position: 2
---

# Come iniziare

Questa guida passo-passo ti guiderà nell'utilizzo dell'API di Callbell per inviare un messaggio.

## Prerequisiti

Dovrai creare un account su Callbell e avere configurato un canale WhatsApp Business per poter seguire questa guida.

- Registrati su [Callbell](https://dash.callbell.eu/users/sign_up)
- Visualizza ulteriori informazioni sulla nostra integrazione [API WhatsApp Business](https://callbellsupport.zendesk.com/hc/en-us/articles/360007805898-How-to-integrate-WhatsApp-into-Callbell-through-the-WhatsApp-Business-APIs)

## Ottenere le chiavi API

Vai alla pagina delle chiavi API in Impostazioni di Callbell (https://dash.callbell.eu/settings/api_settings/keys) per generare una nuova chiave API:

![create_api_key](./assets/create_api_key_1.jpg)

Dopo aver cliccato sul pulsante **Crea chiave API**, assicurati di copiare il token e conservarlo in modo sicuro.

:::caution
La chiave API verrà mostrata solo su questa schermata. Se perdi l'accesso ad essa, dovrai generarne una nuova.
:::

## Invia un messaggio di prova usando cURL

Utilizzando il metodo di invio messaggio dell'[API dei messaggi](/api/reference/messages_api/post_send_messages.md) puoi testare se la tua chiave API funziona come previsto:

```bash
curl -X POST "https://api.callbell.eu/v1/messages/send" \
  -H "Authorization: Bearer <REPLACE_API_KEY_HERE>" \
  -H "Content-Type: application/json" \
  -d '{
    "to": "<REPLACE_PHONE_NUMBER_HERE>",
    "from": "whatsapp",
    "type": "text",
    "content": {
      "text": "Ciao dall'API di Callbell!"
    }
  }'
```

Sostituisci `REPLACE_API_KEY_HERE` con la chiave API generata nel passaggio [Ottenere le chiavi API](#ottenere-le-chiavi-api) e `REPLACE_PHONE_NUMBER_HERE` con il numero di telefono del destinatario.

:::info
Assicurati che il numero di telefono di ricezione abbia dato il consenso e che tu sia **all'interno della regola delle 24 ore** dell'API di WhatsApp Business.
:::

Se il messaggio è stato inviato correttamente, riceverai una risposta simile a questa:

```json
{
  "message": {
    "uuid": "<MESSAGE_UUID>",
    "status": "queued"
  }
}
```

Questo significa che il messaggio è stato _inserito correttamente in coda_ per essere inviato al numero di telefono desiderato.

### Recupera lo stato di un messaggio

Per sapere se il nostro messaggio di prova è stato consegnato con successo, puoi utilizzare uno dei seguenti metodi:

- Utilizza l'[endpoint dell'API di stato dei messaggi](api/reference/messages_api/get_message_status.md)
- Attiva **Webhooks** nella sezione delle chiavi API e iscriviti all'evento di tipo `message_status_updated`

In questo esempio useremo il primo metodo; per verificare lo stato del messaggio di prova, esegui il seguente comando cURL da un terminale:

```bash
curl -X GET "https://api.callbell.eu/v1/messages/status/<REPLACE_UUID_HERE>" \
  -H "Authorization: Bearer <REPLACE_API_KEY_HERE>" \
  -H "Content-Type: application/json"
```

Assicurati di sostituire `REPLACE_API_KEY_HERE` con la tua chiave API e `REPLACE_UUID_HERE` con l'identificatore del messaggio ottenuto dal passaggio [Invia un messaggio di prova](#invia-un-messaggio-di-prova-using-curl).

Otterrai la seguente risposta:

```json
{
  "message": {
    "uuid": "<MESSAGE_UUID>",
    "status": "consegnato"
  }
}
```

Questo conferma che il messaggio è stato inviato con successo all'utente ma non è ancora stato letto.

### Prossimi passi

Prova a esplorare le nostre API [Messaggi](/api/reference/messages_api/introduction.md) e [Contatti](/api/reference/contacts_api/introduction.md) per ulteriori esempi.