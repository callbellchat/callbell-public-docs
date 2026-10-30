---
sidebar_position: 1
---

# Call Recording Created

The **Call Recording Created** event is triggered when the audio recording of a recorded WhatsApp call is ready to download.

:::info
The payload does not include download links. To download the audio recording, call [GET /calls/:uuid](/api/reference/calls_api/get_call) with the `uuid` of the payload: the response includes a `recordingUrl` that works for 10 minutes.
:::

### Event Name

`call_recording_created`

### Payload Fields

The payload is a [Call](/api/reference/object_types/call) object, without the `recordingUrl`, `transcriptUrl` and `urlExpiresAt` fields.

### Example Payload

```json title=payload.json
{
  "event": "call_recording_created",
  "payload": {
    "uuid": "9f2c41d7a6b84e0c8d3f5a1b2c3d4e5f",
    "callDirection": "inbound",
    "callStatus": "terminated",
    "recordingStatus": "available",
    "contact": "eb2b914a977e4ab896e7b886698b3eac",
    "callStartedAt": "2026-10-30T10:00:00Z",
    "acceptedAt": "2026-10-30T10:00:05Z",
    "rejectedAt": null,
    "callEndedAt": "2026-10-30T10:04:12Z",
    "mediaExpiresAt": "2026-11-29T10:05:01Z"
  }
}
```
