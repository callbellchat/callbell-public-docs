---
title: GET /teams
sidebar_position: 2
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /teams

List all teams belonging to the account.

### Example Request

<RequestTabs endpoint='teams_api' request="get_teams"/>

### Response

| Parameter | Type                                       | Description      |
| :-------- | :----------------------------------------- | :--------------- |
| `teams`   | [Team[]](/api_reference/object_types/team) | A list of teams. |


### Example Response

```json title=response.json
{
  "teams": [
    {
      "uuid": "ad42a09715814e6483b1c5debd6a2dbc",
      "name": "General",
      "createdAt": "2020-11-13T21:08:53Z",
      "default": true,
      "members": 2
    },
    {
      "uuid": "47aad5f9b4ca423c9d630f06ab93fe1f",
      "name": "Support",
      "createdAt": "2020-11-13T21:10:33Z",
      "default": false,
      "members": 1
    }
  ],
  "meta": {
    "page": 1,
    "pages": 1
  }
}
``` 