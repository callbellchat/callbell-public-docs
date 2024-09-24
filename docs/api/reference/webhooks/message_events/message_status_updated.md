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
- `failed`
- `mismatch`
- `deleted`


### Message Statuses

#### Enqueued

Sent when the message is successfully sent to the WhatsApp Business API client or to the QR API client.

#### Sent

This status is sent whenever the message is sent to the end-user device.

#### Delivered

Sent when the message has finally been delivered to the end-user device.

#### Read

Represents that the message has been successfully read by the end-user.

#### Failed

This status is emitted whenever the delivery of the message wasn't possible. In the inner payload the failure reason is also specified (e.g. _"number does not exist on WhatsApp"_)

#### Mismatch

This event status is sent whenever WhatsApp Business API performs a phone number correction automatically. The corrected phone number identifier will be present inside the inner payload of the event.

### Deleted 
:::caution
This event has been deprecated since it's not supported anymore by Meta.
:::

Represents a message deletion from the end-user, both for _"delete only for me"_ and _"delete for everyone"_.


### Event Name

`message_status_updated`

### Payload Fields

| Field                  | Type   | Description                                   |
| :--------------------- | :----- | :-------------------------------------------- |
| `uuid`                 | string | The unique identifier of the message          |
| `status`               | string | The delivery status of the message            |
| `metadata`             | Object | Metadata attached to the message (if present) |
| `messageStatusPayload` | JSON   | The raw message status payload                |

### Example Payload

```json title=payload.json
{
  "event": "message_status_updated",
  "payload": {
    "uuid": "adf3d1216d4c4dcd908199d6700f2381",
    "status": "read",
    "contact": {
      "href": "https://dash.callbell.eu/contacts/eb2b914a977e4ab896e7b886698b3eac",
      "conversationHref": "https://dash.callbell.eu/chat/f3670b13446b412796238b1cd78899f9",
      "name": "John Doe",
      "tags": ["Lead"],
      "uuid": "eb2b914a977e4ab896e7b886698b3eac",
      "source": "whatsapp",
      "avatarUrl": null,
      "createdAt": "2022-10-12T15:57:16Z",
      "phoneNumber": "331122334455"
    },
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
