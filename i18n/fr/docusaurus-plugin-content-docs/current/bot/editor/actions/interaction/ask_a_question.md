---
sidebar_position: 1
---

import askQuestionSetMessage from './assets/ask_question_set_message.png'
import askQuestionButtonsFlow from './assets/ask_question_buttons_flow.png'
import askQuestionFreeReplyFlow from './assets/ask_question_free_reply_flow.png'
import askQuestionFallback from './assets/ask_question_fallback.png'

# Poser une question

L'action **Poser une question** simplifie l'une des configurations de bot les plus courantes : demander une réponse à l'utilisateur, gérer les relances lorsqu'il ne répond pas et (facultativement) gérer les réponses invalides.

## Comment l'utiliser

L'action est divisée en deux sections : **configuration du message** et **configuration du fallback**.

## Étape 1 : Configuration du message

### 1. Rédigez le message

Rédigez la question ou le message que vous souhaitez envoyer à l'utilisateur.

### 2. Ajoutez des boutons ou une liste (facultatif)

Vous pouvez éventuellement ajouter des boutons interactifs ou une liste d'options parmi lesquelles l'utilisateur pourra choisir.

<div class="text--center">
    <img src={askQuestionSetMessage} width={400} />
</div>

**Avec des boutons ou une liste,** chaque option que vous ajoutez crée automatiquement sa propre sortie dans le flux, ce qui vous permet de définir une suite différente pour chaque choix.

<div class="text--center">
    <img src={askQuestionButtonsFlow} width={700} />
</div>

**Sans boutons ni liste,** toute réponse est acceptée. Le flux se poursuit à partir d'une seule sortie « Répondue ». Si vous avez besoin de suites différentes selon ce que l'utilisateur a répondu, ajoutez-les comme sorties personnalisées sous « Répondue ».

<div class="text--center">
    <img src={askQuestionFreeReplyFlow} width={500} />
</div>

## Étape 2 : Configuration du fallback

<div class="text--center">
    <img src={askQuestionFallback} width={400} />
</div>

### 1. Temps d'attente maximal

Définissez combien de temps l'action doit attendre une réponse avant de déclencher une relance. Vous pouvez choisir de 5 minutes jusqu'à 23 heures.

### 2. Nombre de messages de relance

Choisissez combien de rappels automatiques envoyer si l'utilisateur ne répond pas. Définissez **0** pour désactiver les relances, ou jusqu'à un maximum de **5**.

### 3. Message de relance

Rédigez le message de rappel envoyé une fois le temps d'attente écoulé.

### 4. Nombre d'erreurs autorisées

Définissez combien de réponses invalides l'utilisateur peut donner avant que le flux ne passe au chemin d'erreur. Cette option n'apparaît que lorsque des boutons ou une liste sont configurés, car une réponse n'est considérée comme invalide que lorsqu'elle ne correspond à aucune des options. Si aucun bouton ni liste n'est configuré, toute réponse est valide et cette option est masquée.

### 5. Message d'erreur

Rédigez le message envoyé lorsque la réponse de l'utilisateur ne correspond à aucune des options configurées. Obligatoire si vous définissez 1 erreur autorisée ou plus.

## Comment les nœuds sont créés automatiquement

| Configuration | ✅ Nœud(s) de succès | ❌ Nœud d'erreur | ⌛️ Nœud de fallback programmé |
| :-: | :-: | :-: | :-: |
| **Sans boutons/liste (réponse libre)** | Une seule sortie « Répondue » (ajoutez des sorties personnalisées en dessous si nécessaire) | Non créé | Configuré automatiquement |
| **Boutons** | Un nœud par bouton | Lorsque la réponse n'est pas l'un des boutons | Configuré automatiquement |
| **Liste** | Un nœud par option | Lorsque la réponse n'est pas l'une des options | Configuré automatiquement |

Pour les **boutons** et les **listes**, chaque option crée automatiquement son propre chemin de sortie dans le flux, ce qui vous permet de définir des suites différentes pour chaque choix sans aucune configuration supplémentaire.
