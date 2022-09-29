---
title: POST /contacts
sidebar_position: 4
---

# POST /contacts

Creates a new contact.

### Required Parameters

| Parameter    | Type   | Description                                                   |
| :----------- | :----- | :------------------------------------------------------------ |
| `identifier` | string | The identifier of the contact (e.g. phone number in WhatsApp) |
| `source`     | Source | The source of the contact (e.g. `whatsapp`)                   |
| `name`       | string | The name of the contact                                       |

### Example Request

```bash title=request.sh
curl -X POST "https://api.callbell.eu/v1/contacts/414a6d692bd645ed803f2e7ce360d4c8" \
  -H "Authorization: Bearer test_gshuPaZoeEG6ovbc8M79w0QyM" \
  -H "Content-Type: application/json"
  -d '{
    	"source": "whatsapp",
	    "identifier": "123456789",
	    "name": "John Doe"
  }'
```

### Response

| Parameter | Type                                           | Description                    |
| :-------- | :--------------------------------------------- | :----------------------------- |
| `contact` | [Contact](/api_reference/object_types/contact) | The contact which was created. |


### Example Response

```json title=response.json
{
  "contact": [
    {
      "uuid": "414a6d692bd645ed803f2e7ce360d4c8",
      "name": "John Doe",
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