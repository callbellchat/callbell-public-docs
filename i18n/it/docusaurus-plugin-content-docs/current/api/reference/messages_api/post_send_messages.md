---
title: INVIA /messages/send
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# INVIA /messages/send

:::caution
Dopo 24h senza risposta dal cliente, non è possibile inviare messaggi regolari, sarà necessario utilizzare un messaggio [Template](#send-template-messages), vedere gli esempi di seguito.
:::

### Parametri obbligatori

| Parametro | Tipo           | Descrizione                          |
| :-------- | :------------- | :----------------------------------- |
| `to`      | String         | Numero di telefono o identificatore della piattaforma |
| `from`    | String         | Identificatore del canale (ad esempio `whatsapp`) |
| `type`    | MessageType    | Tipo di messaggio da inviare           |
| `content` | MessageContent | Contenuto del messaggio               |

### Parametri opzionali

| Parametro         | Tipo    | Descrizione                                                                                     |
| :---------------- | :------ | :---------------------------------------------------------------------------------------------- |
| `template_uuid`   | String  | Identificatore univoco del messaggio di template                                                       |
| `optin_contact`   | Boolean | Conferma che il contatto abbia acconsentito a ricevere i messaggi                               |
| `template_values` | Array   | Valori per il messaggio di template a variabili multiple                                                      |
| `assigned_user`   | String  | Il messaggio verrà assegnato all'email di questo collaboratore                                           |
| `team_uuid`       | String  | Il messaggio verrà assegnato a questo team                                                           |
| `channel_uuid`    | String  | Il messaggio verrà inviato da questo canale (se omesso, verrà utilizzato il canale principale predefinito) |
| `fields`          | String  | Campi separati da virgola da restituire nel messaggio. Valori supportati: `contact`               |

### Esempio di richiesta

<RequestTabs endpoint='messages_api' request="post_messages"/>

### Risposta

| Parametro | Tipo                                                                   | Descrizione                                                              |
| :-------- | :--------------------------------------------------------------------- | :----------------------------------------------------------------------- |
| message   | [MessageSendRequest](/api/reference/object_types/message_send_request) | La richiesta di invio del messaggio. Il sistema metterà in coda inizialmente il messaggio. |

### Esempio di risposta

```json title=response.json
{
  "message": {
    "uuid": "adf3d1216d4c4dcd908199d6700f2381",
    "status": "in coda"
  }
}
```

### Esempio di risposta (con `fields=contact`)

```json title=response.json
{
  "message": {
    "uuid": "adf3d1216d4c4dcd908199d6700f2381",
    "status": "in coda",
    "contact": {
      "uuid": "c7b3d1216d4c4dcd908199d6700f2381",
      "name": "John Doe",
      "phone": "+1234567890",
      "email": "john@doe.com"
    }
  }
}
```

## Invia un messaggio con assegnazione automatica dell'utente

È possibile inviare un messaggio tramite richiesta API con un utente assegnato inviando la loro email nel parametro `assigned_user`.

:::caution
L'utente deve far parte del tuo team, in caso contrario l'assegnazione non funzionerà.
:::

<RequestTabs endpoint='messages_api' request="post_messages_with_user_assignment"/>

## Invia messaggi con allegati multimediali

Puoi utilizzare l'API per inviare messaggi **multimediali** contenenti **immagini**, **documenti**, **audio** e **video**.

È anche possibile aggiungere una _didascalia_ durante l'invio degli allegati `immagine` (vedi l'esempio di richiesta di seguito).

### Esempio di invio di allegato immagine

<RequestTabs endpoint='messages_api' request="post_messages_image"/>

### Esempio di invio di allegato immagine e didascalia

<RequestTabs endpoint='messages_api' request="post_messages_image_caption"/>

### Esempio di invio di allegato documento

<RequestTabs endpoint='messages_api' request="post_messages_document"/>

### Esempio di invio di allegato audio

:::info
Questo è disponibile solo per gli account che utilizzano l'integrazione ufficiale **WhatsApp Business API**.
:::

<RequestTabs endpoint='messages_api' request="post_messages_audio"/>

### Esempio di invio di allegato video

:::info
Questo è disponibile solo per gli account che utilizzano l'integrazione ufficiale **WhatsApp Business API**.
:::

<RequestTabs endpoint='messages_api' request="post_messages_video"/>

## Invia messaggi di template

Puoi utilizzare l'API per inviare un messaggio di template approvato [Template](/api/reference/object_types/template).

:::info
Questo è disponibile solo per gli account che utilizzano l'integrazione ufficiale **WhatsApp Business API**.
:::

:::caution
Per inviare messaggi di template `template_uuid` e `optin_contact` **devono** essere presenti nel payload.
:::

<RequestTabs endpoint='messages_api' request="post_messages_template"/>

In questo contesto, `text` si riferisce al segnaposto del messaggio di template, ad esempio diciamo che hai un messaggio di template come questo:

```bash title=template_example
Ciao {{1}}, questo è un esempio di messaggio di template
```

La sostituzione del segnaposto verrà effettuata con il valore passato nel payload, quindi in questo caso sarà il seguente:

```bash title=template_example
Ciao John Doe, questo è un esempio di messaggio di template
```

## Invia messaggi di template a variabili multiple

Puoi utilizzare l'API per inviare un messaggio di template approvato [Template](/api/reference/object_types/template) a variabili multiple.

:::info
Questo è disponibile solo per gli account che utilizzano l'integrazione ufficiale **WhatsApp Business API**.
:::

:::caution
Per inviare messaggi di template `template_uuid` e `optin_contact` **devono** essere presenti nel payload.
:::

<RequestTabs endpoint='messages_api' request="post_multi_variable_messages_template"/>

In questo contesto, `template_values` si riferisce ai segnaposti del messaggio di template, ad esempio diciamo che hai un messaggio di template come questo:

```bash title=template_example
Ciao {{1}}, questo è un esempio di messaggio di template {{2}}. {{3}}!
```

Le sostituzioni dei segnaposti verranno effettuate con i valori passati nel payload all'interno di un array, quindi in questo caso sarà il seguente:

```bash title=template_example
Ciao Jack, questo è un esempio di messaggio di template. Saluti!
```

:::info
Quando i `template_values` sono validi, i valori all'interno di `content` saranno ignorati, poiché viene utilizzato per i messaggi di template con una sola variabile.
:::

## Invia messaggi di template con allegati multimediali

Puoi utilizzare l'API per inviare un messaggio di template approvato [Template](/api/reference/object_types/template)

:::info
Questo è disponibile solo per gli account che utilizzano l'integrazione ufficiale **WhatsApp Business API**.
:::

:::caution
Per inviare messaggi di template `template_uuid` e `optin_contact` devono essere presenti nel payload.
:::

Se hai messaggi di template multimediali approvati, puoi inviarli includendo un `url` valido del supporto

### Invia allegato immagine

<RequestTabs endpoint='messages_api' request="post_messages_template_image"/>

### Invia allegato documento

<RequestTabs endpoint='messages_api' request="post_messages_template_document"/>

### Invia allegato video

<RequestTabs endpoint='messages_api' request="post_messages_template_video"/>

:::info
Utilizza l'API dei modelli (Templates API) per ottenere gli `template_uuid` dei tuoi modelli.
:::