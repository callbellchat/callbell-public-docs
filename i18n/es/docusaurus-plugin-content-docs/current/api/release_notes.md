---
sidebar_position: 4
---

# Notas de la versión

Una lista de todos los cambios y mejoras que se han introducido en nuestra API. Úsala para verificar cuando se agregan nuevos puntos finales o se realizan cambios.

## 24 de septiembre de 2024

### ✨ Novedades

- Añadido `conversationHref` a todos los endpoints que devuelven un objeto [Contacto](/api/reference/object_types/contact); este campo enlaza con la conversación asociada al contacto en el dashboard de Callbell.
- El campo también está presente en todos los webhooks relacionados con contactos, mensajes y conversaciones.
- Añadido un nuevo campo `conversation` al cuerpo de la petición del endpoint [Send Message](/api/reference/messages_api/post_send_messages). Este campo permite devolver la conversación en la respuesta.

## 30 de julio de 2024

### ✨ Novedades

- [POST Send Messages ahora admite el campo de metadatos](/api/reference/messages_api/post_send_messages#send-message-with-metadata) para enviar mensajes con pares clave-valor personalizados.

## 25 de julio de 2024

### ✨ Novedades

- Añadidos fragmentos de código para **C#**, **Java** y **Rust**.

## 15 de mayo de 2024

### ✨ Novedades

- Los puntos finales [Crear contacto](/api/reference/contacts_api/post_contacts), [Editar contacto](/api/reference/contacts_api/post_contacts) y [Enviar mensaje](/api/reference/messages_api/post_send_messages) ahora admiten el parámetro `bot_status` para establecer el estado del bot asociado a un contacto específico.

## 11 de marzo de 2024

### ✨ Novedades

- El endpoint [GET Contacto Bot](/api/reference/contacts_api/get_contact_bot) para obtener el bot asociado a un contacto específico.
- El endpoint [POST Contact Bot](/api/reference/contacts_api/post_contact_bot) para cambiar el estado del bot asociado a un contacto específico.

## 5 de marzo de 2024

### 🛠️ Cambios

- El endpoint [Get Contact By Phone](/api/reference/contacts_api/get_contact_by_phone) ahora soporta el parámetro `channel_uuid` para buscar el contacto por número de teléfono y canal.

## 22 de febrero de 2024

### ✨ Novedades

- Evento de webhook [Team Membership Updated](/api/reference/webhooks/team_events/team_membership_updated) para ser notificado cuando se agrega o elimina un miembro del equipo.
- Evento de webhook [Agent Status Updated](/api/reference/webhooks/agent_events/agent_status_updated) para ser notificado cuando un agente cambia su estado.

## 20 de febrero de 2024

### ✨ Novedades

- Se agregó un nuevo punto final para listar todos los [miembros del equipo](/api/reference/teams_api/get_team_members) pertenecientes a un equipo.

### 🛠️ Cambios

- El punto final [Send Message](/api/reference/messages_api/post_send_messages) ahora admite un parámetro opcional `fields` para especificar qué campos incluir en la respuesta. Esto es útil para reducir el tamaño de la respuesta y acelerar las llamadas a la API. Actualmente, solo se admite `contacto`.

## 14 de febrero de 2024

### ✨ Novedades

- El punto final [Create contact](/api/reference/contacts_api/post_contacts) ahora admite el parámetro `channel_uuid` para crear un contacto asociado con un canal específico.

## 9 de febrero de 2024

### ✨ Novedades

- API de [Canales](/api/reference/channels_api/introduction) para administrar tus canales de Callbell de forma programática. Utiliza este punto final para listar, mostrar y actualizar tus canales.

### 🛠️ Cambios

- El punto final [Send Messages](/api/reference/messages_api/post_send_messages) ahora admite el parámetro `channel_uuid` para enviar un mensaje a un canal específico.

## 11 de enero de 2024

### ✨ Novedades

- Endpoints [Contact Conversation Open](/api/reference/contacts_api/post_contact_conversation_open) y [Contact Conversation Close](/api/reference/contacts_api/post_contact_conversation_close) para abrir y cerrar una conversación asociada a un contacto.

## 8 de enero de 2024

### ✨ Novedades

Se agregó información y ejemplos sobre cómo utilizar Callbell con Zapier.

## 4 de enero de 2024

### ✨ Novedades

- API de mensajes de contacto [Contact messages API](/api/reference/contacts_api/get_contact_messages) para obtener todos los mensajes de un contacto. Este punto final es útil para obtener todos los mensajes de un contacto, el resultado se paginará y ordenará por fecha.

## 19 de diciembre de 2023

### ✨ Novedades

- Se agregó `team_uuid` a las solicitudes de [envío de mensajes](/api/reference/messages_api/post_send_messages) y a las solicitudes de [creación](/api/reference/contacts_api/post_contacts) y [actualización](/api/reference/contacts_api/patch_contacts) de contacto. Esto te permite asignar un contacto a un equipo a través de la API.

## 14 de diciembre de 2023

### 🛠️ Cambios

- El evento de webhook [Message Created Webhook event](/api/reference/webhooks/message_events/message_created) ahora incluye la referencia completa de `contacto`. Esto es útil para tener más información sobre el contacto sin tener que realizar una llamada adicional a la API.

## 30 de noviembre de 2023

### ✨ Novedades

- Evento de webhook [Conversati

30 de noviembre de 2023

### ✨ Novedades

- [Conversation Opened Webhook Event](/api/reference/webhooks/conversation_events/conversation_opened)
- [Conversation Closed Webhook Event](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 de noviembre de 2023

### ✨ Novedades

- API de [Teams API Endpoint](/api/reference/teams_api/introduction)

## 29 de junio de 2023

### 🛠️ Cambios

- Permitir enviar [Mensajes de plantillas de múltiples variables](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 de junio de 2023

### ✨ Novedades

- El objeto [`MessageSendRequest`](/api/reference/object_types/message_send_request) ahora incluye un nuevo atributo: `messageStatusPayload`. Este atributo proporciona el estado del mensaje correspondiente, obtenido directamente desde la integración.
- Este atributo es útil al [obtener actualizaciones de estado para un mensaje](/api/reference/messages_api/get_message_status).
- Para fines de solución de problemas, `messageStatusPayload` también se puede obtener a través del evento de webhook [Message Status Update Webhook Event](/api/reference/webhooks/message_events/message_status_updated).

## 5 de abril de 2023

### ✨ Novedades

- Se ha agregado el atributo `assignedUser` al objeto [Contact](/api/reference/object_types/contact).
- Ahora se puede asignar usuarios a un contacto durante la creación o actualización, proporcionando el parámetro `assigned_user` con el correo electrónico del usuario (por ejemplo, `john.doe@email.com`). Asegúrate de que el correo electrónico proporcionado corresponda a un usuario confirmado en tu cuenta.
- Para desasignar un usuario de un contacto durante una actualización, incluye el parámetro `unassign_user` en el cuerpo de la solicitud y establece su valor en true. Esta acción eliminará el usuario asignado del contacto.

## 3 de marzo de 2023

### ✨ Novedades

- Snippets de código multilenguaje (`curl`, `node`, `go`, `ruby`, `php`, `python`) para todas las solicitudes.
- Sección de Notas de lanzamiento.

### 🛠️ Cambios

- [Contacto](/api/reference/object_types/contact) ahora incluye `custom_fields`.
- `custom_fields` y `tags` se pueden pasar en el cuerpo al [crear](/api/reference/contacts_api/post_contacts) o [actualizar](/api/reference/contacts_api/post_contacts) un contacto.
- El `phone_number` del [Contacto](/api/reference/object_types/contact) ya no se puede actualizar.

## 17 de enero de 2023

### ✨ Novedades

- API de [Templates API](/api/reference/template_messages_api/introduction)

### 🛠️ Cambios

- Se permite enviar [Mensajes de plantillas](/api/reference/messages_api/post_send_messages#send-template-messages)

## 11 de noviembre de 2022

### ✨ Novedades

- API de [Auth API](/api/reference/auth_api/introduction)

## 18 de octubre de 2022

### ✨ Novedades

- API de [Webhooks API](/api/reference/webhooks_api/introduction)