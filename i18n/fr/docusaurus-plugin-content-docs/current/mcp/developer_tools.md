---
sidebar_position: 4
---

# Claude Code, Codex et autres clients MCP

Les outils de développement et les autres clients MCP se connectent à Callbell avec la même URL de serveur et la même connexion Callbell que Claude et ChatGPT. Chaque personne qui utilise la connexion se connecte avec son propre utilisateur Callbell.

## Claude Code

:::tip
Si vous utilisez Claude Code avec votre compte claude.ai et avez déjà ajouté Callbell dans Claude (voir [Connecter Claude](./connect_claude.md)), Callbell est déjà disponible dans Claude Code.
:::

1. Ajoutez le serveur :

```bash
claude mcp add --transport http callbell https://ai.callbell.eu/mcp
```

Par défaut, le serveur n'est disponible que dans le projet en cours. Ajoutez `--scope user` pour l'utiliser dans tous vos projets, ou `--scope project` pour le partager avec votre équipe dans un fichier `.mcp.json` (chaque collègue se connecte quand même avec son propre utilisateur Callbell).

2. Lancez Claude Code, exécutez `/mcp`, sélectionnez **callbell** et choisissez **Authenticate**. Vous pouvez aussi exécuter `claude mcp login callbell` depuis votre terminal.
3. Votre navigateur ouvre la page de consentement de Callbell. Choisissez les permissions et cliquez sur **Autoriser**.

Claude Code enregistre la connexion et la renouvelle automatiquement.

## Codex

1. Ajoutez le serveur :

```bash
codex mcp add callbell --url https://ai.callbell.eu/mcp
```

2. Codex détecte que Callbell utilise OAuth et ouvre votre navigateur. Sinon, exécutez :

```bash
codex mcp login callbell
```

3. Sur la page de consentement de Callbell, choisissez les permissions et cliquez sur **Autoriser**.

Vous pouvez aussi ajouter le serveur à la main dans `~/.codex/config.toml`, puis exécuter `codex mcp login callbell` :

```toml
[mcp_servers.callbell]
url = "https://ai.callbell.eu/mcp"
```

La CLI Codex, l'extension Codex pour IDE et l'application ChatGPT pour ordinateur partagent cette configuration.

## Autres clients MCP

Tout client MCP compatible avec les serveurs distants en **Streamable HTTP** et la connexion **OAuth** peut se connecter à Callbell. La plupart des clients n'ont besoin que de l'URL, par exemple dans une configuration JSON :

```json
{
  "mcpServers": {
    "callbell": {
      "type": "http",
      "url": "https://ai.callbell.eu/mcp"
    }
  }
}
```

Le client trouve les paramètres de connexion tout seul. Pour référence, voici les détails techniques :

| Paramètre | Valeur |
| :-- | :-- |
| Serveur MCP | `https://ai.callbell.eu/mcp` (Streamable HTTP) |
| Métadonnées de la ressource protégée | `https://ai.callbell.eu/.well-known/oauth-protected-resource` |
| Serveur d'autorisation | `https://dash.callbell.eu` |
| Métadonnées du serveur d'autorisation | `https://dash.callbell.eu/.well-known/oauth-authorization-server` |
| Enregistrement du client | Enregistrement dynamique sur `https://dash.callbell.eu/oauth/register` |
| Type d'autorisation | Code d'autorisation avec PKCE (`S256`), avec jetons de rafraîchissement |
| Scopes | `read`, `write` |
| URI de redirection | N'importe quelle URL `https`, ou `http` sur `localhost` ou une adresse de bouclage pour les clients de bureau et en ligne de commande |

:::note
Le serveur MCP n'accepte que les jetons OAuth émis par la connexion Callbell. Les clés API Callbell ne fonctionnent pas avec lui : pour appeler Callbell depuis votre propre code, utilisez l'[API Callbell](/api/reference/introduction).
:::

## Outils disponibles

Voici les actions que l'assistant peut effectuer dans Callbell :

| Outil | Permission | Ce qu'il fait |
| :-- | :-- | :-- |
| `find_contacts` | Lecture | Recherche un contact par numéro de téléphone, ou liste les contacts filtrés par canal, étiquettes ou équipe. Il n'y a pas de recherche par nom. |
| `get_contact` | Lecture | Récupère un contact avec ses étiquettes, ses champs personnalisés, son équipe, son canal et l'état de sa conversation. |
| `list_messages` | Lecture | Lit les messages de la conversation d'un contact, du plus récent au plus ancien, notes internes comprises. |
| `list_channels` | Lecture | Liste les canaux connectés (WhatsApp, Instagram, Facebook Messenger et Telegram). |
| `list_teams` | Lecture | Liste les équipes du compte. |
| `list_templates` | Lecture | Liste les modèles WhatsApp et leur statut d'approbation. |
| `send_message` | Écriture | Envoie un message WhatsApp à un contact existant. En dehors de la fenêtre de service client de 24 heures, seuls les modèles approuvés peuvent être envoyés. |
| `update_contact` | Écriture | Renomme un contact, ajoute ou retire des étiquettes, remplit des champs personnalisés ou transfère la conversation à une autre équipe. |
| `add_note` | Écriture | Ajoute une note interne à une conversation. Les notes ne sont visibles que par votre équipe, jamais par le contact. |
| `close_conversation` | Écriture | Ferme la conversation d'un contact. |

:::note
L'assistant ne peut écrire qu'aux contacts qui existent déjà dans Callbell : il ne peut pas démarrer une conversation avec un nouveau numéro. Les modèles d'authentification (codes à usage unique) ne peuvent pas être envoyés depuis une application d'IA.
:::
