---
title: Contact
sidebar_position: 1
---

### Contact Object

| Field          | Type              | Description                                       |
| :------------- | :---------------- | :------------------------------------------------ |
| `uuid`         | string            | L'identifiant unique du contact généré par Callbell       |
| `name`         | string            | Nom du contact                                   |
| `phoneNumber`  | string            | Numéro de téléphone du contact                       |
| `avatarUrl`    | string            | URL de l'avatar de l'utilisateur                            |
| `createdAt`    | string            | Date de création du contact (formatée selon ISO 8601)     |
| `source`       | Source            | Source de la conversation                            |
| `closedAt`     | string            | Date de fermeture du contact (formatée selon ISO 8601)      |
| `href`         | string            | Lien vers le contact dans le tableau de bord CRM                     |
| `tags`         | string            | Liste des tags associés                           |
| `assignedUser` | string            | E-mail de l'utilisateur auquel le contact est attribué |
| `customFields` | string            | Liste des champs personnalisés associés                  |
| `team`         | [Team](./team.md) | Boîte de réception d'équipe actuellement associée au contact    |