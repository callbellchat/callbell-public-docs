---
title: GET /tags
sidebar_position: 2
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /tags

List the tags of your account, ordered by label. Use these labels in the `tags` field when [creating](/api/reference/contacts_api/post_contacts) or [updating](/api/reference/contacts_api/patch_contacts) a contact.

### Optional Parameters

| Parameter | Type    | Description                                                                                                   |
| :-------- | :------ | :------------------------------------------------------------------------------------------------------------ |
| `page`    | Integer | The page of tags. Each page holds up to 100 tags. If not specified it will default to page 1.                 |
| `search`  | string  | Returns only the tags whose label contains this text. The match is case-insensitive (e.g. `positiv` matches `Positive lead`). |

### Example Request

<RequestTabs endpoint='tags_api' request="get_tags"/>

### Response

| Parameter    | Type                                     | Description                                       |
| :----------- | :--------------------------------------- | :------------------------------------------------ |
| `tags`       | [Tag[]](/api/reference/object_types/tag) | A list of tags.                                   |
| `meta.page`  | number                                   | The current page.                                 |
| `meta.pages` | number                                   | The total number of pages for the same `search`. |

### Example Response

```json title=response.json
{
  "tags": [
    {
      "label": "Positive lead",
      "color": "green"
    },
    {
      "label": "Positive review",
      "color": "teal"
    }
  ],
  "meta": {
    "page": 1,
    "pages": 1
  }
}
```
