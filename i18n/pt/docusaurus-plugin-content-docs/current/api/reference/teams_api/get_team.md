---
title: GET /teams/:uuid
sidebar_position: 3
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /teams/:uuid

Get a specific team given a `uuid`.

### Required Parameters

| Parameter | Type   | Description          |
| :-------- | :----- | :------------------- |
| `uuid`    | string | The uuid of the team |

### Example Request

<RequestTabs endpoint='teams_api' request="get_team"/>

### Response

| Parameter | Type                                     | Description                        |
| :-------- | :--------------------------------------- | :--------------------------------- |
| `team`    | [Team](/api/reference/object_types/team) | The object representing the  team. |

### Example Response

```json title=response.json
{
  "team": {
    "uuid": "ad42a09715814e6483b1c5debd6a2dbc",
    "name": "General",
    "createdAt": "2020-11-13T21:08:53Z",
    "default": true,
    "members": 2
  }
}
```

