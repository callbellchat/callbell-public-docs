---
sidebar_position: 3
---

import urlParams from './assets/url_params.png'
import queryParams from './assets/query_params.png'
import responseQuickView from './assets/response_quick_view.png'
import webhookValidationErrors from './assets/webhook_validation_errors.png'
import parameterVariable from './assets/parameter_variable.png'
import pathHelper from './assets/path_helper.png'
import flatMapExemple from './assets/flat_map_exemple.png'
import responseFailureVariable from './assets/response_failure_variable.png'
import failureHandling from './assets/failure_handling.png'
import simulatorWebhookChoices from './assets/simulator_webhook_choices.png'
import fakeSuccessWebhook from './assets/fake_success_webhook.png'
import multipleResponseVariables from './assets/multiple_response_variables.png'

# Webhook

Cette action vous permet d'envoyer des requêtes HTTP à n'importe quel service externe.
C'est utile pour envoyer des informations du bot à un autre service ou pour récupérer des informations d'un autre service et les utiliser dans le bot.

:::tip
Avant d'utiliser cette action, vous devez avoir des connaissances techniques sur les [requêtes HTTP et leurs paramètres] (https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview).
:::

<iframe width="100%" height="500" src="https://www.youtube.com/embed/0pbU9KPXcWI" title="Comment utiliser l'action &quot;Webhook&quot ; - Callbell Chatbot" frameborder="0" allow="accelerometer ; autoplay ; clipboard-write ; encrypted-media ; gyroscope ; picture-in-picture ; web-share" allowfullscreen></iframe>

## Comment fonctionne cette action

Voici quelques explications sur le fonctionnement et les limites de cette action :

- Le robot exécute toujours cette action de manière synchrone, ce qui signifie qu'il attend que la demande reçoive un résultat (succès ou échec) avant de passer à l'étape suivante. Si vous avez plusieurs actions de webhook l'une après l'autre, elles seront exécutées séquentiellement, et non par lots.

- Le délai d'attente pour la requête est fixé en interne à 15 secondes. Toute requête de longue durée échouera au-delà de cette durée.

- Le bot continuera même si votre action webhook échoue pour quelque raison que ce soit.

- Il est de votre responsabilité de gérer la réponse, qu'il s'agisse d'un succès ou d'un échec. Vous devrez spécifier des variables pour stocker les résultats de la requête. Il vous appartient ensuite d'utiliser ces variables plus tard dans le robot, par exemple comme condition dans un bloc de choix.

## Comment l'utiliser

### Paramètres de la requête

Le seul paramètre obligatoire est l'URL. Vous pouvez y ajouter directement des paramètres de requête :

<div class="text--center">
    <img src={urlParams} width={500} />
</div>

ou utiliser l'aide :

<div class="text--center">
    <img src={queryParams} width={500} />
</div>

Tous les autres paramètres (en-têtes et corps) sont facultatifs. Vous pouvez les ajouter selon la même logique, en utilisant les boutons "add header" ou "add body" dans le coin supérieur droit.

:::tip
Vous pouvez insérer des variables pour envoyer des informations précédemment stockées dans n'importe quel champ : URL, paramètres, en-tête ou corps. Il suffit de cliquer sur le petit bouton "variable" à droite.

<div class="text--center">
    <img src={parameterVariable} width={500} />
</div>
:::

Une fois que vous avez choisi la bonne méthode, vous pouvez cliquer sur le bouton "Tester l'URL". Si la demande aboutit, un petit bouton "œil" sur le côté droit apparaîtra, vous permettant de jeter un coup d'œil rapide à la présentation de la réponse :

<div class="text--center">
    <img src={responseQuickView} width={500} />
</div>

### Erreurs de validation de la demande

Lors de la mise en place et du test de l'action, vous pouvez rencontrer différents types d'erreurs :

<div class="text--center">
    <img src={webhookValidationErrors} width={500} />
</div>

Nous traitons vos demandes sur notre serveur et identifions les erreurs courantes :

 <table>
  <tr>
    <th>Type</th>
    <th>Raisons</th>
    <th>Action</th>
  </tr>
  <tr>
    <td>MissingParameter</td>
    <td>Url ou méthode manquante</td>
    <td>Vérifiez que l'URL et la méthode sont correctement spécifiées.</td>
  </tr>
  <tr>
    <td>BadRequest</td>
    <td>URL, corps, paramètres ou en-tête non valides</td>
    <td>Vérifiez la validité de chaque paramètre. Utilisez des clients comme Postman pour vérifier vos paramètres.</td>
  </tr>
  <tr>
    <td>BadResponse</td>
    <td>Statut de la réponse différent de 200 ou la réponse n'est pas au format JSON</td>
    <td>Vérifiez l'état de votre serveur.</td>
  </tr>
  <tr>
    <td>KeyError</td>
    <td>Le chemin spécifié ne correspond pas à la charge utile de la réponse</td>
    <td>Vérifiez la validité du chemin que vous avez saisi dans l'action webhook pour chaque variable</td>.
  </tr>
</table>

### Analyse et stockage des réponses aux requêtes dans des variables

Une fois que votre requête a reçu une réponse positive, vous pouvez choisir une variable qui stockera le résultat. Vous pouvez également sélectionner la partie de la réponse que vous souhaitez stocker en utilisant l'aide "path" :

<div class="text--center">
    <img src={pathHelper} width={500} />
</div>

Si vous essayez de sélectionner un tableau comme valeur, l'aide vous suggérera d'utiliser la fonction `flatMap`, qui vous donne la possibilité d'extraire n'importe quelle valeur du tableau.

Par exemple, supposons que la structure de données de la réponse à votre requête ressemble à ceci :

```
{
  "products" : [
    {
      "id" : 1,
      "title" : "iPhone 9",
      "description" : "Un mobile à la pomme qui n'a rien à voir avec la pomme",
      "prix" : 549,
      "note" : 4.69,
      "stock" : 94,
      "marque" : "Apple",
      "catégorie" : "smartphones",
      "images" : [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",
        "https://cdn.dummyjson.com/product-images/1/2.jpg"
      ]
    },
    {
      "id" : 2,
      "title" : "iPhone X",
      "description" : "Sans SIM, modèle A19211 Écran Super Retina HD de 6,5 pouces avec technologie OLED Puce A12 Bionic avec ...",
      "prix" : 899,
      "note" : 4.44,
      "stock" : 34,
      "marque" : "Apple",
      "catégorie" : "smartphones",
      "images" : [
        "https://cdn.dummyjson.com/product-images/2/1.jpg"
      ]
    }
  ]
}
```

Et vous voulez stocker dans la variable `webhook success` un tableau de titres de produits uniquement :

```
["iPhone 9", "iPhone X"]
```

L'utilisation de la valeur suivante répondra à votre besoin :

<div class="text--center">
    <img src={flatMapExemple} width={500} />
</div>

Si vous souhaitez accéder à la catégorie du deuxième produit, vous pouvez utiliser ce chemin à la place :

```
produits[1].catégorie
```

:::tip
Vous pouvez stocker plusieurs parties de la réponse dans des variables différentes. Cela vous évitera d'exécuter la même requête webhook plusieurs fois.

<div class="text--center">
    <img src={multipleResponseVariables} width={500} />
</div>
:::

### Traitement des demandes échouées

Il est possible que même après avoir correctement configuré votre action webhook, celle-ci échoue occasionnellement (erreurs de serveur, paramètres mal gérés, etc.).
Si le comportement de votre robot dépend du résultat de la requête, il est important de gérer les erreurs.
Le bot stockera toutes les erreurs dans la variable que vous avez spécifiée, ou utilisera la variable `last webhook failure` :

<div class="text--center">
    <img src={responseFailureVariable} width={500} />
</div>

C'est à vous de gérer cette erreur ou non. La meilleure façon est de créer une variable spécifique pour chaque webhook, puis de vérifier via un bloc de choix si la variable contient un message :

<div class="text--center">
    <img src={failureHandling} width={600} />
</div>

## Testez votre requête dans le simulateur

Vous devriez toujours vérifier que votre bot se comporte comme prévu via le simulateur, en vous assurant que les requêtes réussies et échouées sont gérées correctement.
Lorsque le simulateur atteint une action webhook, contrairement au bot réel, il se met en pause et vous invite à spécifier à quoi la requête doit ressembler :

<div class="text--center">
    <img src={simulatorWebhookChoices} width={500} />
</div>

- Faux succès : Une fenêtre modale s'ouvrira pour spécifier la charge utile de la requête réussie. Ensuite, il utilisera chaque chemin que vous avez spécifié dans l'action du webhook pour analyser et stocker les variables correspondantes. Notez que si vous stockez dans une variable de type liste, le simulateur s'attend à ce que le payload que vous fournissez contienne un tableau au bon chemin. Si ce n'est pas le cas, une erreur sera affichée dans la fenêtre modale, empêchant toute progression.

<div class="text--center">
    <img src={fakeSuccessWebhook} width={500} />
</div>

- Faux échec : Il affichera la même fenêtre modale et vous permettra de spécifier le payload à sauvegarder dans la variable fail que vous avez spécifiée dans l'action.

- Déclencher un véritable webhook : il transmettra votre demande à notre serveur et renverra le résultat réel. Cela peut être utile pour vérifier que tout fonctionne correctement, mais n'oubliez pas que vous ferez une vraie demande HTTP. Si vous prévoyez d'ajouter un utilisateur à votre CRM via l'action webhook, l'utilisation de ce choix dans le simulateur peut ajouter des données non désirées à votre CRM.
