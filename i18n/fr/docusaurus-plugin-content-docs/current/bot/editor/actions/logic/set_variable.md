---
sidebar_position: 4
---

import setVariableUrl from './assets/set_variable.png'
import setVariableEditUrl from './assets/set_variable_edit.png'

# Définir une variable

<img src={setVariableUrl} width={180} />

L'action **Définir une variable** est utilisée pour définir une variable à une valeur spécifique.

## Comment l'utiliser

Après avoir ajouté l'action, vous pouvez sélectionner une variable existante ou en créer une nouvelle. Dans ce dernier cas, il vous suffit de taper le nom de la variable, puis de cliquer sur le bouton **Créer**.

<img src={setVariableEditUrl} width={400} />

### Création d'une nouvelle variable

La création d'une nouvelle variable vous permet de sélectionner le type de variable. Vous pouvez choisir entre **Chaîne de caractères**, **Nombre** et **Liste**.

Après avoir sélectionné le type de variable, vous pouvez spécifier la valeur de la variable. En fonction du type de variable que vous avez sélectionné, vous pourrez spécifier une opération à appliquer à la variable.

### Variables de type "Chaîne de caractères"

Si vous avez créé ou sélectionné une variable de type **Chaîne de caractères**, vous pouvez effectuer les actions suivantes :

- **Remplacer le texte** - Remplace la valeur de la variable par le texte spécifié.
- **Ajouter au texte** - Ajoute le texte spécifié à la valeur de la variable.

### Variables de type "Nombre"

Si vous avez créé ou sélectionné une variable de type **Nombre**, vous pouvez effectuer les actions suivantes :

- **Remplacer le nombre** - Remplace la valeur de la variable par le nombre spécifié.
- **Ajouter le nombre** - Ajoute le nombre spécifié à la valeur de la variable.
- **Soustraire le nombre** - Soustrait le nombre spécifié de la valeur de la variable.
- **Multiplier par le nombre** - Multiplie la valeur de la variable par le nombre spécifié.
- **Diviser par le nombre** - Divise la valeur de la variable par le nombre spécifié.

:::info
Par défaut, la valeur de la variable est définie à `0`.
:::

### Variables de type "Liste"

Si vous avez créé ou sélectionné une variable de type **Liste**, vous pouvez effectuer les actions suivantes :

- **Ajouter à la liste** - Ajoute le texte spécifié à la liste.
- **Supprimer de la liste** - Supprime le texte spécifié de la liste.
- **Vider la liste** - Vide la liste.

### Utilisation de variables avec d'autres variables

Vous pouvez également utiliser des variables avec d'autres variables. Par exemple, vous pouvez définir une variable sur la valeur d'une autre variable. Cela peut être utile si vous créez une liste de valeurs et que vous souhaitez ajouter une nouvelle valeur à la liste, ou si vous souhaitez suivre le score d'un utilisateur.