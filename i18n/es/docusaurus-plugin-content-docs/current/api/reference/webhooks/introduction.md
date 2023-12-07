---
sidebar_position: 1
---

# Introducción

Callbell API proporciona **HTTP Webhooks** para los eventos de aplicación más comunes:

- **Eventos de mensaje**
- Eventos de estado de notificación de mensajes
- Eventos de contacto
- Eventos de conversación

## Cómo suscribirse a eventos

:::info
Esto puede hacerse también mediante programación desde [WebhooksEndpoint](./../webhooks_api/introduction.md)
:::

En el panel de control de Callbell, vaya a la sección [**"Configuración de API "**](https://dash.callbell.eu/settings/api_settings/webhooks) y haga clic en la pestaña "Webhooks":

![webhook_tab](./assets/webhook_tab.jpg)

En el campo URL, añada la URL de su punto final (por ejemplo, `https://myapp.com/callbell_endpoint`) y seleccione los eventos para los que desea obtener suscripciones:

![webhook_create](./assets/webhook_create.jpg)

:::info
Asegúrate también de **incluir** el protocolo (`http` o `https`) dentro del punto final de tu webhook:

✅ **Bueno**: `https://www.myexample.com`

❌ **Malo**: `www.example.com`
:::

Después de hacer clic en "Crear nuevo webhook" debe recibir una notificación de éxito. Siempre se puede editar de nuevo los eventos Webhook en una etapa posterior:

![webhook_edit](./assets/webhook_edit.jpg)

:::precaución
Callbell no soporta `localhost` como URL de webhook. Si necesitas depurar una aplicación local utiliza en su lugar un servicio para exponer tu entorno de desarrollo local como [Ngrok](https://ngrok.com).
:::
