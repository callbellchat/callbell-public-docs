---
title: GET /custom_fields
sidebar_position: 2
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /custom_fields

List the custom fields of your account, in the order they appear in your settings. Use these labels as the keys of `custom_fields` when [creating](/api/reference/contacts_api/post_contacts) or [updating](/api/reference/contacts_api/patch_contacts) a contact, and use `type` and `options` to pick a valid value.

### Optional Parameters

| Parameter | Type    | Description                                                                                            |
| :-------- | :------ | :----------------------------------------------------------------------------------------------------- |
| `page`    | Integer | The page of custom fields. Each page holds up to 100 custom fields. If not specified it will default to page 1. |

### Example Request

<RequestTabs endpoint='custom_fields_api' request="get_custom_fields"/>

### Response

| Parameter      | Type                                                       | Description                     |
| :------------- | :--------------------------------------------------------- | :------------------------------ |
| `customFields` | [CustomField[]](/api/reference/object_types/custom_field) | A list of custom fields.        |
| `meta.page`    | number                                                     | The current page.               |
| `meta.pages`   | number                                                     | The total number of pages.      |

### Example Response

```json title=response.json
{
  "customFields": [
    {
      "label": "billing address",
      "type": "text",
      "options": null,
      "position": 1
    },
    {
      "label": "stage",
      "type": "dropdown",
      "options": ["New", "Qualified", "Won"],
      "position": 2
    }
  ],
  "meta": {
    "page": 1,
    "pages": 1
  }
}
```
