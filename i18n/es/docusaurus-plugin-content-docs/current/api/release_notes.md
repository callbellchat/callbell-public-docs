es
---
sidebar_position: 4
---

# Notas de la versión

Una lista de todos los cambios y mejoras que se introdujeron en nuestra API. Úsela para verificar cuando se agreguen nuevos puntos finales o se realicen cambios.

## 5 de marzo de 2024

### 🛠️ Cambios

- El punto final [Obtener contacto por teléfono](/api/reference/contacts_api/get_contact_by_phone) ahora admite el parámetro `channel_uuid` para buscar el contacto por número de teléfono y canal.

## 22 de febrero de 2024

### ✨ Novedades

- Evento de webhook [Actualización de membresía del equipo](/api/reference/webhooks/team_events/team_membership_updated) para notificar cuando se agrega o elimina un miembro del equipo.
- Evento de webhook [Actualización de estado del agente](/api/reference/webhooks/agent_events/agent_status_updated) para notificar cuando un agente cambia su estado.

## 20 de febrero de 2024

### ✨ Novedades

- Se agregó un nuevo punto final para enumerar todos los [miembros del equipo](/api/reference/teams_api/get_team_members) que pertenecen a un equipo.

### 🛠️ Cambios

- El punto final [Enviar mensaje](/api/reference/messages_api/post_send_messages) ahora admite un parámetro opcional `fields` para especificar qué campos incluir en la respuesta. Esto es útil para reducir el tamaño de la respuesta y acelerar las llamadas a la API. Actualmente, solo se admite `contacto`.

## 14 de febrero de 2024

### ✨ Novedades

- El punto final [Crear contacto](/api/reference/contacts_api/post_contacts) ahora admite el parámetro `channel_uuid` para crear un contacto asociado con un canal específico.

## 9 de febrero de 2024

### ✨ Novedades

- [API de canales](/api/reference/channels_api/introduction) para administrar sus canales de Callbell de forma programática. Utilice este punto final para listar, mostrar y actualizar sus canales.

### 🛠️ Cambios

- El punto final [Enviar mensajes](/api/reference/messages_api/post_send_messages) ahora admite el parámetro `channel_uuid` para enviar un mensaje a un canal específico.

## 11 de enero de 2024

### ✨ Novedades

- Puntos finales [Contacto Que Abre Conversación](/api/reference/contacts_api/post_contact_conversation_open) y [Contacto Que Cierra Conversación](/api/reference/contacts_api/post_contact_conversation_close) para abrir y cerrar una conversación asociada a un contacto.

## 8 de enero de 2024

### ✨ Novedades

- Se agregó información y ejemplos sobre cómo usar Callbell con Zapier.

## 4 de enero de 2024

### ✨ Novedades

- El punto final [API de mensajes de contacto](/api/reference/contacts_api/get_contact_messages) para obtener todos los mensajes de un contacto. Este punto final es útil para obtener todos los mensajes de un contacto, el resultado está paginado y ordenado por fecha.

## 19 de diciembre de 2023

### ✨ Novedades

- Se agregó `team_uuid` a las solicitudes de [envío de mensajes](/api/reference/messages_api/post_send_messages) y a las solicitudes de [creación](/api/reference/contacts_api/post_contacts) y [actualización](/api/reference/contacts_api/patch_contacts) de contacto. Esto le permite asignar un contacto a un equipo a través de la API.

## 14 de diciembre de 2023

### 🛠️ Cambios

- El evento de webhook [Mensaje Creado](/api/reference/webhooks/message_events/message_created) ahora incluye toda la referencia `contacto`. Esto es útil para tener más información sobre el contacto sin tener que realizar una llamada adicional a la API.

## 30 de noviembre de 2023

### ✨ Novedades

- Evento de webhook [Conversación Abierta](/api/reference/webhooks/conversation_events/conversation_opened)
- Evento de webhook [Conversación Cerrada](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 de noviembre de 2023

### ✨ Novedades

- [Punto final de API de equipos](/api/reference/teams_api/introduction)

## 29 de junio de 2023

### 🛠️ Cambios

- Permitir enviar [Mensajes de plantilla con varias variables](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 de junio de 2023

### ✨ Novedades

- El objeto [`MessageSendRequest`](/api/reference/object_types/message_send_request) ahora incluye un nuevo atributo: `messageStatusPayload`. Este atributo proporciona la carga de estado para el mensaje correspondiente, obtenida directamente desde la integración.
- Este atributo es útil cuando se [obtienen actualizaciones de estado para un mensaje](/api/reference/messages_api/get_message_status).
- Con fines de solución de problemas, `messageStatusPayload` también se puede acceder a través del evento de webhook [Actualización de estado del mensaje](/api/reference/webhooks/message_events/message_status_updated).

## 5 de abril de 2023

### ✨ Novedades

- Se ha agregado el atributo `assignedUser` al objeto [Contacto](/api/reference/object_types/contact).
- Ahora se pueden asignar usuarios a un contacto durante la creación o actualización mediante el parámetro `assigned_user` con el correo electrónico de un usuario (por ejemplo, `john.doe@email.com`). Asegúrese de que el correo electrónico proporcionado corresponda a un usuario confirmado en su cuenta.
- Para desasignar un usuario de un contacto durante una actualización, incluya el parámetro `unassign_user` en el cuerpo de la solicitud y establezca su valor como `true`. Esta acción eliminará el usuario asignado del contacto.

## 3 de marzo de 2023

### ✨ Novedades

- Fragmentos de código multilingües (`curl`, `node`, `go`, `ruby`, `php`, `python`) para todas las solicitudes
- Sección de notas de la versión

### 🛠️ Cambios

- El objeto [Contacto](/api/reference/object_types/contact) ahora incluye `custom_fields`
- Se pueden pasar `custom_fields`, `tags` en el cuerpo al [crear](/api/reference/contacts_api/post_contacts) o [actualizar](/api/reference/contacts_api/post_contacts) un contacto
- Ya no se puede actualizar el `phone_number` del [Contacto](/api/reference/object_types/contact)

## 17 de enero de 2023

### ✨ Novedades

- [API de plantillas](/api/reference/template_messages_api/introduction)

### 🛠️ Cambios

- Permitir enviar [Mensajes de plantilla](/api/reference/messages_api/post_send_messages#send-template-messages)

## 11 de noviembre de 2022

### ✨ Novedades

- [API de autenticación](/api/reference/auth_api/introduction)

## 18 de octubre de 2022

### ✨ Novedades

- [API de webhooks](/api/reference/webhooks_api/introduction)