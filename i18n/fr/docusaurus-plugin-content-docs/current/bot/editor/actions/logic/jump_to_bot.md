---
sidebar_position: 3
---

import jumpToBotAction from './assets/jump_to_bot.png'
import jumpToBotActionBotSelection from './assets/jump_to_bot_select_bot.png'
import jumpToBotActionStepSelection from './assets/jump_to_bot_select_step.png'
import jumpToBotActionPassToChild from './assets/jump_to_bot_pass_to_child.png'
import jumpToBotActionPassToParent from './assets/jump_to_bot_pass_to_parent.png'
import jumpToBotActionExtractTip from './assets/jump_to_bot_extract_tip.png'

# Sauter à un Bot

Cette action vous permet de sauter à un bot différent.

<img src={jumpToBotAction} width={180} />

Cette fonctionnalité peut être utile dans deux cas principaux :

- **Simplifier la logique de bots complexes** : Si la logique de votre bot devient trop complexe, vous pouvez la diviser en parties plus petites et gérables. Cette action vous permet de séparer la logique de votre bot principal en bots plus ciblés.
- **Réutiliser des modèles ou logiques** : Si vous répétez fréquemment un modèle ou une logique spécifique dans votre bot, vous pouvez créer un bot "modèle" réutilisable. Ce cas d'utilisation avancé peut faire gagner du temps, réduire la complexité et minimiser les erreurs lors de la création de bots.

:::tip
Lorsque vous utilisez la fonction copier/coller dans le créateur de bots, vous pouvez extraire le contenu copié dans un nouveau bot. Par défaut, cette fonction remplacera automatiquement la section que vous avez initialement copiée par une action de "sauter à un bot".

<div class="text--center">
    <img src={jumpToBotActionExtractTip} width={500} />
</div>
:::

## Comment l'Utiliser

### 1. Sélection du Bot et Sélection de l'Étape

Tout d'abord, sélectionnez le bot vers lequel vous voulez sauter. Notez que vous ne pouvez sélectionner que des bots utilisant le même canal que votre bot actuel.

<div class="text--center">
    <img src={jumpToBotActionBotSelection} width={500} />
</div>

Après avoir sélectionné le bot, une fenêtre contextuelle apparaîtra vous invitant à sélectionner l'étape ou l'action spécifique dans le bot cible. Faites attention lors du choix de cette étape. Si le bot enfant dépend de variables initialisées avant l'étape sélectionnée, vous devrez peut-être spécifier leurs valeurs (voir étape 2 ci-dessous).

<div class="text--center">
    <img src={jumpToBotActionStepSelection} width={500} />
</div>

### 2. Passer des Valeurs au Bot Enfant

Dans certains cas, vous voudrez peut-être passer des valeurs du bot parent au bot enfant. Utilisez le bouton "Ajouter une Valeur" pour transférer des données. Chaque ligne vous permet de configurer une variable dans le bot enfant avec n'importe quelle valeur que vous choisissez. Vous pouvez passer des valeurs fixes ou utiliser des variables du bot parent :

<div class="text--center">
    <img src={jumpToBotActionPassToChild} width={500} />
</div>

### 3. Retourner au Bot Parent Après le Bot Enfant

Dans d'autres cas, vous voudrez peut-être continuer le flux du bot parent une fois que le bot enfant est terminé. Au lieu de créer une action distincte de "sauter à un bot" dans le bot enfant pour retourner au parent, activez simplement l'option "Continuer le flux ici après la fin du bot enfant". Cela garantit que, lorsque le bot enfant a terminé sa tâche, il revient automatiquement au bot parent.

Vous pouvez également utiliser les valeurs enregistrées pendant l'exécution du bot enfant dans le bot parent. Pour cela, enregistrez les valeurs du bot enfant dans des variables du bot parent :

<div class="text--center">
    <img src={jumpToBotActionPassToParent} width={500} />
</div>
