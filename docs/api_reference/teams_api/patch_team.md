---
title: PATCH /teams/:uuid
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# PATCH /teams/:uuid

Updates an existing team.

### Required Parameters

| Parameter | Type   | Description                |
| :-------- | :----- | :------------------------- |
| `uuid`    | string | The identifier of the team |

### Optional Parameters

| Parameter | Type   | Description                                 |
| :-------- | :----- | :------------------------------------------ |
| `name`    | string | The new name that will be given to the team |

### Example Request

<RequestTabs endpoint='teams_api' request="patch_team"/>

### Response

| Parameter | Type                                     | Description                        |
| :-------- | :--------------------------------------- | :--------------------------------- |
| `team`    | [Team](/api_reference/object_types/team) | The object representing the  team. |

### Example Response

```json title=response.json
{
  "team": {
    "uuid": "ad42a09715814e6483b1c5debd6a2dbc",
    "name": "New name",
    "createdAt": "2020-11-13T21:08:53Z",
    "default": true,
    "members": 2
  }
}
```