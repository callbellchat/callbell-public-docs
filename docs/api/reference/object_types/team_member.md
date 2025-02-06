---
title: Team Member
sidebar_position: 1
---

# Team Member

The `TeamMember` object represents a member of a team.

| Field              | Type                                                               | Description                                                                         |
| :----------------- | :----------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| `email`            | string                                                             | The email of the team member.                                                       |
| `name`             | string                                                             | The name of the team member.                                                        |
| `available`        | boolean                                                            | The availability status of the team member. Possible values are `true` and `false`. |
| `lastUpdatedAt`    | string                                                             | The date of the last status update (ISO 8601 formatted).                            |
| `userCustomStatus` | [UserCustomStatus](/api/reference/object_types/user_custom_status) | Custom status currently associated to the user.                                     |
