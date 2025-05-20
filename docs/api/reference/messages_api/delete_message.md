---
title: DELETE /messages/:uuid
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# DELETE /messages/:uuid

:::caution
This endpoint will remove text and attachments **only** on Callbell. It will not affect the original message sent on the device of the customer.
:::

Deletes a message by its UUID or external ID.

You can find the external ID in the `uuid` field of the [MessageSendRequest](/api/reference/object_types/message_send_request) object or by using the [GET /contacts/:uuid/messages](/api/reference/contacts_api/get_contact_messages) endpoint.

### Required Parameters

| Parameter | Type   | Description                                           |
| :-------- | :----- | :---------------------------------------------------- |
| `uuid`    | String | Identifier of the message which was sent through API. |

### Example Request

<RequestTabs endpoint='messages_api' request="delete_message"/>

### Response

API returns a 204 No Content status code on successful deletion.
