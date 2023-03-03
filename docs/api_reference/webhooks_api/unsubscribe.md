---
title: DELETE /webhooks/unsubscribe
sidebar_position: 3
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# DELETE /webhooks/unsubscribe

Deletes the webhook of the current account.

### Example Request

<RequestTabs endpoint='webhooks_api' request="delete_webhooks_unsubscribe"/>

### Response

| Parameter | Type   | Description             |
| :-------- | :----- | :---------------------- |
| `status`  | string | Status of the operation |

### Example Response

```json title=response.json
{
  "status": "webhook was destroyed"
}
```
