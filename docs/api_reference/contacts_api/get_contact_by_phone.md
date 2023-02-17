---
title: GET /contacts/phone/:phone
sidebar_position: 4
---

# GET /contacts/phone/:phone

Get a specific contact given a `phone_number`.

### Required Parameters

| Parameter         | Type   | Description                     |
| :-----------------| :----- | :------------------------------ |
| `phone_number`    | string | The phone number of the contact |

### Example Request

```bash title=request.sh
curl -X GET "https://api.callbell.eu/v1/contacts/phone/579-037-2023" \
  -H "Authorization: Bearer test_gshuPaZoeEG6ovbc8M79w0QyM" \
  -H "Content-Type: application/json"
```

### Response

| Parameter | Type                                           | Description                          |
| :-------- | :--------------------------------------------- | :----------------------------------- |
| `contact` | [Contact](/api_reference/object_types/contact) | The object representing the contact. |

### Example Response

```json title=response.json
{
  "contact": {
      "uuid": "414a6d692bd645ed803f2e7ce360d4c8",
      "name": "John Doe",
      "phoneNumber": "+123 456 789",
      "avatarUrl": null,
      "createdAt": "2020-11-13T21:08:53Z",
      "source": "whatsapp",
      "href": "https://dash.callbell.eu/contacts/414a6d692bd645ed803f2e7ce360d4c8",
      "tags": ["sales", "lead"],
      "customFields": {
        "Address": "Oxford Street 123",
        "Billing Address": "Oxford Street 123",
        "VAT": "ABC123DCE456"
      }
    }
}
```
