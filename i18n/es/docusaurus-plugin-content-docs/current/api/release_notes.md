---
sidebar_position: 4
---

# Notas de la versión

Una lista de todos los cambios y mejoras que se han introducido en nuestra API. Utilícela para comprobar cada vez que se añadan nuevos endpoints o se realicen cambios.

## 30 de noviembre de 2023

### ✨ Novedades

- [Evento de webhook de conversación abierta](/api/reference/webhooks/conversation_events/conversation_opened)
- Evento Webhook de Conversación Cerrada](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 de noviembre de 2023

### ✨ Novedades

- Punto final de la API de equipos](/api/reference/teams_api/introduction)

## 29 de junio de 2023

### 🛠️ Cambios

- Permitir enviar [Multi-Variables Template Messages](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 de junio de 2023

### ✨ Novedades

- El objeto [`MessageSendRequest`](/api/reference/object_types/message_send_request) incluye ahora un nuevo atributo: `messageStatusPayload`. Este atributo proporciona la carga útil de estado del mensaje correspondiente, obtenida directamente de la integración.
- Este atributo es útil cuando [se obtienen actualizaciones de estado para un mensaje](/api/reference/messages_api/get_message_status).
- Para solucionar problemas, también se puede acceder a `messageStatusPayload` a través de [Message Status Update Webhook Event](/api/reference/webhooks/message_events/message_status_updated).

## 5 de abril de 2023

### ✨ Novedades

- Se ha añadido el atributo `assignedUser` al objeto [Contact](/api/reference/object_types/contact)
- Ahora se pueden asignar usuarios a un contacto durante su creación o actualización proporcionando el parámetro assigned_user con el correo electrónico de un usuario (por ejemplo, `john.doe@email.com`). Asegúrese de que el correo electrónico proporcionado corresponde a un usuario confirmado en su cuenta.
- Para desasignar un usuario de un contacto durante una actualización, incluya el parámetro unassign_user en el cuerpo de la solicitud y establezca su valor en true. Esta acción eliminará al usuario asignado del contacto.

## 3 de marzo de 2023

### Novedades

- Fragmentos de código en varios idiomas (`curl`, `node`, `go`, `ruby`, `php`, `python`) para todas las peticiones
- Sección de notas de la versión

### 🛠️ Cambios

- Contacto](/api/reference/object_types/contact) ahora incluye `custom_fields`.
- `custom_fields`, `tags` se pueden pasar en el cuerpo cuando se [crea](/api/reference/contacts_api/post_contacts) o [crea](/api/reference/contacts_api/post_contacts) un contacto
- `phone_number` de [Contact](/api/reference/object_types/contact) ya no se puede actualizar

## 17 de enero de 2023

### ✨ Novedades

- API de plantillas](/api/reference/template_messages_api/introduction)

### 🛠️ Cambios

- Permitir enviar [Mensajes de plantilla](/api/reference/messages_api/post_send_messages#send-template-messages)

## 11 de noviembre de 2022

### ✨ Novedades

- [API de autenticación](/api/reference/auth_api/introduction)

## 18 de octubre de 2022

### ✨ Novedades

- [API de Webhooks](/api/reference/webhooks_api/introduction)
