# Message Created

This event will be sent whenever a message gets **created**, for example when _receiving_ or _sending_ a message from/to a customer.

### Event Name

`message_created`

### Payload Fields

| Field         | Type                                           | Description                                                    |
| :------------ | :--------------------------------------------- | :------------------------------------------------------------- |
| `to`          | string                                         | The channel-specific identifier of the message receiver        |
| `from`        | string                                         | The channel-specific identifier of the message sender          |
| `text`        | string                                         | The text of the message                                        |
| `attachments` | string[]                                       | The attachments of the message                                 |
| `status`      | string                                         | The status of the message. Can be only be `received` or `sent` |
| `channel`     | string                                         | Channel identifier (e.g. `whatsapp`)                           |
| `contact`     | [Contact](/api/reference/object_types/contact) | The contact associated to the message                          |
| `createdAt`   | string                                         | Date of contact creation (ISO 8601 formatted)                  |
| `metadata`    | Object                                         | Metadata attached to the message (if present)                  |

### Optional Fields

| Field                    | Type                                                                           | Description                                |
| :----------------------- | :----------------------------------------------------------------------------- | :----------------------------------------- |
| `messageContactCard`     | [MessageContactCard](/api/reference/object_types/message_contact_card)         | The contact card associated to the message |
| `mesageContext`          | [MessageContext](/api/reference/object_types/message_context)                  | Shows if it is a reply to a message        |
| `messageForward`         | [MessageForward](/api/reference/object_types/message_forward)                  | Indicates if it is a forwarded message     |
| `messageInteractiveList` | [MessageInteractiveList](/api/reference/object_types/message_interactive_list) | Interactive list message information       |
| `messageLocation`        | [MessageLocation](/api/reference/object_types/message_location)                | The location associated to the message     |
| `messageReplyButton`     | [MessageReplyButton](/api/reference/object_types/message_reply_button)         | Reply buttons message information          |

### Example Payload

```json title=payload.json
{
  "event": "message_created",
  "payload": {
    "to": "331122334455",
    "from": "335544332211",
    "text": "Hello",
    "status": "received",
    "channel": "whatsapp",
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
    "messageLocation": {
      "coordinates": { "x": -23.605403621614, "y": -46.637346962613 },
      "googleMapsLocation": "https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=270x200&scale=2&maptype=roadmap&markers=color:red%7C-24.605403621614,-47.637346962613&key=AIzaSyByh_wmPx1e3qOzsUTa-xjKHFSEDvpzT0Y&signature=e8lZQ-eMXUwBwqmA1FAXksGtiR8="
    },
    "messageContactCard": {
      "contactsInfo": [
        {
          "name": "Peter Parker",
          "phones": [
            { "phone": "3331122336699", "wa_id": "", "type": "MOBILE" }
          ]
        }
      ]
    },
    "messageReplyButton": {
      "metadata": {
        "type": "quick_reply",
        "content": {
          "url": "https://url.com/uploads/conversation_attachment/url/12389/file.png",
          "text": "hello text",
          "header": "header",
          "caption": "caption",
          "filename": "file.png",
          "contentType": "image"
        },
        "options": [
          {
            "type": "text",
            "title": "Yes",
            "postback_url": "",
            "postback_text": ""
          },
          {
            "type": "text",
            "title": "No",
            "postback_url": "",
            "postback_text": ""
          },
          {
            "type": "text",
            "title": "Maybe",
            "postback_url": "",
            "postback_text": ""
          }
        ]
      }
    },
    "messageInteractiveList": {
      "metadata": "{\"header\":\"Welcome to our restaurant\",\"body\":\"Have a look at our menu\",\"buttons\":[{\"title\":\"click here\"}],\"sections\":[{\"title\":\"Breakfast\",\"subtitle\":null,\"items\":[{\"header\":\"Yogurt\",\"description\":null},{\"header\":\"Pancakes\",\"description\":null}]}]}"
    },
    "createdAt": "2022-10-18T12:06:29.000+02:00"
  }
}
```
