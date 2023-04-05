---
sidebar_position: 4
---

# Release notes

A list of all the changes and enhancements that were introduced in our API. Use it to check whenever new endpoints are added, or changes are made.

### 3-2022

#### What's new

- The `assignedUser` attribute has been added to the [Contact](/api_reference/object_types/contact) object
- Users can now be assigned to a contact during creation or update by providing the assigned_user parameter with a user's email (eg. `john.doe@email.com`). Ensure that the provided email corresponds to a confirmed user in your account.
- To unassign a user from a contact during an update, include the unassign_user parameter in the request body and set its value to true. This action will remove the assigned user from the contact.

### 02-2022

#### What's New

- Multi-language code snippets (`curl`, `node`, `go`, `ruby`, `php`, `python`) for all the requests
- Release Notes section

#### Changes

- [Contact](/api_reference/object_types/contact) now includes `custom_fields`
- `custom_fields`, `tags` can be passed in the body when [creating](/api_reference/contacts_api/post_contacts) or [creating](/api_reference/contacts_api/post_contacts) a contact
- `phone_number` of [Contact](/api_reference/object_types/contact) can't be updated anymore

### 01-2023

#### What's New

- [Templates API](/api_reference/template_messages_api/introduction)

#### Changes

- Allow to send [Template Messages](/api_reference/messages_api/post_send_messages#send-template-messages)

### 11-2022

#### What's new

- [Auth API](/api_reference/auth_api/introduction)

### 10-2022

#### What's new

- [Webhooks API](/api_reference/webhooks_api/introduction)
