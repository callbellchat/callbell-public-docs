---
title: Objeto WebhookEvent
sidebar_position: 4
---

### Objeto WebhookEvent

| Campo       | Tipo     | Descripción                                                                                  |
| :---------- | :------- | :------------------------------------------------------------------------------------------- |
| `event`     | string   | Tipo de evento                                                                               |
| `response`  | string{} | Cuerpo de respuesta devuelto por los puntos finales del webhook externo                      |
| `payload`   | string{} | Objeto de carga útil que contiene el tema del evento (mensaje, contacto)                      |
| `success`   | boolean  | Valor booleano que representa el estado de la solicitud de evento (`true` si el código de estado fue `200`) |
| `createdAt` | string   | Fecha de creación del webhook (formateada según ISO 8601)                                     |