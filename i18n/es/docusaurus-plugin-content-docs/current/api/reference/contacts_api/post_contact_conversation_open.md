---
title: POST /contacts/:uuid/conversation/open
sidebar_position: 8
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# POST /contacts/:uuid/conversation/open

Reabre la conversación asociada al contacto. `closedAt` se establecerá como `null`.

### Ejemplo de solicitud

<RequestTabs endpoint='contacts_api' request="post_contact_conversation_open"/>

### Respuesta

| Parámetro  | Tipo                                           | Descripción                        |
| :--------- | :--------------------------------------------- | :--------------------------------- |
| `contacto` | [Contact](/api/reference/object_types/contact) | El contacto que se ha actualizado. |

### Ejemplo de respuesta

```json title=response.json
{
  "contacto": [
    {
      "uuid": "414a6d692bd645ed803f2e7ce360d4c8",
      "nombre": "John Doe",
      "número_de_teléfono": "123456789",
      "avatarUrl": null,
      "createdAt": "2020-11-13T21:08:53Z",
      "fuente": "whatsapp",
      "closedAt": null,
      "enlace": "https://dash.callbell.eu/contacts/414a6d692bd645ed803f2e7ce360d4c8",
      "etiquetas": [],
      "usuario_asignado": null,
      "campos_personalizados": {}
    }
  ]
}
```