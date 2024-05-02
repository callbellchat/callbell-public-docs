---
sidebar_position: 3
---

import openAIAPIKey from './assets/openAI_api_key.png'

# OpenAI

Cette action permet de générer du texte en fonction d'un stimulus et des messages précédents de la conversation. Elle peut être utilisée dans divers scénarios, allant des interactions de style conversationnel classique avec un assistant à des actions spécifiques telles que la résumé de conversations pour vos agents, la fourniture de conseils ou la détection de comportements utilisateur potentiels. L'efficacité de l'action dépend largement de la qualité du stimulus fourni.

:::tip
Avant d'utiliser cette action, il est recommandé de se familiariser avec l'ingénierie de stimulus, disponible [ici](https://platform.openai.com/docs/guides/prompt-engineering).
:::

<iframe width="100%" height="500" src="https://www.youtube.com/embed/qvKuamQ207k" title="Comment utiliser l'action &quot;OpenAI&quot; - Chatbot Callbell" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Fonctionnement de cette action

Voici quelques explications sur le fonctionnement de cette action et ses limitations :

- Le bot exécute toujours cette action de manière synchrone, c'est-à-dire qu'il attend que l'API OpenAI renvoie une réponse avant de passer à l'étape suivante. De manière similaire à l'action Webhook, si vous avez plusieurs actions OpenAI consécutives, elles seront exécutées séquentiellement plutôt que par lots.

- Le bot poursuivra son flux même si l'action OpenAI échoue pour une raison quelconque, comme un délai d'attente.

- Il est de votre responsabilité de gérer la réponse, qu'elle soit réussie ou non. Vous devrez spécifier des variables pour stocker la réponse OpenAI. Ensuite, c'est à vous d'utiliser ces variables plus tard dans le bot, par exemple, comme conditions dans un bloc de choix, dans des messages ou des notes.

## Comment l'utiliser

Seuls le jeton et le stimulus sont obligatoires.

### Paramètre Jeton OpenAI

Vous pouvez trouver la clé API sur votre [compte OpenAI](https://platform.openai.com/api-keys).

:::tip
Vous pouvez directement coller la clé dans le champ d'entrée, ou vous pouvez la sauvegarder en tant que variable avec une valeur par défaut, ce qui peut être utile pour la réutilisation dans plusieurs actions :

<div class="text--center">
    <img src={openAIAPIKey} width={500} />
</div>
:::

### Paramètre Stimulus

Le stimulus vous permet de construire un assistant personnalisé. Vous pouvez y insérer des variables pour le rendre plus dynamique.

### Messages précédents analysés

<table>
  <tr>
    <th>Type</th>
    <th>Action</th>
  </tr>
  <tr>
    <td>Tous les messages de la conversation</td>
    <td>Envoie l'ensemble de la conversation à OpenAI. Chaque message envoyé est interprété comme "Assistant" par OpenAI, et chaque message reçu est interprété comme "Utilisateur".</td>
  </tr>
  <tr>
    <td>Seulement de la session de bot actuelle</td>
    <td>Envoie les messages dans le même "fil de discussion" à partir du dernier redémarrage du bot dans la conversation.</td>
  </tr>
  <tr>
    <td>Seulement le dernier message</td>
    <td>La dernière réponse de l'utilisateur.</td>
  </tr>
  <tr>
    <td>Seulement le stimulus</td>
    <td>Seul le stimulus est utilisé pour interroger l'API OpenAI.</td>
  </tr>
</table>

### Gestion de la réponse OpenAI

Même après avoir correctement configuré votre action OpenAI, des échecs occasionnels (principalement dus à des délais d'attente) peuvent survenir. Si le comportement de votre bot dépend de la réponse OpenAI, il est crucial de gérer les erreurs de manière appropriée. Toutes les erreurs rencontrées seront stockées dans la variable spécifiée, ou utiliseront la variable `last webhook failure` :

Il vous appartient de décider comment gérer ces erreurs. L'approche recommandée est de créer une variable spécifique pour chaque webhook, puis d'utiliser un bloc de choix pour vérifier si la variable contient un message.
