---
title: Canal
sidebar_position: 6
---

# Canal

Los canales son las diferentes plataformas donde puedes recibir y enviar mensajes. Puedes tener múltiples canales del mismo tipo, por ejemplo, múltiples números de WhatsApp.

## Propiedades

| Parámetro | Tipo    | Descripción                                                                                     |
| :-------- | :------ | :---------------------------------------------------------------------------------------------- |
| `uuid`    | String  | El identificador único del canal.                                                               |
| `title`   | String  | El título del canal.                                                                            |
| `type`    | String  | El tipo de canal. Los valores posibles son `facebook`, `whatsapp`, `instagram` y `telegram`    |
| `main`    | Boolean | Indica si el canal es el canal principal.                                                       |

## Ejemplo

```json title=response.json
{
  "channels": [
    {
      "uuid": "7c996996fea947f4a1d5a11e7fac84db",
      "title": "phone_number_1",
      "type": "whatsapp",
      "main": true
    },
    {
      "uuid": "dcefe6d18b5c4bbdb0661136c7f63c8e",
      "title": "phone_number_2",
      "type": "whatsapp",
      "main": false
    },
    {
      "uuid": "759edec71ff440b29fc635c5fac84d4f",
      "title": "phone_number_3",
      "type": "whatsapp",
      "main": false
    },
  ],
  "meta": {
    "page": 1,
    "pages": 1
  }
}
```