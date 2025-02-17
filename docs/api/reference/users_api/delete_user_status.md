---
title: DELETE /users/:uuid/status
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# DELETE /users/:uuid/status

Unassigns a custom status from a user.

### Required Parameters

| Parameter | Type   | Description     |
| :-------- | :----- | :-------------- |
| `uuid`    | string | The user `uuid` |

### Example Request

<RequestTabs endpoint="users_api" request="delete_user_status"/>

### Response

API response is empty.