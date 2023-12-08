es
# Mensaje Creado

Este evento se enviará siempre que se **cree** un mensaje, por ejemplo, al _recibir_ o _enviar_ un mensaje de/a un cliente.

### Nombre del Evento

`mensaje_creado`

### Campos del Cuerpo

| Campo          | Tipo     | Descripción                                                    |
| :------------- | :------- | :------------------------------------------------------------- |
| `to`           | string   | El identificador específico del canal del receptor del mensaje |
| `from`         | string   | El identificador específico del canal del remitente del mensaje |
| `text`         | string   | El texto del mensaje                                           |
| `attachments`  | string[] | Los archivos adjuntos del mensaje                              |
| `status`       | string   | El estado del mensaje. Solo puede ser `recibido` o `enviado`    |
| `channel`      | string   | Identificador del canal (por ejemplo, `whatsapp`)               |
| `contact.uuid` | string   | El UUID del contacto asociado al mensaje                       |
| `createdAt`    | string   | Fecha de creación del contacto (en formato ISO 8601)            |

### Ejemplo de Cuerpo

```json title=payload.json
{
  "evento": "mensaje_creado",
  "cuerpo": {
    "to": "331122334455",
    "from": "335544332211",
    "text": "Hola",
    "status": "recibido",
    "channel": "whatsapp",
    "contacto": {
      "uuid": "eb2b914a977e4ab896e7b886698b3eac"
    },
    "createdAt": "2022-10-18T12:06:29.000+02:00"
  }
}
```