es
---
sidebar_position: 4
---

# Notas de la versión

Una lista de todos los cambios y mejoras introducidos en nuestra API. Úsela para verificar cada vez que se agregan nuevos puntos finales o se realizan cambios.

## 20 de febrero de 2024

### ✨ Novedades

- Se agregó un nuevo punto final para listar todos los [miembros del equipo](/api/reference/teams_api/get_team_members) pertenecientes a un equipo.

### 🛠️ Cambios

- El punto final [Enviar mensaje](/api/reference/messages_api/post_send_messages) ahora permite un parámetro opcional `fields` para especificar qué campos incluir en la respuesta. Esto es útil para reducir el tamaño de la respuesta y acelerar las llamadas a la API. Actualmente solo se admite `contacto`.

## 14 de febrero de 2024

### ✨ Novedades

- El punto final [Crear contacto](/api/reference/contacts_api/post_contacts) ahora admite el parámetro `channel_uuid` para crear un contacto asociado con un canal específico.

## 9 de febrero de 2024

### ✨ Novedades

- API de canales [/api/reference/channels_api/introduction](/api/reference/channels_api/introduction) para gestionar sus canales de Callbell de forma programática. Utilice este punto final para listar, mostrar y actualizar sus canales.

### 🛠️ Cambios

- El punto final [Enviar mensajes](/api/reference/messages_api/post_send_messages) ahora admite el parámetro `channel_uuid` para enviar un mensaje a un canal específico.

## 11 de enero de 2024

### ✨ Novedades

- Puntos finales [Contacto abrir conversación](/api/reference/contacts_api/post_contact_conversation_open) y [Contacto cerrar conversación](/api/reference/contacts_api/post_contact_conversation_close) para abrir y cerrar una conversación asociada a un contacto.

## 8 de enero de 2024

### ✨ Novedades

Se agregó información y ejemplos sobre cómo utilizar Callbell con Zapier.

## 4 de enero de 2024

### ✨ Novedades

- API de mensajes de contacto [/api/reference/contacts_api/get_contact_messages](/api/reference/contacts_api/get_contact_messages) para obtener todos los mensajes de un contacto. Este punto final es útil para obtener todos los mensajes de un contacto, el resultado está paginado y ordenado por fecha.

## 19 de diciembre de 2023

### ✨ Novedades

- Se añadió `team_uuid` a las solicitudes de [envío de mensajes](/api/reference/messages_api/post_send_messages) y creación de contactos [/api/reference/contacts_api/post_contacts](/api/reference/contacts_api/post_contacts) y solicitudes de [actualización](/api/reference/contacts_api/patch_contacts). Esto le permite asignar un contacto a un equipo a través de la API.

## 14 de diciembre de 2023

### 🛠️ Cambios

- El evento Webhook [Mensaje creado](/api/reference/webhooks/message_events/message_created) ahora incluye toda la referencia del `contacto`. Esto es útil para tener más información sobre el contacto sin tener que realizar una llamada adicional a la API.

## 30 de noviembre de 2023

### ✨ Novedades

- Evento Webhook [Conversación abierta](/api/reference/webhooks/conversation_events/conversation_opened)
- Evento Webhook [Conversación cerrada](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 de noviembre de 2023

### ✨ Novedades

- Punto final [API de equipos](/api/reference/teams_api/introduction)

## 29 de junio de 2023

### 🛠️ Cambios

- Se permite enviar [Mensajes de Plantilla Multi-Variables](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 de junio de 2023

### ✨ Novedades

- El objeto [`MessageSendRequest`](/api/reference/object_types/message_send_request) ahora incluye un nuevo atributo: `messageStatusPayload`. Este atributo proporciona el estado del mensaje correspondiente, obtenido directamente de la integración.
- Este atributo es útil cuando se [obtienen actualizaciones de estado para un mensaje](/api/reference/messages_api/get_message_status).
- Con fines de solución de problemas, `messageStatusPayload` también se puede acceder a través del evento Webhook [Actualización de estado del mensaje](/api/reference/webhooks/message_events/message_status_updated).

## 5 de abril de 2023

### ✨ Novedades

- Se agregó el atributo `assignedUser` al objeto [Contacto](/api/reference/object_types/contact).
- Ahora se pueden asignar usuarios a un contacto durante la creación o actualización al proporcionar el parámetro `assigned_user` con el correo electrónico de un usuario (por ejemplo, `john.doe@email.com`). Asegúrese de que el correo electrónico proporcionado corresponda a un usuario confirmado en su cuenta.
- Para desasignar un usuario de un contacto durante una actualización, incluya el parámetro `unassign_user` en el cuerpo de la solicitud y establezca su valor en `true`. Esta acción eliminará el usuario asignado del contacto.

## 3 de marzo de 2023

### ✨ Novedades

- Fragmentos de código multilingües (`curl`, `node`, `go`, `ruby`, `php`, `python`) para todas las solicitudes
- Sección de notas de la versión

### 🛠️ Cambios

- El objeto [Contacto](/api/reference/object_types/contact) ahora incluye `custom_fields`
- `custom_fields`, `tags` se pueden pasar en el cuerpo de la solicitud al [crear](/api/reference/contacts_api/post_contacts) o [actualizar](/api/reference/contacts_api/post_contacts) un contacto
- Ya no se puede actualizar el `phone_number` del [Contacto](/api/reference/object_types/contact)

## 17 de enero de 2023

### ✨ Novedades

- API de plantillas [/api/reference/template_messages_api/introduction](/api/reference/template_messages_api/introduction)

### 🛠️ Cambios

- Se permite enviar [Mensajes de plantilla](/api/reference/messages_api/post_send_messages#send-template-messages)

## 11 de noviembre de 2022

### ✨ Novedades

- [API de autenticación](/api/reference/auth_api/introduction)

## 18 de octubre de 2022

### ✨ Novedades

- [API de webhooks](/api/reference/webhooks_api/introduction)