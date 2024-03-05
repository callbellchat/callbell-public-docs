---
sidebar_position: 4
---

# Notes de version

Une liste de tous les changements et améliorations qui ont été introduits dans notre API. Utilisez-la pour vérifier chaque fois que de nouveaux points de terminaison sont ajoutés ou que des modifications sont apportées.

## 5 mars 2024

### 🛠️ Modifications

- [Obtenir un contact par téléphone](/api/reference/contacts_api/get_contact_by_phone) le point de terminaison prend maintenant en charge le paramètre `channel_uuid` pour rechercher le contact par numéro de téléphone et canal.

## 22 février 2024

### ✨ Nouveautés

- [Webhook d'événement de mise à jour de l'adhésion à l'équipe](/api/reference/webhooks/team_events/team_membership_updated) pour notifier lorsqu'un membre de l'équipe est ajouté ou supprimé d'une équipe.
- [Webhook d'événement de mise à jour du statut de l'agent](/api/reference/webhooks/agent_events/agent_status_updated) pour notifier lorsqu'un agent modifie son statut.

## 20 février 2024

### ✨ Nouveautés

- Ajout d'un nouveau point de terminaison pour lister tous les [membres de l'équipe](/api/reference/teams_api/get_team_members) appartenant à une équipe.

### 🛠️ Modifications

- [Envoyer un message](/api/reference/messages_api/post_send_messages) le point de terminaison prend maintenant en charge le paramètre facultatif `fields` pour spécifier les champs à inclure dans la réponse. Cela permet de réduire la taille de la réponse et d'accélérer les appels à l'API. Actuellement, seul `contact` est pris en charge.

## 14 février 2024

### ✨ Nouveautés

- [Créer un contact](/api/reference/contacts_api/post_contacts) le point de terminaison prend maintenant en charge le paramètre `channel_uuid` pour créer un contact associé à un canal spécifique.

## 9 février 2024

### ✨ Nouveautés

- [API des canaux](/api/reference/channels_api/introduction) pour gérer vos canaux Callbell de manière programmable. Utilisez ce point de terminaison pour répertorier, afficher et mettre à jour vos canaux.

### 🛠️ Modifications

- [Envoyer des messages](/api/reference/messages_api/post_send_messages) le point de terminaison prend maintenant en charge le paramètre `channel_uuid` pour envoyer un message à un canal spécifique.

## 11 janvier 2024

### ✨ Nouveautés

- [Contact Conversation Open](/api/reference/contacts_api/post_contact_conversation_open) et [Contact Conversation Close](/api/reference/contacts_api/post_contact_conversation_close) les points de terminaison pour ouvrir et fermer une conversation associée à un contact.

## 8 janvier 2024

### ✨ Nouveautés

Ajout d'informations et d'exemples sur l'utilisation de Callbell avec Zapier.

## 4 janvier 2024

### ✨ Nouveautés

- [API des messages de contact](/api/reference/contacts_api/get_contact_messages) pour récupérer tous les messages d'un contact. Ce point de terminaison est utile pour récupérer tous les messages d'un contact, le résultat est paginé et trié par date.

## 19 décembre 2023

### ✨ Nouveautés

- Ajout de `team_uuid` aux demandes d'[envoi de message](/api/reference/messages_api/post_send_messages) et de création et de mise à jour de [contact](/api/reference/contacts_api/post_contacts) et de [contacts](/api/reference/contacts_api/patch_contacts). Cela vous permet d'assigner un contact à une équipe via l'API.

## 14 décembre 2023

### 🛠️ Modifications

- L'événement de webhook [Message Created](/api/reference/webhooks/message_events/message_created) inclut désormais la référence complète du `contact`. Cela permet d'avoir plus d'informations sur le contact sans avoir à effectuer un appel supplémentaire à l'API.

## 30 novembre 2023

### ✨ Nouveautés

- [Webhook Conversation Opened Event](/api/reference/webhooks/conversation_events/conversation_opened)
- [Webhook Conversation Closed Event](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 novembre 2023

### ✨ Nouveautés

- [Point de terminaison de l'API des équipes](/api/reference/teams_api/introduction)

## 29 juin 2023

### 🛠️ Modifications

- Autoriser l'envoi de [messages de modèle avec plusieurs variables](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 juin 2023

### ✨ Nouveautés

- L'objet [`MessageSendRequest`](/api/reference/object_types/message_send_request) inclut désormais un nouvel attribut : `messageStatusPayload`. Cet attribut fournit le statut du message correspondant, provenant directement de l'intégration.
- Cet attribut est utile lors de la récupération des mises à jour d'état pour un message via l'API [Get Status Updates for a Message](/api/reference/messages_api/get_message_status).
- À des fins de dépannage, `messageStatusPayload` peut également être consulté via l'événement de webhook [Message Status Updated](/api/reference/webhooks/message_events/message_status_updated).

## 5 avril 2023

### ✨ Nouveautés

- L'attribut `assignedUser` a été ajouté à l'objet [Contact](/api/reference/object_types/contact).
- Les utilisateurs peuvent maintenant être assignés à un contact lors de la création ou de la mise à jour en fournissant le paramètre `assigned_user` avec l'e-mail d'un utilisateur (par exemple, `john.doe@email.com`). Assurez-vous que l'e-mail fourni correspond à un utilisateur confirmé dans votre compte.
- Pour désassigner un utilisateur d'un contact lors d'une mise à jour, incluez le paramètre `unassign_user` dans le corps de la requête et définissez sa valeur sur true. Cette action supprimera l'utilisateur assigné du contact.

## 3 mars 2023

### ✨ Nouveautés

- Extraits de code multilingues (`curl`, `node`, `go`, `ruby`, `php`, `python`) pour toutes les requêtes
- Section Notes de version

### 🛠️ Modifications

- [Contact](/api/reference/object_types/contact) comprend maintenant `custom_fields`
- `custom_fields`, `tags` peuvent être transmis dans le corps lors de la [création](/api/reference/contacts_api/post_contacts) ou de la [modification](/api/reference/contacts_api/post_contacts) d'un contact
- `phone_number` de [Contact](/api/reference/object_types/contact) ne peut plus être mis à jour

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