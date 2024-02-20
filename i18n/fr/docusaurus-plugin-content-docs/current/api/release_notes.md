---
sidebar_position: 4
---

# Notes de publication

Une liste de tous les changements et améliorations qui ont été introduits dans notre API. Utilisez-la pour vérifier chaque fois que de nouveaux points d'extrémité sont ajoutés ou des modifications sont apportées.

## 20 février 2024

### ✨ Quoi de neuf

- Ajout d'un nouveau point d'extrémité pour lister tous les [membres de l'équipe](/api/reference/teams_api/get_team_members) appartenant à une équipe.

### 🛠️ Changements

- Le point d'extrémité [Envoyer un message](/api/reference/messages_api/post_send_messages) prend désormais en charge un paramètre facultatif `fields` pour spécifier les champs à inclure dans la réponse. Cela est utile pour réduire la taille de la réponse et accélérer les appels API. Actuellement, seul `contact` est pris en charge.
 
## 14 février 2024

### ✨ Quoi de neuf

- Le point d'extrémité [Créer un contact](/api/reference/contacts_api/post_contacts) prend désormais en charge le paramètre `channel_uuid` pour créer un contact associé à un canal spécifique.

## 9 février 2024

### ✨ Quoi de neuf

- [API des canaux](/api/reference/channels_api/introduction) pour gérer vos canaux Callbell de manière programmatique. Utilisez ce point d'extrémité pour lister, afficher et mettre à jour vos canaux.

### 🛠️ Changements

- Le point d'extrémité [Envoyer des messages](/api/reference/messages_api/post_send_messages) prend désormais en charge le paramètre `channel_uuid` pour envoyer un message à un canal spécifique.

## 11 janvier 2024

### ✨ Quoi de neuf

- Les points d'extrémité [Ouvrir une conversation de contact](/api/reference/contacts_api/post_contact_conversation_open) et [Fermer une conversation de contact](/api/reference/contacts_api/post_contact_conversation_close) pour ouvrir et fermer une conversation associée à un contact.

## 8 janvier 2024

### ✨ Quoi de neuf

Ajout d'informations et d'exemples sur l'utilisation de Callbell avec Zapier.

## 4 janvier 2024

### ✨ Quoi de neuf

- [API des messages de contact](/api/reference/contacts_api/get_contact_messages) pour récupérer tous les messages d'un contact. Ce point d'extrémité est utile pour récupérer tous les messages d'un contact, le résultat est paginé et trié par date.

## 19 décembre 2023

### ✨ Quoi de neuf

- Ajout de `team_uuid` aux demandes d'[envoi de messages](/api/reference/messages_api/post_send_messages) et de création ([contacts](/api/reference/contacts_api/post_contacts)) et de mise à jour ([contacts](/api/reference/contacts_api/patch_contacts)). Cela vous permet d'attribuer un contact à une équipe via une API.

## 14 décembre 2023

### 🛠️ Changements

- L'événement de webhook [Message Created](/api/reference/webhooks/message_events/message_created) inclut désormais la référence complète du `contact`. Cela est utile pour obtenir des informations supplémentaires sur le contact sans avoir à effectuer un appel API supplémentaire.

## 30 novembre 2023

### ✨ Quoi de neuf

- Événement de webhook [Conversation Ouverte](/api/reference/webhooks/conversation_events/conversation_opened)
- Événement de webhook [Conversation Fermée](/api/reference/webhooks/conversation_events/conversation_closed)

## 7 novembre 2023

### ✨ Quoi de neuf

- [Point de terminaison de l'API des équipes](/api/reference/teams_api/introduction)

## 29 juin 2023

### 🛠️ Changements

- Autoriser l'envoi de [messages de modèle à variables multiples](/api/reference/messages_api/post_send_messages#send-multi-variables-template-messages)

## 15 juin 2023

### ✨ Quoi de neuf

- L'objet [`MessageSendRequest`](/api/reference/object_types/message_send_request) inclut désormais un nouvel attribut : `messageStatusPayload`. Cet attribut fournit la charge utile d'état pour le message correspondant, provenant directement de l'intégration.
- Cet attribut est utile lors de la [récupération des mises à jour d'état pour un message](/api/reference/messages_api/get_message_status).
- À des fins de dépannage, `messageStatusPayload` peut également être consulté via l'événement webhook [Mise à jour de l'état du message](/api/reference/webhooks/message_events/message_status_updated).

## 5 avril 2023

### ✨ Quoi de neuf

- L'attribut `assignedUser` a été ajouté à l'objet [Contact](/api/reference/object_types/contact)
- Les utilisateurs peuvent désormais être assignés à un contact lors de sa création ou de sa mise à jour en fournissant le paramètre `assigned_user` avec l'e-mail de l'utilisateur (par exemple, `john.doe@email.com`). Assurez-vous que l'e-mail fourni correspond à un utilisateur confirmé de votre compte.
- Pour désassigner un utilisateur d'un contact lors d'une mise à jour, incluez le paramètre `unassign_user` dans le corps de la requête et définissez sa valeur sur true. Cette action supprimera l'utilisateur assigné du contact.

## 3 mars 2023

### ✨ Quoi de neuf

- Extraits de code multilingues (`curl`, `node`, `go`, `ruby`, `php`, `python`) pour toutes les requêtes
- Section Notes de publication

### 🛠️ Changements

- [Contact](/api/reference/object_types/contact) inclut maintenant `custom_fields`
- `custom_fields`, `tags` peuvent être transmis dans le corps lors de la [création](/api/reference/contacts_api/post_contacts) ou de la [mise à jour](/api/reference/contacts_api/post_contacts) d'un contact
- `phone_number` de [Contact](/api/reference/object_types/contact) ne peut plus être mis à jour

## 17 janvier 2023

### ✨ Quoi de neuf

- [API des modèles](/api/reference/template_messages_api/introduction)

### 🛠️ Changements

- Autoriser l'envoi de [messages de modèle](/api/reference/messages_api/post_send_messages#send-template-messages)

## 11 novembre 2022

### ✨ Quoi de neuf

- [API d'authentification](/api/reference/auth_api/introduction)

## 18 octobre 2022

### ✨ Quoi de neuf

- [API des webhooks](/api/reference/webhooks_api/introduction)