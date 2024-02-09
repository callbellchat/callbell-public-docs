---
sidebar_position: 4
---

# Notes de version

Une liste de tous les changements et améliorations qui ont été apportés à notre API. Utilisez-la pour vérifier chaque fois que de nouveaux points de terminaison sont ajoutés ou que des modifications sont apportées.

## 9 février 2024

### ✨ Nouveautés

- [API des canaux](/api/reference/channels_api/introduction) pour gérer vos canaux Callbell de manière programmatique. Utilisez ce point de terminaison pour répertorier, afficher et mettre à jour vos canaux.

### 🛠️ Changements

- Le point de terminaison [Envoyer des messages](/api/reference/messages_api/post_send_messages) prend désormais en charge le paramètre `channel_uuid` pour envoyer un message à un canal spécifique.

## 11 janvier 2024

### ✨ Nouveautés

- Les points de terminaison [Conversation Contact Ouverte](/api/reference/contacts_api/post_contact_conversation_open) et [Conversation Contact Fermée](/api/reference/contacts_api/post_contact_conversation_close) pour ouvrir et fermer une conversation associée à un contact.

## 8 janvier 2024

### ✨ Nouveautés

Ajout d'informations et d'exemples sur la façon d'utiliser Callbell avec Zapier.

## 4 janvier 2024

### ✨ Nouveautés

- [API des messages de contact](/api/reference/contacts_api/get_contact_messages) pour récupérer tous les messages d'un contact. Ce point de terminaison est utile pour récupérer tous les messages d'un contact, le résultat est paginé et trié par date.

## 19 décembre 2023

### ✨ Nouveautés

- Ajout de `team_uuid` aux requêtes d'[envoi de messages](/api/reference/messages_api/post_send_messages) et de création et de mise à jour de contacts, [post_contacts](/api/reference/contacts_api/post_contacts) et [patch_contacts](/api/reference/contacts_api/patch_contacts). Cela vous permet d'attribuer un contact à une équipe via l'API.

## 14 décembre 2023

### 🛠️ Changements

- L'événement Webhook [Message Created](/api/reference/webhooks/message_events/message_created) inclut maintenant la référence complète du `contact`. Cela est utile pour obtenir des informations supplémentaires sur le contact sans avoir à effectuer un appel API supplémentaire.

## 30 novembre 2023

### ✨ Nouveautés

- [Événement Webhook Conversation Ouverte](/api/reference/webhooks/conversation_events/conversation_opened)
- [Événement Webhook Conversation Fermée](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 novembre 2023

### ✨ Nouveautés

- [Point de terminaison de l'API des équipes](/api/reference/teams_api/introduction)

## 29 juin 2023

### 🛠️ Changements

- Autorisation d'envoyer des [Messages Modèles Multi-Variables](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 juin 2023

### ✨ Nouveautés

- L'objet [`MessageSendRequest`](/api/reference/object_types/message_send_request) inclut désormais un nouvel attribut : `messageStatusPayload`. Cet attribut fournit la charge utile d'état pour le message correspondant, provenant directement de l'intégration.
- Cet attribut est utile lors de la [récupération des mises à jour de statut pour un message](/api/reference/messages_api/get_message_status).
- À des fins de dépannage, `messageStatusPayload` peut également être accédé via l'événement Webhook [Message Status Update](/api/reference/webhooks/message_events/message_status_updated).

## 5 avril 2023

### ✨ Nouveautés

- L'attribut `assignedUser` a été ajouté à l'objet [Contact](/api/reference/object_types/contact)
- Les utilisateurs peuvent désormais être assignés à un contact lors de la création ou de la mise à jour en fournissant le paramètre assigned_user avec l'e-mail d'un utilisateur (par exemple, `john.doe@email.com`). Assurez-vous que l'e-mail fourni correspond à un utilisateur confirmé dans votre compte.
- Pour désassigner un utilisateur d'un contact lors d'une mise à jour, incluez le paramètre unassign_user dans le corps de la requête et définissez sa valeur sur true. Cette action supprimera l'utilisateur assigné du contact.

## 3 mars 2023

### ✨ Nouveautés

- Snippets de code multilingues (`curl`, `node`, `go`, `ruby`, `php`, `python`) pour toutes les requêtes
- Section des notes de version

### 🛠️ Changements

- [Contact](/api/reference/object_types/contact) inclut maintenant `custom_fields`
- `custom_fields`, `tags` peuvent être transmis dans le corps lors de la [création](/api/reference/contacts_api/post_contacts) ou de la [mise à jour](/api/reference/contacts_api/post_contacts) d'un contact
- `phone_number` de [Contact](/api/reference/object_types/contact) ne peut plus être mis à jour

## 17 janvier 2023

### ✨ Nouveautés

- [API des modèles](/api/reference/template_messages_api/introduction)

### 🛠️ Changements

- Autorisation d'envoyer des [Messages Modèles](/api/reference/messages_api/post_send_messages#send-template-messages)

## 11 novembre 2022

### ✨ Nouveautés

- [API d'authentification](/api/reference/auth_api/introduction)

## 18 octobre 2022

### ✨ Nouveautés

- [API Webhooks](/api/reference/webhooks_api/introduction)