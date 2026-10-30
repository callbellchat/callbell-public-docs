---
title: GET /calls
sidebar_position: 2
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /calls

List the calls of your account that were created in a date range. Results are paginated and sorted by creation date in descending order.

### Required Parameters

| Parameter | Type   | Description                                                                                                                                                                                         |
| :-------- | :----- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `from`    | String | Start of the date range (ISO 8601, e.g. `2026-10-01` or `2026-10-01T08:00:00Z`). A date without a time starts at midnight UTC.                                                                     |
| `to`      | String | End of the date range (ISO 8601, e.g. `2026-10-31` or `2026-10-31T18:00:00Z`). A date without a time includes the whole day, until midnight UTC of the next day. A date with a time is included. |

:::caution
Encode the `+` sign of a time zone offset as `%2B` in the URL (e.g. `2026-10-31T18:00:00%2B01:00`), otherwise it is read as a space and the request fails. You can also send the dates in UTC with the `Z` suffix.
:::

### Optional Parameters

| Parameter | Type    | Description                                                    |
| :-------- | :------ | :------------------------------------------------------------- |
| `page`    | Integer | The page of calls. If not specified it will default to page 1. |

### Example Request

<RequestTabs endpoint='calls_api' request="get_calls"/>

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
      "contact": "eb2b914a977e4ab896e7b886698b3eac",
      "callStartedAt": "2026-10-30T10:00:00Z",
      "acceptedAt": "2026-10-30T10:00:05Z",
      "rejectedAt": null,
      "callEndedAt": "2026-10-30T10:04:12Z",
      "mediaExpiresAt": "2026-11-29T10:05:01Z",
      "recordingUrl": "https://s3.amazonaws.com/...recording.ogg?X-Amz-Expires=600&X-Amz-Signature=...",
      "transcriptUrl": "https://s3.amazonaws.com/...transcript.json?X-Amz-Expires=600&X-Amz-Signature=...",
      "urlExpiresAt": "2026-10-30T12:10:00Z"
    },
    {
      "uuid": "4b7e9a1c3d5f4e2a8b6c0d9e1f2a3b4c",
      "callDirection": "outbound",
      "callStatus": "rejected",
      "recordingStatus": null,
      "contact": "efd7d996470e463b89f079be6cf578ed",
      "callStartedAt": "2026-10-29T15:20:00Z",
      "acceptedAt": null,
      "rejectedAt": "2026-10-29T15:20:09Z",
      "callEndedAt": "2026-10-29T15:20:09Z",
      "mediaExpiresAt": null,
      "recordingUrl": null,
      "transcriptUrl": null,
      "urlExpiresAt": null
    }
  ],
  "meta": {
    "page": 1,
    "pages": 3
  }
}
```

### Errors

The request returns `400 Bad Request` when `from` or `to` is missing or is not a valid ISO 8601 date.

```json title=response.json
{
  "error": "to must be an ISO 8601 date"
}
```
