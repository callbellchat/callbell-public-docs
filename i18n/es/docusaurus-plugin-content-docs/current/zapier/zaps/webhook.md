---
sidebar_position: 4
---

# Usando Webhooks Avanzados

Aquí veremos cómo usar Callbell a través de Zapier utilizando el webhook personalizado de Zapier como acción.
Esta es una forma más avanzada de usar Callbell en Zapier, pero te brinda más flexibilidad porque puedes usar nuestra API pública para realizar acciones.

Consulta la <a href="https://docs.callbell.eu/api/reference/introduction'">referencia de API</a> para obtener más información sobre los endpoints y los payloads.

## Usando el Webhook Personalizado de Zapier

Asegúrate de seleccionar la aplicación Callbell correcta (la más reciente):

![Integración de Callbell](../assets/select-action.png)

Luego selecciona "Webhooks by Zapier" como la aplicación de acción:

![Webhooks by Zapier](../assets/webhook.png)

La acción recomendada aquí es "Solicitud personalizada":

Sin importar la acción que elijas, deberás configurar correctamente la URL del webhook.

### URL del Webhook

La URL del webhook es la URL que Zapier utilizará para enviar datos a Callbell.

:::info

ejemplo: https://docs.callbell.eu/api/reference/contacts_api/post_contacts se puede usar para crear un nuevo contacto

:::

### Payload del Webhook

El payload del webhook es el datos que Zapier enviará a Callbell.

El payload debe estar en formato JSON.

### Autenticación

Deberás autenticar tu solicitud a Callbell.

Puedes hacerlo agregando los siguientes encabezados a tu solicitud:

![Encabezados](../assets/headers.png)

El `Content-Type` establecido en `application/json` es **obligatorio**.