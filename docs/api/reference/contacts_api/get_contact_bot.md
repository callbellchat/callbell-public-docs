---
title: GET /contacts/:uuid/bot
sidebar_position: 9
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /contacts/:uuid/bot

Get the bot associated with a specific contact.

### Example Request

<RequestTabs endpoint='contacts_api' request="get_contact_bot"/>

### Response

| Parameter | Type                                   | Description                      |
| :-------- | :------------------------------------- | :------------------------------- |
| `bot`     | [Bot](/api/reference/object_types/bot) | The object representing the bot. |


### Example Response

```json title=response.json
{
  "bot": {
    "uuid": "f7155fc557b74597b429bd3dbb5ca677",
    "name": "My Bot",
    "status": "in_progress",
    "conversationStartedAt": "2024-03-11T17:57:09Z",
    "version": 5,
    "latestBotVersion": true
  }
}
```