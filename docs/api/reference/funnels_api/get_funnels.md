---
title: GET /funnels
sidebar_position: 2
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /funnels

List all created funnels in your account.

### Example Request

<RequestTabs endpoint='funnels_api' request="get_funnels"/>

### Response

| Parameter | Type                                             | Description       |
| :-------- | :----------------------------------------------- | :---------------- |
| `funnels` | [Funnels[]](/api/reference/object_types/funnels) | A list of funnels |

### Example Response

````json title=response.json
{
 "funnels": [
  {
   "position": 1,
   "name": "Awareness",
   "emoji": "🧘‍♂️",
   "createdAt": "2025-12-18 20:00:19 +0100",
   "uuid": "ff0f96b9-b003-4d0c-b14f-27f3f6868dd6"
  },
  {
   "position": 1,
   "name": "Interest",
   "emoji": "👁️",
   "createdAt": "2025-12-18 19:55:01 +0100",
   "uuid": "1cd7845e-6b93-453d-b015-9dce35d16f39"
  },
  {
   "position": 1,
   "name": "Desire",
   "emoji": "✨",
   "createdAt": "2025-12-18 19:54:45 +0100",
   "uuid": "1e6c0c57-c81d-49d2-81d2-fcec053a1ab6"
  },
  {
   "position": 1,
   "name": "Action",
   "emoji": "🎯",
   "createdAt": "2025-12-16 21:32:44 +0100",
   "uuid": "8c51dfc8-667a-4f7f-9c83-ae065524483a"
  }
}
```json title=response.json
````
