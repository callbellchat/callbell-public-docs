---
title: GET /contacts/:uuid/messages
sidebar_position: 3
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# GET /contacts/:uuid/messages

Elenco di tutti i messaggi appartenenti al contatto. I risultati sono paginati e ordinati per `createdAt` in ordine decrescente.

### Parametri Opzionali

| Parametro | Tipo    | Descrizione                                                                                                                                                        |
| :-------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `page`    | Integer | La pagina dei messaggi. Se non specificato, il valore predefinito è la pagina 1.                                                                                  |

### Esempio di richiesta

<RequestTabs endpoint='contacts_api' request="get_contact_messages"/>

### Risposta

| Parametro  | Tipo                                                     | Descrizione       |
| :--------- | :------------------------------------------------------- | :---------------- |
| `messages` | [Messages[]](/api/reference/object_types/message)         | Una lista di messaggi. |

### Esempio di risposta

```json title=response.json
{
  "messages": [
    {
      "text": "Ciao, come posso aiutarti?",
      "createdAt": "2023-12-12T10:56:36Z",
      "uuid": "cf839626ac7949879b88bcffd41d34fe",
      "status": "inviato",
      "channel": "whatsapp",
      "from": "391234567890",
      "to": "390987654321"
    },
    {
      "text": "La conversazione è stata assegnata a John Doe",
      "createdAt": "2023-12-12T10:56:35Z",
      "status": "nota",
      "channel": "whatsapp",
      "from": "390987654321",
      "to": "390987654321"
    },
    {
      "text": "Ciao 👋",
      "createdAt": "2023-12-12T10:53:32Z",
      "status": "ricevuto",
      "channel": "whatsapp",
      "from": "390987654321",
      "to": "391234567890"
    }
  ]
}
```