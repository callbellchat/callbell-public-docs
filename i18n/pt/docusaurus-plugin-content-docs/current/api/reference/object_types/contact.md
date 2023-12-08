---
title: Contato
sidebar_position: 1
---

### Objeto Contato

| Campo          | Tipo              | Descrição                                          |
| :------------- | :---------------- | :------------------------------------------------- |
| `uuid`         | string            | O ID exclusivo do contato gerado pelo Callbell      |
| `name`         | string            | Nome do contato                                    |
| `phoneNumber`  | string            | Número de telefone do contato                      |
| `avatarUrl`    | string            | URL do avatar do usuário                           |
| `createdAt`    | string            | Data de criação do contato (formato ISO 8601)      |
| `source`       | Source            | Fonte da conversa                                  |
| `href`         | string            | Link para o CRM de contato no painel               |
| `tags`         | string            | Lista de tags associadas                           |
| `assignedUser` | string            | Email do usuário ao qual o contato está atribuído  |
| `customFields` | string            | Lista de campos personalizados associados           |
| `team`         | [Team](./team.md) | Caixa de entrada da equipe atualmente associada ao contato    |