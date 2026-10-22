---
sidebar_position: 3
---

import chatgptOpenAdd from './assets/chatgpt_open_add.png'
import chatgptAddCustomMcp from './assets/chatgpt_add_custom_mcp.png'
import chatgptConnect from './assets/chatgpt_connect.png'
import chatgptConsent from './assets/chatgpt_consent.png'
import chatgptInstalled from './assets/chatgpt_installed.png'
import chatgptPermissions from './assets/chatgpt_permissions.png'
import chatgptMention from './assets/chatgpt_mention.png'
import chatgptPrompt from './assets/chatgpt_prompt.png'
import chatgptAnswer from './assets/chatgpt_answer.png'
import chatgptManage from './assets/chatgpt_manage.png'

# Connecter ChatGPT

Dans [ChatGPT](https://chatgpt.com), vous connectez Callbell en l'ajoutant comme **serveur MCP personnalisé** depuis la page **Plugins**. La configuration se fait depuis ChatGPT sur le web.

Les libellés de l'interface de ChatGPT sont indiqués en anglais, comme sur les captures d'écran.

:::info Espaces de travail Business, Enterprise et Edu
Dans les espaces de travail d'entreprise, un administrateur ou un propriétaire doit parfois d'abord créer le plugin Callbell et le publier dans l'espace de travail. Les membres l'installent ensuite et se connectent avec leur propre identifiant Callbell. Consultez [l'article d'aide d'OpenAI](https://help.openai.com/en/articles/12584461) pour les règles de votre offre.
:::

## Étape 1 : créer le plugin Callbell

1. Dans ChatGPT, cliquez sur **Plugins** dans la barre latérale.
2. Cliquez sur **Add**, puis sur **Add custom MCP server**.

<div class="text--center">
    <img src={chatgptOpenAdd} alt="Plugins, Add, Add custom MCP server" width={800} />
</div>

3. Remplissez le formulaire :
    1. **Name** : `Callbell` (la description est facultative).
    2. **Connection**, **Server URL** : `https://ai.callbell.eu/mcp`
    3. **Authentication** : gardez **OAuth**. Inutile de modifier les **Advanced OAuth settings**.
    4. Cochez **I understand and want to continue**.
    5. Cliquez sur **Create as a plugin**.

<div class="text--center">
    <img src={chatgptAddCustomMcp} alt="Formulaire Add custom MCP server rempli avec Callbell et https://ai.callbell.eu/mcp" width={600} />
</div>

## Étape 2 : connecter votre compte Callbell

1. ChatGPT vous propose de connecter Callbell : cliquez sur **Connect Callbell**.

<div class="text--center">
    <img src={chatgptConnect} alt="Le bouton Connect Callbell" width={480} />
</div>

2. ChatGPT ouvre Callbell. Connectez-vous avec votre utilisateur Callbell si vous n'êtes pas déjà connecté.
3. Vérifiez la demande d'accès :
    1. Cochez **Autoriser ChatGPT à effectuer des modifications** uniquement si vous voulez que ChatGPT envoie des messages, modifie des contacts, ajoute des notes et ferme des conversations. Laissez la case décochée pour un accès en lecture seule.
    2. Cliquez sur **Autoriser**.

<div class="text--center">
    <img src={chatgptConsent} alt="Page de consentement de Callbell avec la case pour autoriser les modifications et le bouton Autoriser" width={800} />
</div>

Vous revenez dans ChatGPT. Callbell apparaît maintenant sur la page **Plugins**, dans l'onglet **Personal**.

<div class="text--center">
    <img src={chatgptInstalled} alt="Le plugin Callbell dans l'onglet Personal" width={480} />
</div>

## Étape 3 : choisir quand ChatGPT demande votre accord

1. Dans ChatGPT, allez dans **Settings** > **Plugins** et ouvrez **Callbell**.
2. Cliquez sur **Permission** et choisissez quand ChatGPT doit vous demander votre accord pour utiliser Callbell.

<div class="text--center">
    <img src={chatgptPermissions} alt="Options de permission du plugin Callbell" width={700} />
</div>

:::tip
Choisissez **Allow read-only tools** : ChatGPT lit vos données Callbell sans demander, mais vous demande votre accord avant chaque modification, comme l'envoi d'un message.
:::

## Étape 4 : utiliser Callbell dans une conversation

1. Dans une nouvelle conversation, tapez **@** et choisissez **Callbell**.

<div class="text--center">
    <img src={chatgptMention} alt="Choix de Callbell après avoir tapé @ dans une conversation" width={760} />
</div>

2. Posez une question sur votre compte Callbell, par exemple « Quelles équipes avons-nous dans Callbell ? ».

<div class="text--center">
    <img src={chatgptPrompt} alt="Une question à Callbell dans la zone de message de ChatGPT" width={760} />
</div>

3. ChatGPT répond avec les données de votre compte Callbell.

<div class="text--center">
    <img src={chatgptAnswer} alt="Réponse de ChatGPT avec Callbell" width={760} />
</div>

## Déconnecter ChatGPT

Dans ChatGPT, allez dans **Settings** > **Plugins** et ouvrez **Callbell** :

1. Pour déconnecter votre compte Callbell, cliquez sur **...** à côté de celui-ci, puis sur **Disconnect**.
2. Pour supprimer complètement le plugin, cliquez sur **Uninstall**.

<div class="text--center">
    <img src={chatgptManage} alt="Disconnect et Uninstall dans les paramètres du plugin Callbell" width={760} />
</div>

Vous pouvez aussi retirer l'accès depuis Callbell, voir [Gérer les connexions](./manage_connections.md).
