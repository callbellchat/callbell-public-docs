---
title: POST /messages/send
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# POST /messages/send

:::caution
After 24h without a reply from the customer, it is not possible to send regular messages, you'll need to use a [Template](#send-template-messages) message, see examples below.
:::

### Required Parameters

| Parameter | Type           | Description                          |
| :-------- | :------------- | :----------------------------------- |
| `to`      | String         | Phone number or platform identifier  |
| `from`    | String         | Channel identifier (e.g. `whatsapp`) |
| `type`    | MessageType    | Type of message to be sent           |
| `content` | MessageContent | Content of the message               |

### Optional Parameters

| Parameter         | Type    | Description                                                                                     |
| :---------------- | :------ | :---------------------------------------------------------------------------------------------- |
| `template_uuid`   | String  | Unique identifier of the template message                                                       |
| `optin_contact`   | Boolean | Confirmation that the contact has opted-in for receiving messages                               |
| `template_values` | Array   | Values for multi-variable template message                                                      |
| `assigned_user`   | String  | Message will be assigned to this collaborator's email                                           |
| `team_uuid`       | String  | Message will be assigned to this team                                                           |
| `channel_uuid`    | String  | The message will be sent from this channel (when omitted, it will use the default main channel) |
| `fields`          | String  | Comma-separated fields to be returned in the message. Supported values: `contact`               |
| `bot_status`      | String  | The status of the bot for this contact. Accepts either `bot_start` or `bot_end`.                |
| `metadata`        | Object  | Metadata to be attached to the message.                                                         |

:::info
When passing `bot_status` make sure that the bot is enabled in your account. Visit [bots](https://dash.callbell.eu/bots) in your Callbell account to create and enable one.

If you have a bot enabled, the default status is `bot_start` meaning that the bot will reply whenever the contact writes. If this is not the intended behavior, you can set the status to `bot_end` to stop the bot from replying to the contact. This can be useful when you want to take over the conversation manually or when you want to stop the bot from replying to the contact for any other reason.
:::

### Example Request

<RequestTabs endpoint='messages_api' request="post_messages"/>

### Response

| Parameter | Type                                                                   | Description                                                              |
| :-------- | :--------------------------------------------------------------------- | :----------------------------------------------------------------------- |
| message   | [MessageSendRequest](/api/reference/object_types/message_send_request) | The message send request. The system will initially enqueue the message. |

### Example Response

```json title=response.json
{
  "message": {
    "uuid": "adf3d1216d4c4dcd908199d6700f2381",
    "status": "enqueued"
  }
}
```

### Example Response (with `fields=contact`)

```json title=response.json
{
  "message": {
    "uuid": "adf3d1216d4c4dcd908199d6700f2381",
    "status": "enqueued",
    "contact": {
      "uuid": "c7b3d1216d4c4dcd908199d6700f2381",
      "name": "John Doe",
      "phone": "+1234567890",
      "email": "john@doe.com"
    }
  }
}
```

## Send Message with Automatic User Assignment

It is possible to send a message via API request with an assigned user by sending their email in the `assigned_user` parameter.

:::caution
The user has to be part of your team, otherwise the assignment will not work.
:::

<RequestTabs endpoint='messages_api' request="post_messages_with_user_assignment"/>

## Send Message with Metadata

You can send a message with custom metadata by passing an object in the `metadata` parameter. This is useful for storing additional information about the message, especially when combined with the [webhooks](/api/reference/webhooks_api/introduction) feature. This metadata will be returned in the webhook events.

:::caution
Don’t store any sensitive information (bank account numbers, card details, and so on) as metadata or in the description parameter. Use it only for non-sensitive information like internal ids, references or similar.
:::

<RequestTabs endpoint='messages_api' request="post_messages_with_metadata"/>

### Metadata Limitations

The metadata object can contain up to 10 key-value pairs. The key must be a string with a maximum length of 50 characters, and the value must be a string with a maximum length of 500 characters.


## Send Message with Media Attachments

You can use the API to send **media messages** containing **images**, **documents**, **audio** and **video** messages.

Is it also possible to add a _caption_ when sending `image` attachments (see the example request below).

### Send Image Attachment Example

<RequestTabs endpoint='messages_api' request="post_messages_image"/>

### Send Image Attachment & Caption Example

<RequestTabs endpoint='messages_api' request="post_messages_image_caption"/>

### Send Document Attachment Example

<RequestTabs endpoint='messages_api' request="post_messages_document"/>

### Send Audio Attachment Example

:::info
This is only available for accounts using the official **WhatsApp Business API** integration.
:::

<RequestTabs endpoint='messages_api' request="post_messages_audio"/>

### Send Video Attachment Example

:::info
This is only available for accounts using the official **WhatsApp Business API** integration.
:::

<RequestTabs endpoint='messages_api' request="post_messages_video"/>

## Send Template Messages

You can use the API to send an approved [Template](/api/reference/object_types/template) Message.

:::info
This is only available for accounts using the official **WhatsApp Business API** integration.
:::

:::caution
In order to send template messages `template_uuid` and `optin_contact` **must** be present in the payload.
:::

<RequestTabs endpoint='messages_api' request="post_messages_template"/>

In this context `text` refers to the placeholder of the template message, for example let's say you have a template message like this:

```bash title=template_example
Hello {{1}}, this is a template message example
```

The placeholder replacement will be done with the value passed in the payload, so in this case it will be the following:

```bash title=template_example
Hello John Doe, this is a template message example
```

## Send Multi-variables Template Messages

You can use the API to send an approved [Template](/api/reference/object_types/template) Message.

:::info
This is only available for accounts using the official **WhatsApp Business API** integration.
:::

:::caution
In order to send template messages `template_uuid` and `optin_contact` **must** be present in the payload.
:::

<RequestTabs endpoint='messages_api' request="post_multi_variable_messages_template"/>

In this context `template_values` refers to the placeholders of the template message, for example let's say you have a template message like this:

```bash title=template_example
Hello {{1}}, this is a template {{2}} example. {{3}}!
```

The placeholders replacements will be done with the values passed in the payload inside an array, so in this case it will be the following:

```bash title=template_example
Hello Jack, this is a template message example. Cheers!
```

:::info
When `template_values` are valid, the values inside `content` will be ignored, since it is used for template messages with only one variable.
:::

## Send Template Messages with Media Attachments

You can use the API to send an approved [Template](/api/reference/object_types/template) Message

:::info
This is only available for accounts using the official **WhatsApp Business API** integration.
:::

:::caution
In order to send template messages `template_uuid` and `optin_contact` must be present in the payload.
:::

If you have media template messages approved, you can send them by including a valid `url` of the media

### Send Image Attachment

<RequestTabs endpoint='messages_api' request="post_messages_template_image"/>

### Send Document Attachment

<RequestTabs endpoint='messages_api' request="post_messages_template_document"/>

### Send Video Attachment

<RequestTabs endpoint='messages_api' request="post_messages_template_video"/>

:::info
Use the [Templates API](/api/reference/template_messages_api/introduction) to the get the `template_uuid`s your templates.
:::
