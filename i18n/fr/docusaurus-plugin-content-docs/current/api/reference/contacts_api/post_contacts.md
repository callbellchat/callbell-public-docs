---
title: POST /contacts
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# POST /contacts

Crée un nouveau contact.

### Paramètres obligatoires

| Paramètre    | Type   | Description                                                   |
| :----------- | :----- | :------------------------------------------------------------ |
| `identifier` | String | L'identifiant du contact (par exemple, le numéro de téléphone sur WhatsApp) |
| `source`     | Source | La source du contact (par exemple, `whatsapp`)                   |
| `name`       | String | Le nom du contact                                       |

### Paramètres optionnels

| Paramètre       | Type     | Description                                                                    |
| :-------------- | :------- | :----------------------------------------------------------------------------- |
| `tags`          | String[] | Une liste de valeurs séparées par des virgules (par exemple `['Appeler en arrière', 'Intéressé']`)           |
| `custom_fields` | String{} | Un objet avec les champs personnalisés (par exemple, `{'Adresse de facturation': 'Rue Principale 1'}`) |
| `assigned_user` | String   | E-mail de l'utilisateur que vous souhaitez attribuer à un contact                         |
| `team_uuid`     | String   | UUID de l'équipe que vous souhaitez attribuer à un contact                          |

:::caution
Lorsque vous passez `custom_fields` ou `tags`, assurez-vous qu'ils existent dans votre compte. Voir [tags](https://dash.callbell.eu/settings/tags) et [custom_fields](https://dash.callbell.eu/settings/custom_fields) dans vos paramètres.

La même chose s'applique à `assigned_user` et `team_uuid` : ils doivent également exister dans votre compte.
:::

### Exemple de requête

<RequestTabs endpoint='contacts_api' request="post_contacts"/>

### Réponse

| Paramètre | Type                                           | Description                    |
| :-------- | :--------------------------------------------- | :----------------------------- |
| `contact` | [Contact](/api/reference/object_types/contact) | Le contact qui a été créé. |

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