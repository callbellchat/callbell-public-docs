---
title: Contatto
sidebar_position: 1
---

### Oggetto Contatto

| Campo          | Tipo              | Descrizione                                       |
| :------------- | :---------------- | :------------------------------------------------ |
| `uuid`         | string            | L'ID univoco del contatto generato da Callbell     |
| `name`         | string            | Nome del contatto                                 |
| `phoneNumber`  | string            | Numero di telefono del contatto                   |
| `avatarUrl`    | string            | URL dell'avatar dell'utente                       |
| `createdAt`    | string            | Data di creazione del contatto (formato ISO 8601) |
| `source`       | Source            | Origine della conversazione                       |
| `closedAt`     | string            | Data di chiusura del contatto (formato ISO 8601)  |
| `href`         | string            | Link al dashboard CRM del contatto                |
| `tags`         | string            | Elenco di tag associati                           |
| `assignedUser` | string            | E-mail dell'utente a cui è stato assegnato il contatto |
| `customFields` | string            | Elenco di campi personalizzati associati          |
| `team`         | [Team](./team.md) | Inbox del team attualmente associata al contatto  |