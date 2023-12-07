---
título: GET /contactos/teléfono/:número
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /contactos/teléfono/:número

Obtener un contacto específico dado un `número_de_teléfono`.

### Parámetros requeridos

| Parámetro Tipo Descripción
| :------------- | :----- | :------------------------------ |
| `phone_number` | string | El número de teléfono del contacto |

### Ejemplo de solicitud

<RequestTabs endpoint='contacts_api' request="get_contact_by_phone"/>

### Respuesta

| Parámetro Tipo Descripción
| :-------- | :--------------------------------------------- | :----------------------------------- |
| `contact` | [Contact](/api/reference/object_types/contact) | El objeto que representa al contacto. |

### Ejemplo de respuesta

```json title=respuesta.json
{
  "contact": {
    "uuid": "414a6d692bd645ed803f2e7ce360d4c8",
    "name": "John Doe",
    "phoneNumber": "+123 456 789",
    "avatarUrl": null,
    "createdAt": "2020-11-13T21:08:53Z",
    "source": "whatsapp",
    "href": "https://dash.callbell.eu/contacts/414a6d692bd645ed803f2e7ce360d4c8",
    "tags": ["ventas", "lead"],
    "assignedUser": null,
    "customFields": {
      "Address": "Oxford Street 123",
      "Billing Address": "Oxford Street 123",
      "IVA": "ABC123DCE456"
    }
  }
}
```
