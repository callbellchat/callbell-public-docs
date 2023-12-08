---
title: GET /messages/status/:uuid
sidebar_position: 3
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /messages/status/:uuid

### Parâmetros Requeridos

| Parâmetro | Tipo   | Descrição                                                  |
| :-------- | :----- | :--------------------------------------------------------- |
| `uuid`    | String | Identificador da mensagem que foi enviada através da API.  |

### Exemplo de Requisição

<RequestTabs endpoint='messages_api' request="get_message_status"/>

### Resposta

| Parâmetro | Tipo                                                                   | Descrição                                      |
| :-------- | :--------------------------------------------------------------------- | :--------------------------------------------- |
| `message` | [MessageSendRequest](/api/reference/object_types/message_send_request) | Os detalhes da mensagem, incluindo o status.    |

### Exemplo de Resposta

```json title=response.json
{
  "message": {
    "uuid": "adf3d1216d4c4dcd908199d6700f2381",
    "status": "enqueued",
    "messageStatusPayload":{
      "id":"2b34bfb7-2631-4763-89fb-1b3c65a4baaa",
      "type":"enqueued",
      "payload":{
        "type":"session",
        "whatsappMessageId":"gBGGM2MSRxl_AAlqmG1KQXU7nz4"
      },
      "destination":"1122334455"
    }
  }
}
```