---
title: DELETE /contacts/:uuid
sidebar_position: 6
---

# DELETE /contacts/:uuid

Deletes a specific contact given a `uuid`.

:::caution

This operation is **unreversible**. Always double-check the correctness of your code.

:::


### Required Parameters

| Parameter | Type   | Description             |
| :-------- | :----- | :---------------------- |
| `uuid`    | string | The uuid of the contact |


### Example Request

```bash title=request.sh
curl -X DELETE "https://api.callbell.eu/v1/contacts/414a6d692bd645ed803f2e7ce360d4c8" \
  -H "Authorization: Bearer test_gshuPaZoeEG6ovbc8M79w0QyM" \
  -H "Content-Type: application/json"
```

### Response

| Parameter | Type   | Description              |
| :-------- | :----- | :----------------------- |
| `status`  | string | Status of the operation. |


### Example Response

```json title=response.json
{
  "status": "contact was destroyed"
}
```