---
sidebar_position: 8
---

import googleCredentials from './assets/google_credentials.png'
import googleCredentialsWarning from './assets/google_credentials_warning.png'
import googleCalendarVariables from './assets/google_calendar_variables.png'
import googleCalendarFullSetup from './assets/google_calendar_full_setup.png'
import googleCalendarEventCreated from './assets/google_calendar_event_created.png'

# Google Calendar

Cette action permet à votre bot d'interagir avec un Google Calendar en créant des événements dynamiquement lors des interactions avec les utilisateurs.

# Cas d'utilisation :

- Création de rappels dans votre Google Calendar.
- Création de réunions en utilisant des liens de réunion générés automatiquement.

# Comment l'utiliser :

## 1. Ajout d'une action Google Calendar

Pour ajouter une action Google Calendar dans l'éditeur de flux Callbell, suivez ces étapes :

1. Ouvrez le générateur de flux et sélectionnez le point de votre conversation où vous souhaitez intégrer Google Calendar.
2. Ajoutez une nouvelle action en cliquant sur le bouton Ajouter une action et en sélectionnant Google Calendar dans la liste des actions disponibles, dans la section "Logique".

## 2. Authentification à votre compte Google

Cliquez sur le bouton "Connecter à Google" et suivez les instructions.

:::tip
Assurez-vous de sélectionner tous les droits. Le bot Callbell ne fonctionnera pas correctement s'il manque des autorisations.

<div class="text--center">
    <img src={googleCredentials} width={500} />
</div>

Vous pouvez également rencontrer cet avertissement de Google :

<div class="text--center">
    <img src={googleCredentialsWarning} width={500} />
</div>

C'est simplement un avertissement temporaire. Dans ce cas, assurez-vous de continuer en cliquant sur "avancé" puis sur "Continuer avec Callbell"
:::

## 3. Configuration de l'action

Vous devrez configurer l'intégration en remplissant les champs suivants :

**Sélectionnez le calendrier** : Choisissez le Google Calendar avec lequel vous souhaitez interagir. Chaque compte Google peut avoir plusieurs calendriers ; celui étiqueté avec une adresse e-mail est votre calendrier principal.

**Sélectionnez l'action** : Actuellement, `créer un événement` est la seule option disponible.

**Résumé de l'événement** : Le titre de l'événement tel qu'il apparaîtra sur le calendrier.

**Mois de l'événement** : Le mois dans lequel l'événement sera créé.

**Jour de l'événement** : Le jour où l'événement sera créé.

**Début de l'événement** : L'heure à laquelle l'événement commencera. Le format d'heure requis est : `HH:MM`.

**Durée de l'événement (en minutes)** : La durée de l'événement en minutes.

**Envoyer des mises à jour d'événement à** : Les destinataires qui recevront des mises à jour sur l'événement. Les options sont : `None` ou `All`.

**Créer un lien de réunion** : Option pour générer un lien pour une réunion virtuelle associée à l'événement.

:::tip
Vous pouvez utiliser des variables pour remplir dynamiquement ces détails.
:::

## 4. Gestion des succès

En cas de réponse réussie de l'API, le résultat indiquera le statut de création de l'événement : `confirmé`. Par défaut, cette valeur sera enregistrée en tant que `Dernier succès du webhook`, mais vous pouvez configurer la variable que vous préférez. Si l'option `Créer un lien de réunion` est active, l'URL de la réunion sera stockée dans la variable.

## 5. Gestion des échecs

En cas d'échec de l'API, vous pouvez stocker la réponse d'échec dans une variable dédiée pour une analyse ou des nouvelles tentatives ultérieures. Vous pouvez, par exemple, imaginer une logique qui vérifie l'échec et réessaye avec une action de "saut".

## 6. Exemple

Voici un exemple de configuration de l'action et de son utilisation avec des variables.

1. Dans cet exemple, nous avons créé 2 variables :

<img src={googleCalendarVariables} width={500} />

2. `Résumé`, `mois` et `durée` ont été définis comme des valeurs fixes.

3. Nous avons utilisé une combinaison d'actions pour récupérer dynamiquement le jour :

- [Envoyer un message](/bot/editor/actions/interaction/send_message) pour envoyer le message demandant quel jour convient le mieux.
- [Attendre la réponse de l'utilisateur](/bot/editor/actions/interaction/wait_user_answer) pour obtenir la réponse.
- [Définir une variable](/bot/editor/actions/logic/set_variable) pour enregistrer le résultat de la réponse dans notre variable `jour`.

4. Nous avons fait la même chose pour récupérer l'`heure`.

5. Maintenant, c'est terminé, voici le résultat :

<img src={googleCalendarFullSetup} width={500} />

<img src={googleCalendarEventCreated} width={500} />

# Bonnes pratiques :

- Assurez-vous toujours que l'API Google est connectée et dispose des autorisations appropriées pour que le bot puisse accéder au calendrier.
- Testez soigneusement l'intégration pour gérer les éventuelles erreurs de l'API (par exemple, problèmes d'accès au calendrier Google, problèmes de format de date incorrect). Le simulateur de bot vous aidera dans cette démarche.