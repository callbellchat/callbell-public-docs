---
sidebar_position: 9
---

import agentFlowImage1 from './assets/agent_flow_1.png'
import agentFlowImage2 from './assets/agent_flow_2.png'
import agentFlowImage3 from './assets/agent_flow_3.png'
import agentFlowImage4 from './assets/agent_flow_4.png'

# Flux Agent IA

L'action **Flux Agent IA** vous permet d'exécuter un agent IA directement à l'intérieur de votre bot, ce qui permet des conversations entièrement automatisées avec vos clients en fonction des objectifs et du comportement que vous avez définis.

:::note
Avant d'utiliser cette action, vous devez créer au moins un agent IA. Consultez le [guide de configuration de l'agent IA](https://callbellsupport.zendesk.com/hc/articles/27593692327324) pour commencer.
:::

## Comment l'utiliser

1. Ajoutez l'action **Flux Agent IA** à votre flux de bot.
2. Sélectionnez l'agent IA que vous souhaitez utiliser dans le menu déroulant **Agent IA sélectionné**.
3. Cliquez sur **Enregistrer**.

L'action sera ajoutée à votre flux avec ses nœuds de motifs de sortie, qui définissent ce qui se passe une fois que l'agent a terminé — ou interrompu — la gestion de la conversation.

<div class="text--center">
    <img src={agentFlowImage1} width={500} />
</div>

## Motifs de sortie

Les motifs de sortie définissent les différents chemins que le flux de bot peut emprunter une fois que l'agent IA s'arrête. Il y a **4 motifs de sortie par défaut** et **3 facultatifs** que vous pouvez ajouter en fonction de votre cas d'usage.

### Motifs de sortie par défaut

| Motif de sortie | Quand il se déclenche |
| --- | --- |
| **Objectif atteint** | L'agent détermine que l'objectif défini dans la configuration de l'agent IA a été atteint. Une note interne contenant le résultat de l'agent est ajoutée automatiquement. |
| **Demande d'un humain** | Le client demande explicitement à parler à un humain. L'agent cesse d'envoyer des messages et le flux continue sur ce chemin. Il est recommandé d'attribuer la conversation à une équipe ou à un agent à ce stade. |
| **Aucune réponse** | Le client cesse de répondre. Par défaut, l'agent envoie 2 messages de relance avec un intervalle de 5 minutes entre chacun. S'il n'y a toujours pas de réponse, le flux continue sur ce chemin. Le nombre de relances et le temps d'attente peuvent être personnalisés dans les **Paramètres avancés**. |
| **Erreur** | Se déclenche lorsqu'une erreur inattendue se produit ou lorsque le portefeuille de crédits IA est épuisé. Utilisez ce chemin pour attribuer la conversation à un agent humain ou la rediriger vers un flux de bot traditionnel à chemin fixe. |

### Motifs de sortie facultatifs

En plus des 4 motifs de sortie par défaut, vous pouvez en ajouter jusqu'à 3 facultatifs pour un contrôle plus granulaire :

<div class="text--center">
    <img src={agentFlowImage2} width={500} />
</div>

| Motif de sortie | Quand il se déclenche |
| --- | --- |
| **Utilisateur non intéressé** | Le client déclare explicitement qu'il n'est pas intéressé par la conversation, le service ou le produit. |
| **Utilisateur frustré** | Le client montre des signes de frustration ou de colère face aux réponses de l'agent. |
| **Portefeuille de crédits IA épuisé** | Se déclenche spécifiquement lorsque le portefeuille de crédits IA est épuisé, ce qui vous permet de personnaliser ce qui se passe dans ce scénario indépendamment du chemin d'**Erreur** générique. En savoir plus sur les [crédits IA](https://callbellsupport.zendesk.com/hc/articles/27543940082844). |

## Connaissances supplémentaires (facultatif)

L'action comprend un champ de texte libre où vous pouvez transmettre à l'agent IA des informations dynamiques collectées précédemment dans le flux de bot. Ceci est utile lorsque vous souhaitez enrichir le contexte de l'agent avec des données provenant de sources externes, telles qu'une action [Webhook](/bot/editor/actions/logic/webhook) ou [Google Sheets](/bot/editor/actions/logic/google_spreadsheets).

<div class="text--center">
    <img src={agentFlowImage3} width={500} />
</div>

**Exemple :** récupérer le statut de commande d'un client depuis un outil externe via un webhook, le stocker dans une variable et le transmettre à l'agent afin qu'il puisse se référer à cette information pendant la conversation.

## Paramètres avancés

<div class="text--center">
    <img src={agentFlowImage4} width={500} />
</div>

| Paramètre | Description |
| --- | --- |
| **Autoriser l'agent à créer des boutons** | Permet à l'agent IA d'envoyer des messages avec des boutons interactifs. L'agent peut inclure jusqu'à 3 boutons par message. |
| **Autoriser l'agent à relancer l'utilisateur** | Définit le nombre de messages de relance automatiques que l'agent enverra si le client cesse de répondre. |
| **Délai de relance** | Définit le temps que l'agent attend avant d'envoyer un message de relance. Les options vont de 5 minutes à 23 heures. |
