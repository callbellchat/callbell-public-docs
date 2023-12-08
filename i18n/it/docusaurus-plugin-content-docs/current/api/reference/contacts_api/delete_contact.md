---
title: DELETE /contacts/:uuid
sidebar_position: 6
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# DELETE /contacts/:uuid

Cancella un contatto specifico dato un `uuid`.

:::caution

Questa operazione è **irreversibile**. Verifica sempre la correttezza del tuo codice.

:::

### Parametri Richiesti

| Parametro | Tipo   | Descrizione         |
| :-------- | :----- | :------------------ |
| `uuid`    | string | L'uuid del contatto |

### Esempio di Richiesta

<RequestTabs endpoint='contacts_api' request='delete_contact'/>

### Risposta

| Parametro | Tipo   | Descrizione            |
| :-------- | :----- | :--------------------- |
| `status`  | string | Stato dell'operazione. |

### Esempio di Risposta

```json title=response.json
{
  "status": "il contatto è stato eliminato"
}
```