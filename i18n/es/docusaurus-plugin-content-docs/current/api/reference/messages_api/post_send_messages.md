---
título: POST /mensajes/enviar
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# POST /messages/send

:::precaución
Después de 24h sin respuesta del cliente, no es posible enviar mensajes normales, tendrá que utilizar un mensaje [Plantilla](#send-template-messages), vea los ejemplos a continuación.
:::

### Parámetros requeridos

| Parámetro Tipo Descripción
| :-------- | :------------- | :----------------------------------- |
| Cadena: Número de teléfono o identificador de plataforma.
| `from` | String | Identificador de canal (p.ej. `whatsapp`) | | `type` | Mensaje
| Tipo de mensaje Tipo de mensaje a enviar
| Contenido del mensaje.

### Parámetros opcionales

| Parámetro Tipo Descripción
| :---------------- | :------ | :---------------------------------------------------------------- |
| `template_uuid` | String | Identificador único de la plantilla de mensaje | | | | | | | | | | | | | | | Booleano
| `optin_contact` | Boolean | Confirmación de que el contacto ha optado por recibir mensajes.
| Valores de plantilla para mensajes con múltiples variables
| `assigned_user` | String | El mensaje se asignará al correo electrónico de este colaborador | | | | | | | | | | | | | | | | | String

### Ejemplo de solicitud

<RequestTabs endpoint='messages_api' request="post_messages"/>

### Respuesta

| Parámetro Tipo Descripción
| :-------- | :--------------------------------------------------------------------- | :----------------------------------------------------------------------- |
| mensaje | [MessageSendRequest](/api/reference/object_types/message_send_request) | La solicitud de envío de mensaje. El sistema inicialmente pondrá en cola el mensaje. |

### Ejemplo de respuesta

```json title=respuesta.json
{
  "message": {
    "uuid": "adf3d1216d4c4dcd908199d6700f2381",
    "status": "enqueued"
  }
}
```

## Enviar Mensaje con Asignación Automática de Usuario

Es posible enviar un mensaje vía petición API con un usuario asignado enviando su email en el parámetro `assigned_user`.

:::precaución
El usuario tiene que ser parte de su equipo, de lo contrario la asignación no funcionará.
:::

<RequestTabs endpoint='messages_api' request="post_messages_with_user_assignment"/>

## Enviar mensaje con archivos adjuntos multimedia

Puede utilizar la API para enviar **mensajes multimedia** que contengan **imágenes**, **documentos**, **audio** y **vídeo**.

También es posible añadir un _caption_ al enviar `image` adjuntos (ver el ejemplo de solicitud más abajo).

### Enviar imagen adjunta Ejemplo

<RequestTabs endpoint='messages_api' request="post_messages_image"/>

### Ejemplo de envío de imagen adjunta y pie de foto

<RequestTabs endpoint='messages_api' request="post_messages_image_caption"/>

### Send Document Attachment Example

<RequestTabs endpoint='messages_api' request="post_messages_document"/>

### Send Audio Attachment Example

:::info
Esto sólo está disponible para las cuentas que utilizan la integración oficial **WhatsApp Business API**.
:::

<RequestTabs endpoint='messages_api' request="post_messages_audio"/>

### Enviar vídeo adjunto Ejemplo

:::info
Esto solo está disponible para cuentas que utilicen la integración oficial de **WhatsApp Business API**.
:::

<RequestTabs endpoint='messages_api' request="post_messages_video"/>

## Enviar mensajes de plantilla

Puede utilizar la API para enviar un Mensaje [Plantilla](/api/reference/object_types/template) aprobado.

:::info
Esto sólo está disponible para cuentas que utilicen la integración oficial de **WhatsApp Business API**.
:::

:::precaución
Para enviar mensajes de plantilla, `template_uuid` y `optin_contact` **deben** estar presentes en el payload.
:::

<RequestTabs endpoint='messages_api' request="post_messages_template"/>

En este contexto `text` se refiere al marcador de posición del mensaje de plantilla, por ejemplo digamos que tienes un mensaje de plantilla como este:

```bash title=ejemplo_de_plantilla
Hola {{1}}, este es un ejemplo de mensaje de plantilla
```

El reemplazo del marcador de posición se hará con el valor pasado en el payload, por lo que en este caso será el siguiente:

```bash title=ejemplo_de_plantilla
Hola Juan Pérez, este es un ejemplo de mensaje de plantilla
```

## Enviar mensajes de plantilla multivariables

Puede utilizar la API para enviar un Mensaje [Plantilla](/api/reference/object_types/template) aprobado.

:::info
Esto sólo está disponible para cuentas que utilicen la integración oficial de **WhatsApp Business API**.
:::

:::precaución
Para enviar mensajes de plantilla, `template_uuid` y `optin_contact` **deben** estar presentes en el payload.
:::

<RequestTabs endpoint='messages_api' request="post_multi_variable_messages_template"/>

En este contexto `template_values` se refiere a los marcadores de posición del mensaje de plantilla, por ejemplo digamos que tienes un mensaje de plantilla como este:

```bash title=ejemplo_de_plantilla
Hola {{1}}, este es un ejemplo de plantilla {{2}}. ¡{{3}}!
```

Los reemplazos de los placeholders se harán con los valores pasados en el payload dentro de un array, por lo que en este caso será el siguiente:

```bash title=ejemplo_de_plantilla
Hola Jack, este es un ejemplo de mensaje de plantilla. ¡Saludos!
```

:::info
Cuando `template_values` es válido, los valores dentro de `content` serán ignorados, ya que se utiliza para mensajes de plantilla con una sola variable.
:::

## Enviar mensajes de plantilla con archivos multimedia adjuntos

Puede utilizar la API para enviar un mensaje [Template](/api/reference/object_types/template) aprobado

:::info
Esto sólo está disponible para cuentas que utilicen la integración oficial de **WhatsApp Business API**.
:::

:::precaución
Para enviar mensajes de plantilla, `template_uuid` y `optin_contact` deben estar presentes en el payload.
:::

Si tiene mensajes de plantilla de medios aprobados, puede enviarlos incluyendo una `url` válida de los medios

### Enviar imagen adjunta

<RequestTabs endpoint='messages_api' request="post_messages_template_image"/>

### Enviar documento adjunto

<RequestTabs endpoint='messages_api' request="post_messages_template_document"/>

### Enviar vídeo adjunto

<RequestTabs endpoint='messages_api' request="post_messages_template_video"/>

:::info
Utiliza la [Templates API](/api/reference/template_messages_api/introduction) para obtener el `template_uuid` de tus plantillas.
:::
