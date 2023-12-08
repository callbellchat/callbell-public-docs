---
title: Contact
sidebar_position: 1
---

### Objet de Contact

| Champ          | Type              | Description                                                    |
| :------------- | :---------------- | :------------------------------------------------------------- |
| `uuid`         | string            | L'identifiant unique du contact généré par Callbell             |
| `name`         | string            | Nom du contact                                                 |
| `phoneNumber`  | string            | Numéro de téléphone du contact                                 |
| `avatarUrl`    | string            | URL de l'avatar de l'utilisateur                               |
| `createdAt`    | string            | Date de création du contact (au format ISO 8601)                |
| `source`       | Source            | Source de la conversation                                      |
| `href`         | string            | Lien vers le contact du CRM dans le tableau de bord             |
| `tags`         | string            | Liste des tags associés                                        |
| `assignedUser` | string            | Adresse e-mail de l'utilisateur auquel le contact est assigné   |
| `customFields` | string            | Liste des champs personnalisés associés                         |
| `team`         | [Team](./team.md) | Boîte de réception de l'équipe actuellement associée au contact |