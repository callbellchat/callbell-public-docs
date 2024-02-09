fr
---
title: POST /messages/send
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# POST /messages/send

:::caution
Après 24h sans réponse du client, il n'est pas possible d'envoyer des messages réguliers, vous devrez utiliser un message [Template](#send-template-messages), voir les exemples ci-dessous.
:::

### Paramètres requis

| Paramètre  | Type           | Description                          |
| :--------- | :------------- | :----------------------------------- |
| `to`       | String         | Numéro de téléphone ou identifiant de la plateforme | 
| `from`     | String         | Identifiant du canal (par exemple, `whatsapp`) |
| `type`     | MessageType    | Type de message à envoyer |
| `content`  | MessageContent | Contenu du message               | 

### Paramètres optionnels

| Paramètre          | Type    | Description                                                                                     |
| :----------------- | :------ | :---------------------------------------------------------------------------------------------- |
| `template_uuid`    | String  | Identifiant unique du message modèle                                                             |
| `optin_contact`    | Boolean | Confirmation que le contact a opté pour recevoir des messages                                |
| `template_values`  | Array   | Valeurs pour un message modèle à variables multiples                                                      |
| `assigned_user`    | String  | Le message sera attribué à l'adresse e-mail de ce collaborateur                                          |
| `team_uuid`        | String  | Le message sera attribué à cette équipe                                                            |
| `channel_uuid`     | String  | Le message sera envoyé depuis ce canal (lorsqu'il est omis, il utilisera le canal principal par défaut) |

### Exemple de requête

<RequestTabs endpoint='messages_api' request="post_messages"/>

### Réponse

| Paramètre | Type                                                                   | Description                                                              |
| :-------- | :--------------------------------------------------------------------- | :----------------------------------------------------------------------- |
| message   | [MessageSendRequest](/api/reference/object_types/message_send_request) | La demande d'envoi de message. Le système mettra initialement le message en file d'attente. |

### Exemple de réponse

```json title=response.json
{
  "message": {
    "uuid": "adf3d1216d4c4dcd908199d6700f2381",
    "status": "enqueued"
  }
}
```

## Envoyer un message avec attribution automatique de l'utilisateur

Il est possible d'envoyer un message via une demande API avec un utilisateur attribué en envoyant leur adresse e-mail dans le paramètre `assigned_user`.

:::caution
L'utilisateur doit faire partie de votre équipe, sinon l'attribution ne fonctionnera pas.
:::

<RequestTabs endpoint='messages_api' request="post_messages_with_user_assignment"/>

## Envoyer des messages avec des pièces jointes

Vous pouvez utiliser l'API pour envoyer des **messages multimédias** contenant des messages **images**, **documents**, **audio** et **vidéo**.

Il est également possible d'ajouter une _légende_ lors de l'envoi de pièces jointes `image` (voir l'exemple de requête ci-dessous).

### Exemple d'envoi de pièce jointe image

<RequestTabs endpoint='messages_api' request="post_messages_image"/>

### Exemple d'envoi de pièce jointe image et de légende

<RequestTabs endpoint='messages_api' request="post_messages_image_caption"/>

### Exemple d'envoi de pièce jointe de document

<RequestTabs endpoint='messages_api' request="post_messages_document"/>

### Exemple d'envoi de pièce jointe audio

:::info
Ceci est uniquement disponible pour les comptes utilisant l'intégration officielle **WhatsApp Business API**.
:::

<RequestTabs endpoint='messages_api' request="post_messages_audio"/>

### Exemple d'envoi de pièce jointe vidéo

:::info
Ceci est uniquement disponible pour les comptes utilisant l'intégration officielle **WhatsApp Business API**.
:::

<RequestTabs endpoint='messages_api' request="post_messages_video"/>

## Envoyer des messages avec des modèles

Vous pouvez utiliser l'API pour envoyer un message [Template](/api/reference/object_types/template) approuvé.

:::info
Ceci est uniquement disponible pour les comptes utilisant l'intégration officielle **WhatsApp Business API**.
:::

:::caution
Pour envoyer des messages de modèle, `template_uuid` et `optin_contact` **doivent** être présents dans la charge utile.
:::

<RequestTabs endpoint='messages_api' request="post_messages_template"/>

Dans ce contexte, `texte` fait référence à l'espace réservé du message modèle, par exemple, disons que vous ayez un message modèle comme ceci :

```bash title=template_example
Bonjour {{1}}, ceci est un exemple de message modèle
```

Le remplacement de l'espace réservé sera effectué avec la valeur passée dans la charge utile, donc dans ce cas, ce sera le suivant :

```bash title=template_example
Bonjour John Doe, ceci est un exemple de message modèle
```

## Envoyer des messages de modèle à variables multiples

Vous pouvez utiliser l'API pour envoyer un message [Template](/api/reference/object_types/template) approuvé.

:::info
Ceci est uniquement disponible pour les comptes utilisant l'intégration officielle **WhatsApp Business API**.
:::

:::caution
Pour envoyer des messages de modèle, `template_uuid` et `optin_contact` **doivent** être présents dans la charge utile.
:::

<RequestTabs endpoint='messages_api' request="post_multi_variable_messages_template"/>

Dans ce contexte, `template_values` fait référence aux espaces réservés du message modèle, par exemple, disons que vous ayez un message modèle comme ceci :

```bash title=template_example
Bonjour {{1}}, ceci est un exemple de message modèle. {{3}}!
```

Le remplacement des espaces réservés sera effectué avec les valeurs passées dans la charge utile à l'intérieur d'un tableau, donc dans ce cas, ce sera le suivant :

```bash title=template_example
Bonjour Jack, ceci est un exemple de message modèle. Cheers!
```

:::info
Lorsque `template_values` sont valides, les valeurs à l'intérieur de `content` seront ignorées, car elles sont utilisées pour les messages de modèle avec une seule variable.
:::

## Envoyer des messages de modèle avec des pièces jointes

Vous pouvez utiliser l'API pour envoyer un [Template](/api/reference/object_types/template) Message approuvé.

:::info
Ceci est uniquement disponible pour les comptes utilisant l'intégration officielle **WhatsApp Business API**.
:::

:::caution
Pour envoyer des messages de modèle, `template_uuid` et `optin_contact` doivent être présents dans la charge utile.
:::

Si vous avez des messages de modèle de média approuvés, vous pouvez les envoyer en incluant une URL valide du média

### Envoyer une pièce jointe image

<RequestTabs endpoint='messages_api' request="post_messages_template_image"/>

### Envoyer une pièce jointe de document

<RequestTabs endpoint='messages_api' request="post_messages_template_document"/>

### Envoyer une pièce jointe de vidéo

<RequestTabs endpoint='messages_api' request="post_messages_template_video"/>

:::info
Utilisez l'[API des modèles](/api/reference/template_messages_api/introduction) pour obtenir les `template_uuid`s de vos modèles.
:::