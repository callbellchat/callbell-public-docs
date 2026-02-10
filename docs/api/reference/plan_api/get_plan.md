---
title: GET /plan
sidebar_position: 2
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /plan

Get the current plan details for your account, including plan metadata, active user count, and a breakdown of teams with their members.

### Example Request

<RequestTabs endpoint='plan_api' request="get_plan"/>

### Response

| Parameter         | Type                                       | Description                                              |
| :---------------- | :----------------------------------------- | :------------------------------------------------------- |
| `plan`            | string                                     | The name of the current plan                             |
| `includedChannels`| integer                                    | The number of channels included in the plan              |
| `licenses`        | integer                                    | The number of team member seats included in the plan     |
| `activeUsers`     | integer                                    | The number of active (confirmed) users in the account    |
| `teams`           | [Team[]](/api/reference/object_types/team)  | A list of teams in the account                           |

### Example Response

```json title=response.json
{
  "plan": "business_plus",
  "includedChannels": 3,
  "licenses": 5,
  "activeUsers": 2,
  "teams": [
    {
      "uuid": "ad42a09715814e6483b1c5debd6a2dbc",
      "name": "Support",
      "createdAt": "2020-11-13T21:08:53Z",
      "default": false,
      "members": 2
    }
  ]
}
```
