---
sidebar_position: 10
---

import transcribeChoice from './assets/transcribe_1.png'
import transcribeAction from './assets/transcribe_2.png'

# Transcrire un fichier audio

Cette action transcrit les messages audio envoyés par les utilisateurs à l'intérieur d'un flux de bot, en les convertissant en texte et en stockant le résultat dans une variable pour l'utiliser dans les actions suivantes.

:::note
Si vous utilisez l'action [Flux Agent IA](/bot/editor/actions/logic/agent_flow), la transcription audio est déjà gérée automatiquement. Il n'est pas nécessaire d'ajouter cette action séparément si votre bot utilise un agent IA.
:::

## Comment ça fonctionne

Pour transcrire un message audio, vous avez besoin de deux éléments dans votre flux de bot : un moyen de détecter quand l'utilisateur envoie un audio, et l'action Transcrire un fichier audio pour le traiter.

### Étape 1 : Détecter l'audio avec un nœud Choix

Ajoutez un nœud [Nouveau Choix](/bot/editor/actions/logic/new_choice) après une action [Attendre la réponse de l'utilisateur](/bot/editor/actions/interaction/wait_user_answer). Dans le choix, définissez la condition suivante :

- **Type de réponse du dernier utilisateur** → **est** → **Audio**

Cela crée un chemin dédié qui ne se déclenche que lorsque l'utilisateur envoie un message audio. Nommez-le en conséquence (par exemple, « Audio reçu ») pour garder votre flux lisible.

<div class="text--center">
    <img src={transcribeChoice} width={600} />
</div>

### Étape 2 : Ajouter l'action Transcrire un fichier audio

Sur le chemin audio, ajoutez l'action **Transcrire un fichier audio** et configurez les champs décrits ci-dessous.

<div class="text--center">
    <img src={transcribeAction} width={400} />
</div>

## Configuration

### Token OpenAI

La transcription est traitée par **OpenAI**, en dehors de Callbell. Il existe deux options :

- **Géré par Callbell** (recommandé) : aucune configuration nécessaire. Le coût est déduit de votre [portefeuille de crédits IA](https://callbellsupport.zendesk.com/hc/articles/27543940082844).
- **Token personnalisé** : utilisez votre propre clé API OpenAI et payez directement OpenAI.

### Fichier audio à transcrire

Sélectionnez le fichier audio à transcrire :

- **Dernier fichier audio reçu de l'utilisateur :** transcrit le message audio le plus récent reçu dans la conversation.
- **URL audio personnalisée :** transcrit n'importe quel audio en fournissant son URL. Utile lorsque l'audio provient d'une source externe.

### Enregistrer la transcription dans

Sélectionnez la variable dans laquelle le texte transcrit sera enregistré. Cette variable peut ensuite être utilisée dans les actions suivantes, comme l'envoi d'un message, l'ajout d'une note ou la transmission de données à un webhook.

### Stocker l'échec (le cas échéant) dans

Sélectionnez une variable pour stocker un éventuel message d'erreur si la transcription échoue. Cela vous permet de gérer les échecs de manière élégante dans votre flux de bot.
