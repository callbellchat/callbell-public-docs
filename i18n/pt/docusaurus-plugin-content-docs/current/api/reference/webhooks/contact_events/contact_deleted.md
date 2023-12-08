---
sidebar_position: 3
---

# Contato Deletado

Esse evento será enviado sempre que um contato for **deletado**. Atualmente, isso acontece quando uma conversa é excluída do Callbell.

### Nome do Evento

`contato_deletado`

### Campos da Carga

| Campo     | Tipo   | Descrição                                                |
| :-------- | :----- | :------------------------------------------------------- |
| `uuid`    | string | O identificador único da mensagem excluída               |
| `deleted` | string | Data da exclusão da mensagem (formato ISO 8601)          |

### Exemplo de Carga

```json title=payload.json
{
  "event": "contato_deletado",
  "payload": {
    "uuid": "fad77e68757b43c3b77b51cd66ec18f3",
    "deleted": "2022-10-17T15:15:06.095Z"
  }
}
```