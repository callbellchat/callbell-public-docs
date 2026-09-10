---
sidebar_position: 4
---

# Notes de version

Une liste de tous les changements et améliorations qui ont été introduits dans notre API. Utilisez-la pour vérifier si de nouveaux points finaux sont ajoutés ou si des modifications sont apportées.

## 10 septembre 2026

### 🛠️ Changements

- [POST /messages/send](/api/reference/messages_api/post_send_messages) renvoie désormais `402 Payment Required` avec le [code d'erreur](/api/reference/errors#error-codes) `whatsapp_wallet_depleted_credit` lorsqu'un message modèle est envoyé depuis un compte dont le solde de crédit WhatsApp est épuisé. Les messages ordinaires ne sont pas concernés, et l'envoi de modèles reprend dès que du crédit est ajouté.

## 7 août 2026

### ✨ Nouveautés

- [GET /contacts](/api/reference/contacts_api/get_contacts) prend désormais en charge la pagination par curseur : chaque réponse inclut un token `meta.next` qui peut être renvoyé via le nouveau paramètre `after` pour récupérer le lot de contacts suivant. Cela permet de récupérer la liste complète des contacts, au-delà de la limite de 10 000 contacts de la pagination par pages.

## 10 février 2026

### ✨ Nouveautés

- Ajout du point de terminaison [GET /plan](/api/reference/plan_api/get_plan) pour récupérer les détails du plan du compte actuel, y compris les utilisateurs actifs et la répartition des équipes.

## 6 février 2026

### 🛠️ Changements

- Le point de terminaison [GET /channels](/api/reference/channels_api/get_channels) supporte désormais le paramètre `active` pour filtrer les canaux en fonction de leur statut actif.

## 20 mai 2025

### ✨ Nouveautés

- Ajout d'un point de terminaison [DELETE /messages/:uuid](/api/reference/messages_api/delete_message) pour supprimer un message par son UUID ou ID externe.

## 17 février 2025

### ✨ Nouveautés
- Ajout d'un point de terminaison [DELETE /users/:uuid/status](/api/reference/users_api/delete_user_status) pour annuler l'attribution d'un statut personnalisé à un utilisateur.

### 🛠️ Changements

- Ajout de la possibilité d'annuler un statut personnalisé d'un utilisateur en passant `null` comme paramètre `custom_status_uuid` sur l'[API Utilisateurs](/api/reference/users_api/put_user_status).

## 5 février 2025

### ✨ Nouveautés

- Ajout d'un nouveau champ `emoji` sur le type d'objet [CustomStatus](/api/reference/object_types/custom_status).
- Ajout d'informations sur [UserCustomStatus](/api/reference/object_types/user_custom_status) dans le type d'objet [TeamMember](/api/reference/object_types/team_member).

## 6 janvier 2025

### ✨ Nouveautés

- Ajout d'un nouveau champ `blocked_at` sur le type d'objet [Contact](/api/reference/object_types/contact).
- Ajout de nouveaux champs `status`, `category` sur le type d'objet [Template Messages](/api/reference/template_messages_api/get_templates#example-response).

## 5 décembre 2024

### ✨ Nouveautés

- API de statut personnalisé](/api/reference/custom_status_api/introduction)
- Ajout d'un nouveau point de terminaison pour [mettre à jour le statut d'un utilisateur](/docs/api/reference/users_api/put_user_status.md), ce qui signifie leur disponibilité et/ou leur statut personnalisé.

## 26 novembre 2024

### ✨ Nouveautés

- Ajout d'un nouveau point de terminaison pour [créer des notes](/docs/api/reference/contacts_api/post_contact_conversation_create_note.md) sur la conversation associée aux contacts.
- Evénement webhook [Agent Session Updated](/api/reference/webhooks/agent_events/agent_session_updated.md) pour notifier lorsqu'un agent se connecte ou se déconnecte.

## 21 novembre 2024

### ✨ Nouveautés

- [MessageContext](/api/reference/object_types/message_context) et [MessageForward](/api/reference/object_types/message_forward) ajoutés en tant que types d'objets.
- L'événement Webhook [Message Created](/api/reference/webhooks/message_events/message_created) inclut maintenant les références `messageContext` et `messageForward`. Ceci est utile pour avoir des informations sur les messages de localisation et les cartes de contact.

## 19 novembre 2024

### ✨ Nouveautés

- [MessageReplyButton](/api/reference/object_types/message_reply_button) et [MessageInteractiveList](/api/reference/object_types/message_interactive_list) ajoutés en tant que types d'objets.
- L'événement Webhook [Message Created Webhook event](/api/reference/webhooks/message_events/message_created) inclut maintenant les références `messageReplyButton` et `messageInteractiveList`. Ceci est utile pour avoir des informations sur les messages de localisation et les cartes de contact.

## 18 novembre 2024

### ✨ Nouveautés

- [MessageContactCard](/api/reference/object_types/message_contact_card) et [MessageLocation](/api/reference/object_types/message_location) ajoutés en tant que types d'objets.
- L'événement Webhook [Message Created Webhook event](/api/reference/webhooks/message_events/message_created) inclut maintenant les références `messageContactCard` et `MessageLocation`. Ceci est utile pour avoir des informations sur les messages de localisation et les cartes de contact.

## 24 septembre 2024

### ✨ Nouveautés

- Ajout de `conversationHref` à tous les points de terminaison qui renvoient un objet [Contact](/api/reference/object_types/contact) ; ce champ renvoie à la conversation associée au contact sur le tableau de bord de Callbell.
- Le champ est également présent dans tous les webhooks liés aux contacts, aux messages et aux conversations.
- Ajout d'un nouveau champ `conversation` dans le corps de la requête du point final [Send Message](/api/reference/messages_api/post_send_messages). Ce champ permet de renvoyer la conversation dans la réponse.

## 30 juillet 2024

#### ✨ Nouveautés

- L'envoi de [messages POST prend désormais en charge le champ de métadonnées](/api/reference/messages_api/post_send_messages#send-message-with-metadata) pour envoyer des messages avec des paires clé-valeur personnalisées.

## 25 juillet 2024

#### ✨ Nouveautés

- Ajout d'extraits de code pour **C#**, **Java** et **Rust**.

## 15 mai 2024

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