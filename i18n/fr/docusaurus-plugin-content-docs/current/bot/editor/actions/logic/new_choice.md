---
sidebar_position: 2
---

import newChoiceUrl from './assets/new_choice.png'
import newChoiceEditUrl from './assets/new_choice_edit.png'
import newChoiceFallbackUrl from './assets/new_choice_fallback.png'

# Nouveau Choix

<img src={newChoiceUrl} width={180} />

Cette action vous permet de créer un nouveau choix dans le flux actuel.

## Configuration

L'action vous permet de personnaliser **le comportement du flux** en fonction du dernier message envoyé par l'utilisateur ou d'une valeur de variable.

<img src={newChoiceEditUrl} width={300} />

### Déclencheurs de choix

Vous pouvez spécifier un **déclencheur** du choix en utilisant l'un des opérateurs d'égalité suivants :

- **Égal à** - Le choix est déclenché si la valeur est égale à la valeur du champ de droite.
- **Contient** - Le choix est déclenché si la valeur contient la valeur du champ de droite.
- **Commence par** - Le choix est déclenché si la valeur commence par la valeur spécifiée dans le champ de droite.
- **Se termine par** - Le choix est déclenché si la valeur se termine par la valeur spécifiée dans le champ de droite.
- **Différent de** - Le choix est déclenché si la valeur est différente de la valeur du champ de droite.
- **Supérieur à** - Le choix est déclenché si la valeur est supérieure à la valeur du champ de droite.
- **Inférieur à** - Le choix est déclenché si la valeur est inférieure à la valeur du champ de droite.
- **Supérieur ou égal à** - Le choix est déclenché si la valeur est supérieure ou égale à la valeur du champ de droite.
- **Inférieur ou égal à** - Le choix est déclenché si la valeur est inférieure ou égale à la valeur du champ de droite.
- **Est un nombre** - Le choix est déclenché si la valeur est un nombre.
- **Est un message** - Le choix est déclenché si la valeur est un message.

### Déclencheurs multiples

Vous pouvez spécifier plusieurs déclencheurs sur la même condition en cliquant sur le bouton **Ajouter une condition**.

Vous pouvez décider comment combiner les conditions multiples en utilisant les opérateurs **ET** ou **OU**. Si vous souhaitez passer d'un opérateur à l'autre, cliquez sur le bouton **ET** ou **OU**.

Par exemple, en utilisant plusieurs **OU**, vous pouvez créer une liste de synonymes pour le même choix. Cela est utile si vous souhaitez déclencher le même choix pour différents mots.

En même temps, vous pouvez utiliser plusieurs **ET** pour créer une liste de conditions qui doivent être satisfaites pour déclencher le choix. Par exemple, imaginez vérifier la condition d'une variable pour qu'elle soit supérieure à une certaine valeur et inférieure à une autre.

### Variables

Vous pouvez comparer les valeurs des variables, ce qui signifie que vous pouvez prendre une décision en fonction de la valeur d'une variable. Cela est utile lorsque vous souhaitez rediriger le bot vers un chemin spécifique sans avoir à demander à l'utilisateur une saisie.

### Solution de secours

Si aucune des conditions n'est satisfaite, le bot empruntera le chemin de **Solution de secours**.

<img src={newChoiceFallbackUrl} width={500} />

Les solutions de secours sont utiles lorsque vous souhaitez gérer tous les cas qui ne sont pas couverts par les conditions.