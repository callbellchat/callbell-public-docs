---
title: Channel
sidebar_position: 6
---

# Channel

Les chaînes sont les différentes plateformes où vous pouvez recevoir et envoyer des messages. Vous pouvez avoir plusieurs chaînes du même type, par exemple plusieurs numéros WhatsApp.

## Propriétés

| Paramètre | Type    | Description                                                                                     |
| :-------- | :------ | :---------------------------------------------------------------------------------------------- |
| `uuid`    | String  | L'identifiant unique de la chaîne.                                                              |
| `title`   | String  | Le titre de la chaîne.                                                                          |
| `type`    | String  | Le type de la chaîne. Les valeurs possibles sont `facebook`, `whatsapp`, `instagram` et `telegram`. |
| `main`    | Boolean | Indique si la chaîne est la chaîne principale.                                                   |

## Exemple

```json title=response.json
{
  "channels": [
    {
      "uuid": "7c996996fea947f4a1d5a11e7fac84db",
      "title": "phone_number_1",
      "type": "whatsapp",
      "main": true
    },
    {
      "uuid": "dcefe6d18b5c4bbdb0661136c7f63c8e",
      "title": "phone_number_2",
      "type": "whatsapp",
      "main": false
    },
    {
      "uuid": "759edec71ff440b29fc635c5fac84d4f",
      "title": "phone_number_3",
      "type": "whatsapp",
      "main": false
    },
  ],
  "meta": {
    "page": 1,
    "pages": 1
  }
}
```