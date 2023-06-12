# Message Status Updated

:::caution
Note that **message deliver notifications** are only available on **WhatsApp Business API** and **WhatsApp QR API**.
:::

:::info
Events are only forwarded for **outgoing messages**. Incoming messages won't trigger any status updates.
:::

This event will be sent whenever a message status gets an **update**. This can be one of the following values:

- `enqueued`
- `sent`
- `delivered`
- `read`

### Event Name

`message_status_updated`

### Payload Fields

| Field                  | Type   | Description                          |
| :--------------------- | :----- | :----------------------------------- |
| `uuid`                 | string | The unique identifier of the message |
| `status`               | string | The delivery status of the message   |
| `messageStatusPayload` | JSON   | The raw message status payload       |

### Example Payload

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
