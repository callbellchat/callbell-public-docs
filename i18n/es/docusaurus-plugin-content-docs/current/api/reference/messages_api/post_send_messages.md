es
---
title: POST /messages/send
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# POST /messages/send

:::caution
Después de 24 horas sin respuesta del cliente, no es posible enviar mensajes regulares, deberás utilizar un mensaje [Template](#send-template-messages), ver ejemplos a continuación.
:::

### Parámetros requeridos

| Parámetro | Tipo           | Descripción                            |
| :-------- | :------------- | :------------------------------------- |
| `to`      | String         | Número de teléfono o identificador de plataforma |
| `from`    | String         | Identificador del canal (por ejemplo, `whatsapp`) |
| `type`    | MessageType    | Tipo de mensaje a enviar               |
| `content` | MessageContent | Contenido del mensaje                  |

### Parámetros opcionales

| Parámetro         | Tipo     | Descripción                                                        |
| :---------------- | :------- | :----------------------------------------------------------------- |
| `template_uuid`   | String   | Identificador único del mensaje de plantilla                       |
| `optin_contact`   | Booleano | Confirmación de que el contacto ha dado su consentimiento para recibir mensajes |
| `template_values` | Array    | Valores para mensaje de plantilla multivariable                    |
| `assigned_user`   | String   | El mensaje se asignará al correo electrónico de este colaborador    |

### Ejemplo de solicitud

<RequestTabs endpoint='messages_api' request="post_messages"/>

### Respuesta

| Parámetro | Tipo                                                                   | Descripción                                                                    |
| :-------- | :--------------------------------------------------------------------- | :----------------------------------------------------------------------------- |
| message   | [MessageSendRequest](/api/reference/object_types/message_send_request) | La solicitud de envío de mensaje. El sistema encolará inicialmente el mensaje. |

### Ejemplo de respuesta

```json title=response.json
{
  "message": {
    "uuid": "adf3d1216d4c4dcd908199d6700f2381",
    "status": "enqueued"
  }
}
```

## Enviar mensaje con asignación automática de usuarios

Es posible enviar un mensaje mediante una solicitud a la API con un usuario asignado enviando su correo electrónico en el parámetro `assigned_user`.

:::caution
El usuario debe ser parte de tu equipo, de lo contrario, la asignación no funcionará.
:::

<RequestTabs endpoint='messages_api' request="post_messages_with_user_assignment"/>

## Enviar mensajes con adjuntos multimedia

Puedes usar la API para enviar mensajes **multimedia** que contengan mensajes de **imágenes**, **documentos**, **audio** y **video**.

También es posible agregar un _subtítulo_ al enviar adjuntos de `imagen` (consultar el ejemplo de solicitud a continuación).

### Ejemplo de envío de adjuntos de imagen

<RequestTabs endpoint='messages_api' request="post_messages_image"/>

### Ejemplo de envío de adjuntos de imagen y subtítulo

<RequestTabs endpoint='messages_api' request="post_messages_image_caption"/>

### Ejemplo de envío de adjuntos de documento

<RequestTabs endpoint='messages_api' request="post_messages_document"/>

### Ejemplo de envío de adjuntos de audio

:::info
Esto solo está disponible para cuentas que utilizan la integración oficial **WhatsApp Business API**.
:::

<RequestTabs endpoint='messages_api' request="post_messages_audio"/>

### Ejemplo de envío de adjuntos de video

:::info
Esto solo está disponible para cuentas que utilizan la integración oficial **WhatsApp Business API**.
:::

<RequestTabs endpoint='messages_api' request="post_messages_video"/>

## Enviar mensajes de plantilla

Puedes usar la API para enviar un mensaje de [plantilla](/api/reference/object_types/template) aprobado.

:::info
Esto solo está disponible para cuentas que utilizan la integración oficial **WhatsApp Business API**.
:::

:::caution
Para enviar mensajes de plantilla, `template_uuid` y `optin_contact` **deben** estar presentes en el payload.
:::

<RequestTabs endpoint='messages_api' request="post_messages_template"/>

En este contexto, `text` se refiere al marcador de posición del mensaje de plantilla, por ejemplo, supongamos que tienes un mensaje de plantilla como este:

```bash title=template_example
Hola {{1}}, este es un ejemplo de mensaje de plantilla
```

La sustitución de marcadores de posición se realizará con el valor pasado en el payload, por lo que en este caso será el siguiente:

```bash title=template_example
Hola John Doe, este es un ejemplo de mensaje de plantilla
```

## Enviar mensajes de plantilla con váriables múltiples

Puedes usar la API para enviar un mensaje de [plantilla](/api/reference/object_types/template) aprobado.

:::info
Esto solo está disponible para cuentas que utilizan la integración oficial **WhatsApp Business API**.
:::

:::caution
Para enviar mensajes de plantilla, `template_uuid` y `optin_contact` **deben** estar presentes en el payload.
:::

<RequestTabs endpoint='messages_api' request="post_multi_variable_messages_template"/>

En este contexto, `template_values` se refiere a los marcadores de posición del mensaje de plantilla, por ejemplo, supongamos que tienes un mensaje de plantilla como este:

```bash title=template_example
Hola {{1}}, este es un ejemplo de mensaje de plantilla {{2}}. {{3}}!
```

Las sustituciones de los marcadores de posición se realizarán con los valores pasados en el payload dentro de un array, por lo que en este caso será el siguiente:

```bash title=template_example
Hola Jack, este es un ejemplo de mensaje de plantilla. ¡Saludos!
```

:::info
Cuando `template_values` son válidos, los valores dentro de `content` se ignorarán, ya que se utilizan para mensajes de plantilla con una sola variable.
:::

## Enviar mensajes de plantilla con adjuntos multimedia

Puedes usar la API para enviar un mensaje de [plantilla](/api/reference/object_types/template) aprobado.

:::info
Esto solo está disponible para cuentas que utilizan la integración oficial **WhatsApp Business API**.
:::

:::caution
Para enviar mensajes de plantilla, `template_uuid` y `optin_contact` deben estar presentes en el payload.
:::

Si tienes mensajes de plantilla multimedia aprobados, puedes enviarlos incluyendo una `url` válida del multimedia

### Enviar adjunto de imagen

<RequestTabs endpoint='messages_api' request="post_messages_template_image"/>

### Enviar adjunto de documento

<RequestTabs endpoint='messages_api' request="post_messages_template_document"/>

### Enviar adjunto de vídeo

<RequestTabs endpoint='messages_api' request="post_messages_template_video"/>

:::info
Utiliza la [API de Plantillas](/api/reference/template_messages_api/introduction) para obtener los `template_uuid`s de tus plantillas.
:::