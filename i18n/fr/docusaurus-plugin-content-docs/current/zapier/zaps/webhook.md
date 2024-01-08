---
sidebar_position: 4
---

# Utiliser les Webhooks avancés

Ici, nous verrons comment utiliser Callbell à travers Zapier en utilisant le webhook personnalisé de Zapier comme action.
C'est une façon plus avancée d'utiliser Callbell dans Zapier, mais cela vous donne plus de flexibilité car vous pouvez utiliser notre API publique pour effectuer des actions.

Consultez <a href="https://docs.callbell.eu/api/reference/introduction'">la référence de l'API</a> pour plus d'informations sur les points d'extrémité et les charges utiles.

## Utilisation du webhook personnalisé de Zapier

Assurez-vous de sélectionner la bonne application Callbell (la plus récente) :

![Intégration Callbell](../assets/select-action.png)

Ensuite, sélectionnez "Webhooks by Zapier" comme application d'action :

![Webhooks by Zapier](../assets/webhook.png)

L'action recommandée ici est "Requête personnalisée" :

Quelle que soit l'action que vous choisissez, vous devrez configurer correctement l'URL du webhook.

### URL du webhook

L'URL du webhook est l'URL que Zapier utilisera pour envoyer des données à Callbell.

:::info

exemple : https://docs.callbell.eu/api/reference/contacts_api/post_contacts peut être utilisé pour créer un nouveau contact

:::

### Charge utile du webhook

La charge utile du webhook est la donnée que Zapier enverra à Callbell.

La charge utile doit être au format JSON.

### Authentification

Vous devrez authentifier votre demande auprès de Callbell.

Vous pouvez le faire en ajoutant les en-têtes suivants à votre demande :

![En-têtes](../assets/headers.png)

Le `Content-Type` défini sur `application/json` est **obligatoire**.