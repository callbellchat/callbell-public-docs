---
title: GET /messages/status/:uuid
sidebar_position: 3
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /messages/status/:uuid

### Parámetros requeridos

| Parámetro | Tipo   | Descripción                                             |
| :-------- | :----- | :------------------------------------------------------ |
| `uuid`    | String | Identificador del mensaje que se envió a través de la API. |

### Ejemplo de petición

<RequestTabs endpoint='messages_api' request="get_message_status"/>

### Respuesta

| Parámetro | Tipo                                                                   | Descripción                                 |
| :-------- | :--------------------------------------------------------------------- | :------------------------------------------ |
| `message` | [MessageSendRequest](/api/reference/object_types/message_send_request) | Los detalles del mensaje, incluido el estado. |

### Ejemplo de respuesta

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