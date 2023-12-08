---
sidebar_position: 2
---

# Guía de inicio

Esta guía paso a paso te guiará a través de cómo usar la API de Callbell para enviar un mensaje.

## Requisitos previos

Debes crear una cuenta en Callbell y haber configurado un canal de WhatsApp Business para poder seguir esta guía.

- Regístrate en [Callbell](https://dash.callbell.eu/users/sign_up)
- Obtén más información sobre nuestra [integración de la API de WhatsApp Business](https://callbellsupport.zendesk.com/hc/en-us/articles/360007805898-How-to-integrate-WhatsApp-into-Callbell-through-the-WhatsApp-Business-APIs)

## Obtener tus claves de API

Dirígete a la página de claves de API de Callbell en la configuración (https://dash.callbell.eu/settings/api_settings/keys) para generar una nueva clave de API:

![crear_clave_api](./assets/create_api_key_1.jpg)

Después de hacer clic en el botón **Crear clave de API**, asegúrate de copiar el token y guardarlo de forma segura.

:::caution
La clave de API solo se mostrará en esta pantalla. Si pierdes acceso a ella, deberás generar una nueva.
:::

## Enviar un mensaje de prueba usando cURL

Usando el [método de envío de mensajes de la API de Mensajes](/api/reference/messages_api/post_send_messages.md), puedes probar si tu clave de API funciona como se espera:

```bash
curl -X POST "https://api.callbell.eu/v1/messages/send" \
  -H "Authorization: Bearer <REEMPLAZA_CLAVE_API_AQUÍ>" \
  -H "Content-Type: application/json" \
  -d '{
    "to": "<REEMPLAZA_NÚMERO_DE_TELEFONO_AQUÍ>",
    "from": "whatsapp",
    "type": "text",
    "content": {
      "text": "¡Hola desde la API de Callbell!"
    }
  }'
```

Solo reemplaza `REEMPLAZA_CLAVE_API_AQUÍ` con la clave de API generada en el paso [Obtener tus claves de API](#obtener-tus-claves-de-api) y `REEMPLAZA_NÚMERO_DE_TELEFONO_AQUÍ` con el número de teléfono del destinatario.

:::info
Asegúrate de que el número de teléfono receptor haya **optado por ello** y estás **dentro de las 24 horas** permitidas por la API de WhatsApp Business.
:::

Si el mensaje se envió correctamente, recibirás una respuesta similar a esta:

```json
{
  "message": {
    "uuid": "<UUID_DEL_MENSAJE>",
    "status": "enqueued"
  }
}
```

Esto significa que el mensaje se ha encolado correctamente para su envío al número de teléfono deseado.

### Obtener el estado de un mensaje

Para saber si nuestro mensaje de prueba se entregó correctamente, podemos utilizar alguno de los siguientes métodos:

- Usar el [endpoint de obtener el estado del mensaje](api/reference/messages_api/get_message_status.md)
- Habilitar **Webhooks** en la sección de claves de API y suscribirse al evento `message_status_updated`

En este ejemplo, utilizaremos el primer método; para verificar el estado del mensaje de prueba, simplemente realiza el siguiente cURL desde una terminal:

```bash
curl -X GET "https://api.callbell.eu/v1/messages/status/<REEMPLAZA_UUID_AQUÍ>" \
  -H "Authorization: Bearer <REEMPLAZA_CLAVE_API_AQUÍ>" \
  -H "Content-Type: application/json"
```

Asegúrate de reemplazar `REEMPLAZA_CLAVE_API_AQUÍ` con tu clave de API y `REEMPLAZA_UUID_AQUÍ` con el identificador del mensaje obtenido del paso [Enviar un mensaje de prueba](#enviar-un-mensaje-de-prueba-usando-curl).

Obtendrás la siguiente respuesta:

```json
{
  "message": {
    "uuid": "<UUID_DEL_MENSAJE>",
    "status": "delivered"
  }
}
```

Esto confirma que el mensaje se envió correctamente al usuario, pero aún no ha sido leído.

### Siguientes pasos

Prueba a explorar nuestras APIs de [Mensajes](/api/reference/messages_api/introduction.md) y [Contactos](/api/reference/contacts_api/introduction.md) para más ejemplos.