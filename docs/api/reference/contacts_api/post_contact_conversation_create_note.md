---
title: POST /contacts/:uuid/conversation/note
sidebar_position: 11
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# POST /contacts/:uuid/conversation/note

Creates a note on the conversation associated to the contact.

### Required Parameters

| Parameter | Type   | Description                                                                                  |
| :-------- | :----- | :------------------------------------------------------------------------------------------- |
| `text`    | string | The text that'll be saved as a note in the conversation. Use `@` to tag someone in the note. |

### Example Request

<RequestTabs endpoint='contacts_api' request="post_contact_conversation_create_note"/>

### Response

| Parameter | Type    | Description          |
| :-------- | :------ | :------------------- |
| `success` | Boolean | The success response |

### Example Response

```json title=response.json
{ "success": true }
```
