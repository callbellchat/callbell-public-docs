---
título: DELETE /contactos/:uuid
sidebar_position: 6
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# DELETE /contacts/:uuid

Elimina un contacto específico dado un `uuid`.

:::precaución

Esta operación es **irreversible**. Comprueba siempre que tu código es correcto.

:::

### Parámetros requeridos

| Parámetro Tipo Descripción |
| :------------------------- | :----- | :------------------- |
| `uuid`                     | string | El uuid del contacto |

### Ejemplo de solicitud

<RequestTabs endpoint='contacts_api' request='delete_contact'/>

### Respuesta

| Parámetro Tipo Descripción |
| :------------------------- | :----- | :---------------------- |
| `status`                   | string | Estado de la operación. |

### Ejemplo de respuesta

```json title=respuesta.json
{
  "status": "contact was destroyed"
}
```
