---
title: Contatto
sidebar_position: 1
---

### Oggetto Contatto

| Campo          | Tipo              | Descrizione                                       |
| :------------- | :---------------- | :------------------------------------------------ |
| `uuid`         | string            | L'ID contatto univoco generato da Callbell         |
| `nome`         | string            | Nome del contatto                                 |
| `numeroTelefono`  | string            | Numero di telefono del contatto                       |
| `avatarUrl`    | string            | URL dell'avatar utente                            |
| `creatoIl`    | string            | Data di creazione del contatto (formattata secondo la norma ISO 8601)     |
| `origine`       | Origine            | Origine della conversazione                            |
| `link`         | string            | Link al CRM del contatto nel dashboard                     |
| `etichette`         | string            | Elenco di etichette associate                           |
| `utenteAssegnato` | string            | Email dell'utente a cui è assegnato il contatto |
| `campiPersonalizzati` | string            | Elenco di campi personalizzati associati                  |
| `team`         | [Team](./team.md) | Casella di posta team attualmente associata al contatto    |