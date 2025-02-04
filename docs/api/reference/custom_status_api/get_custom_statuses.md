---
title: GET /custom_statuses
sidebar_position: 2
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /custom_statuses

List all custom status belonging to the account.

### Example Request

<RequestTabs endpoint='custom_status_api' request="get_custom_statuses"/>

### Response

| Parameter        | Type                                                        | Description                |
| :--------------- | :---------------------------------------------------------- | :------------------------- |
| `customStatuses` | [CustomStatus[]](/api/reference/object_types/custom_status) | A list of custom statuses. |

### Example Response

```json title=response.json
{
  "customStatuses": [
    {
      "name": "Vacationing",
      "createdAt": "2024-11-22 21:29:43 +0100",
      "updatedAt": "2024-11-22 21:29:43 +0100",
      "emoji": 🚌,
      "id": "0d6041a2-8b88-49ec-a99b-a88a078a16c1"
    },
    {
      "name": "In meeting",
      "createdAt": "2024-11-25 19:49:31 +0100",
      "updatedAt": "2024-11-25 19:49:31 +0100",
      "emoji": 💬,
      "id": "25003aa2-d2b0-4089-852a-3e216e0a7495"
    }
  ],
  "meta": {
    "page": 1,
    "pages": 1
  }
}
```
