---
sidebar_position: 4
---

# Notes de version

Une liste de tous les changements et améliorations qui ont été apportés à notre API. Utilisez-la pour vérifier chaque fois que de nouveaux endpoints sont ajoutés ou que des modifications sont apportées.

## 11 janvier 2024

### ✨ Nouveautés

- Les endpoints [Conversation Contact Ouverte](/api/reference/contacts_api/post_contact_conversation_open) et [Conversation Contact Fermée](/api/reference/contacts_api/post_contact_conversation_close) pour ouvrir et fermer une conversation associée à un contact.

## 8 janvier 2024

### ✨ Nouveautés

Ajout d'informations et d'exemples sur l'utilisation de Callbell avec Zapier.

## 4 janvier 2024

### ✨ Nouveautés

- L'endpoint [API Messages du Contact](/api/reference/contacts_api/get_contact_messages) pour récupérer tous les messages d'un contact. Cet endpoint est utile pour récupérer tous les messages d'un contact, les résultats sont paginés et triés par date.

## 19 décembre 2023

### ✨ Nouveautés

- Ajout de `team_uuid` aux requêtes de [message d'envoi](/api/reference/messages_api/post_send_messages) et de création ([contacts](/api/reference/contacts_api/post_contacts)) et de mise à jour ([contacts](/api/reference/contacts_api/patch_contacts)) de contact. Cela vous permet d'assigner un contact à une équipe via l'API.

## 14 décembre 2023

### 🛠️ Changements

- L'événement webhook [Message Créé](/api/reference/webhooks/message_events/message_created) inclut maintenant la référence complète du `contact`. Cela est utile pour obtenir des informations supplémentaires sur le contact sans avoir à effectuer un appel API supplémentaire.

## 30 novembre 2023

### ✨ Nouveautés

- Les événements webhook [Conversation Ouverte](/api/reference/webhooks/conversation_events/conversation_opened)
- Les événements webhook [Conversation Fermée](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 novembre 2023

### ✨ Nouveautés

- Endpoint [API Équipes](/api/reference/teams_api/introduction)

## 29 juin 2023

### 🛠️ Changements

- Autoriser l'envoi de [messages de modèle multi-variables](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 juin 2023

### ✨ Nouveautés

- L'objet [`MessageSendRequest`](/api/reference/object_types/message_send_request) comprend maintenant un nouvel attribut : `messageStatusPayload`. Cet attribut fournit les informations sur l'état du message correspondant, provenant directement de l'intégration.
- Cet attribut est utile lorsque l'on [récupère les mises à jour d'état pour un message](/api/reference/messages_api/get_message_status).
- À des fins de dépannage, `messageStatusPayload` peut également être consulté via l'événement webhook [Message Statut Mis à Jour](/api/reference/webhooks/message_events/message_status_updated).

## 5 avril 2023

### ✨ Nouveautés

- L'attribut `assignedUser` a été ajouté à l'objet [Contact](/api/reference/object_types/contact).
- Les utilisateurs peuvent désormais être assignés à un contact lors de sa création ou de sa mise à jour en fournissant le paramètre `assigned_user` avec l'e-mail d'un utilisateur (ex: `john.doe@email.com`). Assurez-vous que l'e-mail fourni correspond à un utilisateur confirmé dans votre compte.
- Pour désassigner un utilisateur d'un contact lors d'une mise à jour, ajoutez le paramètre `unassign_user` dans le corps de la requête et définissez sa valeur sur `true`. Cette action supprimera l'utilisateur assigné du contact.

## 3 mars 2023

### ✨ Nouveautés

- Des extraits de code multilingues (`curl`, `node`,`go`, `ruby`, `php`, `python`) pour toutes les requêtes.
- Section Notes de version

### 🛠️ Changements

- [Contact](/api/reference/object_types/contact) comprend maintenant `custom_fields`
- `custom_fields`, `tags` peuvent être transmis dans le body lors de la [création](/api/reference/contacts_api/post_contacts) ou de la [mise à jour](/api/reference/contacts_api/post_contacts) d'un contact.
- `phone_number` de [Contact](/api/reference/object_types/contact) ne peut plus être mis à jour.

## 17 janvier 2023

### ✨ Nouveautés

- [API Modèles](/api/reference/template_messages_api/introduction)

### 🛠️ Changements

- Autoriser l'envoi de [Modèle](/api/reference/messages_api/post_send_messages#send-template-messages) Médias

## 11 novembre 2022

### ✨ Nouveautés

- [Auth API](/api/reference/auth_api/introduction)

## 18 octobre 2022

### ✨ Nouveautés

- [Webhooks API](/api/reference/webhooks_api/introduction)