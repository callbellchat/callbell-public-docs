---
title: Objeto de Contato
sidebar_position: 1
---

### Objeto de Contato

| Campo          | Tipo              | Descrição                                         |
| :------------- | :---------------- | :------------------------------------------------ |
| `uuid`         | string            | O ID único do contato gerado pelo Callbell        |
| `name`         | string            | Nome do contato                                   |
| `phoneNumber`  | string            | Número de telefone do contato                     |
| `avatarUrl`    | string            | URL do avatar do usuário                          |
| `createdAt`    | string            | Data de criação do contato (formato ISO 8601)     |
| `source`       | Source            | Origem da conversa                                |
| `closedAt`     | string            | Data de encerramento do contato (formato ISO 8601) |
| `href`         | string            | Link para o contato no painel CRM                 |
| `tags`         | string            | Lista de tags associadas                          |
| `assignedUser` | string            | E-mail do usuário ao qual o contato está atribuído |
| `customFields` | string            | Lista de campos personalizados associados          |
| `team`         | [Team](./team.md) | Caixa de entrada da equipe associada ao contato    |