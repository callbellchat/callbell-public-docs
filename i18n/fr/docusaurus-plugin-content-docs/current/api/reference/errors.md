---
sidebar_position: 6
---

# Errors

Callbell uses standard HTTP response codes:

- Responses in the **2xx** range means that the request has been executed successfully

- Responses in the **4xx** range means that the request has been not successful because of a client error like authentication, rate limit reached or wrong params

- Responses in the **5xx** range means that the request hasn’t been successful because of an internal server error. It’s usually safe to retry those requests with a delay or at a later time
