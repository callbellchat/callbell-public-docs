---
sidebar_position: 3
---

# Integración con Slack

## Automatiza las Notificaciones Internas desde Callbell

En las siguientes guías, aprenderás cómo integrar Callbell con Slack usando Zapier. Esta integración ayuda a tu equipo a mantenerse informado en tiempo real enviando mensajes automatizados de Slack basados en eventos específicos en Callbell.

Con esta configuración, puedes:

- Notificar a tu equipo en Slack cuando se crea un nuevo contacto en Callbell.

- Notificar a tu equipo en Slack cuando se abre una conversación en Callbell.

- Notificar a tu equipo en Slack cuando se cierra una conversación en Callbell.

Cada guía te guiará a través de instrucciones paso a paso para configurar estos flujos de trabajo utilizando Callbell, Zapier y Slack.

---

## Guía 1: Notificar a Slack Cuando se Crea un Nuevo Contacto en Callbell

Publica automáticamente un mensaje en Slack cada vez que se crea un nuevo contacto en Callbell.

### 1. Crear un Zap: Callbell como el Desencadenador (Trigger)

1. Inicia sesión en Zapier y haz clic en **Crear Zap**.
2. Elige **Callbell** como la aplicación desencadenadora.
3. Selecciona el evento desencadenador **Nuevo Contacto Creado**.
4. Conecta tu cuenta de Callbell.
5. Prueba el desencadenador para asegurarte de que está recuperando los datos del nuevo contacto (nombre, número de teléfono, etc.).

### 2. Añadir Slack como la Acción

1. Haz clic en **+ Añadir Acción**.
2. Selecciona **Slack** como la aplicación de acción.
3. Elige **Enviar Mensaje al Canal** o **Enviar Mensaje Directo**, según tu flujo de trabajo.
4. Conecta tu cuenta de Slack y elige el destino (por ejemplo, `#nuevos-leads`, `#soporte` o tu propio DM).
5. En el campo **Texto del Mensaje**, inserta campos dinámicos del paso anterior de Callbell, como `{{Nombre del Contacto}}` y `{{Número de Teléfono}}`.

![zapier_integration_slack_guide_1](../../assets/zapier_integration_slack_guide_1.png)

### 3. Personalizar la Configuración del Mensaje de Slack

- (Opcional) Añade un icono o imagen personalizados para el mensaje.
- Incluye un enlace de vuelta al Zap o a la URL del contacto en Callbell, si está disponible.
- Utiliza el formato de Slack: emojis, menciones (p. ej., `<!here>` o `<@U123456>`), negrita, enlaces, etc.

### Notas Finales

Este flujo de trabajo mantiene a tu equipo actualizado tan pronto como un nuevo contacto entra en Callbell.

Para ayuda adicional, consulta:

- [Centro de Ayuda de Callbell](https://callbellsupport.zendesk.com/hc/en-us)
- [Documentación de Ayuda de Zapier](https://help.zapier.com/hc/en-us)

---

## Guía 2: Notificar a Slack Cuando se Abre una Conversación en Callbell

Publica automáticamente un mensaje en Slack cada vez que se abre una conversación en Callbell.

### 1. Crear un Zap: Callbell como el Desencadenador (Trigger)

1. Inicia sesión en Zapier y haz clic en **Crear Zap**.
2. Elige **Callbell** como la aplicación desencadenadora.
3. Selecciona el evento desencadenador **Conversación Abierta**.
4. Conecta tu cuenta de Callbell.
5. Prueba el desencadenador para asegurarte de que está recuperando los datos correctos de la conversación.

### 2. Añadir Slack como la Acción

1. Haz clic en **+ Añadir Acción**.
2. Selecciona **Slack** como la aplicación de acción.
3. Elige **Enviar Mensaje al Canal** o **Enviar Mensaje Directo**.
4. Conecta tu cuenta de Slack y elige el canal (por ejemplo, `#activity-feed`, `#support-messages` o un DM).
5. En el campo **Texto del Mensaje**, inserta campos dinámicos como `{{Nombre del Contacto}}`, `{{ID de Conversación}}` o el fragmento del primer mensaje.

![zapier_integration_slack_guide_2](../../assets/zapier_integration_slack_guide_2.png)

### 3. Personalizar la Configuración del Mensaje de Slack

- (Opcional) Añade un icono o imagen, o incluye un enlace de vuelta al Zap o a la conversación en Callbell.
- Etiqueta usuarios o usa `<!here>` para alertar a tu equipo.
- Formatea con negrita, cursiva y enlaces para mayor claridad.

### Notas Finales

Este flujo de trabajo permite a tu equipo estar informado en tiempo real cada vez que se abre una nueva conversación en Callbell. Es especialmente útil para rastrear solicitudes entrantes, mejorar los tiempos de respuesta y asegurar que ninguna consulta quede sin atender.

Para ayuda adicional, consulta:

- [Centro de Ayuda de Callbell](https://callbellsupport.zendesk.com/hc/en-us)
- [Documentación de Ayuda de Zapier](https://help.zapier.com/hc/en-us)

---

## Guía 3: Notificar a Slack Cuando se Cierra una Conversación en Callbell

Publica automáticamente un mensaje en Slack cada vez que se cierra una conversación en Callbell.

### 1. Crear un Zap: Callbell como el Desencadenador (Trigger)

1. Inicia sesión en Zapier y haz clic en **Crear Zap**.
2. Elige **Callbell** como la aplicación desencadenadora.
3. Selecciona el evento desencadenador **Conversación Cerrada**.
4. Conecta tu cuenta de Callbell.
5. Prueba el desencadenador para asegurarte de que está recuperando los datos correctos de la conversación.

### 2. Añadir Slack como la Acción

1. Haz clic en **+ Añadir Acción**.
2. Selecciona **Slack** como la aplicación de acción.
3. Elige **Enviar Mensaje al Canal** o **Enviar Mensaje Directo**.
4. Conecta tu cuenta de Slack y selecciona el canal (por ejemplo, `#conversaciones-cerradas`, `#registros-soporte` o un DM).
5. En el campo **Texto del Mensaje**, inserta campos como `{{Nombre del Contacto}}`, `{{Cerrado En}}` y un resumen del resultado de la conversación.

![zapier_integration_slack_guide_3](../../assets/zapier_integration_slack_guide_3.png)

### 3. Personalizar la Configuración del Mensaje de Slack

- (Opcional) Incluye un icono o un enlace al Zap o a la URL de la conversación en Callbell.
- Usa menciones (`<!here>`), emojis o formato para resaltar detalles clave.

### Notas Finales

Este flujo de trabajo ayuda a tu equipo a mantenerse informado cada vez que se cierra una conversación en Callbell, permitiendo a los gerentes revisar los resultados o hacer seguimiento cuando sea necesario.

Para ayuda adicional, consulta:

- [Centro de Ayuda de Callbell](https://callbellsupport.zendesk.com/hc/en-us)
- [Documentación de Ayuda de Zapier](https://help.zapier.com/hc/en-us)
