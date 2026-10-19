---
sidebar_position: 1
---

# Introduction

Callbell API provides **HTTP Webhooks** for the most common application events:

- **Message events**
- **Message notification status events**
- **Contact events**
- **Conversation events**
- **Agent events**
- **Team events**

## How to subscribe to events

:::info
This can be done also programmatically from [WebhooksEndpoint](./../webhooks_api/introduction.md)
:::

On your Callbell dashboard navigate to the [**"API Settings"**](https://dash.callbell.eu/settings/api_settings/webhooks) section and click on the "Webhooks" tab:

![webhook_tab](./assets/webhook_tab.jpg)

In the URL field add your endpoint URL (e.g. `https://myapp.com/callbell_endpoint`) and select the events you want to get subscriptions for:

![webhook_create](./assets/webhook_create.jpg)

:::info
Make sure to also **include** the protocol (`http` or `https`) inside your webhook endpoint:

✅ **Good**: `https://www.myexample.com`

❌ **Bad**: `www.example.com`
:::

After clicking "Create new webhook" you should receive a success notification. You can always edit back the Webhook events in a later stage:

![webhook_edit](./assets/webhook_edit.jpg)

:::caution
Callbell doesn't support `localhost` as webhook URL. If you need to debug a local application use instead a service to expose your local dev environment like [Ngrok](https://ngrok.com).
:::

:::tip
Callbell can sign every webhook request with a secret that belongs to your webhook. See [Verifying signatures](./signatures.md) to turn it on and to check that a request comes from Callbell.
:::

## Delivery and retries

Callbell sends each event to your endpoint as an HTTP `POST` request with a JSON body. Callbell does not run separate connection checks against your endpoint, so it judges the endpoint only by how it responds to real event deliveries.

A delivery succeeds when your endpoint answers with any `2xx` status code. Callbell does not read the response body, so you can return an empty body.

A delivery attempt fails when your endpoint answers with a status code outside the `2xx` range, when Callbell cannot connect to it (for example because of a DNS, connection or TLS error), or when it does not answer within **[PLACEHOLDER CAL-2303: request timeout]**.

When a delivery attempt fails, Callbell retries the same event with an exponential backoff, which means that the wait between two attempts grows after each attempt. Callbell makes up to 5 delivery attempts for each event. Because a request that timed out is also retried, your endpoint can receive the same event more than once, so make sure that processing an event twice has no unwanted effect.

You can find the deliveries that failed with [GET /webhooks/events](./../webhooks_api/events.md) and the `status=failed` filter. Each failed event includes the response code and body that Callbell received, or the error that prevented the delivery.

## Email notifications

Callbell sends two kinds of email about a webhook that keeps failing:

- **Warning email**: when an event reaches its third delivery attempt, Callbell sends a warning email to the account owner. If the webhook has a secondary email address, Callbell sends the same warning to that address too. You can set the secondary email address in the "Webhooks" tab of the [**"API Settings"**](https://dash.callbell.eu/settings/api_settings/webhooks) section. Callbell sends at most one warning email per webhook every 24 hours, and this limit starts over when the webhook is re-enabled.
- **Webhook disabled email**: when Callbell disables the webhook, it sends an email to the account owner only. The secondary email address does not receive this email.

## Disabled webhooks

**[PLACEHOLDER CAL-2304: disable rule and threshold. Proposed wording: "Callbell disables the webhook when it has had no successful delivery for 6 hours. Delivery attempts that fail because of a timeout count as failed attempts."]**

While the webhook is disabled, Callbell does not deliver any event to your endpoint, and events that happen during that time are not sent later.

To re-enable the webhook, turn it back on in the "Webhooks" tab of the [**"API Settings"**](https://dash.callbell.eu/settings/api_settings/webhooks) section, or call [POST /webhooks/subscribe](./../webhooks_api/subscribe.md). Fix the problem with your endpoint first, otherwise the webhook can be disabled again.
