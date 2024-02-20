---
title: GET /teams/:uuid/members
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /teams/:uuid/members

List all members belonging to the team.

### Required Parameters

| Parameter | Type   | Description          |
| :-------- | :----- | :------------------- |
| `uuid`    | string | The uuid of the team |

### Optional Parameters

| Parameter | Type   | Description                                                                |
| :-------- | :----- | :------------------------------------------------------------------------- |
| `page`    | number | The page number to be returned. Default is `1`.                            |
| `status`  | string | The status of the team member. Possible values are `available` and `away`. |

### Example Request

<RequestTabs endpoint='teams_api' request="get_team_members"/>

### Response

| Parameter | Type                                                    | Description             |
| :-------- | :------------------------------------------------------ | :---------------------- |
| `users`   | [TeamMember[]](/api/reference/object_types/team_member) | A list of team members. |

### Example Response

```json title=response.json
{
  "users": [
    {
      "email": "john1@gmail.com",
      "available": true
    },
    {
      "email": "john2@gmail.com",
      "available": true
    }
  ],
  "meta": {
    "page": 1,
    "pages": 1
  }
}
```