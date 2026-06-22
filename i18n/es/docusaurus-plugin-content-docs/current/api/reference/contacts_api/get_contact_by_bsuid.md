---
title: GET /contacts/bsuid/:bsuid
sidebar_position: 5
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /contacts/bsuid/:bsuid

Obtiene un contacto específico a partir de un `bsuid` (Business Suite User ID). Esto es útil para buscar contactos que pueden no tener un número de teléfono asociado (p. ej., usuarios con privacidad de nombre de usuario en WhatsApp).

### Parámetros obligatorios

| Parámetro | Tipo   | Descripción                                       |
| :-------- | :----- | :------------------------------------------------ |
| `bsuid`   | string | El ID de usuario de Business Suite del contacto. |

### Ejemplo de solicitud

<RequestTabs endpoint='contacts_api' request="get_contact_by_bsuid"/>

### Respuesta

| Parámetro | Tipo                                            | Descripción                         |
| :-------- | :---------------------------------------------- | :---------------------------------- |
| `contact` | [Contacto](/api/reference/object_types/contact) | El objeto que representa el contacto. |

### Ejemplo de respuesta

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
    "conversationHref": "https://dash.callbell.eu/chat/f3670b13446b412796238b1cd78899f9",
    "tags": ["sales", "lead"],
    "assignedUser": null,
    "customFields": {
      "Address": "Oxford Street 123"
    },
    "bsuid": "bsuid_abc123"
  }
}
```