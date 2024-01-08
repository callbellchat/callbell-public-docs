---
sidebar_position: 2
---

# Utilisation de Trigger dans Zapier

Ici, nous vous montrerons comment utiliser Callbell dans Zapier en tant que **Trigger**

## Callbell en tant que Trigger

Assurez-vous de sélectionner la bonne application Callbell (la plus récente) :

![Intégration Callbell](../assets/select-trigger.png)

Notre intégration Callbell vous permet d'utiliser Callbell en tant que déclencheur. Cela signifie que vous pouvez envoyer des données depuis Callbell vers d'autres applications.

### Triggers pris en charge

- Contact créé
- Contact mis à jour
- Contact supprimé
- Message créé
- Mise à jour du statut du message
- Événement entrant (ancien déclencheur)

Nous vous recommandons d'utiliser les 5 premiers déclencheurs, car le dernier sera obsolète à un moment donné.

#### Contact créé

Ce déclencheur sera activé lorsqu'un nouveau contact est créé dans Callbell.

#### Contact mis à jour

Ce déclencheur sera activé lorsqu'un contact est mis à jour dans Callbell.

#### Contact supprimé

Ce déclencheur sera activé lorsqu'un contact est supprimé dans Callbell.

#### Message créé

Ce déclencheur sera activé lorsqu'un nouveau message est créé dans Callbell. Le message peut être entrant ou sortant.

#### Mise à jour du statut du message

Ce déclencheur sera activé lorsqu'un statut de message est mis à jour dans Callbell.

## Exemple avec le déclencheur Contact créé

Disons que vous avez un CRM externe et que vous souhaitez envoyer des données de Callbell vers votre CRM. Vous pouvez utiliser Zapier pour envoyer les données de Callbell vers votre CRM.

Callbell est le **Trigger** et votre CRM est l'**Action**.

Configurez votre Zap :

![Zapier Trigger et Action](../assets/trigger+action.png)

### Étape 1 : Configurez votre Trigger

Dans cet exemple, nous utiliserons Callbell comme Trigger.

Sélectionnez Callbell comme application Trigger, puis sélectionnez le déclencheur "Contact Created".

### Étape 2 : Configurez votre Action

Sélectionnez votre CRM comme application Action.

Ensuite, cliquez sur "Continuer". On vous demandera de connecter votre compte CRM à Zapier.

Une fois que vous avez connecté votre compte CRM, vous devrez configurer l'action.

Sélectionnez les données que vous souhaitez envoyer à votre CRM.

Ensuite, cliquez sur "Continuer".

Ensuite, cliquez sur "Test & Continue".

Ensuite, cliquez sur "Turn on Zap".

### Étape 3 : Testez votre Zap

Une fois que vous avez activé votre Zap, vous pouvez le tester en créant un nouveau contact dans Callbell.