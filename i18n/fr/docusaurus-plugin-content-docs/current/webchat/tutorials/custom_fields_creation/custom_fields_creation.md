---
sidebar_position: 1
---

# Comment créer des champs personnalisés à partir du chat en direct

Dans ce guide rapide, vous apprendrez comment créer des [champs personnalisés](https://headwayapp.co/callbell-changelog/custom-fields-(for-contacts)-225586) dans l'application Callbell en utilisant les informations envoyées via notre chat en direct.

## Étape 1 : Générer le code snippet du chat en direct

Après avoir créé une intégration de chat en direct et l'avoir personnalisée selon vos préférences, rendez-vous à la deuxième section de la page de configuration du widget. Vous y verrez un extrait de code qui a été généré pour être copié et collé dans votre site Web afin de permettre le fonctionnement du chat en direct.

![webchat_snippet](./assets/webchat_snippet.png)

## Étape 2 : Modifier l'extrait de code

Dans notre cas, ce que nous voulons, c'est envoyer des informations de notre site Web vers l'application Callbell chaque fois qu'un utilisateur commence à interagir avec le chat. Nous pouvons y parvenir simplement en apportant quelques petites modifications à l'extrait de code généré ci-dessus. Voyez l'exemple ci-dessous :

```html
<script>
  if (!window.callbellSettings) {
    window.callbellSettings = {}
  }
  window.callbellSettings["uuid"] = "000000-0000-abcd-1234-0000000000";
  window.callbellSettings["script_token"] = "script_token";
  window.callbellSettings["extra_params"] = {
    "identifier": '12345567',
    "course": "Informatique",
    "semestre": "4e"
  }
</script>
<script>
  (function(){var ...);
</script>
```

Dans cet exemple, les champs supplémentaires sont codés en dur, mais ils peuvent être des informations envoyées depuis votre backend.

:::info
Remarquez que le champ `identifier` est obligatoire. Il sera utilisé comme identifiant de l'utilisateur interagissant avec le chat en direct, il doit donc être unique. Si ce champ n'est pas envoyé, l'utilisateur pourra interagir avec le chat et envoyer et recevoir des messages, mais aucun champ personnalisé ne sera créé.
:::

:::info
Vous pouvez envoyer jusqu'à 20 champs supplémentaires pour créer des champs personnalisés dans l'application Callbell.
:::

## Exemple

Dans l'exemple ci-dessous, nous générons un UUID aléatoire en tant qu'identifiant et obtenons la langue du navigateur.
```html
<script>
  if (!window.callbellSettings) {
    window.callbellSettings = {}
  }
  window.callbellSettings["uuid"] = "000000-0000-abcd-1234-0000000000";
  window.callbellSettings["script_token"] = "script_token";
  window.callbellSettings["extra_params"] = {
    identifier: self.crypto.randomUUID(),
    language: navigator.language,
  }
</script>
<script>
  (function(){var ...);
</script>
````

Et voici comment cela apparaîtra dans l'application Callbell.
![custom_fields](./assets/custom_fields.png)