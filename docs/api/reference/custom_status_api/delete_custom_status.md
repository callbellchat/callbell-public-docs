---
title: DELETE /custom_statuses/:id
sidebar_position: 6
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# DELETE /custom_statuses/:uuid

Deletes a specific custom status given an `id`.

:::caution

This operation is **unreversible**. Always double-check the correctness of your code.

:::

### Required Parameters

| Parameter | Type   | Description                            |
| :-------- | :----- | :------------------------------------- |
| `id`      | string | Unique identifier of the custom status |

### Example Request

<RequestTabs endpoint='custom_status_api' request='delete_custom_status'/>

### Response

| Parameter | Type   | Description              |
| :-------- | :----- | :----------------------- |
| `status`  | string | Status of the operation. |

### Example Response

```json title=response.json
{
  "status": "custom status was destroyed"
}
```
