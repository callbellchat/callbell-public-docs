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

| Parameter         | Type    | Description                                                       |
| :---------------- | :------ | :---------------------------------------------------------------- |
| `template_uuid`   | String  | Unique identifier of the template message                         |
| `optin_contact`   | Boolean | Confirmation that the contact has opted-in for receiving messages |
| `template_values` | Array   | Values for multi-variable template message                        |
| `assigned_user`   | String  | Message will be assigned to this collaborator's email             |

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

## Send Message with Automatic User Assignment

It is possible to send a message via API request with an assigned user by sending their email in the `assigned_user` parameter.

:::caution
The user has to be part of your team, otherwise the assignment will not work.
:::

<RequestTabs endpoint='messages_api' request="post_messages_with_user_assignment"/>

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