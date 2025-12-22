---
title: POST /contacts/:uuid/conversation/update_funnel
sidebar_position: 7
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# PUT /contacts/:uuid/conversation/update_funnel

Updates the funnel of a conversation.

### Example Request

<RequestTabs endpoint='contacts_api' request="put_contact_conversation_update_funnel"/>

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
      "funnelId": "1cd7845e-6b93-453d-b015-9dce35d16f39",
      "tags": [],
      "assignedUser": null,
      "customFields": {},
      "team": {}
    }
  ]
}
```
