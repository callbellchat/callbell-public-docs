---
title: PATCH /templates/:uuid
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# PATCH /templates/:uuid

Updates an existing template.

### Required Parameters

| Parameter | Type   | Description                    |
| :-------- | :----- | :----------------------------- |
| `uuid`    | string | The identifier of the template |

### Optional Parameters

| Parameter | Type   | Description                                      |
| :-------- | :----- | :----------------------------------------------- |
| `title`   | string | The new title that will be given to the template |

### Example Request

<RequestTabs endpoint='templates_api' request="patch_template"/>

### Response

| Parameter  | Type                                               | Description                                            |
| :--------- | :------------------------------------------------- | :----------------------------------------------------- |
| `template` | [Template[]](/api/reference/object_types/template) | The object representing the Whatsapp template message. |

### Example Response

```json title=response.json
{
  "templates": {
    "uuid": "ad42a09715814e6483b1c5debd6a2dbc",
    "title": "New title",
    "templateType": "text",
    "text": "Message text",
    "createdAt": "2020-11-13T21:08:53Z"
  }
}
```
