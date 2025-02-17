---
title: POST /custom_statuses
sidebar_position: 2
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# POST /custom_statuses

Creates a new custom status.

:::info
Looking to assign a custom status to a user? Use the **[Users API](/api/reference/users_api/put_user_status)**
:::

### Example Request

<RequestTabs endpoint='custom_status_api' request="post_custom_statuses"/>

### Response

| Parameter      | Type                                                        | Description                               |
| :------------- | :---------------------------------------------------------- | :---------------------------------------- |
| `name`         | string                                                      | Name of the custom status                 |
| `customStatus` | [CustomStatus[]](/api/reference/object_types/custom_status) | The object representing the custom status |

### Example Response

```json title=response.json
{
  "customStatus": {
    "name": "Lunch",
    "createdAt": "2024-12-04 14:12:14 +0100",
    "updatedAt": "2024-12-04 14:12:14 +0100",
    "emoji": "🍙",
    "id": "8dbd6f6c-ec09-4b87-a04e-bef1c2ca41db"
  }
}
```
