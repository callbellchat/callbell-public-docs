---
sidebar_position: 4
---

# Notes de version

Une liste de tous les changements et améliorations qui ont été introduits dans notre API. Utilisez-la pour vérifier chaque fois que de nouveaux points de terminaison sont ajoutés ou que des modifications sont apportées.

## 14 Février 2024

### ✨ Nouveautés

- Le point de terminaison [Créer un contact](/api/reference/contacts_api/post_contacts) prend maintenant en charge le paramètre `channel_uuid` pour créer un contact associé à un canal spécifique.

## 9 Février 2024

### ✨ Nouveautés

- [Channels API](/api/reference/channels_api/introduction) pour gérer vos canaux Callbell de manière programmable. Utilisez ce point de terminaison pour répertorier, afficher et mettre à jour vos canaux.

### 🛠️ Changements

- Le point de terminaison [Envoyer des messages](/api/reference/messages_api/post_send_messages) prend maintenant en charge le paramètre `channel_uuid` pour envoyer un message à un canal spécifique.

## 11 Janvier 2024

### ✨ Nouveautés

- Les points de terminaison [Conversation ouverte du contact](/api/reference/contacts_api/post_contact_conversation_open) et [Conversation fermée du contact](/api/reference/contacts_api/post_contact_conversation_close) pour ouvrir et fermer une conversation associée à un contact.

## 8 Janvier 2024

### ✨ Nouveautés

Ajout d'informations et d'exemples sur la façon d'utiliser Callbell avec Zapier.

## 4 Janvier 2024

### ✨ Nouveautés

- [Contact messages API](/api/reference/contacts_api/get_contact_messages) pour récupérer tous les messages d'un contact. Ce point de terminaison est utile pour récupérer tous les messages d'un contact, le résultat est paginé et trié par date.

## 19 Décembre 2023

### ✨ Nouveautés

- Ajout de `team_uuid` aux requêtes d'[envoi de message](/api/reference/messages_api/post_send_messages) et de création et de mise à jour des contacts dans les requêtes [contacts](/api/reference/contacts_api/post_contacts) et [contacts](/api/reference/contacts_api/patch_contacts). Cela vous permet d'assigner un contact à une équipe via l'API.

## 14 Décembre 2023

### 🛠️ Changements

- L'événement [Webhook message créé](/api/reference/webhooks/message_events/message_created) inclut maintenant la référence complète au `contact`. Cela est utile pour obtenir plus d'informations sur le contact sans avoir à effectuer un appel API supplémentaire.

## 30 Novembre 2023

### ✨ Nouveautés

- [Webhook Conversation ouverte](/api/reference/webhooks/conversation_events/conversation_opened)
- [Webhook Conversation fermée](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 Novembre 2023

### ✨ Nouveautés

- [Teams API Endpoint](/api/reference/teams_api/introduction)

## 29 Juin 2023

### 🛠️ Changements

- Possibilité d'envoyer des [messages de modèle avec plusieurs variables](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 Juin 2023

### ✨ Nouveautés

- L'objet [`MessageSendRequest`](/api/reference/object_types/message_send_request) inclut maintenant un nouvel attribut : `messageStatusPayload`. Cet attribut fournit la charge utile de l'état pour le message correspondant, provenant directement de l'intégration.
- Cet attribut est utile lors de la [récupération des mises à jour de l'état d'un message](/api/reference/messages_api/get_message_status).
- À des fins de dépannage, `messageStatusPayload` peut également être consulté via l'événement de [Webhook mise à jour de l'état du message](/api/reference/webhooks/message_events/message_status_updated).

## 5 Avril 2023

### ✨ Nouveautés

- L'attribut `assignedUser` a été ajouté à l'objet [Contact](/api/reference/object_types/contact).
- Les utilisateurs peuvent maintenant être attribués à un contact lors de la création ou de la mise à jour en fournissant le paramètre `assigned_user` avec l'e-mail d'un utilisateur (par exemple `john.doe@email.com`). Assurez-vous que l'e-mail fourni correspond à un utilisateur confirmé dans votre compte.
- Pour désaffecter un utilisateur d'un contact lors d'une mise à jour, incluez le paramètre `unassign_user` dans le corps de la requête et définissez sa valeur sur `true`. Cette action supprimera l'utilisateur affecté du contact.

## 3 Mars 2023

### ✨ Nouveautés

- Snippets de code multi-langages (`curl`, `node`, `go`, `ruby`, `php`, `python`) pour toutes les requêtes
- Section Notes de version

### 🛠️ Changements

- [Contact](/api/reference/object_types/contact) contient maintenant `custom_fields`
- `custom_fields`, `tags` peuvent être transmis dans le corps lors de la [création](/api/reference/contacts_api/post_contacts) ou de la [création](/api/reference/contacts_api/post_contacts) d'un contact
- `phone_number` de [Contact](/api/reference/object_types/contact) ne peut plus être mis à jour

## 17 Janvier 2023

### ✨ Nouveautés

- [Templates API](/api/reference/template_messages_api/introduction)

### 🛠️ Changements

- Possibilité d'envoyer des [messages de modèle](/api/reference/messages_api/post_send_messages#send-template-messages)

## 11 Novembre 2022

### ✨ Nouveautés

- [Auth API](/api/reference/auth_api/introduction)

## 18 Octobre 2022

### ✨ Nouveautés

- [Webhooks API](/api/reference/webhooks_api/introduction)