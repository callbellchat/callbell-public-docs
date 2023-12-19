---
sidebar_position: 4
---

# Notes de version

Une liste de tous les changements et améliorations qui ont été introduits dans notre API. Utilisez-la pour vérifier lorsque de nouveaux endpoints sont ajoutés ou que des modifications sont apportées.

## 19 décembre 2023

### ✨ Nouveautés

- Ajout de `team_uuid` aux requêtes de [envoi de message](/api/reference/messages_api/post_send_messages) et de création et de mise à jour de [contact](/api/reference/contacts_api/post_contacts) . Cela vous permet d'assigner un contact à une équipe via l'API.

## 14 décembre 2023

### 🛠️ Modifications

- L'événement de webhook [Message Created](/api/reference/webhooks/message_events/message_created) inclut désormais la référence complète du `contact`. Ceci est utile pour obtenir des informations supplémentaires sur le contact sans avoir à effectuer un appel API supplémentaire.

## 30 novembre 2023

### ✨ Nouveautés

- Événement de webhook [Ouverture de conversation](/api/reference/webhooks/conversation_events/conversation_opened)
- Événement de webhook [Fermeture de conversation](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 novembre 2023

### ✨ Nouveautés

- Endpoint de l'API [Équipes](/api/reference/teams_api/introduction)

## 29 juin 2023

### 🛠️ Modifications

- Autoriser l'envoi de [messages de modèle à plusieurs variables](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 juin 2023

### ✨ Nouveautés

- L'objet [`MessageSendRequest`](/api/reference/object_types/message_send_request) inclut désormais un nouvel attribut : `messageStatusPayload`. Cet attribut fournit la charge utile d'état pour le message correspondant, provenant directement de l'intégration.
- Cet attribut est utile lorsque vous [récupérez les mises à jour d'état pour un message](/api/reference/messages_api/get_message_status).
- À des fins de dépannage, `messageStatusPayload` peut également être consulté via l'événement de webhook [Message Status Update](/api/reference/webhooks/message_events/message_status_updated).

## 5 avril 2023

### ✨ Nouveautés

- L'attribut `assignedUser` a été ajouté à l'objet [Contact](/api/reference/object_types/contact)
- Les utilisateurs peuvent désormais être assignés à un contact lors de la création ou de la mise à jour en fournissant le paramètre `assigned_user` avec l'e-mail d'un utilisateur (par exemple `john.doe@example.com`). Assurez-vous que l'e-mail fourni correspond à un utilisateur confirmé dans votre compte.
- Pour désassigner un utilisateur d'un contact lors d'une mise à jour, incluez le paramètre `unassign_user` dans le corps de la requête et définissez sa valeur sur `true`. Cette action supprimera l'utilisateur assigné du contact.

## 3 mars 2023

### ✨ Nouveautés

- Extraits de code multilingues (`curl`, `node`, `go`, `ruby`, `php`, `python`) pour toutes les requêtes
- Section des notes de version

### 🛠️ Modifications

- [Contact](/api/reference/object_types/contact) inclut désormais `custom_fields`
- `custom_fields`, `tags` peuvent être transmis dans le corps lors de la [création](/api/reference/contacts_api/post_contacts) ou de la mise à jour d'un [contact](/api/reference/contacts_api/post_contacts)
- Le `phone_number` du [contact](/api/reference/object_types/contact) ne peut plus être mis à jour

## 17 janvier 2023

### ✨ Nouveautés

- [API de modèles](/api/reference/template_messages_api/introduction)

### 🛠️ Modifications

- Autoriser l'envoi de [messages de modèle](/api/reference/messages_api/post_send_messages#send-template-messages)

## 11 novembre 2022

### ✨ Nouveautés

- [API d'authentification](/api/reference/auth_api/introduction)

## 18 octobre 2022

### ✨ Nouveautés

- [API des webhooks](/api/reference/webhooks_api/introduction)