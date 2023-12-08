---
title: PATCH /contacts/:uuid
sidebar_position: 5
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# PATCH /contacts/:uuid

Actualiza un contacto existente.

### Parámetros requeridos

| Parámetro | Tipo   | Descripción                                                   |
| :-------- | :----- | :------------------------------------------------------------ |
| `uuid`    | string | El identificador del contacto (por ejemplo, número de teléfono en WhatsApp) |

### Parámetros opcionales

### Parámetros opcionales

| Parámetro       | Tipo     | Descripción                                                                   |
| :-------------- | :------- | :---------------------------------------------------------------------------- |
| `tags`          | string[] | Una lista de valores separados por comas (por ejemplo, `['Llamar de vuelta', 'Interesado']`)          |
| `custom_fields` | string{} | Un objeto con los campos personalizados (por ejemplo, `{'Dirección de facturación': 'Calle Principal 1}`) |
| `name`          | string   | El nombre del contacto                                                       |
| `assigned_user` | String   | Email del colaborador al que deseas asignar un contacto            |
| `unassign_user` | Boolean  | `true` si deseas eliminar al colaborador asignado de un contacto         |

:::caution
Asegúrate de que `custom_fields` y `tags` ya existan en tu cuenta antes de pasarlos. Visita [tags](https://dash.callbell.eu/settings/tags) y [custom_fields](https://dash.callbell.eu/settings/custom_fields) en tu configuración para obtener más información.

De manera similar, para `assigned_user`, utiliza una dirección de correo electrónico válida asociada a un usuario de tu cuenta.
:::

### Ejemplo de solicitud

<RequestTabs endpoint='contacts_api' request="patch_contacts"/>

### Respuesta

| Parámetro | Tipo                                           | Descripción                         |
| :-------- | :--------------------------------------------- | :---------------------------------- |
| `contact` | [Contacto](/api/reference/object_types/contact) | El contacto que ha sido actualizado. |

### Ejemplo de respuesta

```json title=response.json
{
  "contact": [
    {
      "uuid": "414a6d692bd645ed803f2e7ce360d4c8",
      "name": "Doe ACTUALIZADO",
      "phoneNumber": "123456789",
      "avatarUrl": null,
      "createdAt": "2020-11-13T21:08:53Z",
      "source": "whatsapp",
      "href": "https://dash.callbell.eu/contacts/414a6d692bd645ed803f2e7ce360d4c8",
      "tags": [],
      "assignedUser": "correo@ejemplo.com",
      "customFields": {}
    }
  ]
}
```