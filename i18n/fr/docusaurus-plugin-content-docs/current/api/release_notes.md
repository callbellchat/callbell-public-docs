---
sidebar_position: 4
---

# Notes de version

Une liste de tous les changements et améliorations qui ont été introduits dans notre API. Utilisez-la pour vérifier si de nouveaux points finaux sont ajoutés ou si des modifications sont apportées.

## 30 juillet 2024

#### ✨ Nouveautés

- L'envoi de [messages POST prend désormais en charge le champ de métadonnées](/api/reference/messages_api/post_send_messages#send-message-with-metadata) pour envoyer des messages avec des paires clé-valeur personnalisées.

## 25 juillet 2024

#### ✨ Nouveautés

- Ajout d'extraits de code pour **C#**, **Java** et **Rust**.

## 15 Mai, 2024

### ✨ Nouveautés

- Les points de terminaison [Create Contact](/api/reference/contacts_api/post_contacts), [Edit Contact](/api/reference/contacts_api/post_contacts) et [Send Message](/api/reference/messages_api/post_send_messages) supportent désormais le paramètre `bot_status` pour définir le statut du bot associé à un contact spécifique.

## 11 mars 2024

### ✨ Nouveautés

- GET [Contact Bot](/api/reference/contacts_api/get_contact_bot) pour obtenir le bot associé à un contact spécifique.
- POST [Contact Bot](/api/reference/contacts_api/post_contact_bot) pour changer le statut du bot associé à un contact spécifique.

## 5 mars 2024

### 🛠️ Changements

- Le point de terminaison [Get Contact By Phone](/api/reference/contacts_api/get_contact_by_phone) supporte désormais le paramètre `channel_uuid` pour rechercher le contact par numéro de téléphone et par canal.

## 22 février 2024

### ✨ Nouveautés

- [Événement de webhook Team Membership Updated](/api/reference/webhooks/team_events/team_membership_updated) pour notifier quand un membre d'une équipe est ajouté ou supprimé d'une équipe.
- [Événement de webhook Agent Status Updated](/api/reference/webhooks/agent_events/agent_status_updated) pour notifier quand un agent change son statut.

## 20 février 2024

### ✨ Nouveautés

- Ajout d'un nouveau point d'extrémité pour répertorier tous les [membres d'équipe](/api/reference/teams_api/get_team_members) appartenant à une équipe.

### 🛠️ Modifications

- Le point d'extrémité [Send Message](/api/reference/messages_api/post_send_messages) prend maintenant en charge un paramètre optionnel `fields` pour spécifier les champs à inclure dans la réponse. Cela permet de réduire la taille de la réponse et d'accélérer les appels API. Actuellement, seul `contact` est pris en charge.

## 14 février 2024

### ✨ Nouveautés

- Le point d'extrémité [Create contact](/api/reference/contacts_api/post_contacts) prend maintenant en charge le paramètre `channel_uuid` pour créer un contact associé à un canal spécifique.

## 9 février 2024

### ✨ Nouveautés

- [Channels API](/api/reference/channels_api/introduction) pour gérer vos canaux Callbell de manière programmable. Utilisez ce point d'extrémité pour répertorier, afficher et mettre à jour vos canaux.

### 🛠️ Modifications

- Le point d'extrémité [Send Messages](/api/reference/messages_api/post_send_messages) prend maintenant en charge le paramètre `channel_uuid` pour envoyer un message à un canal spécifique.

## 11 janvier 2024

### ✨ Nouveautés

- Les points d'extrémité [Contact Conversation Open](/api/reference/contacts_api/post_contact_conversation_open) et [Contact Conversation Close](/api/reference/contacts_api/post_contact_conversation_close) pour ouvrir et fermer une conversation associée à un contact.

## 8 janvier 2024

### ✨ Nouveautés

- Ajout d'informations et d'exemples sur la façon d'utiliser Callbell avec Zapier.

## 4 janvier 2024

### ✨ Nouveautés

- [Contact messages API](/api/reference/contacts_api/get_contact_messages) pour récupérer tous les messages d'un contact. Ce point d'extrémité est utile pour récupérer tous les messages d'un contact, le résultat est paginé et trié par date.

## 19 décembre 2023

### ✨ Nouveautés

- Ajout de `team_uuid` aux [demandes d'envoi de message](/api/reference/messages_api/post_send_messages) et aux demandes de création et de mise à jour de contact [creation](/api/reference/contacts_api/post_contacts) et [update](/api/reference/contacts_api/patch_contacts). Cela vous permet d'assigner un contact à une équipe via l'API.

## 14 décembre 2023

### 🛠️ Modifications

- L'événement du webhook [Message Created Webhook event](/api/reference/webhooks/message_events/message_created) inclut maintenant la référence complète du `contact`. Cela permet d'obtenir des informations supplémentaires sur le contact sans avoir à effectuer un appel API supplémentaire.

## 30 novembre 2023

### ✨ Nouveautés

- [Conversation Opened Webhook Event](/api/reference/webhooks/conversation_events/conversation_opened)
- [Conversation Closed Webhook Event](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 novembre 2023

### ✨ Nouveautés

- [Teams API Endpoint](/api/reference/teams_api/introduction)

## 29 juin 2023

### 🛠️ Modifications

- Autoriser l'envoi de [Multi-Variables Template Messages](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 juin 2023

### ✨ Nouveautés

- L'objet [`MessageSendRequest`](/api/reference/object_types/message_send_request) inclut maintenant un nouvel attribut : `messageStatusPayload`. Cet attribut fournit la charge utile de statut correspondante pour le message, provenant directement de l'intégration.
- Cet attribut est utile lors de la récupération des mises à jour de statut pour un message via l'[API de statut de message](/api/reference/messages_api/get_message_status).
- À des fins de dépannage, `messageStatusPayload` peut également être consulté via l'événement du webhook [Message Status Update Webhook Event](/api/reference/webhooks/message_events/message_status_updated).

## 5 avril 2023

### ✨ Nouveautés

- L'attribut `assignedUser` a été ajouté à l'objet [Contact](/api/reference/object_types/contact).
- Les utilisateurs peuvent maintenant être assignés à un contact lors de la création ou de la mise à jour en fournissant le paramètre `assigned_user` avec l'e-mail d'un utilisateur (par exemple, `john.doe@email.com`). Assurez-vous que l'e-mail fourni correspond à un utilisateur confirmé de votre compte.
- Pour désassigner un utilisateur d'un contact lors d'une mise à jour, incluez le paramètre `unassign_user` dans le corps de la requête et définissez sa valeur sur `true`. Cette action supprimera l'utilisateur assigné du contact.

## 3 mars 2023

### ✨ Nouveautés

- Extraits de code multilingues (`curl`, `node`, `go`, `ruby`, `php`, `python`) pour toutes les requêtes
- Section Notes de version

### 🛠️ Modifications

- [Contact](/api/reference/object_types/contact) inclut maintenant `custom_fields`
- `custom_fields`, `tags` peuvent être envoyés dans le corps lors de la [création](/api/reference/contacts_api/post_contacts) ou de la [mise à jour](/api/reference/contacts_api/post_contacts) d'un contact
- La mise à jour du `phone_number` du [Contact](/api/reference/object_types/contact) n'est plus possible

## 17 janvier 2023

### ✨ Nouveautés

- [Templates API](/api/reference/template_messages_api/introduction)

### 🛠️ Modifications

- Autoriser l'envoi de [Template Messages](/api/reference/messages_api/post_send_messages#send-template-messages)

## 11 novembre 2022

### ✨ Nouveautés

- [Auth API](/api/reference/auth_api/introduction)

## 18 octobre 2022

### ✨ Nouveautés

- [Webhooks API](/api/reference/webhooks_api/introduction)