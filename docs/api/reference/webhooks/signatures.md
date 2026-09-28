---
title: Verifying signatures
sidebar_position: 1.5
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Verifying signatures

Callbell can sign every webhook request with a secret that belongs to your webhook. By checking the signature, your endpoint can confirm that a request was sent by Callbell and that its body was not modified on the way, without having to allow-list Callbell IP addresses.

Signing is optional and turned off by default. Until you generate a signing secret, webhook requests are sent without a signature, exactly as before.

## Turning on signing

Open the [**Webhooks** tab of the API Settings](https://dash.callbell.eu/settings/api_settings/webhooks) and click **Generate secret**. From that moment, every webhook request is signed with the new secret.

The secret is shown **only once**, right after it is generated, so copy it before closing the dialog. If you lose it, rotate it to get a new one (see [Rotating the secret](#rotating-the-secret)).

The secret starts with `whsec_`. Use the full string, including the `whsec_` prefix, as the HMAC key, and store it like a password (for example in an environment variable).

## The `X-Callbell-Signature` header

Every signed request carries an `X-Callbell-Signature` header:

```text
X-Callbell-Signature: t=1790000000,v1=758dbcf9b3dbd35f6a0f71312a1587aa1c786529d6d78270ba2c8a6065ae5fbe
```

| Element | Description                                                                                                                            |
| :------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| `t`     | Unix timestamp, in seconds, of the moment Callbell sent the request. When a delivery is retried, it is signed again with a new timestamp. |
| `v1`    | Hex-encoded HMAC-SHA256 of the signed payload, computed with your signing secret.                                                      |

The signed payload is the value of `t`, followed by a dot (`.`), followed by the **raw** request body: `<t>.<raw body>`.

## How to verify a request

1. Read the raw request body before your framework parses it. Parsing the JSON and serializing it again changes the bytes (for example the escaping of special characters), and the signature will no longer match.
2. Split the `X-Callbell-Signature` header on `,` and read the `t` and `v1` values.
3. Compute the HMAC-SHA256 of `<t>.<raw body>` with your signing secret, and hex-encode the result.
4. Compare the result with `v1` using a constant-time comparison.
5. Reject the request if `t` is more than 5 minutes away from your current time. This protects your endpoint against an attacker who captures a signed request and sends it again later.

:::caution
Callbell retries a delivery when your endpoint does not answer with a `2xx` status code, and disables the webhook after repeated failures. If your endpoint rejects requests with an invalid signature, make sure it always uses the current secret.
:::

## Examples

<Tabs>
<TabItem value="ruby" label="Ruby">

```ruby
require 'openssl'

SIGNATURE_TOLERANCE_SECONDS = 300

def valid_callbell_signature?(raw_body, header, secret, tolerance: SIGNATURE_TOLERANCE_SECONDS)
  parts = header.to_s.split(',').filter_map { |part| part.split('=', 2) if part.include?('=') }.to_h
  timestamp = parts['t'].to_s
  signature = parts['v1'].to_s

  return false unless timestamp.match?(/\A\d+\z/) && !signature.empty?
  return false if (Time.now.to_i - timestamp.to_i).abs > tolerance

  expected = OpenSSL::HMAC.hexdigest('SHA256', secret, "#{timestamp}.#{raw_body}")
  OpenSSL.secure_compare(expected, signature)
end

# Rails controller
class CallbellWebhooksController < ActionController::API
  def create
    valid = valid_callbell_signature?(request.raw_post, request.headers['X-Callbell-Signature'], ENV.fetch('CALLBELL_WEBHOOK_SECRET'))
    return head :unauthorized unless valid

    event = JSON.parse(request.raw_post)
    # Handle the event

    render json: { status: 'ok' }
  end
end
```

</TabItem>
<TabItem value="node" label="Node">

```javascript
const crypto = require("crypto");
const express = require("express");

const SIGNATURE_TOLERANCE_SECONDS = 300;

function isValidCallbellSignature(rawBody, header, secret, tolerance = SIGNATURE_TOLERANCE_SECONDS) {
  const parts = {};
  for (const part of (header || "").split(",")) {
    const index = part.indexOf("=");
    if (index > 0) {
      parts[part.slice(0, index)] = part.slice(index + 1);
    }
  }

  const timestamp = parts.t;
  const signature = parts.v1;
  if (!/^\d+$/.test(timestamp || "") || !signature) {
    return false;
  }

  if (Math.abs(Math.floor(Date.now() / 1000) - Number(timestamp)) > tolerance) {
    return false;
  }

  const expected = crypto
    .createHmac("sha256", secret)
    .update(`${timestamp}.`)
    .update(rawBody)
    .digest("hex");
  const expectedBuffer = Buffer.from(expected);
  const signatureBuffer = Buffer.from(signature);

  return expectedBuffer.length === signatureBuffer.length && crypto.timingSafeEqual(expectedBuffer, signatureBuffer);
}

const app = express();

// express.raw keeps the body as a Buffer with the exact bytes sent by Callbell
app.post("/callbell/webhooks", express.raw({ type: "application/json" }), (req, res) => {
  const valid = isValidCallbellSignature(req.body, req.get("X-Callbell-Signature"), process.env.CALLBELL_WEBHOOK_SECRET);
  if (!valid) {
    return res.status(401).end();
  }

  const event = JSON.parse(req.body.toString("utf8"));
  // Handle the event

  res.json({ status: "ok" });
});
```

</TabItem>
<TabItem value="python" label="Python">

```python
import hashlib
import hmac
import os
import time

from flask import Flask, abort, request

SIGNATURE_TOLERANCE_SECONDS = 300


def is_valid_callbell_signature(raw_body: bytes, header: str, secret: str, tolerance: int = SIGNATURE_TOLERANCE_SECONDS) -> bool:
    parts = dict(part.split("=", 1) for part in (header or "").split(",") if "=" in part)
    timestamp = parts.get("t", "")
    signature = parts.get("v1", "")

    if not timestamp.isdigit() or not signature:
        return False
    if abs(time.time() - int(timestamp)) > tolerance:
        return False

    expected = hmac.new(secret.encode(), timestamp.encode() + b"." + raw_body, hashlib.sha256).hexdigest()
    return hmac.compare_digest(expected, signature)


app = Flask(__name__)


@app.post("/callbell/webhooks")
def callbell_webhook():
    valid = is_valid_callbell_signature(request.get_data(), request.headers.get("X-Callbell-Signature"), os.environ["CALLBELL_WEBHOOK_SECRET"])
    if not valid:
        abort(401)

    event = request.get_json()
    # Handle the event

    return {"status": "ok"}
```

</TabItem>
</Tabs>

## Rotating the secret

To replace the secret, open the [**Webhooks** tab of the API Settings](https://dash.callbell.eu/settings/api_settings/webhooks) and click **Rotate secret**. The new secret is shown only once.

The previous secret stops working immediately: every request sent after the rotation is signed with the new secret only. Rotate the secret when you can update your endpoint right away, so that it does not reject deliveries signed with the new secret.
