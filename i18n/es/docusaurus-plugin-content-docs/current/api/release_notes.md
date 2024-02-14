es
---
sidebar_position: 4
---

# Notas de la versión

Una lista de todos los cambios y mejoras que se han introducido en nuestra API. Úsala para verificar si se han añadido nuevos endpoints o se han realizado cambios.

## 14 de Febrero de 2024

### ✨ Novedades

- El endpoint [Crear contacto](/api/reference/contacts_api/post_contacts) ahora admite el parámetro `channel_uuid` para crear un contacto asociado a un canal específico.

## 9 de Febrero de 2024

### ✨ Novedades

- API de Canales](/api/reference/channels_api/introduction) para administrar tus Canales de Callbell programáticamente. Usa este endpoint para listar, mostrar y actualizar tus canales.

### 🛠️ Cambios

- El endpoint [Enviar mensajes](/api/reference/messages_api/post_send_messages) ahora admite el parámetro `channel_uuid` para enviar un mensaje a un canal específico.

## 11 de Enero de 2024

### ✨ Novedades

- Los endpoints [Contacto: Abrir conversación](/api/reference/contacts_api/post_contact_conversation_open) y [Contacto: Cerrar conversación](/api/reference/contacts_api/post_contact_conversation_close) para abrir y cerrar una conversación asociada a un contacto.

## 8 de Enero de 2024

### ✨ Novedades

Se añadieron información y ejemplos sobre cómo usar Callbell con Zapier.

## 4 de Enero de 2024

### ✨ Novedades

- [API de mensajes de contacto](/api/reference/contacts_api/get_contact_messages) para obtener todos los mensajes de un contacto. Este endpoint es útil para obtener todos los mensajes de un contacto, el resultado está paginado y ordenado por fecha.

## 19 de Diciembre de 2023

### ✨ Novedades

- Se añadió el atributo `team_uuid` a las solicitudes de [envío de mensajes](/api/reference/messages_api/post_send_messages) y las solicitudes de [creación](/api/reference/contacts_api/post_contacts) y [actualización](/api/reference/contacts_api/patch_contacts) de contactos. Esto te permite asignar un contacto a un equipo a través de la API.

## 14 de Diciembre de 2023

### 🛠️ Cambios

- El evento de webhook [Mensaje creado](/api/reference/webhooks/message_events/message_created) ahora incluye la referencia completa al `contacto`. Esto es útil para tener más información sobre el contacto sin tener que realizar una llamada adicional a la API.

## 30 de Noviembre de 2023

### ✨ Novedades

- Evento de webhook [Conversación abierta](/api/reference/webhooks/conversation_events/conversation_opened)
- Evento de webhook [Conversación cerrada](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 de Noviembre de 2023

### ✨ Novedades

- [Endpoint de equipos](/api/reference/teams_api/introduction)

## 29 de Junio de 2023

### 🛠️ Cambios

- Permitir enviar [Mensajes de plantillas con múltiples variables](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 de Junio de 2023

### ✨ Novedades

- El objeto [`MessageSendRequest`](/api/reference/object_types/message_send_request) ahora incluye un nuevo atributo: `messageStatusPayload`. Este atributo proporciona la carga del estado para el mensaje correspondiente, obtenida directamente de la integración.
- Este atributo es útil cuando se [obtienen actualizaciones de estado para un mensaje](/api/reference/messages_api/get_message_status).
- Para fines de solución de problemas, `messageStatusPayload` también se puede acceder mediante el evento de webhook [Actualización del estado del mensaje](/api/reference/webhooks/message_events/message_status_updated).

## 5 de Abril de 2023

### ✨ Novedades

- Se ha añadido el atributo `assignedUser` al objeto [Contacto](/api/reference/object_types/contact)
- Ahora se puede asignar usuarios a un contacto durante la creación o actualización proporcionando el parámetro `assigned_user` con el email del usuario (por ejemplo, `john.doe@email.com`). Asegúrate de que el email proporcionado corresponda a un usuario confirmado en tu cuenta.
- Para desasignar un usuario de un contacto durante una actualización, incluye el parámetro `unassign_user` en el cuerpo de la solicitud y establece su valor en `true`. Esta acción eliminará el usuario asignado del contacto.

## 3 de Marzo de 2023

### ✨ Novedades

- Snippets de código multilenguaje (`curl`, `node`, `go`, `ruby`, `php`, `python`) para todas las solicitudes
- Sección de Notas de la Versión

### 🛠️ Cambios

- [Contacto](/api/reference/object_types/contact) ahora incluye `custom_fields`
- `custom_fields`, `tags` se pueden pasar en el cuerpo al [crear](/api/reference/contacts_api/post_contacts) o [actualizar](/api/reference/contacts_api/post_contacts) un contacto
- Ya no se puede actualizar el `phone_number` de [Contacto](/api/reference/object_types/contact)

## 17 de Enero de 2023

### ✨ Novedades

- [API de Plantillas](/api/reference/template_messages_api/introduction)

### 🛠️ Cambios

- Permitir enviar [Mensajes de Plantillas](/api/reference/messages_api/post_send_messages#send-template-messages)

## 11 de Noviembre de 2022

### ✨ Novedades

- [API de Autenticación](/api/reference/auth_api/introduction)

## 18 de Octubre de 2022

### ✨ Novedades

- [API de Webhooks](/api/reference/webhooks_api/introduction)