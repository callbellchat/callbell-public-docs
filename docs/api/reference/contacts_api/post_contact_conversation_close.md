---
title: POST /contacts/:uuid/conversation/close
sidebar_position: 7
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# POST /contacts/:uuid/conversation/close

Close the conversation associated to the contact. `closedAt` will be set to the current UTC date.

### Example Request

<RequestTabs endpoint='contacts_api' request="post_contact_conversation_close"/>

### Response

| Parameter | Type                                           | Description                         |
| :-------- | :--------------------------------------------- | :---------------------------------- |
| `contact` | [Contact](/api/reference/object_types/contact) | The contact which has been updated. |

### Example Response

```json title=response.json
{
  "contact": [
    {
      "uuid": "414a6d692bd645ed803f2e7ce360d4c8",
      "name": "John Doe",
      "phoneNumber": "123456789",
      "avatarUrl": null,
      "createdAt": "2020-11-13T21:08:53Z",
      "source": "whatsapp",
      "closedAt": "2020-11-13T21:08:53Z",
      "href": "https://dash.callbell.eu/contacts/414a6d692bd645ed803f2e7ce360d4c8",
      "tags": [],
      "assignedUser": null,
      "customFields": {}
    }
  ]
}
```
