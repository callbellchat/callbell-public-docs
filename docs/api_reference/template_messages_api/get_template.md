---
title: GET /templates/:uuid
sidebar_position: 3
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /templates/:uuid

Get a specific template given a `uuid`.

### Required Parameters

| Parameter | Type   | Description              |
| :-------- | :----- | :----------------------- |
| `uuid`    | string | The uuid of the template |

### Example Request

<RequestTabs endpoint='templates_api' request="get_template"/>

### Response

| Parameter  | Type                                               | Description                                            |
| :--------- | :------------------------------------------------- | :----------------------------------------------------- |
| `template` | [Template[]](/api_reference/object_types/template) | The object representing the Whatsapp template message. |

### Example Response

```json title=response.json
{
  "template": {
    "uuid": "ad42a09715814e6483b1c5debd6a2dbc",
    "title": "Template title",
    "templateType": "text",
    "text": "Message text",
    "createdAt": "2020-11-13T21:08:53Z"
  }
}
```
