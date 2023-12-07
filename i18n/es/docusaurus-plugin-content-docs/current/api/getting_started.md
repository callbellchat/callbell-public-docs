---
sidebar_position: 2
---

# Inicio

Esta guía paso a paso le guiará a través del uso de Callbell API para enviar un mensaje.

## Requisitos previos

Necesitarás crear una cuenta en Callbell y tener configurado un canal de WhatsApp Business para poder seguir esta guía.

- Regístrate en [Callbell](https://dash.callbell.eu/users/sign_up)
- Ver más información sobre nuestra [integración de la API de WhatsApp Business](https://callbellsupport.zendesk.com/hc/en-us/articles/360007805898-How-to-integrate-WhatsApp-into-Callbell-through-the-WhatsApp-Business-APIs)

## Obtener tus claves API

Vaya a la página de claves API de Callbell en la configuración (https://dash.callbell.eu/settings/api_settings/keys) para generar una nueva clave API:

![create_api_key](./assets/create_api_key_1.jpg)

Después de hacer clic en el botón **Create API Key** asegúrese de copiar el token y guardarlo de forma segura.

:::precaución
La clave API sólo se mostrará en esta pantalla. Si pierdes el acceso a ella tendrás que generar una nueva.
:::

## Enviar un mensaje de prueba usando cURL

Usando el método [Mensajes API' enviar mensaje](/docs/api/reference/messages_api/post_send_messages.md) puedes probar si tu clave API funciona como esperabas:

```bash
curl -X POST "https://api.callbell.eu/v1/messages/send" \
  -H "Authorization: Bearer <REPLACE_API_KEY_HERE>" \
  -H "Content-Type: application/json" \
  -d '{
    "to": "<REPLACE_PHONE_NUMBER_HERE>",
    "de": "whatsapp",
    "tipo": "text",
    "content": {
      "text": "¡Hola desde la API Callbell!"
    }
  }'
```

Sólo tienes que sustituir `REPLACE_API_KEY_HERE` por la clave de API generada en el paso [Getting your API keys](#getting-your-api-keys) y `REPLACE_PHONE_NUMBER_HERE` por el número de teléfono del receptor.

:::info
Asegúrate de que el número de teléfono receptor ha _optado_ y de que estás **dentro de la regla de las 24 horas** de WhatsApp Business API.
:::

Si el mensaje se ha enviado correctamente, recibirás una respuesta similar a ésta:

```json
{
  "mensaje": {
    "uuid": "<MESSAGE_UUID>",
    "status": "enqueued"
  }
}
```

Esto significa que el mensaje ha sido _successfully enqueued_ para ser enviado al número de teléfono deseado.

### Recuperar el estado de un mensaje

Para saber si nuestro mensaje de prueba ha sido entregado correctamente podemos utilizar cualquiera de los siguientes métodos:

- Usar el [get message status endpoint](api/reference/messages_api/get_message_status.md)
- Habilitar **Webhooks** en la sección de claves API y suscribirse al tipo de evento `message_status_updated

En este ejemplo utilizaremos el primer método; para comprobar el estado del mensaje de prueba basta con realizar el siguiente cURL desde un terminal:

```bash
curl -X GET "https://api.callbell.eu/v1/messages/status/<REPLACE_UUID_HERE>" \
  -H "Authorization: Bearer <REPLACE_API_KEY_HERE>" \
  -H "Content-Type: application/json"
```

Asegúrese de sustituir `REPLACE_API_KEY_HERE` por su clave API y `REPLACE_UUID_HERE` por el identificador del mensaje obtenido en el paso [Enviar un mensaje de prueba](#send-a-test-message-using-curl).

Obtendrás la siguiente respuesta:

```json
{
  "mensaje": {
    "uuid": "<MESSAGE_UUID>",
    "status": "delivered"
  }
}
```

Esto confirma que el mensaje fue enviado con éxito al usuario, pero aún no ha sido leído.

### Próximos Pasos

Explore nuestras API [Mensajes](/docs/api/reference/messages_api/introduction.md) y [Contactos](/docs/api/reference/contacts_api/introduction.md) para ver más ejemplos.
