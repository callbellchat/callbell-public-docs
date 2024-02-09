---

title: PATCH /channels/:uuid
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# PATCH /channels/:uuid

Actualiza un canal existente.

### Parámetros requeridos

| Parámetro | Tipo   | Descripción                        |
| :-------- | :----- | :--------------------------------- |
| `uuid`    | string | El identificador del canal          |

### Parámetros opcionales

| Parámetro | Tipo   | Descripción                                      |
| :-------- | :----- | :----------------------------------------------- |
| `title`   | string | El nuevo título que se le asignará al canal |

### Ejemplo de solicitud

<RequestTabs endpoint='channels_api' request="patch_channel"/>

### Respuesta

| Parámetro | Tipo                                           | Descripción                          |
| :-------- | :--------------------------------------------- | :----------------------------------- |
| `channel` | [Channel](/api/reference/object_types/channel) | El objeto que representa el canal.         |

### Ejemplo de respuesta

```json title=response.json
{
  "channel": {
    "uuid": "7c996996fea947f4a1d5a11e7fac84db",
    "title": "Nuevo título",
    "type": "whatsapp",
    "principal": true
  }
}
```