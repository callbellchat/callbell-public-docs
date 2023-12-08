es
# Estado del mensaje actualizado

:::caution
Tenga en cuenta que las notificaciones de **entrega del mensaje** solo están disponibles en **WhatsApp Business API** y **WhatsApp QR API**.
:::

:::info
Los eventos solo se transmiten para **mensajes salientes**. Los mensajes entrantes no activarán ninguna actualización de estado.
:::

Este evento se enviará siempre que el estado de un mensaje se actualice. Puede ser uno de los siguientes valores:

- `enqueued` (encolado)
- `sent` (enviado)
- `delivered` (entregado)
- `read` (leído)
- `failed` (fallido)
- `mismatch` (incompatibilidad)
- `deleted` (eliminado)


### Estados del mensaje

#### Enqueued (encolado)

Se envía cuando el mensaje se envía correctamente al cliente de WhatsApp Business API o al cliente de QR API.

#### Sent (enviado)

Este estado se envía cada vez que el mensaje se envía al dispositivo del usuario final.

#### Delivered (entregado)

Se envía cuando el mensaje finalmente ha sido entregado al dispositivo del usuario final.

#### Read (leído)

Representa que el mensaje ha sido leído correctamente por el usuario final.

#### Failed (fallido)

Este estado se emite siempre que no fue posible enviar el mensaje. En el payload interno también se especifica la razón del fallo (por ejemplo, _"el número no existe en WhatsApp"_)

#### Mismatch (incompatibilidad)

Este estado del evento se envía cada vez que WhatsApp Business API realiza una corrección automática del número de teléfono. El identificador de número de teléfono corregido estará presente en el payload interno del evento.

### Deleted (eliminado)
:::caution
Este evento se ha descontinuado ya que ya no es compatible con Meta.
:::

Representa la eliminación de un mensaje por parte del usuario final, tanto para _"eliminar solo para mí"_ como para _"eliminar para todos"_.



### Nombre del evento

`message_status_updated` (estado_del_mensaje_actualizado)

### Campos de la carga útil

| Campo                  | Tipo   | Descripción                          |
| :--------------------- | :----- | :----------------------------------- |
| `uuid`                 | cadena | El identificador único del mensaje |
| `status`               | cadena | El estado de entrega del mensaje   |
| `messageStatusPayload` | JSON   | La carga útil del estado del mensaje en bruto   |

### Ejemplo de carga útil

```json title=payload.json
{
  "event": "message_status_updated",
  "payload": {
    "uuid": "adf3d1216d4c4dcd908199d6700f2381",
    "status": "read",
    "messageStatusPayload":{
      "id":"gBGGM2MSRxl_Aglqmg5KQXU7ABC",
      "gsId":"2b34bfb7-2631-4763-89fb-1b3c65a4babc",
      "type":"read",
      "payload":{
        "ts":1686563913
      },
      "destination":"1122334455"
    }
  }
}
```