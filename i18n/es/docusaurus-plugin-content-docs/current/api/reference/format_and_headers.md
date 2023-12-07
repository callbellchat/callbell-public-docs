---
título: Formato y cabeceras
sidebar_position: 4
---

Todas las respuestas se devuelven en formato JSON. Por otro lado, la API sólo acepta cargas JSON, lo que significa que es responsabilidad del cliente enviar una cabecera accept como la siguiente:

```
Accept: application/json
```

Siguiendo la misma lógica, todos los extremos del cuerpo (por ejemplo, en las solicitudes POST, PUT y PATCH) deben codificarse en JSON en consecuencia.
