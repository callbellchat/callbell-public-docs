es
---
title: POST /messages/send
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# POST /messages/send

:::caution
Después de 24 horas sin respuesta del cliente, no es posible enviar mensajes regulares, deberás utilizar un mensaje [Plantilla](#enviar-mensajes-de-plantilla), ver ejemplos a continuación.
:::

### Parámetros requeridos

| Parámetro  | Tipo           | Descripción                         |
| :--------- | :------------- | :---------------------------------- |
| `to`       | String         | Número de teléfono o identificador de plataforma |
| `from`     | String         | Identificador del canal (ej. `whatsapp`) |
| `type`     | MessageType    | Tipo de mensaje a enviar             |
| `content`  | MessageContent | Contenido del mensaje                |

### Parámetros opcionales

| Parámetro         | Tipo    | Descripción                                                                                       |
| :---------------- | :------ | :------------------------------------------------------------------------------------------------ |
| `template_uuid`   | String  | Identificador único del mensaje de plantilla                                                     |
| `optin_contact`   | Boolean | Confirmación de que el contacto ha dado su consentimiento para recibir mensajes                   |
| `template_values` | Array   | Valores para mensajes de plantilla con múltiples variables                                        |
| `assigned_user`   | String  | El mensaje se asignará al correo electrónico de este colaborador                                   |
| `team_uuid`       | String  | El mensaje se asignará a este equipo                                                              |
| `channel_uuid`    | String  | El mensaje se enviará desde este canal (si se omite, se utilizará el canal principal por defecto) |
| `fields`          | String  | Campos separados por comas que se devolverán en el mensaje. Valores admitidos: `contacto`         |

### Ejemplo de solicitud

<RequestTabs endpoint='messages_api' request="post_messages"/>

### Respuesta

| Parámetro | Tipo                                                                   | Descripción                                                             |
| :-------- | :--------------------------------------------------------------------- | :---------------------------------------------------------------------- |
| message   | [MessageSendRequest](/api/reference/object_types/message_send_request) | La solicitud de envío de mensajes. El sistema encolará inicialmente el mensaje. |

### Ejemplo de respuesta

```json title=response.json
{
  "message": {
    "uuid": "adf3d1216d4c4dcd908199d6700f2381",
    "status": "enqueued"
  }
}
```

### Ejemplo de respuesta (con `fields=contact`)

```json title=response.json
{
  "message": {
    "uuid": "adf3d1216d4c4dcd908199d6700f2381",
    "status": "enqueued",
    "contact": {
      "uuid": "c7b3d1216d4c4dcd908199d6700f2381",
      "name": "John Doe",
      "phone": "+1234567890",
      "email": "john@doe.com"
    }
  }
}
```

## Enviar mensaje con asignación automática de usuario

Es posible enviar un mensaje a través de una solicitud a la API con un usuario asignado enviando su correo electrónico en el parámetro `assigned_user`.

:::caution
El usuario debe ser parte de tu equipo, de lo contrario, la asignación no funcionará.
:::

<RequestTabs endpoint='messages_api' request="post_messages_with_user_assignment"/>

## Enviar mensajes con archivos adjuntos de medios

Puedes utilizar la API para enviar **mensajes de medios** que contengan mensajes de **imágenes**, **documentos**, **audio** y **video**.

También puedes añadir un _subtítulo_ al enviar archivos adjuntos de tipo `imagen` (ver el ejemplo de solicitud a continuación).

### Ejemplo de envío de archivo de imagen

<RequestTabs endpoint='messages_api' request="post_messages_image"/>

### Ejemplo de envío de archivo de imagen con subtítulo

<RequestTabs endpoint='messages_api' request="post_messages_image_caption"/>

### Ejemplo de envío de archivo de documento

<RequestTabs endpoint='messages_api' request="post_messages_document"/>

### Ejemplo de envío de archivo de audio

:::info
Esto solo está disponible para cuentas que utilizan la integración oficial de **WhatsApp Business API**.
:::

<RequestTabs endpoint='messages_api' request="post_messages_audio"/>

### Ejemplo de envío de archivo de video

:::info
Esto solo está disponible para cuentas que utilizan la integración oficial de **WhatsApp Business API**.
:::

<RequestTabs endpoint='messages_api' request="post_messages_video"/>

## Enviar mensajes de plantilla

Puedes utilizar la API para enviar un mensaje de plantilla aprobado [Template](/api/reference/object_types/template) Message.

:::info
Esto solo está disponible para cuentas que utilizan la integración oficial de **WhatsApp Business API**.
:::

:::caution
Para enviar mensajes de plantilla, el `template_uuid` y `optin_contact` **deben** estar presentes en el payload.
:::

<RequestTabs endpoint='messages_api' request="post_messages_template"/>

En este contexto, `texto` se refiere al marcador de posición del mensaje de plantilla. Por ejemplo, supongamos que tienes un mensaje de plantilla como este:

```bash title=ejemplo_de_plantilla
Hola {{1}}, este es un ejemplo de mensaje de plantilla
```

La sustitución del marcador de posición se realizará con el valor proporcionado en el payload. En este caso, será el siguiente:

```bash title=ejemplo_de_plantilla
Hola Juan Pérez, este es un ejemplo de mensaje de plantilla
```

## Enviar mensajes de plantilla con múltiples variables

Puedes utilizar la API para enviar un mensaje de plantilla aprobado [Template](/api/reference/object_types/template) Message.

:::info
Esto solo está disponible para cuentas que utilizan la integración oficial de **WhatsApp Business API**.
:::

:::caution
Para enviar mensajes de plantilla, el `template_uuid` y `optin_contact` **deben** estar presentes en el payload.
:::

<RequestTabs endpoint='messages_api' request="post_multi_variable_messages_template"/>

En este contexto, `template_values` se refiere a los marcadores de posición del mensaje de plantilla. Por ejemplo, supongamos que tienes un mensaje de plantilla como este:

```bash title=ejemplo_de_plantilla
Hola {{1}}, este es un ejemplo de mensaje de plantilla {{2}}. {{3}}!
```

La sustitución de los marcadores de posición se realizará con los valores proporcionados en el payload dentro de un array. En este caso, será el siguiente:

```bash title=ejemplo_de_plantilla
Hola Juan, este es un ejemplo de mensaje de plantilla. ¡Saludos!
```

:::info
Cuando los `template_values` sean válidos, los valores dentro de `content` se ignorarán, ya que se utilizan para mensajes de plantilla con solo una variable.
:::

## Enviar mensajes de plantilla con archivos adjuntos de medios

Puedes utilizar la API para enviar un mensaje de plantilla aprobado [Template](/api/reference/object_types/template) Message.

:::info
Esto solo está disponible para cuentas que utilizan la integración oficial de **WhatsApp Business API**.
:::

:::caution
Para enviar mensajes de plantilla, el `template_uuid` y `optin_contact` deben estar presentes en el payload.
:::

Si tienes mensajes de plantilla de medios aprobados, puedes enviarlos incluyendo una `url` válida del medio.

### Enviar archivo de imagen adjunto

<RequestTabs endpoint='messages_api' request="post_messages_template_image"/>

### Enviar archivo de documento adjunto

<RequestTabs endpoint='messages_api' request="post_messages_template_document"/>

### Enviar archivo de video adjunto

<RequestTabs endpoint='messages_api' request="post_messages_template_video"/>

:::info
Utiliza la [API de plantillas](/api/reference/template_messages_api/introduction) para obtener los `template_uuid`s de tus plantillas.
:::