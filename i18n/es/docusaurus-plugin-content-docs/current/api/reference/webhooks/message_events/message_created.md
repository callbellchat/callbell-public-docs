# Mensaje creado

Este evento se enviará siempre que se **crea** un mensaje, por ejemplo al _recibir_ o _enviar_ un mensaje de/a un cliente.

### Nombre del Evento

mensaje_creado

### Payload Fields

| Campo Tipo Descripción
| :------------- | :------- | :------------------------------------------------------------- |
| El identificador específico del canal del receptor del mensaje.
| `from` | string | El identificador específico del canal del remitente del mensaje | | | | `text` | string
| Texto: El texto del mensaje.
| Los archivos adjuntos del mensaje.
| `status` | string | El estado del mensaje. Sólo puede ser "recibido" o "enviado".
| `channel` | string | Identificador del canal (p.ej. `whatsapp`) | `contact.uu
| Contact.uuid | String | El uuid del contacto asociado al mensaje.
| Fecha de creación del contacto (formato ISO 8601)

### Ejemplo de carga útil

```json title=carga.json
{
  "evento": "mensaje_creado",
  "payload": {
    "to": "331122334455",
    "from": "335544332211",
    "text": "Hola",
    "status": "recibido",
    "canal": "whatsapp",
    "contacto": {
      "uuid": "eb2b914a977e4ab896e7b886698b3eac"
    },
    "createdAt": "2022-10-18T12:06:29.000+02:00"
  }
}
```
