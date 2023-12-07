---
título: Obtener /auth/me
sidebar_position: 1
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /auth/me

Devuelve un código de estado `200` si el `api_token` es válido.

### Ejemplo de petición

<RequestTabs endpoint='auth_api' request="get_me"/>

### Respuesta

| Parámetro Tipo Descripción
| :----------- | :----- | :----------------------------------------------------- |
| `status` | string | El estado de la solicitud (`ok`) | | `user_email` | string | Correo electrónico de la cuenta
| Correo electrónico del usuario de la cuenta
| User_name` | String | Nombre del usuario de la cuenta
| `api_key` | string | Clave de la API que generó el token utilizado para la solicitud | `api_key` | string | Clave de la API que generó el token utilizado para la solicitud

### Ejemplo de respuesta

```json title=response.json
{
  "status": "ok",
  "user_email": "john_doe@email.com",
  "nombre_usuario": "John Doe",
  "api_key": "test_1234567890"
}
```
