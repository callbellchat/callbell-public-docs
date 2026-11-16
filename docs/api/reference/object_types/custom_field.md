---
title: Custom Field
sidebar_position: 3
---

### Custom Field Object

| Field      | Type     | Description                                                                                                                  |
| :--------- | :------- | :--------------------------------------------------------------------------------------------------------------------------- |
| `label`    | string   | Name of the custom field. Use it as the key in a contact's `custom_fields`.                                                  |
| `type`     | string   | Type of the custom field: `text`, `email`, `number`, `date`, `dropdown` or `checkbox`. The value you set must match this type. |
| `options`  | string[] | The allowed values of a `dropdown` or `checkbox` field. It is `null` for the other types.                                   |
| `position` | number   | Position of the custom field in the settings and in the contact details.                                                    |
