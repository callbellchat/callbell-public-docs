---
sidebar_position: 4
---

# Notes de version

Une liste de toutes les modifications et améliorations qui ont été introduites dans notre API. Utilisez-la pour vérifier chaque fois que de nouveaux endpoints sont ajoutés ou que des modifications sont apportées.

## 8 janvier 2024

### ✨ Nouveautés

Ajout d'informations et d'exemples sur l'utilisation de Callbell avec Zapier.

## 4 janvier 2024

### ✨ Nouveautés

- [API des messages de contact](/api/reference/contacts_api/get_contact_messages) pour récupérer tous les messages d'un contact. Cet endpoint est utile pour récupérer tous les messages d'un contact. Les résultats sont paginés et triés par date.

## 19 décembre 2023

### ✨ Nouveautés

- Ajout de `team_uuid` dans les requêtes d'envoi de messages(/api/reference/messages_api/post_send_messages) et de création(/api/reference/contacts_api/post_contacts) et de mise à jour(/api/reference/contacts_api/patch_contacts) de contacts. Cela permet d'attribuer un contact à une équipe via l'API.

## 14 décembre 2023

### 🛠️ Modifications

- L'événement [Webhook de création de message](/api/reference/webhooks/message_events/message_created) inclut désormais la référence complète du contact. Ceci est utile pour obtenir des informations supplémentaires sur le contact sans effectuer d'appel API supplémentaire.

## 30 novembre 2023

### ✨ Nouveautés

- Événement de [Webhook d'ouverture de conversation](/api/reference/webhooks/conversation_events/conversation_opened)
- Événement de [Webhook de fermeture de conversation](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 novembre 2023

### ✨ Nouveautés

- [Endpoint API des équipes](/api/reference/teams_api/introduction)

## 29 juin 2023

### 🛠️ Modifications

- Possibilité d'envoyer [Des messages de modèle multivariables](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 juin 2023

### ✨ Nouveautés

- L'objet [`MessageSendRequest`](/api/reference/object_types/message_send_request) comprend maintenant un nouvel attribut : `messageStatusPayload`. Cet attribut fournit la charge utile de l'état du message correspondant, extraite directement de l'intégration.
- Cet attribut est utile lors de la [récupération des mises à jour d'état d'un message](/api/reference/messages_api/get_message_status).
- À des fins de dépannage, `messageStatusPayload` peut également être consulté via l'événement [Webhook de mise à jour d'état des messages](/api/reference/webhooks/message_events/message_status_updated).

## 5 avril 2023

### ✨ Nouveautés

- L'attribut `assignedUser` a été ajouté à l'objet [Contact](/api/reference/object_types/contact).
- Les utilisateurs peuvent désormais être assignés à un contact lors de sa création ou de sa mise à jour en fournissant le paramètre `assigned_user` avec l'e-mail de l'utilisateur (par exemple, `john.doe@email.com`). Assurez-vous que l'e-mail fourni correspond à un utilisateur confirmé de votre compte.
- Pour désassigner un utilisateur d'un contact lors d'une mise à jour, incluez le paramètre `unassign_user` dans le corps de la requête et définissez sa valeur sur true. Cette action supprimera l'utilisateur assigné du contact.

## 3 mars 2023

### ✨ Nouveautés

- Extraits de code multi-langages (`curl`, `node`, `go`, `ruby`, `php`, `python`) pour toutes les requêtes
- Section Notes de version

### 🛠️ Modifications

- [Contact](/api/reference/object_types/contact) comprend désormais les `custom_fields`.
- Les `custom_fields`, `tags` peuvent être transmis dans le corps de la requête lors de la [création](/api/reference/contacts_api/post_contacts) ou de la [création](/api/reference/contacts_api/post_contacts) d'un contact.
- Le `phone_number` de [Contact](/api/reference/object_types/contact) ne peut plus être mis à jour.

## 17 janvier 2023

### ✨ Nouveautés

- [API des modèles](/api/reference/template_messages_api/introduction)

### 🛠️ Modifications

- Possibilité d'envoyer des [messages de modèle](/api/reference/messages_api/post_send_messages#send-template-messages)

## 11 novembre 2022

### ✨ Nouveautés

- [API authentification](/api/reference/auth_api/introduction)

## 18 octobre 2022

### ✨ Nouveautés

- [API des webhooks](/api/reference/webhooks_api/introduction)