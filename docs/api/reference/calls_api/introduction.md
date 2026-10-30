---
sidebar_position: 1
---

# Introduction

Calls API allows you to retrieve the WhatsApp calls of your account, including the links to download their recordings and transcripts.

:::info
Recordings and transcripts are available only for calls that were recorded. Callbell keeps them for 30 days: after the date in `mediaExpiresAt`, the files are deleted and `recordingStatus` becomes `expired`.
:::

### Download links

The `recordingUrl` and `transcriptUrl` fields are temporary links that stop working 10 minutes after the request, at the date in `urlExpiresAt`. Do not store these links: request the call again to get new links when you want to download the files.

To be notified when the files of a call are ready, subscribe to the [Call Recording Created](/api/reference/webhooks/call_events/call_recording_created) and [Call Transcript Created](/api/reference/webhooks/call_events/call_transcript_created) webhook events.
