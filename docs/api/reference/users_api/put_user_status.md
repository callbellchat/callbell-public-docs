---
title: PUT /users/:uuid/status
sidebar_position: 3
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# PUT /users/:uuid/status

Updates the availability and/or a users' custom status.

### Required Parameters

| Parameter | Type   | Description     |
| :-------- | :----- | :-------------- |
| `uuid`    | string | The user `uuid` |

### Optional Parameters

| Parameter            | Type    | Description                                                        |
| :------------------- | :------ | :----------------------------------------------------------------- |
| `available`          | boolean | User is available (`true`) or away (`false`)                       |
| `custom_status_uuid` | string  | The `uuid` of a custom status. To unassign the status, pass `null` |

:::info
- You can update **both** availability and custom status in the **same request**
- If you want to **unassign the status**, pass `null` as the `custom_status_uuid`
- Looking on how to create / edit / delete custom statuses? Use the **[Custom Status API](/api/reference/custom_status_api/introduction)**
:::

:::caution
Ensure that a `custom_status` already exists in your account before passing them.

Similarly, for the user's `uuid`, use a valid one associated to a user in your account.
:::

### Example Request

<RequestTabs endpoint="users_api" request="put_user_status"/>

### Response

| Parameter         | Type     | Description                                      |
| :---------------- | :------- | :----------------------------------------------- |
| `user_status`     | string{} | The user status that has been updated            |
| `custom_status`   | string{} | The custom status of the user                    |
| `id`              | string   | The custom status' id                            |
| `name`            | string   | The custom status' name                          |
| `last_updated_at` | string   | The last update date of the user's custom status |
| `appearance`      | string{} | The user's appearance                            |
| `available`       | boolean  | The user's availability                          |
| `appearance`      | string{} | The user's appearance                            |
| `last_updated_at` | string   | The user appearance's last update date           |

### Example Response

```json title=response.json
{
  "user_status": {
    "custom_status": {
      "id": "0d6041a2-8b88-49ec-a99b-a88a078a16c1",
      "name": "Vacationing",
      "last_updated_at": "2024-11-22T21:29:43.311+01:00"
    },
    "appearance": {
      "available": false,
      "last_updated_at": "2024-11-26T20:14:40.649+01:00"
    }
  }
}
```
