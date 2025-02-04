---
title: GET /custom_statuses/:id
sidebar_position: 2
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /custom_statuses/:id

Get a specific custom status given an `id`.

### Example Request

<RequestTabs endpoint='custom_status_api' request="get_custom_status"/>

### Response

| Parameter      | Type                                                        | Description                               |
| :------------- | :---------------------------------------------------------- | :---------------------------------------- |
| `id`           | string                                                      | Unique identifier of the custom status    |
| `customStatus` | [CustomStatus[]](/api/reference/object_types/custom_status) | The object representing the custom status |

### Example Response

```json title=response.json
{
  "customStatus": {
    "name": "Vacationing",
    "createdAt": "2024-11-22 21:29:43 +0100",
    "updatedAt": "2024-11-22 21:29:43 +0100",
    "emoji": 🚌,
    "id": "0d6041a2-8b88-49ec-a99b-a88a078a16c1"
  }
}
```
