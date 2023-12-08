---
sidebar_position: 2
---

# Commencer

Ce guide étape par étape vous guidera dans l'utilisation de l'API Callbell pour envoyer un message.

## Prérequis

Vous devrez créer un compte sur Callbell et avoir configuré un canal WhatsApp Business pour pouvoir suivre ce guide.

- [Inscrivez-vous sur Callbell](https://dash.callbell.eu/users/sign_up)
- Consultez plus d'informations sur notre [intégration de l'API WhatsApp Business](https://callbellsupport.zendesk.com/hc/en-us/articles/360007805898-How-to-integrate-WhatsApp-into-Callbell-through-the-WhatsApp-Business-APIs)

## Obtenir vos clés d'API

Accédez à la page des clés d'API Callbell dans les paramètres (https://dash.callbell.eu/settings/api_settings/keys) afin de générer une nouvelle clé d'API :

![create_api_key](./assets/create_api_key_1.jpg)

Après avoir cliqué sur le bouton **Créer une clé API**, assurez-vous de copier le jeton et de le stocker en lieu sûr.

:::caution
La clé d'API ne sera affichée que sur cet écran. Si vous perdez l'accès, vous devrez en générer une nouvelle.
:::

## Envoyer un message de test en utilisant cURL

En utilisant la méthode d'envoi du message de l'API Messages (post_send_messages.md), vous pouvez tester si votre clé d'API fonctionne comme prévu :

```bash
curl -X POST "https://api.callbell.eu/v1/messages/send" \
  -H "Authorization: Bearer <REPLACE_API_KEY_HERE>" \
  -H "Content-Type: application/json" \
  -d '{
    "to": "<REPLACE_PHONE_NUMBER_HERE>",
    "from": "whatsapp",
    "type": "text",
    "content": {
      "text": "Hello from Callbell API!"
    }
  }'
```

Remplacez simplement `REPLACE_API_KEY_HERE` par la clé API générée à l'étape [Obtenir vos clés d'API](#obtenir-vos-clés-dapi) et `REPLACE_PHONE_NUMBER_HERE` par le numéro de téléphone du destinataire.

:::info
Assurez-vous que le numéro de téléphone de réception est _opt-in_ et que vous êtes **dans la règle des 24 heures** de l'API WhatsApp Business.
:::

Si le message a été correctement envoyé, vous recevrez une réponse similaire à celle-ci :

```json
{
  "message": {
    "uuid": "<MESSAGE_UUID>",
    "status": "enqueued"
  }
}
```

Cela signifie que le message a été _enregistré avec succès_ pour être envoyé au numéro de téléphone souhaité.

### Récupérer le statut d'un message

Pour savoir si notre message de test a été livré avec succès, nous pouvons utiliser l'une ou l'autre des méthodes suivantes :

- Utiliser le point de terminaison [get message status](/api/reference/messages_api/get_message_status.md)
- Activer **Webhooks** dans la section des clés d'API et vous abonner à l'événement de type `message_status_updated`

Dans cet exemple, nous utiliserons la première méthode ; pour vérifier le statut du message de test, effectuez simplement le cURL suivant à partir d'un terminal :

```bash
curl -X GET "https://api.callbell.eu/v1/messages/status/<REPLACE_UUID_HERE>" \
  -H "Authorization: Bearer <REPLACE_API_KEY_HERE>" \
  -H "Content-Type: application/json"
```

Assurez-vous de remplacer `REPLACE_API_KEY_HERE` par votre clé API et `REPLACE_UUID_HERE` par l'identifiant du message obtenu à partir de l'étape [Envoyer un message de test](#envoyer-un-message-de-test-en-utilisant-curl).

Vous obtiendrez la réponse suivante :

```json
{
  "message": {
    "uuid": "<MESSAGE_UUID>",
    "status": "delivered"
  }
}
```

Cela confirme que le message a été envoyé avec succès à l'utilisateur mais il n'a pas encore été lu.

### Étapes suivantes

Essayez d'explorer nos API [Messages](/api/reference/messages_api/introduction.md) et [Contacts](/api/reference/contacts_api/introduction.md) pour plus d'exemples.