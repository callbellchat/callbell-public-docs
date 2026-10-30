---
title: Call
sidebar_position: 3
---

### Call Object

| Field             | Type   | Description                                                                                                                                                                                                                  |
| :---------------- | :----- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `uuid`            | string | Unique identifier of the call                                                                                                                                                                                                |
| `contact`         | string | Unique identifier of the [Contact](/api/reference/object_types/contact) on the call                                                                                                                                          |
| `callDirection`   | string | Direction of the call. Possible values: `inbound`, `outbound`                                                                                                                                                                |
| `callStatus`      | string | Status of the call. Possible values: `ringing`, `accepted`, `rejected`, `terminated`                                                                                                                                         |
| `recordingStatus` | string | Status of the call recording. Possible values: `pending` (the call was recorded and the files are not ready yet), `available` (the files can be downloaded), `expired` (the files were deleted). `null` when the call was not recorded |
| `callStartedAt`   | string | Date when the call started (ISO 8601 formatted, UTC)                                                                                                                                                                         |
| `acceptedAt`      | string | Date when the call was answered (ISO 8601 formatted, UTC). `null` when the call was not answered                                                                                                                             |
| `rejectedAt`      | string | Date when the call was rejected (ISO 8601 formatted, UTC). `null` when the call was not rejected                                                                                                                             |
| `callEndedAt`     | string | Date when the call ended (ISO 8601 formatted, UTC). `null` while the call is in progress                                                                                                                                     |
| `mediaExpiresAt`  | string | Date when the recording and the transcript of the call are deleted (ISO 8601 formatted, UTC). `null` when the call has no recording or transcript                                                                             |
| `recordingUrl`    | string | Temporary link to download the audio recording of the call. `null` when there is no recording or the recording has expired. Not included in webhook payloads                          |
| `transcriptUrl`   | string | Temporary link to download the transcript of the call, a JSON document. `null` when there is no transcript or the transcript has expired. Not included in webhook payloads            |
| `urlExpiresAt`    | string | Date when `recordingUrl` and `transcriptUrl` stop working (ISO 8601 formatted, UTC), 10 minutes after the request. `null` when there is no link. Not included in webhook payloads      |
