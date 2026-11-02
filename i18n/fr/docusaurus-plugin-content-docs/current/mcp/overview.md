---
sidebar_position: 1
---

# Présentation

Connectez **Claude**, **ChatGPT** ou un autre assistant d'IA à votre compte Callbell, puis posez-lui des questions sur vos contacts et vos conversations avec vos propres mots. Par exemple :

- « Montre-moi les derniers messages du +34 600 000 000. »
- « Quels contacts avec l'étiquette `refund-request` sont assignés à l'équipe Support ? »
- « Ajoute une note interne à ce contact avec un résumé de la conversation. »
- « Envoie notre modèle approuvé `order_update` à ce contact. »

## Ce que l'assistant peut et ne peut pas faire

Au moment de la connexion, vous choisissez entre deux niveaux d'accès : **Lecture seule** (par défaut), ou **Lecture et écriture** si vous cochez **Autoriser ... à effectuer des modifications**.

| | Action | Lecture seule | Lecture et écriture |
| :-- | :-- | :-: | :-: |
| **Contacts** | Trouver un contact par numéro de téléphone | ✅ | ✅ |
| | Lister les contacts par étiquette, équipe ou type de canal | ✅ | ✅ |
| | Voir la fiche d'un contact, dont ses étiquettes, ses champs personnalisés, son équipe, l'utilisateur assigné et la note de contact | ✅ | ✅ |
| | Renommer un contact, ajouter ou retirer des étiquettes, remplir des champs personnalisés | ❌ | ✅ |
| | Rechercher des contacts par nom | ❌ | ❌ |
| | Créer ou supprimer un contact | ❌ | ❌ |
| | Créer de nouvelles étiquettes ou de nouveaux champs personnalisés | ❌ | ❌ |
| | Modifier la note de contact | ❌ | ❌ |
| **Conversations** | Lire les messages d'une conversation, notes internes comprises | ✅ | ✅ |
| | Ajouter une note interne | ❌ | ✅ |
| | Transférer une conversation à une autre équipe | ❌ | ✅ |
| | Fermer une conversation | ❌ | ✅ |
| | Rouvrir une conversation | ❌ | ❌ |
| | Attribuer une conversation à un utilisateur, ou annuler l'attribution | ❌ | ❌ |
| | Démarrer ou arrêter le bot dans une conversation | ❌ | ❌ |
| | Voir ou changer l'étape d'une conversation dans l'entonnoir | ❌ | ❌ |
| **Messages** | Envoyer un message texte WhatsApp dans la fenêtre de service client de 24 heures | ❌ | ✅ |
| | Envoyer un modèle WhatsApp approuvé, même en dehors de la fenêtre de 24 heures | ❌ | ✅ |
| | Envoyer des images, des documents, des audios ou des vidéos, ou des modèles avec média | ❌ | ❌ |
| | Envoyer un message sur Instagram, Facebook Messenger ou Telegram | ❌ | ❌ |
| | Démarrer une conversation avec un nouveau numéro de téléphone | ❌ | ❌ |
| | Vérifier si un message a été distribué ou lu | ❌ | ❌ |
| | Supprimer un message | ❌ | ❌ |
| **Compte** | Voir vos canaux, vos équipes et vos modèles WhatsApp | ✅ | ✅ |
| | Voir les membres d'une équipe | ❌ | ❌ |
| | Créer ou modifier des canaux, des équipes ou des modèles | ❌ | ❌ |
| | Changer la disponibilité ou le statut personnalisé d'un utilisateur | ❌ | ❌ |

Pour les actions marquées ❌ dans les deux colonnes, utilisez directement Callbell. Pour changer le niveau d'accès plus tard, déconnectez l'application puis reconnectez-la.

:::caution
L'assistant travaille sur tout le compte Callbell : il peut voir tous les contacts et toutes les conversations, pas seulement ceux qui vous sont assignés. Ne connectez que des applications de confiance, et gardez un accès en lecture seule quand l'assistant n'a rien à modifier.
:::

## Ce qu'il vous faut

- Une application d'IA qui accepte les connecteurs personnalisés, comme Claude ou ChatGPT.
- Un utilisateur Callbell ayant accès aux **paramètres** du compte.
- L'adresse de Callbell, à coller dans votre application d'IA :

```
https://ai.callbell.eu/mcp
```

Aucune clé API à créer : la première fois que vous vous connectez, il suffit de vous identifier avec votre utilisateur Callbell.

## Comment fonctionne la connexion

1. Vous ajoutez Callbell dans votre application d'IA avec l'adresse ci-dessus.
2. L'application ouvre une page Callbell, où vous vous connectez si vous ne l'êtes pas déjà.
3. Callbell affiche ce que demande l'application. Vous choisissez ce qu'elle peut faire et cliquez sur **Autoriser**.

Chaque connexion est personnelle : chaque collègue se connecte avec son propre identifiant Callbell. Toutes les connexions sont listées dans Callbell, où elles peuvent être supprimées à tout moment (voir [Gérer les connexions](./manage_connections.md)). Callbell ne partage jamais votre mot de passe avec l'application d'IA.

## Configurer votre application d'IA

- [Claude (web, ordinateur et mobile)](./connect_claude.md)
- [ChatGPT](./connect_chatgpt.md)
- [Claude Code, Codex et autres clients MCP](./developer_tools.md)

Pour voir ou supprimer les applications connectées à votre compte, consultez [Gérer les connexions](./manage_connections.md).
