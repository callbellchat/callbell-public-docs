---
title: Format and Headers
sidebar_position: 4
---

All responses are returned in JSON format. On the other hand, the API accepts JSON payloads only, meaning that it’s the client responsibility to send an accept header like the following:

```
Accept: application/json
```

Following the same logic, all body endpoints (e.g. in POST, PUT and PATCH requests) needs to be JSON-encoded accordingly.
