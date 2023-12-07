# Estado del mensaje actualizado

:::precaución
Ten en cuenta que las **notificaciones de entrega de mensajes** sólo están disponibles en **WhatsApp Business API** y **WhatsApp QR API**.
:::

:::info
Los eventos sólo se reenvían para **mensajes salientes**. Los mensajes entrantes no activarán ninguna actualización de estado.
:::

Este evento se enviará siempre que el estado de un mensaje obtenga una **actualización**. Puede ser uno de los siguientes valores:

- `encolado`
- enviado
- entregado
- leído
- `failed
- no coinciden
- borrado


### Estados de los mensajes

#### En cola

Enviado cuando el mensaje se envía correctamente al cliente de la API de WhatsApp Business o al cliente de la API de QR.

#### Enviado

Este estado se envía siempre que el mensaje se envía al dispositivo del usuario final.

#### Entregado

Se envía cuando el mensaje ha sido finalmente entregado al dispositivo del usuario final.

#### Leído

Representa que el mensaje ha sido leído con éxito por el usuario final.

#### Fallido

Este estado se emite cuando no ha sido posible entregar el mensaje. En la carga útil interna también se especifica el motivo del fallo (por ejemplo, _"el número no existe en WhatsApp"_)

#### No coincide

Este estado de evento se envía siempre que WhatsApp Business API realiza una corrección automática del número de teléfono. El identificador del número de teléfono corregido estará presente en la carga útil interna del evento.

### Borrado
:::precaución
Este evento ha sido obsoleto porque ya no es compatible con Meta.
:::

Representa el borrado de un mensaje por parte del usuario final, tanto para _"borrar sólo para mí"_ como para _"borrar para todos"_.


### Nombre del evento

`message_status_updated` (estado del mensaje actualizado)

### Payload Fields

| Campo Tipo Descripción
| :--------------------- | :----- | :----------------------------------- |
| Identificador único del mensaje.
| `status` | string | El estado de entrega del mensaje | | `messageStatusPath
| `messageStatusPayload` | JSON | La carga útil sin procesar del estado del mensaje.

### Ejemplo de carga útil

```json title=carga.json
{
  "evento": "mensaje_estado_actualizado",
  "payload": {
    "uuid": "adf3d1216d4c4dcd908199d6700f2381",
    "status": "read",
    "messageStatusPayload":{
      "id": "gBGGM2MSRxl_Aglqmg5KQXU7ABC",
      "gsId":"2b34bfb7-2631-4763-89fb-1b3c65a4babc",
      "type": "read",
      "payload":{
        "ts":1686563913
      },
      "destination":"1122334455"
    }
  }
}
```
