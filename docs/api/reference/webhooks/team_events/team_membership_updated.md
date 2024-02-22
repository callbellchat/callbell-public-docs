---
sidebar_position: 1
---

# Team Membership Updated

The **Team Membership Updated** event is triggered when a team member is added or removed from a team.

### Event Name

`team_membership_updated`

### Payload Fields

| Field          | Type                                          | Description                                                                                                             |
| :------------- | :-------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------- |
| `team`         | [Team](../../object_types/team)               | The team that the user has been added or removed from.                                                                  |
| `user`         | [Team Member](../../object_types/team_member) | The user that has been added or removed from the team.                                                                  |
| `reason`       | string                                        | The reason why the user has been added or removed from the team. Possible values are `agent_added` and `agent_removed`. |
| `lastUpdateAt` | string                                        | The date of the last status update (ISO 8601 formatted).                                                                |

### Example Payload

```json
{
  "event": "team_membership_updated",
  "payload": {
    "team": {
      "name": "Support Team",
      "uuid": "35402552d90c4041b6bcb9a3249c0263",
      "default": false,
      "members": 3,
      "createdAt": "2024-02-16T10:12:55Z"
    },
    "user": {
      "email": "john.doe@gmail.com",
      "available": true,
      "lastUpdateAt": "2024-02-06T15:02:30Z"
    },
    "reason": "agent_added",
    "lastUpdateAt": "2024-02-21T18:34:18Z"
  }
}
```