---
sidebar_position: 2
---

import claudeOpenConnectors from './assets/claude_open_connectors.png'
import claudeAddCustomConnector from './assets/claude_add_custom_connector.png'
import claudeConnect from './assets/claude_connect.png'
import callbellConsent from './assets/callbell_consent.png'
import claudeToolPermissions from './assets/claude_tool_permissions.png'
import claudeEnableInChat from './assets/claude_enable_in_chat.png'
import claudeToolApproval from './assets/claude_tool_approval.png'
import claudeChatAnswer from './assets/claude_chat_answer.png'

# Connecter Claude

Ce guide connecte Callbell à [Claude](https://claude.ai) en tant que connecteur personnalisé. Vous le configurez une seule fois sur claude.ai, et Callbell est ensuite aussi disponible dans les applications Claude pour ordinateur et mobile.

Les libellés de l'interface de Claude sont indiqués en anglais, comme sur les captures d'écran.

:::info Offres
Les connecteurs personnalisés sont disponibles avec toutes les offres Claude (l'offre Free est limitée à un connecteur personnalisé). Avec les offres **Team** et **Enterprise**, seul un Owner de l'organisation peut ajouter un connecteur personnalisé : voir [Offres Team et Enterprise](#team-and-enterprise-plans) ci-dessous.
:::

## Étape 1 : ajouter le connecteur Callbell

1. Dans Claude, cliquez sur **Customize** dans la barre latérale, puis sur **Connectors**.
2. Cliquez sur **+ Add**, puis sur **Add custom connector**.

<div class="text--center">
    <img src={claudeOpenConnectors} alt="Customize, Connectors, Add, Add custom connector" width={800} />
</div>

3. Remplissez le formulaire :
    - **Name** : `Callbell`
    - **MCP server URL** : `https://ai.callbell.eu/mcp`
4. Cliquez sur **Continue**.

<div class="text--center">
    <img src={claudeAddCustomConnector} alt="Formulaire Add custom connector rempli avec Callbell et https://ai.callbell.eu/mcp" width={560} />
</div>

Si Claude affiche ensuite des paramètres d'authentification, laissez la connexion activée et, sous **OAuth client**, choisissez **Register automatically**. Cliquez ensuite sur **Add**.

### Offres Team et Enterprise {#team-and-enterprise-plans}

Avec les offres Team et Enterprise, un Owner ajoute Callbell une seule fois pour toute l'organisation :

1. Allez dans **Organization settings** > **Connectors**.
2. Cliquez sur **Add**, choisissez **Custom**, puis **Web**.
3. Saisissez les mêmes **Name** et **MCP server URL** que ci-dessus, puis confirmez.

Les membres trouvent ensuite **Callbell** (avec l'étiquette **Custom**) dans **Customize** > **Connectors** et passent directement à l'étape 2. Chaque membre se connecte avec son propre identifiant Callbell.

## Étape 2 : connecter votre compte Callbell {#step-2-connect-your-callbell-account}

1. Ouvrez le connecteur **Callbell** et cliquez sur **Connect**.

<div class="text--center">
    <img src={claudeConnect} alt="Bouton Connect du connecteur Callbell" width={460} />
</div>

2. Claude ouvre Callbell. Connectez-vous avec votre utilisateur Callbell si vous n'êtes pas déjà connecté.
3. Vérifiez la demande d'accès :
    1. Cochez **Autoriser Claude à effectuer des modifications** uniquement si vous voulez que Claude envoie des messages, modifie des contacts, ajoute des notes et ferme des conversations. Laissez la case décochée pour un accès en lecture seule.
    2. Cliquez sur **Autoriser**.

<div class="text--center">
    <img src={callbellConsent} alt="Page de consentement de Callbell avec la case pour autoriser les modifications et le bouton Autoriser" width={800} />
</div>

Vous revenez dans Claude, et le connecteur Callbell affiche maintenant ses outils.

## Étape 3 : choisir quand Claude peut utiliser chaque outil

La page du connecteur liste les outils Callbell. Par défaut, Claude vous demande votre accord avant chaque utilisation (**Needs approval**). Utilisez les icônes à côté de chaque outil, ou le menu à côté de chaque groupe, pour laisser Claude utiliser un outil sans demander, vous demander à chaque fois, ou ne jamais l'utiliser.

<div class="text--center">
    <img src={claudeToolPermissions} alt="Permissions des outils du connecteur Callbell" width={700} />
</div>

:::tip
Gardez **Needs approval** sur les outils d'écriture (envoyer des messages, modifier des contacts, ajouter des notes, fermer des conversations) pour vérifier chaque modification avant que Claude ne la fasse.
:::

## Étape 4 : utiliser Callbell dans une conversation

1. Dans une conversation, cliquez sur **+**, puis sur **Connectors**, et vérifiez que **Callbell** est activé.

<div class="text--center">
    <img src={claudeEnableInChat} alt="L'interrupteur Callbell dans le menu Connectors d'une conversation" width={520} />
</div>

2. Posez une question sur votre compte Callbell, par exemple « Quelles équipes avons-nous dans Callbell ? ». Quand Claude veut utiliser un outil Callbell, il vous demande d'abord : cliquez sur **Allow once**, ou sur **Always allow** pour ne plus être sollicité pour cet outil.

<div class="text--center">
    <img src={claudeToolApproval} alt="Claude demande à utiliser List teams de Callbell" width={620} />
</div>

3. Claude répond avec les données de votre compte Callbell.

<div class="text--center">
    <img src={claudeChatAnswer} alt="Réponse de Claude après avoir utilisé le connecteur Callbell" width={700} />
</div>

## Déconnecter Claude

Sur la page du connecteur Callbell dans Claude, cliquez sur **Disconnect**. Vous pouvez aussi retirer l'accès depuis Callbell, voir [Gérer les connexions](./manage_connections.md).
