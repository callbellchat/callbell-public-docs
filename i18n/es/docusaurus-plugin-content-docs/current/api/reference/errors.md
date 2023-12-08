---
sidebar_position: 6
---

# Errores

Callbell utiliza códigos de respuesta HTTP estándar:

- Las respuestas en el rango **2xx** significa que la solicitud se ha ejecutado correctamente.

- Las respuestas en el rango **4xx** significa que la solicitud no ha sido exitosa debido a un error del cliente, como autenticación incorrecta, límite de velocidad alcanzado o parámetros incorrectos.

- Las respuestas en el rango **5xx** significa que la solicitud no ha sido exitosa debido a un error interno del servidor. Por lo general, es seguro volver a intentar esas solicitudes con un retraso o en otro momento.