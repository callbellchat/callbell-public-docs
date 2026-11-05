---
title: GET /calls/:uuid
sidebar_position: 3
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /calls/:uuid

Get a single call, with new links to download its recording and transcript.

### Example Request

<RequestTabs endpoint='calls_api' request="get_call"/>

### Response

| Parameter | Type                                     | Description |
| :-------- | :--------------------------------------- | :---------- |
| `call`    | [Call](/api/reference/object_types/call) | The call.   |

### Example Response

```json title=response.json
{
  "call": {
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
  }
}
```
