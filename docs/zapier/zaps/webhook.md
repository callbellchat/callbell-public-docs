---
sidebar_position: 4
---

# Using Advanced Webhooks

Here we'll see how to use Callbell in Zapier by using Zapier's custom webhook as an action.
This is a more advanced way to use Callbell in Zapier, but it gives you more flexibility.

## Using Zapier's Custom Webhook

Make sure you select the right Callbell app (latest):

![Callbell integration](../assets/select-action.png)

Then select "Webhooks by Zapier" as the action app:

![Webhooks by Zapier](../assets/webhook.png)

The reccomened action is "Custom Request" here:

Regardless of the action you choose, you'll need to set up the webhook URL correctly.

### Webhook URL

The webhook URL is the URL that Zapier will use to send data to Callbell.

You can find the webhook URL [here](../../api/reference/).

### Webhook Payload

The webhook payload is the data that Zapier will send to Callbell.

The payload must be in JSON format.

### Authentication

You will need to authenticate your request to Callbell.

You can do this by adding the following headers to your request:

![Headers](../assets/headers.png)

The `Content-Type` set to `application/json` is **required**.
