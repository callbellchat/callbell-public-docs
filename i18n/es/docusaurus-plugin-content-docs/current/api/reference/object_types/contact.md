---
title: Contacto
sidebar_position: 1
---

### Objeto de Contacto

| Campo          | Tipo              | Descripción                                           |
| :------------- | :---------------- | :---------------------------------------------------- |
| `uuid`         | string            | ID único del contacto generado por Callbell            |
| `name`         | string            | Nombre del contacto                                   |
| `phoneNumber`  | string            | Número de teléfono del contacto                       |
| `avatarUrl`    | string            | URL del avatar del usuario                            |
| `createdAt`    | string            | Fecha de creación del contacto (en formato ISO 8601)   |
| `source`       | Fuente            | Fuente de la conversación                             |
| `href`         | string            | Enlace al contacto en el panel de control del CRM      |
| `tags`         | string            | Lista de tags asociados                               |
| `assignedUser` | string            | Email del usuario al que se ha asignado el contacto    |
| `customFields` | string            | Lista de campos personalizados asociados               |
| `team`         | [Equipo](./team.md) | Buzón de equipo asociado actualmente al contacto       |