---
title: GET /contacts
sidebar_position: 2
---

# GET /contacts

List all contacts belonging to the account. A filter can be specified in order to get more specific results.

### Optional Parameters

| Parameter | Type     | Description                                                                        |
| :-------- | :------- | :--------------------------------------------------------------------------------- |
| `page`    | Integer  | The page of contacts. If not specified it will default to page 1.                  |
| `source`  | Source   | The integration type (e.g. `whatsapp`)                                             |
| `tags`    | string[] | The matching tags, comma-separated (e.g. `sales,lead`). Tags are _case-insentive_. |

### Example Request

```bash title=request.sh
curl -X GET "https://api.callbell.eu/v1/contacts" \
  -H "Authorization: Bearer test_gshuPaZoeEG6ovbc8M79w0QyM" \
  -H "Content-Type: application/json"
```

### Response

| Parameter  | Type                                             | Description         |
| :--------- | :----------------------------------------------- | :------------------ |
| `contacts` | [Contact[]](/api_reference/object_types/contact) | A list of contacts. |

### Example Response

```json title=response.json
{
  "contacts": [
    {
      "uuid": "414a6d692bd645ed803f2e7ce360d4c8",
      "name": "John Doe",
      "phoneNumber": "+123 456 789",
      "avatarUrl": null,
      "createdAt": "2020-11-13T21:08:53Z",
      "source": "whatsapp",
      "href": "https://dash.callbell.eu/contacts/414a6d692bd645ed803f2e7ce360d4c8",
      "tags": [
        "sales",
        "lead"
      ]
    },
    ...
    {
      "uuid": "ff8bec9363bc4c29b8b044eabf2afebd",
      "name": "Mario Rossi",
      "phoneNumber": "+33 11 22 33 44",
      "avatarUrl": null,
      "createdAt": "2021-02-24T20:33:06Z",
      "source": "whatsapp",
      "href": "https://dash.callbell.eu/contacts/ff8bec9363bc4c29b8b044eabf2afebd",
      "tags": [
        "sales",
        "lead",
        "hot"
      ]
    }
  ]
}
```
