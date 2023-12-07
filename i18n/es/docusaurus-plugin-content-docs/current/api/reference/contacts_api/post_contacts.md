---
título: POST /contactos
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# POST /contacts

Crea un nuevo contacto.

### Parámetros requeridos

| Parámetro Tipo Descripción
| :----------- | :----- | :------------------------------------------------------------ |
| `identifier` | String | El identificador del contacto (por ejemplo, número de teléfono en WhatsApp) | |
| Fuente: Fuente del contacto (por ejemplo, WhatsApp).
| Nombre Cadena Nombre del contacto

### Parámetros opcionales

| Parámetro Tipo Descripción
| :-------------- | :------- | :----------------------------------------------------------------------------- |
| `tags` | String[] | Una lista de valores separados por comas (p. ej. `['Call back', 'Interested']`) | | `custom_fields` | String{}
| `custom_fields` | String{} | Un objeto con los campos personalizados (por ejemplo, `{'Dirección de facturación': 'Calle principal 1'}`).
| `assigned_user` | String | Email del usuario que se quiere asignar a un contacto | String

:::precaución
Cuando pases `custom_fields` o `tags` asegúrate de que existen en tu cuenta. Vea [tags](https://dash.callbell.eu/settings/tags) y [custom_fields](https://dash.callbell.eu/settings/custom_fields) en su configuración.
Lo mismo aplica para `assigned_user`, debe ser un email válido de un usuario en tu cuenta.
:::

### Ejemplo de solicitud

<RequestTabs endpoint='contacts_api' request="post_contacts"/>

### Respuesta

| Parámetro Tipo Descripción
| :-------- | :--------------------------------------------- | :----------------------------- |
| `contact` | [Contact](/api/reference/object_types/contact) | El contacto que se ha creado. |

### Ejemplo de respuesta

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
      "tags": [],
      "assignedUser": null,
      "customFields": {}
    }
  ]
}
```
