---
titolo: GET /messaggi/stato/:uuid
sidebar_position: 3
---

importare RequestTabs da "@site/src/components/Requests/RequestTabs"

# GET /messages/status/:uuid

### Parametri richiesti

| Parametro | Tipo | Descrizione |
| :-------- | :----- | :---------------------------------------------------- |
| `uuid` | Stringa | Identificatore del messaggio inviato tramite API. 

### Esempio di richiesta

<RichiestaTabs endpoint='messages_api' request="get_message_status" />

### Risposta

| Parametro | Tipo | Descrizione |
| :-------- | :--------------------------------------------------------------------- | :------------------------------------------- |
| `message` | [MessageSendRequest](/api/reference/object_types/message_send_request) | I dettagli del messaggio completi di stato. |

### Esempio di risposta

```json title=response.json
{
  "message": {
    "uuid": "adf3d1216d4c4dcd908199d6700f2381",
    "status": "enqueued",
    "messageStatusPayload":{
      "id":"2b34bfb7-2631-4763-89fb-1b3c65a4baaa",
      "type": "enqueued",
      "payload":{
        "type": "session",
        "whatsappMessageId": "gBGGM2MSRxl_AAlqmG1KQXU7nz4".
      },
      "destination":"1122334455"
    }
  }
}
```
