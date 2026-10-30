---
title: GET /contacts/:uuid/calls
sidebar_position: 3
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /contacts/:uuid/calls

List all calls with the contact. Results are paginated and sorted by creation date in descending order.

### Optional Parameters

| Parameter | Type    | Description                                                    |
| :-------- | :------ | :------------------------------------------------------------- |
| `page`    | Integer | The page of calls. If not specified it will default to page 1. |

### Example Request

<RequestTabs endpoint='contacts_api' request="get_contact_calls"/>

### Response

| Parameter | Type                                       | Description          |
| :-------- | :----------------------------------------- | :------------------- |
| `calls`   | [Call[]](/api/reference/object_types/call) | A list of calls.     |
| `meta`    | Object                                     | Pagination metadata. |

### Meta Object

| Parameter | Type    | Description            |
| :-------- | :------ | :--------------------- |
| `page`    | Integer | Current page number.   |
| `pages`   | Integer | Total number of pages. |

### Example Response

```json title=response.json
{
  "calls": [
    {
      "uuid": "9f2c41d7a6b84e0c8d3f5a1b2c3d4e5f",
      "callDirection": "inbound",
      "callStatus": "terminated",
      "recordingStatus": "available",
      "contact": "efd7d996470e463b89f079be6cf578ed",
      "callStartedAt": "2026-10-30T10:00:00Z",
      "acceptedAt": "2026-10-30T10:00:05Z",
      "rejectedAt": null,
      "callEndedAt": "2026-10-30T10:04:12Z",
      "mediaExpiresAt": "2026-11-29T10:05:01Z",
      "recordingUrl": "https://s3.amazonaws.com/...recording.ogg?X-Amz-Expires=600&X-Amz-Signature=...",
      "transcriptUrl": "https://s3.amazonaws.com/...transcript.json?X-Amz-Expires=600&X-Amz-Signature=...",
      "urlExpiresAt": "2026-10-30T12:10:00Z"
    }
  ],
  "meta": {
    "page": 1,
    "pages": 1
  }
}
```
