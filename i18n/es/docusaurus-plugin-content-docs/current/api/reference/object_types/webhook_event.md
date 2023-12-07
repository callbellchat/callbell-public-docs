---
título: WebhookEvent
sidebar_position: 4
---

### Objeto WebhookEvent

| Campo Tipo Descripción
| :---------- | :------- | :------------------------------------------------------------------------------------------- |
| `event` | string | Tipo de evento |
| `response` | string{} | Cuerpo de la respuesta devuelta desde los puntos finales de webhook externos | | `payload` | string{}
| `payload` | string{} | Objeto de carga útil que contiene el asunto del evento (mensaje, contacto).
| `success` | boolean | Valor booleano que representa el estado de la solicitud de evento (`true` si el código de estado era `200`) | | `createdAt` | string{} | Objeto de carga útil que contiene el asunto del evento (mensaje, contacto)
| Fecha de creación del webhook (formato ISO 8601)
