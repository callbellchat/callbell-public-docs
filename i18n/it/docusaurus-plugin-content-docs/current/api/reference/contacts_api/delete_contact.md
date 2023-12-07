---
title: DELETE /contacts/:uuid
sidebar_position: 6
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# DELETE /contacts/:uuid

Cancella un contatto specifico, dato un `uuid`.

:::attenzione

Questa operazione è **irreversibile**. Verificare sempre la correttezza del codice.

:::

### Parametri richiesti

| Parametro | Tipo   | Descrizione         |
| :-------- | :----- | :------------------ |
| `uuid`    | string | L'uuid del contatto |

### Esempio di richiesta

<RichiestaTabs endpoint='contacts_api' request='delete_contact'/>

### Risposta

| Parametro | Tipo   | Descrizione            |
| :-------- | :----- | :--------------------- |
| `status`  | string | Stato dell'operazione. |

### Esempio di risposta

```json title=response.json
{
  "status": "il contatto è stato distrutto"
}
```
