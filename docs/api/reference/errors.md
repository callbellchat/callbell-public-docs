---
sidebar_position: 6
---

# Errors

Callbell uses standard HTTP response codes:

- Responses in the **2xx** range means that the request has been executed successfully

- Responses in the **4xx** range means that the request has been not successful because of a client error like authentication, rate limit reached or wrong params

- Responses in the **5xx** range means that the request hasn’t been successful because of an internal server error. It’s usually safe to retry those requests with a delay or at a later time

## Error responses

Every error response carries an `error` attribute. For most failures it is a string:

```json title=response.json
{
  "error": "not authorized"
}
```

For parameter validation failures it is an object keyed by the invalid parameter:

```json title=response.json
{
  "error": {
    "template_uuid": ["must be present and not empty"]
  }
}
```

## Error codes

Some errors also include a `code` attribute. Unlike the `error` message, which is meant to be read by a human and may be reworded at any time, a `code` is stable and safe to branch on in your integration.

| Code                              | HTTP status            | Description                                                                                                                                                                    |
| :-------------------------------- | :--------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `whatsapp_wallet_depleted_credit` | `402 Payment Required` | Your WhatsApp credit balance is exhausted, so [template messages](/api/reference/messages_api/post_send_messages#whatsapp-credit-and-template-messages) cannot be sent right now. |
