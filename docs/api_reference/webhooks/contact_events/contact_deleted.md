---
sidebar_position: 3
---

# Contact Deleted

This event will be sent whenever a contact is **deleted**. Currently, this happens whenever a conversation gets deleted from Callbell.

### Event Name

`contact_deleted`

### Payload Fields

| Field     | Type   | Description                                          |
| :-------- | :----- | :--------------------------------------------------- |
| `uuid`    | string | The unique message identifier of the deleted message |
| `deleted` | string | Date of message deletion (ISO 8601 formatted)        |


### Example Payload

```json title=payload.json
{
  "uuid": "fad77e68757b43c3b77b51cd66ec18f3",
  "deleted": "2022-10-17T15:15:06.095Z"
}
```

