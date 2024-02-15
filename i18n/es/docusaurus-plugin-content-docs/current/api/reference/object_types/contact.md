---
title: Contacto
sidebar_position: 1
---

### Objeto de Contacto

| Campo          | Tipo                    | Descripción                                       |
| :------------- | :---------------------- | :------------------------------------------------ |
| `uuid`         | string                  | El ID único del contacto generado por Callbell    |
| `name`         | string                  | Nombre del contacto                               |
| `phoneNumber`  | string                  | Número de teléfono del contacto                   |
| `avatarUrl`    | string                  | URL del avatar del usuario                        |
| `createdAt`    | string                  | Fecha de creación del contacto (en formato ISO 8601)     |
| `source`       | Source                  | Fuente de la conversación                            |
| `closedAt`     | string                  | Fecha de cierre del contacto (en formato ISO 8601)      |
| `href`         | string                  | Enlace al contacto en el panel de control del CRM                     |
| `tags`         | string                  | Lista de etiquetas asociadas                           |
| `assignedUser` | string                  | Correo electrónico del usuario al que se asigna el contacto |
| `customFields` | string                  | Lista de campos personalizados asociados                  |
| `team`         | [Team](./team.md)       | Bandeja de entrada del equipo actualmente asociada al contacto    |
| `channel`      | [Channel](./channel.md) | Canal actualmente asociado al contacto       |