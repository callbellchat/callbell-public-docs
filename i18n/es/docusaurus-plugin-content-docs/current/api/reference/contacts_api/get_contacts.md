---
title: GET /contacts
sidebar_position: 2
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /contacts

Lista los contactos que pertenecen a la cuenta. De forma predeterminada, los contactos se ordenan por la fecha de creación de su conversación, de la más reciente a la más antigua. Los parámetros opcionales que se indican a continuación filtran la lista por actividad de la conversación, origen, etiquetas o equipo, y pueden cambiar el orden.

### Parámetros opcionales

| Parámetro   | Tipo     | Descripción                                                                        |
| :---------- | :------- | :--------------------------------------------------------------------------------- |
| `page`      | Integer  | La página de contactos. Si no se especifica, el valor predeterminado es la página 1. Las páginas más allá de la 500 no están disponibles — usa la [paginación por cursor](#cursor-pagination) en su lugar. |
| `after`     | string   | Cursor opaco obtenido del `meta.next` de una respuesta anterior. Devuelve el lote de contactos que le sigue. Ver [Paginación por cursor](#cursor-pagination). |
| `source`    | Source   | El tipo de integración (p. ej. `whatsapp`)                                          |
| `tags`      | string[] | Las etiquetas coincidentes, separadas por comas (p. ej. `sales,lead`). Las etiquetas _no distinguen mayúsculas de minúsculas_. |
| `team_uuid`           | string   | El uuid del equipo.                                                       |
| `conversation_state`  | string   | `open` o `closed`. Devuelve solo los contactos cuya conversación está en ese estado. |
| `last_message_from`   | string   | `contact` devuelve los contactos que enviaron el último mensaje de su conversación, lo que normalmente significa que están esperando una respuesta. `business` devuelve los contactos cuyo último mensaje se envió desde tu cuenta (un miembro del equipo, un bot, una difusión o la API). |
| `last_inbound_message_after`  | string | Una fecha y hora ISO 8601, por ejemplo `2026-11-12T08:00:00Z`. Devuelve los contactos cuyo mensaje más reciente para ti se recibió en ese momento o después. Una fecha sin hora (`2026-11-12`) equivale a la medianoche UTC. Los mensajes enviados desde tu cuenta no cuentan. |
| `last_inbound_message_before` | string | Una fecha y hora ISO 8601. Devuelve los contactos cuyo mensaje más reciente para ti se recibió en ese momento o antes. Los contactos que nunca enviaron un mensaje quedan excluidos siempre que se indique `last_inbound_message_after` o `last_inbound_message_before`. |
| `assigned_user`       | string   | El correo electrónico de un miembro del equipo, para devolver solo las conversaciones asignadas a esa persona, o `unassigned`, para devolver solo las conversaciones sin ningún miembro del equipo asignado. |
| `order`               | string   | `created_at` (predeterminado) ordena por la fecha de creación de la conversación. `last_inbound_message_at` ordena por la hora del mensaje más reciente recibido del contacto; los contactos que nunca enviaron un mensaje aparecen al final. Ambos órdenes van del más reciente al más antiguo. |
| `include_field_types` | boolean  | Cuando es `true`, la respuesta incluye `customFieldsMetadata` con el valor, tipo y opciones de cada campo personalizado. |

### Filtrar por actividad de la conversación {#filtering-by-conversation-activity}

Los filtros de conversación se pueden combinar entre sí y con `source`, `tags` y `team_uuid`. Por ejemplo, esta solicitud lista las conversaciones abiertas cuyo último mensaje vino del contacto, empezando por el contacto que escribió más recientemente:

```bash
curl -X GET "https://api.callbell.eu/v1/contacts?conversation_state=open&last_message_from=contact&order=last_inbound_message_at" \
    -H "Authorization: Bearer test_gshuPaZoeEG6ovbc8M79w0QyM" \
    -H "Content-Type: application/json"
```

Para listar a quienes te escribieron desde las 8:00 UTC de hoy y no están asignados a nadie, usa `last_inbound_message_after=2026-11-12T08:00:00Z&assigned_user=unassigned`.

Los parámetros `last_inbound_message_*` y el orden `last_inbound_message_at` solo tienen en cuenta los mensajes recibidos del contacto. Una respuesta de tu equipo no los modifica.

Un valor no admitido devuelve un error `400 Bad Request` que indica cada parámetro no válido:

```json title=response.json
{
  "error": {
    "conversation_state": ["must be one of: open, closed"],
    "assigned_user": ["must be the email of a user inside the account, or unassigned"]
  }
}
```

### Paginación por cursor {#cursor-pagination}

La paginación por páginas se detiene en la página 500 (10.000 contactos): las solicitudes más allá de ese límite devuelven un error `400 Bad Request` con el mensaje `Pagination limit exceeded`. Para recorrer la lista completa de contactos, usa la paginación por cursor:

1. Haz una solicitud como de costumbre: cada respuesta incluye un token opaco en `meta.next`.
2. Devuelve el token a través del parámetro `after` para obtener el siguiente lote de contactos.
3. Sigue el valor de `meta.next` hasta que sea `null`: eso marca el último lote.

```bash
curl -X GET "https://api.callbell.eu/v1/contacts?after=eyJ0cyI6MTc1NDM4NDQwMDAwMCwiaWQiOjEyMzQ1fQ" \
    -H "Authorization: Bearer test_gshuPaZoeEG6ovbc8M79w0QyM" \
    -H "Content-Type: application/json"
```

Algunas cosas a tener en cuenta:

- Trata el token como opaco y devuélvelo sin modificar. Un token malformado devuelve un error `400 Bad Request` con el mensaje `Invalid pagination cursor`.
- El parámetro `page` se ignora cuando `after` está presente.
- Los filtros y el orden no están codificados en el token: envía los mismos filtros y el mismo `order` junto con `after` en cada solicitud.
- Los contactos se devuelven en el mismo orden que en las solicitudes por páginas. Los contactos creados después de iniciar el recorrido no se incluyen. Con `order=last_inbound_message_at`, un contacto que te escribe durante el recorrido pasa al principio de la lista, por lo que el recorrido puede omitir ese contacto o devolverlo dos veces.

### Ejemplo de solicitud

<RequestTabs endpoint='contacts_api' request="get_contacts"/>

### Respuesta

| Parámetro  | Tipo                                              | Descripción             |
| :--------- | :------------------------------------------------ | :---------------------- |
| `contacts` | [Contacto[]](/api/reference/object_types/contact) | Una lista de contactos. |
| `meta`     | object                                            | Metadatos de paginación: `page` y `pages` para las solicitudes por páginas, más `next`, el cursor que apunta al siguiente lote (`null` en el último lote). |

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
      "conversationHref": "https://dash.callbell.eu/chat/f3670b13446b412796238b1cd78899f9",
      "assignedUser": "john.doe@email.com",
      "tags": [
        "sales",
        "lead"
      ],
      "customFields":{
        "Stripe link": "https://stripe.com/contacts/cus1234567",
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
      "conversationHref": "https://dash.callbell.eu/chat/f3670b13446b412796238b1cd78899f9",
      "assignedUser": null,
      "tags": [
        "sales",
        "lead",
        "hot"
      ],
      "customFields":{
        "Stripe link": "https://stripe.com/contacts/cus124124153"
      }
    }
  ],
  "meta": {
    "page": 1,
    "pages": 42,
    "next": "eyJ0cyI6MTc1NDM4NDQwMDAwMCwiaWQiOjEyMzQ1fQ"
  }
}
```

### Ejemplo de respuesta (con `include_field_types=true`)

```json title=response.json
{
  "contacts": [
    {
      "uuid": "414a6d692bd645ed803f2e7ce360d4c8",
      "name": "John Doe",
      "customFields": {
        "Address": "Oxford Street 123",
        "Join Date": "2024-01-15",
        "Preferences": "[\"Newsletter\", \"Promotions\"]"
      },
      "customFieldsMetadata": {
        "Address": { "value": "Oxford Street 123", "type": "text" },
        "Join Date": { "value": "2024-01-15", "type": "date" },
        "Preferences": { "value": ["Newsletter", "Promotions"], "type": "checkbox", "options": ["Newsletter", "Promotions", "Updates"] }
      }
    }
  ]
}
```
