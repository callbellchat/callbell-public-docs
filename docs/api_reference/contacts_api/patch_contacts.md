---
title: PATCH /contacts
sidebar_position: 5
---

# PATCH /contacts/:uuid

Updates an existing contact.

### Required Parameters

| Parameter | Type   | Description                                                   |
| :-------- | :----- | :------------------------------------------------------------ |
| `uuid`    | string | The identifier of the contact (e.g. phone number in WhatsApp) |

### Optional Parameters

All parameters reported by Contact _except_ `uuid`.

### Example Request

```bash title=request.sh
curl -X PATCH "https://api.callbell.eu/v1/contacts/414a6d692bd645ed803f2e7ce360d4c8" \
  -H "Authorization: Bearer test_gshuPaZoeEG6ovbc8M79w0QyM" \
  -H "Content-Type: application/json"
  -d '{"name": "UPDATE Doe"}'
```

### Response

| Parameter | Type                                           | Description                         |
| :-------- | :--------------------------------------------- | :---------------------------------- |
| `contact` | [Contact](/api_reference/object_types/contact) | The contact which has been updated. |


### Example Response

```json title=response.json
{
  "contact": [
    {
      "uuid": "414a6d692bd645ed803f2e7ce360d4c8",
      "name": "UPDATE Doe",
      "phoneNumber": "123456789",
      "avatarUrl": null,
      "createdAt": "2020-11-13T21:08:53Z",
      "source": "whatsapp",
      "href": "https://dash.callbell.eu/contacts/414a6d692bd645ed803f2e7ce360d4c8",
      "tags": []
    }
  ]
}
```