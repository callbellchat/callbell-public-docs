---
title: PATCH /contacts/:uuid
sidebar_position: 5
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# PATCH /contacts/:uuid

Met à jour un contact existant.

### Paramètres obligatoires

| Paramètre | Type   | Description                                                                  |
| :-------- | :----- | :--------------------------------------------------------------------------- |
| `uuid`    | string | L'identifiant du contact (par exemple, le numéro de téléphone dans WhatsApp) |

### Paramètres facultatifs

### Paramètres facultatifs

| Paramètre       | Type     | Description                                                                      |
| :-------------- | :------- | :------------------------------------------------------------------------------- |
| `tags`          | string[] | Une liste de valeurs séparées par des virgules (par exemple, `['Call back', 'Interested']`) |
| `custom_fields` | string{} | Un objet avec les champs personnalisés (par exemple, `{'Adresse de facturation': 'Rue principale 1}`) |
| `name`          | string   | Le nom du contact                                                                |
| `assigned_user` | String   | L'e-mail du collaborateur que vous souhaitez attribuer à un contact                |
| `unassign_user` | Boolean  | `true` si vous souhaitez supprimer le collaborateur attribué d'un contact         |

:::caution
Assurez-vous que `custom_fields` et `tags` existent déjà dans votre compte avant de les transmettre. Rendez-vous sur [tags](https://dash.callbell.eu/settings/tags) et [custom_fields](https://dash.callbell.eu/settings/custom_fields) dans vos paramètres pour plus d'informations.

De même, pour `assigned_user`, utilisez une adresse e-mail valide associée à un utilisateur de votre compte.
:::

### Exemple de requête

<RequestTabs endpoint='contacts_api' request="patch_contacts"/>

### Réponse

| Paramètre | Type                                             | Description                              |
| :-------- | :----------------------------------------------- | :--------------------------------------- |
| `contact` | [Contact](/api/reference/object_types/contact) | Le contact qui a été mis à jour. |

### Exemple de réponse

```json title=response.json
{
  "contact": [
    {
      "uuid": "414a6d692bd645ed803f2e7ce360d4c8",
      "name": "UPDATE Doe",
      "phoneNumber": "123456789",
      "avatarUrl": null,
      "createdAt": "2020-11-13T21:08:53Z",
      "source": "whatsapp",
      "href": "https://dash.callbell.eu/contacts/414a6d692bd645ed803f2e7ce360d4c8",
      "tags": [],
      "assignedUser": "jane.doe@email.com",
      "customFields": {}
    }
  ]
}
```