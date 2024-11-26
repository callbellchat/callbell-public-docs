---
sidebar_position: 2
---

# Agent Session Updated

The **Agent Session Updated** event is triggered whenever an agent's session changes, such as when they log in, log out, or their session expires.

### Event Name

`agent_session_updated`

### Payload Fields

| Field    | Type                                                     | Description                                                                                                |
| :------- | :------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------- |
| `action` | string                                                   | The action type of the event. Possible actions: `user_logged_in`, `user_logged_out` or `system_logged_out` |
| `user`   | [TeamMember](/api/reference/object_types/team_member.md) | The agent who performed the action.                                                                        |

### Example Payload

```json
{
  "event": "agent_session_updated",
  "payload": {
    "action": "user_logged_in",
    "user": {
      "email": "john.doe@gmail.com",
      "name": "John Doe",
      "available": false,
      "lastUpdatedAt": "2024-02-21T12:02:47Z"
    }
  }
}
```
