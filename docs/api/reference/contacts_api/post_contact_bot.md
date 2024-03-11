---
title: POST /contacts/:uuid/bot
sidebar_position: 10
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# POST /contacts/:uuid/bot

Changes the status of the bot associated with a specific contact. This can be used to stop or restart the bot for a specific contact.

### Required Parameters

| Parameter | Type   | Description                                                     |
| :-------- | :----- | :-------------------------------------------------------------- |
| `status`  | string | The status of the bot. Accepts either `bot_start` or `bot_end`. |

### Example Request

<RequestTabs endpoint='contacts_api' request="post_contact_bot"/>

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
    "status": "started",
    "conversationStartedAt": null,
    "version": 5,
    "latestBotVersion": true
  }
}
```
