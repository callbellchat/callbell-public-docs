---
title: PUT /custom_statuses/:id
sidebar_position: 2
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /custom_statuses

Updates a specific custom status given an `id`.

### Example Request

<RequestTabs endpoint='custom_status_api' request="put_custom_status"/>

### Response

| Parameter      | Type                                                        | Description                               |
| :------------- | :---------------------------------------------------------- | :---------------------------------------- |
| `id`           | string                                                      | Unique identifier of the custom status    |
| `customStatus` | [CustomStatus[]](/api/reference/object_types/custom_status) | The object representing the custom status |

### Example Response

```json title=response.json
{
	"customStatus": {
		"name": "Back in a bit",
		"createdAt": "2024-12-04 14:12:14 +0100",
		"updatedAt": "2024-12-04 14:31:58 +0100",
		"id": "8dbd6f6c-ec09-4b87-a04e-bef1c2ca41db"
	}
}
```
