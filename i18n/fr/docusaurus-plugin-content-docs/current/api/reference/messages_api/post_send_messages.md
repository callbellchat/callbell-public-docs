fr
---
title: POST /messages/send
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# POST /messages/send

:::caution
Après 24h sans réponse du client, il n'est pas possible d'envoyer des messages normaux, vous devrez utiliser un message de [Modèle](#envoyer-des-messages-avec-mod%C3%A8le), voir les exemples ci-dessous.
:::

### Paramètres requis

| Paramètre  | Type           | Description                            |
| :--------- | :------------- | :------------------------------------- |
| `to`       | String         | Numéro de téléphone ou identifiant de plateforme |
| `from`     | String         | Identifiant du canal (par exemple `whatsapp`) |
| `type`     | MessageType    | Type de message à envoyer              |
| `contenu`  | MessageContent | Contenu du message                     |

### Paramètres facultatifs

| Paramètre          | Type    | Description                                                                                      |
| :----------------- | :------ | :----------------------------------------------------------------------------------------------- |
| `template_uuid`    | String  | Identifiant unique du message modèle                                                              |
| `optin_contact`    | Boolean | Confirmation que le contact a choisi de recevoir des messages                                     |
| `template_values`  | Array   | Valeurs pour plusieurs variables de message modèle                                               |
| `assigned_user`    | String  | Le message sera attribué à l'e-mail de ce collaborateur                                           |
| `team_uuid`        | String  | Le message sera attribué à cette équipe                                                           |
| `channel_uuid`     | String  | Le message sera envoyé depuis ce canal (lorsqu'il est omis, il utilisera le canal principal par défaut) |
| `fields`           | String  | Champs séparés par des virgules à renvoyer dans le message. Valeurs prises en charge : `contact`          |

### Exemple de demande

<RequestTabs endpoint='messages_api' request="post_messages"/>

### Réponse

| Paramètre | Type                                                                   | Description                                                               |
| :-------- | :--------------------------------------------------------------------- | :------------------------------------------------------------------------ |
| message   | [MessageSendRequest](/api/reference/object_types/message_send_request) | La demande d'envoi de message. Le système mettra d'abord le message en file d'attente. |

### Exemple de réponse

```json title=response.json
{
  "message": {
    "uuid": "adf3d1216d4c4dcd908199d6700f2381",
    "status": "enqueued"
  }
}
```

### Exemple de réponse (avec `fields=contact`)

```json title=response.json
{
  "message": {
    "uuid": "adf3d1216d4c4dcd908199d6700f2381",
    "status": "enqueued",
    "contact": {
      "uuid": "c7b3d1216d4c4dcd908199d6700f2381",
      "name": "John Doe",
      "phone": "+1234567890",
      "email": "john@doe.com"
    }
  }
}
```

## Envoyer un message avec attribution automatique d'un utilisateur

Il est possible d'envoyer un message via une demande API avec un utilisateur attribué en envoyant son e-mail dans le paramètre `assigned_user`.

:::caution
L'utilisateur doit faire partie de votre équipe, sinon l'attribution ne fonctionnera pas.
:::

<RequestTabs endpoint='messages_api' request="post_messages_with_user_assignment"/>

## Envoyer des pièces jointes média avec le message

Vous pouvez utiliser l'API pour envoyer des **messages média** contenant des messages **images**, **documents**, **audio** et **vidéo**.

Il est également possible d'ajouter une _légende_ lors de l'envoi de pièces jointes `image` (voir l'exemple de demande ci-dessous).

### Exemple d'envoi de pièce jointe image

<RequestTabs endpoint='messages_api' request="post_messages_image"/>

### Exemple d'envoi de pièce jointe image & légende

<RequestTabs endpoint='messages_api' request="post_messages_image_caption"/>

### Exemple d'envoi de pièce jointe document

<RequestTabs endpoint='messages_api' request="post_messages_document"/>

### Exemple d'envoi de pièce jointe audio

:::info
Ceci est uniquement disponible pour les comptes utilisant l'intégration officielle de l'API **WhatsApp Business**.
:::

<RequestTabs endpoint='messages_api' request="post_messages_audio"/>

### Exemple d'envoi de pièce jointe vidéo

:::info
Ceci est uniquement disponible pour les comptes utilisant l'intégration officielle de l'API **WhatsApp Business**.
:::

<RequestTabs endpoint='messages_api' request="post_messages_video"/>

## Envoyer des messages avec modèle

Vous pouvez utiliser l'API pour envoyer un message de modèle approuvé [Modèle](/api/reference/object_types/template).

:::info
Ceci est uniquement disponible pour les comptes utilisant l'intégration officielle de l'API **WhatsApp Business**.
:::

:::caution
Pour envoyer des messages de modèle, `template_uuid` et `optin_contact` **doivent** être présents dans la charge utile.
:::

<RequestTabs endpoint='messages_api' request="post_messages_template"/>

Dans ce contexte, `texte` fait référence à l'espace réservé du message de modèle, par exemple supposons que vous ayez un message de modèle comme ceci:

```bash title=exemple_de_modèle
Bonjour {{1}}, ceci est un exemple de message de modèle
```

Le remplacement de l'espace réservé sera effectué avec la valeur passée dans la charge utile, donc dans ce cas, cela donnera le message suivant :

```bash title=exemple_de_modèle
Bonjour John Doe, ceci est un exemple de message de modèle
```

## Envoyer des messages de modèle à variables multiples

Vous pouvez utiliser l'API pour envoyer un message de modèle approuvé [Modèle](/api/reference/object_types/template).

:::info
Ceci est uniquement disponible pour les comptes utilisant l'intégration officielle de l'API **WhatsApp Business**.
:::

:::caution
Pour envoyer des messages de modèle, `template_uuid` et `optin_contact` **doivent** être présents dans la charge utile.
:::

<RequestTabs endpoint='messages_api' request="post_multi_variable_messages_template"/>

Dans ce contexte, `template_values` fait référence aux espaces réservés du message de modèle, par exemple supposons que vous ayez un message de modèle comme ceci:

```bash title=exemple_de_modèle
Bonjour {{1}}, ceci est un exemple de modèle {{2}}. {{3}}!
```

Les remplacements des espaces réservés seront effectués avec les valeurs passées dans la charge utile à l'intérieur d'un tableau, donc dans ce cas, cela donnera le message suivant :

```bash title=exemple_de_modèle
Bonjour Jack, ceci est un exemple de message de modèle. Cheers!
```

:::info
Lorsque les `template_values` sont valides, les valeurs à l'intérieur de `content` seront ignorées, car elles sont utilisées pour les messages de modèle avec une seule variable.
:::

## Envoyer des messages de modèle avec des pièces jointes médias

Vous pouvez utiliser l'API pour envoyer un message de modèle approuvé [Modèle](/api/reference/object_types/template)

:::info
Ceci est uniquement disponible pour les comptes utilisant l'intégration officielle de l'API **WhatsApp Business**.
:::

:::caution
Pour envoyer des messages de modèle, `template_uuid` et `optin_contact` doivent être présents dans la charge utile.
:::

Si vous avez des messages de modèle média approuvés, vous pouvez les envoyer en incluant une `url` valide du média

### Envoyer une pièce jointe image

<RequestTabs endpoint='messages_api' request="post_messages_template_image"/>

### Envoyer une pièce jointe document

<RequestTabs endpoint='messages_api' request="post_messages_template_document"/>

### Envoyer une pièce jointe vidéo

<RequestTabs endpoint='messages_api' request="post_messages_template_video"/>

:::info
Utilisez l'[API des modèles](/api/reference/template_messages_api/introduction) pour obtenir les `template_uuid` de vos modèles.
:::