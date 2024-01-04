---
sidebar_position: 4
---

# Notes de version

Une liste de toutes les modifications et améliorations qui ont été apportées à notre API. Utilisez-la pour vérifier quand de nouveaux points de terminaison sont ajoutés ou que des modifications sont apportées.

## 4 janvier 2024

### ✨ Nouveautés

- [API de messages de contact](/api/reference/contacts_api/get_contact_messages) pour récupérer tous les messages d'un contact. Ce point de terminaison est utile pour récupérer tous les messages d'un contact, le résultat est paginé et trié par date.

## 19 décembre 2023

### ✨ Nouveautés

- Ajout de `team_uuid` aux demandes d'envoi de messages](/api/reference/messages_api/post_send_messages) et aux demandes de création](/api/reference/contacts_api/post_contacts) et de mise à jour](/api/reference/contacts_api/patch_contacts) d'un contact. Cela vous permet d'assigner un contact à une équipe via l'API.

## 14 décembre 2023

### 🛠️ Modifications

- [Événement de webhook de création de message](/api/reference/webhooks/message_events/message_created) inclut maintenant la référence complète du `contact`. Ceci est utile pour obtenir des informations supplémentaires sur le contact sans avoir à effectuer un appel d'API supplémentaire.

## 30 novembre 2023

### ✨ Nouveautés

- [Événement de webhook d'ouverture de conversation](/api/reference/webhooks/conversation_events/conversation_opened)
- [Événement de webhook de fermeture de conversation](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 novembre 2023

### ✨ Nouveautés

- [Point de terminaison de l'API des équipes](/api/reference/teams_api/introduction)

## 29 juin 2023

### 🛠️ Modifications

- Autoriser l'envoi de [messages de modèles multi-variables](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 juin 2023

### ✨ Nouveautés

- L'objet [`MessageSendRequest`](/api/reference/object_types/message_send_request) inclut maintenant un nouvel attribut : `messageStatusPayload`. Cet attribut fournit la charge utile d'état du message correspondant, provenant directement de l'intégration.
- Cet attribut est utile lors de la [récupération des mises à jour d'état pour un message](/api/reference/messages_api/get_message_status).
- À des fins de dépannage, `messageStatusPayload` peut également être récupéré via l'[événement de webhook de mise à jour d'état du message](/api/reference/webhooks/message_events/message_status_updated).

## 5 avril 2023

### ✨ Nouveautés

- L'attribut `assignedUser` a été ajouté à l'objet [Contact](/api/reference/object_types/contact).
- Les utilisateurs peuvent maintenant être assignés à un contact lors de la création ou de la mise à jour en fournissant le paramètre `assigned_user` avec l'adresse e-mail d'un utilisateur (par exemple `john.doe@example.com`). Assurez-vous que l'e-mail fourni correspond à un utilisateur confirmé dans votre compte.
- Pour désassigner un utilisateur d'un contact lors d'une mise à jour, incluez le paramètre `unassign_user` dans le corps de la requête et définissez sa valeur sur `true`. Cette action supprimera l'utilisateur assigné du contact.

## 3 mars 2023

### ✨ Nouveautés

- Extraits de code multilingues (`curl`, `node`, `go`, `ruby`, `php`, `python`) pour toutes les demandes
- Section des notes de version

### 🛠️ Modifications

- [Contact](/api/reference/object_types/contact) inclut maintenant `custom_fields`
- Les `custom_fields` et `tags` peuvent être transmis dans le corps lors de la [création](/api/reference/contacts_api/post_contacts) ou de la [mise à jour](/api/reference/contacts_api/post_contacts) d'un contact
- Le champ `phone_number` de [Contact](/api/reference/object_types/contact) ne peut plus être mis à jour

## 17 janvier 2023

### ✨ Nouveautés

- [API de modèles](/api/reference/template_messages_api/introduction)

### 🛠️ Modifications

- Autoriser l'envoi de [messages de modèles](/api/reference/messages_api/post_send_messages#send-template-messages)

## 11 novembre 2022

### ✨ Nouveautés

- [API d'authentification](/api/reference/auth_api/introduction)

## 18 octobre 2022

### ✨ Nouveautés

- [API de webhooks](/api/reference/webhooks_api/introduction)