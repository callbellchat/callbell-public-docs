---
título: GET /contactos
sidebar_position: 2
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /contactos

Lista todos los contactos pertenecientes a la cuenta. Se puede especificar un filtro para obtener resultados más específicos.

### Parámetros opcionales

| Parámetro Tipo Descripción
| :-------- | :------- | :--------------------------------------------------------------------------------- |
| `page` | Entero | La página de contactos. Si no se especifica será por defecto la página 1.                  |
| Fuente: Tipo de integración (por ejemplo, Whatsapp).
| `tags` | string[] | Las etiquetas coincidentes, separadas por comas (p. ej. `sales,lead`). Las etiquetas son _case-insentive_. |

### Ejemplo de solicitud

<RequestTabs endpoint='contacts_api' request="get_contacts"/>

### Respuesta

| Parámetro Tipo Descripción
| :--------- | :----------------------------------------------- | :------------------ |
| `contacts` | [Contact[]](/api/reference/object_types/contact) | Una lista de contactos. |

### Ejemplo de respuesta

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
      "assignedUser": "john.doe@email.com",
      "tags": [
        "ventas",
        "lead"
      ],
      "customFields":{
        "enlace Stripe": "https://stripe.com/contacts/cus1234567",
        "Billing Address": "3 Abbey Rd, London"
      }
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
      "assignedUser": null,
      "tags": [
        "ventas",
        "lead",
        "caliente"
      ],
      "customFields":{
        "Enlace Stripe": "https://stripe.com/contacts/cus124124153"
      }
    }
  ]
}
```
