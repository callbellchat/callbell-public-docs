---
sidebar_position: 4
---

# Release notes

A list of all the changes and enhancements that were introduced in our API. Use it to check whenever new endpoints are added, or changes are made.

## January 6, 2025

### ✨ What's new

- Added new field `blocked_at` on [Contact](/api/reference/object_types/contact) object type.
- Added new fields `status`, `category` on [Template Messages](/api/reference/template_messages_api/get_templates#example-response) object type.

## December 5, 2024

### ✨ What's new

- [Custom Status API](/api/reference/custom_status_api/introduction)
- Added new endpoint to [update a user's status](/docs/api/reference/users_api/put_user_status.md), which means their availability and/or their custom status.

## November 26, 2024

### ✨ What's new

- Added a new endpoint to [create notes](/docs/api/reference/contacts_api/post_contact_conversation_create_note.md) on the conversation associated to contacts.
- [Agent Session Updated](/api/reference/webhooks/agent_events/agent_session_updated.md) webhook event to notify when an agent logs in or logs out.

## November 21, 2024

### ✨ What's new

- [MessageContext](/api/reference/object_types/message_context) and [MessageForward](/api/reference/object_types/message_forward) added as object types.
- [Message Created Webhook event](/api/reference/webhooks/message_events/message_created) now includes the `messageContext` and `messageForward` references. This is useful to have information about location messages and contact cards.

## November 19, 2024

### ✨ What's new

- [MessageReplyButton](/api/reference/object_types/message_reply_button) and [MessageInteractiveList](/api/reference/object_types/message_interactive_list) added as object types.
- [Message Created Webhook event](/api/reference/webhooks/message_events/message_created) now includes the `messageReplyButton` and `messageInteractiveList` references. This is useful to have information about location messages and contact cards.

## November 18, 2024

### ✨ What's new

- [MessageContactCard](/api/reference/object_types/message_contact_card) and [MessageLocation](/api/reference/object_types/message_location) added as object types.
- [Message Created Webhook event](/api/reference/webhooks/message_events/message_created) now includes the `messageContactCard` and `MessageLocation` references. This is useful to have information about location messages and contact cards.

## September 24, 2024

### ✨ What's new

- Added `conversationHref` to all the endpoints that return a [Contact](/api/reference/object_types/contact) object; this field links to the conversation associated with the contact on Callbell dashboard.
- The field is also present in all webhooks related to contacts, messages and conversations.
- Added a new field `conversation` to the [Send Message](/api/reference/messages_api/post_send_messages) endpoint request body. This fields allows to return the conversation in the response.

## July 30, 2024

### ✨ What's new

- [POST Send Messages now supports metadata field](/api/reference/messages_api/post_send_messages#send-message-with-metadata) to send messages with custom key-value pairs.

## July 25, 2024

### ✨ What's new

- Added code snippets for **C#**, **Java** and **Rust**

## May 15, 2024

### ✨ What's new

- [Create Contact](/api/reference/contacts_api/post_contacts), [Edit Contact](/api/reference/contacts_api/post_contacts) and [Send Message](/api/reference/messages_api/post_send_messages) endpoints now supports the `bot_status` parameter to set the status of the bot associated with a specific contact.

## March 11, 2024

### ✨ What's new

- [GET Contact Bot](/api/reference/contacts_api/get_contact_bot) endpoint to get the bot associated with a specific contact.
- [POST Contact Bot](/api/reference/contacts_api/post_contact_bot) endpoint to change the status of the bot associated with a specific contact.

## March 5, 2024

### 🛠️ Changes

- [Get Contact By Phone](/api/reference/contacts_api/get_contact_by_phone) endpoint now supports the `channel_uuid` parameter to search the contact by phone number and channel.

## February 22, 2024

### ✨ What's new

- [Team Membership Updated](/api/reference/webhooks/team_events/team_membership_updated) webhook event to notify when a team member is added or removed from a team.
- [Agent Status Updated](/api/reference/webhooks/agent_events/agent_status_updated) webhook event to notify when an agent changes their status.

## February 20, 2024

### ✨ What's new

- Added a new endpoint for listing all the [team members](/api/reference/teams_api/get_team_members) belonging to a team.

### 🛠️ Changes

- [Send Message](/api/reference/messages_api/post_send_messages) endpoint now supports an optional `fields` parameter to specify which fields to include in the response. This is useful to reduce the response size and speed up the API calls. Currently only `contact` is supported.

## February 14, 2024

### ✨ What's new

- [Create contact](/api/reference/contacts_api/post_contacts) endpoint now supports the `channel_uuid` parameter to create a contact associated with a specific channel.

## February 9, 2024

### ✨ What's new

- [Channels API](/api/reference/channels_api/introduction) to manage your Callbell Channels programmatically. Use this endpoint to list, show and update your channels.

### 🛠️ Changes

- [Send Messages](/api/reference/messages_api/post_send_messages) endpoint now supports the `channel_uuid` parameter to send a message to a specific channel.

## January 11, 2024

### ✨ What's new

- [Contact Conversation Open](/api/reference/contacts_api/post_contact_conversation_open) and [Contact Conversation Close](/api/reference/contacts_api/post_contact_conversation_close) endpoints to open and close a conversation associated to a contact.

## January 8, 2024

### ✨ What's new

Added information and examples about how to use Callbell with Zapier.

## January 4, 2024

### ✨ What's new

- [Contact messages API](/api/reference/contacts_api/get_contact_messages) to fetch all the messages of a contact. This endpoint is useful to fetch all the messages of a contact, the result is paginated and sorted by date.

## December 19, 2023

### ✨ What's new

- Added `team_uuid` to [send message requests](/api/reference/messages_api/post_send_messages) and contact [creation](/api/reference/contacts_api/post_contacts) and [update](/api/reference/contacts_api/patch_contacts) requests. This allows you to assign a contact to a team via API.

## December 14, 2023

### 🛠️ Changes

- [Message Created Webhook event](/api/reference/webhooks/message_events/message_created) now includes the whole `contact` reference. This is useful to have further information about the contact without having to perform an extra API call.

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
