es
---
title: GET /contactos/telefono/:numero
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /contactos/telefono/:numero

Obtiene un contacto específico dado un `numero_telefono`.

### Parámetros requeridos

| Parámetro       | Tipo   | Descripción                             |
| :-------------- | :----- | :-------------------------------------- |
| `numero_telefono` | string | El número de teléfono del contacto       |

### Ejemplo de solicitud

<RequestTabs endpoint='contacts_api' request="get_contact_by_phone"/>

### Respuesta

| Parámetro | Tipo                                           | Descripción                 |
| :-------- | :--------------------------------------------- | :-------------------------- |
| `contacto`| [Contacto](/api/reference/object_types/contact)| El objeto que representa el contacto. |

### Ejemplo de respuesta

```json title=response.json
{
  "contacto": {
    "uuid": "414a6d692bd645ed803f2e7ce360d4c8",
    "nombre": "John Doe",
    "numeroTelefono": "+123 456 789",
    "avatarUrl": null,
    "createdAt": "2020-11-13T21:08:53Z",
    "origen": "whatsapp",
    "href": "https://dash.callbell.eu/contactos/414a6d692bd645ed803f2e7ce360d4c8",
    "etiquetas": ["ventas", "lead"],
    "usuarioAsignado": null,
    "camposPersonalizados": {
      "Dirección": "Calle Oxford 123",
      "Dirección de Facturación": "Calle Oxford 123",
      "VAT": "ABC123DCE456"
    }
  }
}
```