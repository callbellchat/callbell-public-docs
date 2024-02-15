---
title: Contatto
sidebar_position: 1
---

### Oggetto Contatto

| Campo          | Tipo                    | Descrizione                                       |
| :------------- | :---------------------- | :------------------------------------------------ |
| `uuid`         | string                  | L'ID univoco del contatto generato da Callbell     |
| `name`         | string                  | Nome del contatto                                 |
| `phoneNumber`  | string                  | Numero di telefono del contatto                   |
| `avatarUrl`    | string                  | URL dell'avatardell'utente                        |
| `createdAt`    | string                  | Data di creazione del contatto (formato ISO 8601) |
| `source`       | Sorgente                | Origine della conversazione                        |
| `closedAt`     | string                  | Data di chiusura del contatto (formato ISO 8601)   |
| `href`         | string                  | Link al contatto nel CRM                          |
| `tags`         | string                  | Elenco di tag associati                            |
| `assignedUser` | string                  | Email dell'utente a cui è assegnato il contatto    |
| `customFields` | string                  | Elenco di campi personalizzati associati           |
| `team`         | [Team](./team.md)       | Team inbox associata al contatto                   |
| `channel`      | [Channel](./channel.md) | Canale al contatto                                |