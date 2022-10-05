---
sidebar_position: 2
---

# Getting Started

This step-to-step guide will walk you through using Callbell API to send a message.

## Prerequisites

You will need to create an account on Callbell and have configured a WhatsApp Business channel in order to be able to follow this guide.

- Sign up for [Callbell](https://dash.callbell.eu/users/sign_up)
- See more information about our [WhatsApp Business API integration](https://callbellsupport.zendesk.com/hc/en-us/articles/360007805898-How-to-integrate-WhatsApp-into-Callbell-through-the-WhatsApp-Business-APIs)

## Getting your API keys

Navigate to Callbell API keys page in settings (https://dash.callbell.eu/settings/api_keys) in order to generate a new API key:

![create_api_key](./assets/create_api_key_1.jpg)

After clicking on the **Create API Key** button make sure to copy the token and store it safely.

:::caution
The API key will be showed only on this screen. If you lose access to it you'll have to generate a new one.
:::

## Send a test message using cURL

By using the [Messages API' send message method](/docs/api_reference/messages_api/post_send_messages.md) you can test if your API key is working as expected:

```bash
curl -X POST "https://api.callbell.eu/v1/messages/send" \
  -H "Authorization: Bearer <REPLACE_API_KEY_HERE>" \
  -H "Content-Type: application/json" \
  -d '{
    "to": "<REPLACE_PHONE_NUMBER_HERE>",
    "from": "whatsapp",
    "type": "text",
    "content": {
      "text": "Hello from Callbell API!"
    }
  }'
```

Just replace `REPLACE_API_KEY_HERE` with the API Key generated on the [Getting your API keys](#getting-your-api-keys) step and the `REPLACE_PHONE_NUMBER_HERE` with the receiver's phone number.

:::info
Make sure that the receiving phone number has _opted-in_ and you're **inside the 24 hours rule** of WhatsApp Business API.
:::

If the message went through correctly you will receive a response similar to this one:

```json
{
  "message": {
    "uuid": "<MESSAGE_UUID>",
    "status": "enqueued"
  }
}
```

This means that the message has been _successfully enqueued_ for send to the desired phone number.

### Retrieve the status of a message

In order to know if our test message was delivered successfully we can use either of the following methods:

- Use the [get message status endpoint](api_reference/messages_api/get_message_status.md)
- Enable **Webhooks** on the API keys section and subscribe to the `message_status_updated` event type

In this example we'll use the first method; in order to check the status of the test message just perform the following cURL from a terminal:

```bash
curl -X GET "https://api.callbell.eu/v1/messages/status/<REPLACE_UUID_HERE>" \
  -H "Authorization: Bearer <REPLACE_API_KEY_HERE>" \
  -H "Content-Type: application/json"
```

Make sure to replace `<REPLACE_API_KEY_HERE>` with your API key and `REPLACE_UUID_HERE` with the message identifier obtained from the [Send a test message](#send-a-test-message-using-curl) step.

You'll get back the following response:

```json
{
  "message": {
    "uuid": "<MESSAGE_UUID>",
    "status": "delivered"
  }
}
```

This confirms that the message was successfully sent to the user but it hasn't been read yet.

### Next Steps

Try exploring our [Messages](/docs/api_reference/messages_api/introduction.md) and [Contacts](/docs/api_reference/contacts_api/introduction.md) APIs for more examples.
