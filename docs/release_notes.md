---
sidebar_position: 4
---

# Release notes

A list of all the changes and enhancements that were introduced in our API. Use it to check whenever new endpoints are added, or changes are made.

### 3-2022

#### What's new

- `assignedUser` is now present in the [Contact](/api_reference/object_types/contact)
- You can now assign a user to a contact when creating or updating one. By passing `assigned_user` with the emai of the user eg. `john.doe@email.com` the contact will be assigned to that user. Make sure that the email belongs to a confirmed user in your account.
- You can now remove an assigned user from a contact, when updating, by passing `unassign_user` in the body, with `true` it will remove the assigned user from the contact.

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
