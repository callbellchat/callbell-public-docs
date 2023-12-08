---
title: POST /contacts
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# POST /contacts

Crée un nouveau contact.

### Paramètres obligatoires

| Paramètre    | Type   | Description                                                                        |
| :----------- | :----- | :--------------------------------------------------------------------------------- |
| `identifiant`| String | L'identifiant du contact (ex: numéro de téléphone dans WhatsApp)                   |
| `source`     | Source | La source du contact (ex: `whatsapp`)                                              |
| `nom`        | String | Le nom du contact                                                                  |

### Paramètres optionnels

| Paramètre      | Type     | Description                                                                                   |
| :------------- | :------- | :-------------------------------------------------------------------------------------------- |
| `tags`         | String[] | Une liste de valeurs séparées par des virgules (ex: `['Rappel', 'Intéressé']`)                  |
| `champs_personnalisés` | String{} | Un objet avec les champs personnalisés (ex: `{'Adresse de facturation': 'Rue principale 1'}`)  |
| `utilisateur_assigné` | String   | Email de l'utilisateur auquel vous souhaitez attribuer un contact                               |

:::caution
Lors du passage de `champs_personnalisés` ou `tags`, assurez-vous qu'ils existent dans votre compte. Consultez les pages [tags](https://dash.callbell.eu/settings/tags) et [champs_personnalisés](https://dash.callbell.eu/settings/custom_fields) dans vos paramètres.
Il en va de même pour `utilisateur_assigné`, cela doit être un email valide d'un utilisateur de votre compte.
:::

### Exemple de requête

<RequestTabs endpoint='contacts_api' request="post_contacts"/>

### Réponse

| Paramètre  | Type                                             | Description                      |
| :--------- | :----------------------------------------------- | :------------------------------- |
| `contact`  | [Contact](/api/reference/object_types/contact)   | Le contact qui a été créé.       |

### Exemple de réponse

```json title=response.json
{
  "contact": [
    {
      "uuid": "414a6d692bd645ed803f2e7ce360d4c8",
      "name": "John Doe",
      "phoneNumber": "123456789",
      "avatarUrl": null,
      "createdAt": "2020-11-13T21:08:53Z",
      "source": "whatsapp",
      "href": "https://dash.callbell.eu/contacts/414a6d692bd645ed803f2e7ce360d4c8",
      "tags": [],
      "assignedUser": null,
      "customFields": {}
    }
  ]
}
```