---
sidebar_position: 3
---

import googleSpreadsheetValidFormat from './assets/google_spreadsheet_valid_format.png'
import googleCredentials from './assets/google_credentials.png'
import googleSpreadsheetInsertLast from './assets/google_spreadsheet_insert_last.png'
import googleSpreadsheetInsert from './assets/google_spreadsheet_insert.png'
import googleSpreadsheetInsert2 from './assets/google_spreadsheet_insert_2.png'
import googleSpreadsheetUpdate from './assets/google_spreadsheet_update.png'
import googleSpreadsheetUpdate2 from './assets/google_spreadsheet_update_2.png'
import googleSpreadsheetSelect from './assets/google_spreadsheet_select.png'
import googleSpreadsheetSelect2 from './assets/google_spreadsheet_select_2.png'

# Google Spreadsheet

Cette action permet à votre bot d'interagir avec un document Google Sheets en insérant, en mettant à jour et en sélectionnant des lignes de manière dynamique au cours des interactions avec l'utilisateur. Elle peut être utilisée pour stocker, récupérer et modifier les données collectées lors des conversations du bot.

# Cas d'utilisation :

- Stockage des réponses des utilisateurs directement dans un fichier Google Sheets en vue d'un traitement ultérieur.
- Mise à jour d'entrées spécifiques dans Google Sheets en fonction des données fournies par l'utilisateur.
- Récupération des données d'une feuille Google pour les utiliser dans une conversation ou comme conditions de choix.

# Comment l'utiliser :

## 1. Ajouter une action Google Sheets

Pour ajouter une action Google Sheets dans l'éditeur de bot Callbell, suivez ces étapes :

1. Ouvrez l'éditeur de bot et sélectionnez le point de votre conversation où vous souhaitez intégrer Google Sheets.
2. Ajoutez une nouvelle action en cliquant sur le bouton "+" et en sélectionnant Google Sheets dans la liste des actions disponibles, dans la section "Logic".

## 2. Authentifiez-vous sur votre compte Google

Cliquez sur le bouton "Google connect" et suivez les instructions.

:::tip
Veillez à sélectionner tous les droits. Le bot Callbell ne fonctionnera pas correctement si l'un des droits "Google Drive File" ou "Google Spreadsheet Sheet" n'est pas sélectionné.

<div class="text--center">
    <img src={googleCredentials} width={500} />
</div>
:::

## 3. Configuration de l'action

Vous devez configurer l'intégration en remplissant les champs suivants :

**Spreadsheet** : Choisissez le document Google Sheets avec lequel vous souhaitez interagir.

**Feuille** : Sélectionnez la feuille spécifique dans le document (par exemple, "Sheet1").

**Action de sélection** :

- Insérer une ligne : permet d'ajouter une nouvelle ligne dans la feuille avec les données de l'utilisateur.
- Mettre à jour une ligne : permet de mettre à jour une ligne existante en fonction des données de l'utilisateur.
- Sélectionner une ligne : Cette action permet de récupérer les données de la feuille pour les afficher dans la conversation du bot.

:::tip
Assurez-vous d'avoir des feuilles de calcul disponibles dans votre compte. Callbell ne pourra pas en créer une automatiquement pour vous.
De plus, Callbell ne supportera que les feuilles de calcul avec des en-têtes (avec des noms de colonnes) en haut comme ceci :

<div class="text--center">
    <img src={googleSpreadsheetValidFormat} width={500} />
</div>
:::

## 4. Insérer des données dans Google Sheets

Lorsque vous sélectionnez l'option Insérer une ligne :

- Insérer une position : Choisissez la ligne où les nouvelles données seront insérées.

  L'option "Premier" permet d'insérer une ligne à la ligne 1.

  L'option "Personnalisé" permet d'insérer une ligne à n'importe quel index spécifié. Vous pouvez rendre cette valeur dynamique en utilisant une variable, mais assurez-vous que la valeur est toujours un nombre. Le Bot renverra une erreur et continuera son flux si l'index n'est pas un nombre.

  "Dernier" insère la ligne jusqu'à la première ligne vide trouvée.

  Notez que si vous avez des "trous" dans votre feuille de calcul, la ligne peut ne pas être insérée à l'endroit voulu.

<div class="text--center">
    <img src={googleSpreadsheetInsertLast} width={500} />
</div>

- Valeurs des colonnes : Mapper les données qui seront insérées.

Vous pouvez ajouter plusieurs colonnes en fonction des données que vous souhaitez insérer et des colonnes disponibles dans votre feuille de calcul.
L'omission d'une valeur de colonne laissera la colonne vide dans votre feuille de calcul.

Par exemple, ces paramètres :

<div class="text--center">
    <img src={googleSpreadsheetInsert} width={500} />
</div>
Donneront ce resultat :
<div class="text--center">
    <img src={googleSpreadsheetInsert2} width={500} />
</div>

## 5. Mise à jour des données dans Google Sheets

Lorsque vous sélectionnez l'option "Mettre à jour" :

- Mettre à jour la position : Exactement comme pour l'insertion, définissez la ligne à mettre à jour. Notez qu'en raison de la limitation de Google, il n'est pas possible de mettre à jour directement la dernière ligne.

- Valeurs des colonnes : Comme pour l'insertion, définissez les colonnes à mettre à jour avec les valeurs fournies par l'utilisateur. Toute colonne spécifiée ici remplacera la valeur de la ligne précédente. Si vous souhaitez conserver la valeur de la colonne précédente, ne spécifiez aucune colonne.

Par exemple, une action définie de cette manière :

<div class="text--center">
    <img src={googleSpreadsheetUpdate} width={500} />
</div>

Mettra à jour la ligne 3 de cette manière :

<div class="text--center">
    <img src={googleSpreadsheetUpdate2} width={500} />
</div>

## 6. Sélection de données à partir de Google Sheets

Pour rechercher et récupérer une ligne, vous aurez besoin de :

- **la colonne à rechercher** : Le bot ne peut itérer que sur une colonne donnée.
- **La valeur de la cellule à trouver** : La valeur que la colonne doit contenir.
- Stockez les données de la ligne dans des variables. Vous pouvez accéder à n'importe quelle donnée de ligne trouvée et la stocker dans n'importe quelle variable que vous avez créée.

Par exemple, une action définie de cette manière :

<div class="text--center">
    <img src={googleSpreadsheetSelect} width={500} />
</div>

Renverra cette valeur :

<div class="text--center">
    <img src={googleSpreadsheetSelect2} width={500} />
</div>

Et stockera dans la variable "numéro de téléphone de la feuille de calcul"

:::tip
Notez que la recherche ne renvoie que le premier résultat. Si plusieurs lignes correspondent à la valeur de la cellule, seule la première sera renvoyée. Si le résultat que vous recherchez n'est pas le premier, créez une nouvelle colonne dans votre feuille de calcul avec des valeurs plus spécifiques/uniques.
:::

## 7. Gestion des échecs

En cas d'échec de l'API, vous pouvez stocker la réponse à l'échec dans une variable dédiée en vue d'une analyse ultérieure ou de nouvelles tentatives.
Vous pouvez, par exemple, imaginer une logique qui vérifierait l'échec et réessayerait avec une action "saut".

# Meilleures pratiques :

- Assurez-vous toujours que l'API Google Sheets est connectée et qu'elle dispose des autorisations nécessaires pour que le robot puisse accéder au document.
- Testez minutieusement l'intégration pour gérer les éventuelles erreurs d'API (par exemple, les problèmes d'accès à Google Sheets). Le simulateur de robot vous aidera à cet égard.
