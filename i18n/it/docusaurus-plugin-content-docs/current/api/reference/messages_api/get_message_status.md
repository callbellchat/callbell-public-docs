---
title: GET /messages/status/:uuid
sidebar_position: 3
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /messages/status/:uuid

### Required Parameters

| Parameter | Type   | Description                                           |
| :-------- | :----- | :---------------------------------------------------- |
| `uuid`    | String | Identifier of the message which was sent through API. |

### Example Request

<RequestTabs endpoint='messages_api' request="get_message_status"/>

### Response

| Parameter | Type                                                                   | Description                                  |
| :-------- | :--------------------------------------------------------------------- | :------------------------------------------- |
| `message` | [MessageSendRequest](/api/reference/object_types/message_send_request) | The message details comprehensive of status. |

### Example Response

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