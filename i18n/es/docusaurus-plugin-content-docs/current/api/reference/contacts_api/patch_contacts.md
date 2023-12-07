---
título: PATCH /contactos/:uuid
sidebar_position: 5
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# PATCH /contactos/:uuid

Actualiza un contacto existente.

### Parámetros requeridos

| Parámetro Tipo Descripción
| :-------- | :----- | :------------------------------------------------------------ |
| `uuid` | string | El identificador del contacto (por ejemplo, el número de teléfono en WhatsApp) |

### Parámetros opcionales

### Parámetros opcionales

| Parámetro Tipo Descripción
| :-------------- | :------- | :---------------------------------------------------------------------------- |
| `tags` | string[] | Una lista de valores separados por comas (por ejemplo `['Call back', 'Interested']`) | | `custom_fields` | string{}
| `custom_fields` | string{} | Objeto con los campos personalizados (por ejemplo, `{'Dirección de facturación': 'Calle principal 1}`).
| El nombre del contacto.
| `assigned_user` | String | Email del colaborador que se quiere asignar a un contacto | `assign_user` | String | Email del colaborador que se quiere asignar a un contacto
| `unassign_user` | Boolean | `true` si desea eliminar de un contacto al colaborador asignado | Nombre del contacto

:::precaución
Asegúrese de que `custom_fields` y `tags` ya existen en su cuenta antes de pasarlos. Visita [tags](https://dash.callbell.eu/settings/tags) y [custom_fields](https://dash.callbell.eu/settings/custom_fields) en tu configuración para más información.

Del mismo modo, para `assigned_user`, utilice una dirección de correo electrónico válida asociada a un usuario de su cuenta.
:::

### Ejemplo de solicitud

<RequestTabs endpoint='contacts_api' request="patch_contacts"/>

### Respuesta

| Parámetro Tipo Descripción
| :-------- | :--------------------------------------------- | :---------------------------------- |
| `contact` | [Contact](/api/reference/object_types/contact) | El contacto que ha sido actualizado. |

### Ejemplo de respuesta

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
      "tags": [],
      "assignedUser": "jane.doe@email.com",
      "customFields": {}
    }
  ]
}
```
