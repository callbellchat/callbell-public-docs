---
title: GET /webhooks/events
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /events

List all events belonging to the webhook. A filter can be specified in order to get more specific results.

### Optional Parameters

| Parameter       | Type     | Description                                                                               |
| :-------------- | :------- | :---------------------------------------------------------------------------------------- |
| `status`        | string   | The event status (failed, success)                                                        |
| `page`          | string   | The page number                                                                           |
| `items`         | string   | The number of items per page                                                              |
| `subscriptions` | string[] | Comma separated values of the events to subscribe on this webhook (e.g `message_created`) |

### Example Request

<RequestTabs endpoint='webhooks_api' request="get_webhooks_events"/>

### Response

| Parameter        | Type                                                      | Description             |
| :--------------- | :-------------------------------------------------------- | :---------------------- |
| `webhook_events` | [WebhookEvent](/api_reference/object_types/webhook_event) | List of webhook events. |

### Example Response

```json title=response.json
{
  "webhook_events": [
    {
      "event": "message_created",
      "payload": "message_object",
      "response": {
        "body": {},
        "code": 200,
        "headers": {}
      },
      "success": true,
      "createdAt": "2022-11-08T15:41:49Z"
    },
    {
      "event": "message_created",
      "payload": "message_object",
      "response": {
        "body": {},
        "code": 200,
        "headers": {}
      },
      "success": true,
      "createdAt": "2022-11-08T14:52:31Z"
    },
    {
      "event": "message_created",
      "payload": "contact_object",
      "response": {
        "body": {},
        "code": 200,
        "headers": {}
      },
      "success": true,
      "createdAt": "2022-11-08T14:51:51Z"
    }
  ],
  "meta": {
    "page": 1,
    "pages": 2
  }
}
```
