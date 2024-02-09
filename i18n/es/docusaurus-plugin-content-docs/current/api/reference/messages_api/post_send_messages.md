es
---
title: POST /messages/send
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# POST /messages/send

:::caution
Después de 24 horas sin respuesta del cliente, no es posible enviar mensajes regulares. Deberá utilizar un mensaje [Plantilla](#enviar-mensajes-de-plantilla). Vea los ejemplos a continuación.
:::

### Parámetros requeridos

| Parámetro | Tipo           | Descripción                                      |
| :-------- | :------------- | :----------------------------------------------- |
| `from`    | String         | Número de teléfono o identificador de plataforma |
| `to`      | String         | Identificador de canal (ej. `whatsapp`)          |
| `type`    | MessageType    | Tipo de mensaje a enviar                         |
| `content` | MessageContent | Contenido del mensaje                            |

### Parámetros opcionales

| Parámetro         | Tipo    | Descripción                                                                                                    |
| :---------------- | :------ | :------------------------------------------------------------------------------------------------------------- |
| `template_uuid`   | String  | Identificador único del mensaje de plantilla                                                                   |
| `optin_contact`   | Boolean | Confirmación de que el contacto ha optado por recibir mensajes                                                 |
| `template_values` | Array   | Valores para mensaje de plantilla con múltiples variables                                                      |
| `assigned_user`   | String  | El mensaje se asignará al correo electrónico de este colaborador                                               |
| `team_uuid`       | String  | El mensaje se asignará a este equipo                                                                           |
| `channel_uuid`    | String  | Se enviará el mensaje desde este canal (cuando no se especifique, utilizará el canal principal predeterminado) |

### Ejemplo de solicitud

<RequestTabs endpoint='messages_api' request="post_messages"/>

### Respuesta

| Parámetro | Tipo                                                                   | Descripción                                                                    |
| :-------- | :--------------------------------------------------------------------- | :----------------------------------------------------------------------------- |
| `message` | [MessageSendRequest](/api/reference/object_types/message_send_request) | La solicitud de envío de mensaje. El sistema inicialmente encolará el mensaje. |

### Ejemplo de respuesta

```json title=response.json
{
  "message": {
    "uuid": "adf3d1216d4c4dcd908199d6700f2381",
    "status": "enqueued"
  }
}
```

## Enviar mensaje con asignación automática de usuario

Es posible enviar un mensaje mediante una solicitud de API con un usuario asignado enviando su correo electrónico en el parámetro `assigned_user`.

:::caution
El usuario debe formar parte de su equipo, de lo contrario, la asignación no funcionará.
:::

<RequestTabs endpoint='messages_api' request="post_messages_with_user_assignment"/>

## Enviar mensajes con archivos adjuntos multimedia

Puede utilizar la API para enviar **mensajes multimedia** que contengan mensajes de **imágenes**, **documentos**, **audio** y **video**.

También es posible agregar una _leyenda_ al enviar archivos adjuntos `imagen` (consulte la solicitud de ejemplo a continuación).

### Ejemplo de envío de archivo de imagen

<RequestTabs endpoint='messages_api' request="post_messages_image"/>

### Ejemplo de envío de archivo de imagen y leyenda

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

Puede utilizar la API para enviar un mensaje de [Plantilla](/api/reference/object_types/template) aprobado.

:::info
Esto solo está disponible para cuentas que utilizan la integración oficial de **WhatsApp Business API**.
:::

:::caution
Para enviar mensajes de plantilla, `uuid_plantilla` y `contacto_optin` **deben** estar presentes en los datos del mensaje.
:::

<RequestTabs endpoint='messages_api' request="post_messages_template"/>

En este contexto, `texto` se refiere al marcador de posición del mensaje de plantilla. Por ejemplo, supongamos que tiene un mensaje de plantilla como este:

```bash title=template_example
Hola {{1}}, este es un ejemplo de mensaje de plantilla
```

La sustitución del marcador de posición se realizará con el valor pasado en los datos del mensaje, por lo que en este caso será el siguiente:

```bash title=template_example
Hola Juan Pérez, este es un ejemplo de mensaje de plantilla
```

## Enviar mensajes de plantilla con múltiples variables

Puede utilizar la API para enviar un mensaje de plantilla aprobado con múltiples variables.

:::info
Esto solo está disponible para cuentas que utilizan la integración oficial de **WhatsApp Business API**.
:::

:::caution
Para enviar mensajes de plantilla, `uuid_plantilla` y `contacto_optin` **deben** estar presentes en los datos del mensaje.
:::

<RequestTabs endpoint='messages_api' request="post_multi_variable_messages_template"/>

En este contexto, `valor_plantilla` se refiere a los marcadores de posición del mensaje de plantilla. Por ejemplo, supongamos que tiene un mensaje de plantilla como este:

```bash title=template_example
Hola {{1}}, este es un ejemplo de mensaje de plantilla para {{2}}. ¡{{3}}!
```

Las sustituciones de los marcadores de posición se realizarán con los valores pasados en un array en los datos del mensaje, por lo que en este caso será el siguiente:

```bash title=template_example
Hola Juan, este es un ejemplo de mensaje de plantilla para WhatsApp. ¡Saludos!
```

:::info
Cuando los `valores_plantilla` son válidos, los valores dentro de `contenido` se ignorarán, ya que se utilizan para mensajes de plantilla con una sola variable.
:::

## Enviar mensajes de plantilla con archivos adjuntos multimedia

Puede utilizar la API para enviar un mensaje de [Plantilla](/api/reference/object_types/template) aprobado con archivos adjuntos multimedia

:::info
Esto solo está disponible para cuentas que utilizan la integración oficial de **WhatsApp Business API**.
:::

:::caution
Para enviar mensajes de plantilla, `uuid_plantilla` y `contacto_optin` deben estar presentes en los datos del mensaje.
:::

Si tiene mensajes de plantilla multimedia aprobados, puede enviarlos incluyendo una `url` válida del medio

### Enviar archivo adjunto de imagen

<RequestTabs endpoint='messages_api' request="post_messages_template_image"/>

### Enviar archivo adjunto de documento

<RequestTabs endpoint='messages_api' request="post_messages_template_document"/>

### Enviar archivo adjunto de video

<RequestTabs endpoint='messages_api' request="post_messages_template_video"/>

:::info
Utilice la [API de Plantillas](/api/reference/template_messages_api/introduction) para obtener los `uuid_plantilla` de sus plantillas.
:::