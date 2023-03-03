---
title: DELETE /contacts/:uuid
sidebar_position: 6
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# DELETE /contacts/:uuid

Deletes a specific contact given a `uuid`.

:::caution

This operation is **unreversible**. Always double-check the correctness of your code.

:::

### Required Parameters

| Parameter | Type   | Description             |
| :-------- | :----- | :---------------------- |
| `uuid`    | string | The uuid of the contact |

### Example Request

<RequestTabs endpoint='contacts_api' request='delete_contact'/>

### Response

| Parameter | Type   | Description              |
| :-------- | :----- | :----------------------- |
| `status`  | string | Status of the operation. |

### Example Response

```json title=response.json
{
  "status": "contact was destroyed"
}
```
