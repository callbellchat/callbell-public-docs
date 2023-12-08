---
sidebar_position: 4
---

# Notes de publication

Une liste de tous les changements et améliorations qui ont été introduits dans notre API. Utilisez-la pour vérifier chaque fois que de nouveaux points de terminaison sont ajoutés ou des changements sont apportés.

## 30 novembre 2023

### ✨ Quoi de neuf

- [Événement de rappel de conversation ouverte](/api/reference/webhooks/conversation_events/conversation_opened)
- [Événement de rappel de conversation fermée](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 novembre 2023

### ✨ Quoi de neuf

- [Point de terminaison de l'API des équipes](/api/reference/teams_api/introduction)

## 29 juin 2023

### 🛠️ Changements

- Permettre d'envoyer des [messages de modèle à variables multiples](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 juin 2023

### ✨ Quoi de neuf

- L'objet [`MessageSendRequest`](/api/reference/object_types/message_send_request) comprend désormais un nouvel attribut : `messageStatusPayload`. Cet attribut fournit la charge utile de l'état pour le message correspondant, provenant directement de l'intégration.
- Cet attribut est utile lors de la [récupération des mises à jour d'état pour un message](/api/reference/messages_api/get_message_status).
- À des fins de dépannage, `messageStatusPayload` peut également être consulté via l'[événement de rappel de mise à jour d'état du message](/api/reference/webhooks/message_events/message_status_updated).

## 5 avril 2023

### ✨ Quoi de neuf

- L'attribut `assignedUser` a été ajouté à l'objet [Contact](/api/reference/object_types/contact)
- Les utilisateurs peuvent désormais être assignés à un contact lors de sa création ou de sa mise à jour en fournissant le paramètre assigned_user avec l'e-mail d'un utilisateur (par exemple `john.doe@email.com`). Assurez-vous que l'e-mail fourni correspond à un utilisateur confirmé dans votre compte.
- Pour désassigner un utilisateur d'un contact lors d'une mise à jour, incluez le paramètre unassign_user dans le corps de la requête et définissez sa valeur sur true. Cette action supprimera l'utilisateur assigné du contact.

## 3 mars 2023

### ✨ Quoi de neuf

- Extraits de code multilingues (`curl`, `node`, `go`, `ruby`, `php`, `python`) pour toutes les requêtes
- Section Notes de publication

### 🛠️ Changements

- [Contact](/api/reference/object_types/contact) inclut maintenant `custom_fields`
- `custom_fields`, `tags` peuvent être transmis dans le corps lors de la [création](/api/reference/contacts_api/post_contacts) ou de la [mise à jour](/api/reference/contacts_api/post_contacts) d'un contact
- Le `phone_number` de [Contact](/api/reference/object_types/contact) ne peut plus être mis à jour

## 17 janvier 2023

### ✨ Quoi de neuf

- [API des modèles](/api/reference/template_messages_api/introduction)

### 🛠️ Changements

- Permettre d'envoyer des [messages de modèle](/api/reference/messages_api/post_send_messages#send-template-messages)

## 11 novembre 2022

### ✨ Quoi de neuf

- [API d'authentification](/api/reference/auth_api/introduction)

## 18 octobre 2022

### ✨ Quoi de neuf

- [API des rappels](/api/reference/webhooks_api/introduction)