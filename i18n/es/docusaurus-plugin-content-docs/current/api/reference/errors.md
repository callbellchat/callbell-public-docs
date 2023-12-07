---
sidebar_position: 6
---

# Errors

Callbell utiliza códigos de respuesta HTTP estándar:

- Respuestas en el rango **2xx** significa que la petición se ha ejecutado correctamente

- Respuestas en el rango **4xx** significa que la solicitud no se ha ejecutado correctamente debido a un error del cliente como autenticación, límite de velocidad alcanzado o parámetros erróneos.

- Las respuestas en el rango **5xx** significan que la solicitud no se ha ejecutado correctamente debido a un error interno del servidor. Normalmente es seguro reintentar esas peticiones con un retraso o en otro momento.
