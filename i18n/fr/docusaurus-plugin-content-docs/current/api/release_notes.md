---
sidebar_position: 4
---

# Notes de version

Une liste de toutes les modifications et améliorations qui ont été introduites dans notre API. Utilisez-la pour vérifier chaque fois que de nouveaux points de terminaison sont ajoutés ou que des modifications sont apportées.

## 14 décembre 2023

### 🛠️ Modifications

- L'événement [Message Created Webhook](/api/reference/webhooks/message_events/message_created) inclut maintenant la référence `contact` complète. Cela permet d'obtenir des informations supplémentaires sur le contact sans avoir à effectuer un appel API supplémentaire.

## 30 novembre 2023

### ✨ Nouveautés

- Événement [Conversation Opened Webhook](/api/reference/webhooks/conversation_events/conversation_opened)
- Événement [Conversation Closed Webhook](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 novembre 2023

### ✨ Nouveautés

- [Endpoint API des équipes](/api/reference/teams_api/introduction)

## 29 juin 2023

### 🛠️ Modifications

- Autoriser l'envoi de [messages de modèle avec plusieurs variables](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 juin 2023

### ✨ Nouveautés

- L'objet [`MessageSendRequest`](/api/reference/object_types/message_send_request) inclut maintenant un nouvel attribut : `messageStatusPayload`. Cet attribut fournit les informations d'état pour le message correspondant, provenant directement de l'intégration.
- Cet attribut est utile lors de la récupération des mises à jour d'état pour un message.
- À des fins de dépannage, `messageStatusPayload` peut également être accédé via l'événement Webhook [Message Status Update](/api/reference/webhooks/message_events/message_status_updated).

## 5 avril 2023

### ✨ Nouveautés

- L'attribut `assignedUser` a été ajouté à l'objet [Contact](/api/reference/object_types/contact)
- Les utilisateurs peuvent maintenant être assignés à un contact lors de sa création ou mise à jour en fournissant le paramètre `assigned_user` avec l'e-mail d'un utilisateur (par exemple, `john.doe@email.com`). Assurez-vous que l'e-mail fourni correspond à un utilisateur confirmé de votre compte.
- Pour désassigner un utilisateur d'un contact lors d'une mise à jour, incluez le paramètre `unassign_user` dans le corps de la requête et définissez sa valeur sur true. Cette action supprimera l'utilisateur assigné du contact.

## 3 mars 2023

### ✨ Nouveautés

- Extraits de code multilingues (`curl`, `node`, `go`, `ruby`, `php`, `python`) pour toutes les requêtes
- Section Notes de version

### 🛠️ Modifications

- [Contact](/api/reference/object_types/contact) inclut maintenant `custom_fields`
- Les `custom_fields` et `tags` peuvent être passés dans le corps lors de la [création](/api/reference/contacts_api/post_contacts) ou [mise à jour](/api/reference/contacts_api/post_contacts) d'un contact
- Le `phone_number` du [Contact](/api/reference/object_types/contact) ne peut plus être mis à jour

## 17 janvier 2023

### ✨ Nouveautés

- [API des modèles](/api/reference/template_messages_api/introduction)

### 🛠️ Modifications

- Autoriser l'envoi de [messages de modèle](/api/reference/messages_api/post_send_messages#send-template-messages)

## 11 novembre 2022

### ✨ Nouveautés

- [API d'authentification](/api/reference/auth_api/introduction)

## 18 octobre 2022

### ✨ Nouveautés

- [API des webhooks](/api/reference/webhooks_api/introduction)