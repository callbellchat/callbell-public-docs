---
sidebar_position: 4
---

# Release notes

A list of all the changes and enhancements that were introduced in our API. Use it to check whenever new endpoints are added, or changes are made.

## November 30, 2023

### ✨ What's new

- [Conversation Opened Webhook Event](/api/reference/webhooks/conversation_events/conversation_opened)
- [Conversation Closed Webhook Event](/api/reference/webhooks/conversation_events/conversation_closed)

## November 7, 2023

### ✨ What's new

- [Teams API Endpoint](/api/reference/teams_api/introduction)

## June 29, 2023

### 🛠️ Changes

- Allow to send [Multi-Variables Template Messages](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## June 15, 2023

### ✨ What's new

- The [`MessageSendRequest`](/api/reference/object_types/message_send_request) object now includes a new attribute: `messageStatusPayload`. This attribute provides the status payload for the corresponding message, sourced directly from the integration.
- This attribute is useful when [fetching status updates for a message](/api/reference/messages_api/get_message_status).
- For troubleshooting purposes, `messageStatusPayload` can also be accessed via the [Message Status Update Webhook Event](/api/reference/webhooks/message_events/message_status_updated).

## April 5, 2023

### ✨ What's new

- The `assignedUser` attribute has been added to the [Contact](/api/reference/object_types/contact) object
- Users can now be assigned to a contact during creation or update by providing the assigned_user parameter with a user's email (eg. `john.doe@email.com`). Ensure that the provided email corresponds to a confirmed user in your account.
- To unassign a user from a contact during an update, include the unassign_user parameter in the request body and set its value to true. This action will remove the assigned user from the contact.

## March 3, 2023

### ✨ What's new

- Multi-language code snippets (`curl`, `node`, `go`, `ruby`, `php`, `python`) for all the requests
- Release Notes section

### 🛠️ Changes

- [Contact](/api/reference/object_types/contact) now includes `custom_fields`
- `custom_fields`, `tags` can be passed in the body when [creating](/api/reference/contacts_api/post_contacts) or [creating](/api/reference/contacts_api/post_contacts) a contact
- `phone_number` of [Contact](/api/reference/object_types/contact) can't be updated anymore

## January 17, 2023

### ✨ What's new

- [Templates API](/api/reference/template_messages_api/introduction)

### 🛠️ Changes

- Allow to send [Template Messages](/api/reference/messages_api/post_send_messages#send-template-messages)

## November 11, 2022

### ✨ What's new

- [Auth API](/api/reference/auth_api/introduction)

## October 18, 2022

### ✨ What's new

- [Webhooks API](/api/reference/webhooks_api/introduction)
