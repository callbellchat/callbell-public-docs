---
sidebar_position: 1
---

# Présentation

Connectez **Claude**, **ChatGPT** ou un autre assistant d'IA à votre compte Callbell, puis posez-lui des questions sur vos contacts et vos conversations avec vos propres mots. Par exemple :

- « Montre-moi les derniers messages du +34 600 000 000. »
- « Quels contacts avec l'étiquette `refund-request` sont assignés à l'équipe Support ? »
- « Ajoute une note interne à ce contact avec un résumé de la conversation. »
- « Envoie notre modèle approuvé `order_update` à ce contact. »

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

## Ce que l'assistant peut faire

Au moment de la connexion, vous choisissez entre deux niveaux d'accès.

**Lecture seule** (par défaut). L'assistant peut :

- trouver des contacts par numéro de téléphone, étiquette, équipe ou canal,
- lire les fiches des contacts et les messages des conversations, notes internes comprises,
- voir vos canaux, vos équipes et vos modèles WhatsApp.

**Lecture et écriture**, seulement si vous cochez **Autoriser ... à effectuer des modifications**. L'assistant peut aussi :

- envoyer des messages WhatsApp à vos contacts existants (en dehors de la fenêtre de service client de 24 heures, uniquement des modèles approuvés),
- modifier des contacts : nom, étiquettes, champs personnalisés et équipe,
- ajouter des notes internes,
- fermer des conversations.

Pour changer le niveau d'accès plus tard, déconnectez l'application puis reconnectez-la.

:::caution
L'assistant travaille sur tout le compte Callbell : il peut voir tous les contacts et toutes les conversations, pas seulement ceux qui vous sont assignés. Ne connectez que des applications de confiance, et gardez un accès en lecture seule quand l'assistant n'a rien à modifier.
:::

## Configurer votre application d'IA

- [Claude (web, ordinateur et mobile)](./connect_claude.md)
- [ChatGPT](./connect_chatgpt.md)
- [Claude Code, Codex et autres clients MCP](./developer_tools.md)

Pour voir ou supprimer les applications connectées à votre compte, consultez [Gérer les connexions](./manage_connections.md).
