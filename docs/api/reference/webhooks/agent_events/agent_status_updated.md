---
sidebar_position: 1
---

# Agent Status Updated

The **Agent Status Updated** event is triggered when an agent changes their status, for example, when an agent goes from being available to being away or vice versa.

### Event Name

`agent_status_updated`

### Payload Fields

See [Team Member Object](/api/reference/object_types/team_member)


### Example Payload

```json
{
  "event": "agent_status_updated",
  "payload": {
    "email": "john.doe@gmail.com",
    "name": "John Doe",
    "available": false,
    "lastUpdatedAt": "2024-02-21T12:02:47Z"
  }
}
```