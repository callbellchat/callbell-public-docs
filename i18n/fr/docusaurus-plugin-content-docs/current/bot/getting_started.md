---
sidebar_position: 2
---

# Commencer

Ce guide étape par étape vous guidera dans la création de votre premier chatbot avec Callbell.

## Prérequis

Vous devez créer un compte sur Callbell et avoir configuré au moins **1 canal** afin de pouvoir suivre ce guide.

- Inscrivez-vous sur [Callbell](https://dash.callbell.eu/users/sign_up)
- Consultez plus d'informations sur notre [intégration de l'API WhatsApp Business](https://callbellsupport.zendesk.com/hc/en-us/articles/360007805898-How-to-integrate-WhatsApp-into-Callbell-through-the-WhatsApp-Business-APIs) pour utiliser le générateur de flux du bot avec WhatsApp.

## Créer votre premier chatbot

Accédez à la section **Bot Builder** dans la barre latérale gauche et cliquez sur le bouton **Créer un nouveau bot**:

![create_new_bot](./assets/create_new_bot.png)

Une fenêtre modale s'ouvrira vous demandant de choisir un nom pour votre bot et le canal que vous souhaitez utiliser avec celui-ci:

![create_new_bot_modal](./assets/create_new_bot_modal.png)

Après avoir cliqué sur le bouton **Créer bot**, vous serez redirigé vers la page du générateur de bot où vous pourrez commencer à créer votre premier chatbot:

![bot_builder](./assets/bot_builder.png)

## Ajouter une nouvelle action

Pour que le bot fonctionne, vous devrez ajouter au moins une action. Par exemple, répondons à l'utilisateur avec un message lorsqu'il envoie un message au bot.

Cliquez sur le bouton **Ajouter une nouvelle action** et sélectionnez l'action **Envoyer un message**:

![add_new_action](./assets/add_new_action.png)

Un panneau s'ouvrira vous permettant de configurer l'action. Dans ce cas, nous ajouterons simplement un message texte simple:

![add_new_action_panel](./assets/add_new_action_panel.png)

Après avoir cliqué sur le bouton **Enregistrer**, vous serez redirigé vers la page du générateur de bot où vous pourrez voir l'action que vous venez de créer:

![bot_builder_action](./assets/bot_builder_action.png)

## Testez votre bot

Pour tester votre bot, vous devez cliquer sur le bouton **Exécuter le simulateur** dans le coin supérieur droit de la page. Cela ouvrira un panneau où vous pourrez tester votre nouveau flux:

![run_simulator](./assets/run_simulator.png)

Cliquez simplement sur le bouton **Envoyer** et vous verrez le bot répondre avec le message que vous venez de configurer:

![run_simulator_reply](./assets/run_simulator_reply.png)

## Publiez votre bot

Une fois satisfait de votre bot, vous pouvez le publier en cliquant sur le bouton **Publier le brouillon** dans le coin supérieur droit de la page:

![publish_bot](./assets/publish_bot.png)

Après avoir cliqué sur le bouton **Publier le brouillon** et confirmé, votre flux de bot sera publié; en même temps, vous devrez **activer votre bot** pour le rendre disponible à vos clients. Vous pouvez le faire en revenant à la section "Bots" dans la barre latérale droite et en cliquant sur le bouton **Activer le bot**:

![enable_bot](./assets/enable_bot.png)

Vous pouvez confirmer que le bot est activé en vérifiant son statut dans la section "Bots":

![bot_enabled](./assets/bot_enabled.png)

## Testez votre bot en production

Maintenant que votre bot est activé, vous pouvez le tester en production en envoyant un message sur le canal que vous avez configuré. Dans ce cas, nous enverrons un message au numéro WhatsApp que nous avons configuré dans la section [Prérequis](#prerequisites):

![test_bot_in_production](./assets/test_bot_in_production.gif)

## Et ensuite?

Maintenant que vous avez créé votre premier chatbot, vous pouvez commencer à explorer les autres actions disponibles dans le générateur de bot.