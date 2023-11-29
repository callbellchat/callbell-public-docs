---
title: GET /templates
sidebar_position: 2
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /templates

List all templates belonging to the account.

### Example Request

<RequestTabs endpoint='templates_api' request="get_templates"/>

### Response

| Parameter   | Type                                               | Description          |
| :---------- | :------------------------------------------------- | :------------------- |
| `templates` | [Template[]](/api/reference/object_types/template) | A list of templates. |

### Example Response

```json title=response.json
{
  "templates": [
    {
      "uuid": "ad42a09715814e6483b1c5debd6a2dbc",
      "title": "Template title",
      "templateType": "text",
      "text": "Message text",
      "createdAt": "2020-11-13T21:08:53Z"
    },
    {
      "uuid": "47aad5f9b4ca423c9d630f06ab93fe1f",
      "title": "Another Template title",
      "templateType": "text",
      "text": "Another Message text",
      "createdAt": "2020-11-13T21:10:33Z"
    }
  ],
  "meta": {
    "page": 1,
    "pages": 1
  }
}
```
