---
title: POST /messages/send
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# POST /messages/send

:::attenzione
Dopo 24 ore senza risposta da parte del cliente, non è possibile inviare messaggi normali, ma è necessario utilizzare un messaggio [Template](#invio-template-messaggi), vedi esempi sotto.
:::

### Parametri richiesti

| Parametro | Tipo           | Descrizione                                        |
| :-------- | :------------- | :------------------------------------------------- |
| `to`      | Stringa        | Numero di telefono o identificatore di piattaforma |
| `from`    | Stringa        | Identificatore del canale (es. `whatsapp`)         |
| `type`    | MessageType    | Tipo di messaggio da inviare                       |
| `content` | MessageContent | Contenuto del messaggio                            |

### Parametri opzionali

| Parametro         | Tipo    | Descrizione                                                   |
| :---------------- | :------ | :------------------------------------------------------------ |
| `template_uuid`   | Stringa | Identificatore univoco del modello di messaggio               |
| `optin_contact`   | Boolean | Conferma che il contatto ha scelto di ricevere i messaggi     |
| `template_values` | Array   | Valori per il messaggio modello a più variabili               |
| `assigned_user`   | Stringa | Il messaggio sarà assegnato all'email di questo collaboratore |

### Esempio di richiesta

<RequestTabs endpoint='messages_api' request="post_messages"/>

### Risposta

| Parametro | Tipo                                                                   | Descrizione                                                                                |
| :-------- | :--------------------------------------------------------------------- | :----------------------------------------------------------------------------------------- |
| message   | [MessageSendRequest](/api/reference/object_types/message_send_request) | La richiesta di invio del messaggio. Il sistema metterà inizialmente in coda il messaggio. |

### Esempio di risposta

``json title=response.json
{
  "message": {
    "uuid": "adf3d1216d4c4dcd908199d6700f2381",
    "status": "enqueued"
  }
}
```

## Inviare il messaggio con l'assegnazione automatica dell'utente

È possibile inviare un messaggio tramite richiesta API con un utente assegnato, inviando la sua e-mail nel parametro `assigned_user`.

:::attenzione
L'utente deve far parte del vostro team, altrimenti l'assegnazione non funzionerà.
:::

<RequestTabs endpoint='messages_api' request="post_messages_with_user_assignment"/>

## Inviare un messaggio con allegati multimediali

È possibile utilizzare l'API per inviare **messaggi multimediali** contenenti **immagini**, **documenti**, **audio** e **video**.

È anche possibile aggiungere una _caption_ quando si inviano allegati `immagine` (vedere la richiesta di esempio qui sotto).

### Esempio di invio di un allegato immagine

<RequestTabs endpoint='messages_api' request="post_messages_image" />

### Esempio di invio dell'allegato immagine e della didascalia

<RequestTabs endpoint='messages_api' request="post_messages_image_caption"/>

### Esempio di invio dell'allegato di un documento

<RequestTabs endpoint='messages_api' request="post_messages_document"/>

### Esempio di invio di un allegato audio

:::info
Questo è disponibile solo per gli account che utilizzano l'integrazione ufficiale **WhatsApp Business API**.
:::

<RequestTabs endpoint='messages_api' request="post_messages_audio"/>

### Esempio di invio di un allegato video

:::info
Questo è disponibile solo per gli account che utilizzano l'integrazione ufficiale **WhatsApp Business API**.
:::

<RequestTabs endpoint='messages_api' request="post_messages_video"/>

## Inviare messaggi modello

È possibile utilizzare l'API per inviare un messaggio [Template](/api/reference/object_types/template) approvato.

:::info
Questa funzione è disponibile solo per gli account che utilizzano l'integrazione ufficiale **WhatsApp Business API**.
:::

:::attenzione
Per inviare messaggi modello, `template_uuid` e `optin_contact` **devono** essere presenti nel payload.
:::

<RequestTabs endpoint='messages_api' request="post_messages_template" />

In questo contesto, `testo` si riferisce al segnaposto del messaggio modello, per esempio diciamo che abbiamo un messaggio modello come questo:

```bash title=template_example
Ciao {{1}}, questo è un esempio di messaggio modello
```

La sostituzione del segnaposto avverrà con il valore passato nel payload, quindi in questo caso sarà il seguente:

```bash title=template_example
Ciao John Doe, questo è un esempio di messaggio modello
```

## Inviare messaggi modello a più variabili

È possibile utilizzare l'API per inviare un messaggio [Template](/api/reference/object_types/template) approvato.

:::info
Questa funzione è disponibile solo per gli account che utilizzano l'integrazione ufficiale **WhatsApp Business API**.
:::

:::attenzione
Per inviare messaggi modello, `template_uuid` e `optin_contact` **devono** essere presenti nel payload.
:::

<RequestTabs endpoint='messages_api' request="post_multi_variable_messages_template"/>

In questo contesto, `template_values` si riferisce ai segnaposto del messaggio modello, per esempio diciamo che abbiamo un messaggio modello come questo:

```bash title=template_example
Ciao {{1}}, questo è un esempio di template {{2}}. {{3}}!
```

La sostituzione dei segnaposto avverrà con i valori passati nel payload all'interno di un array, quindi in questo caso sarà la seguente:

```bash title=template_example
Ciao Jack, questo è un esempio di messaggio template. Salute!
```

:::info
Quando `template_values` è valido, i valori all'interno di `content` saranno ignorati, poiché è usato per i messaggi template con una sola variabile.
:::

## Inviare messaggi modello con allegati multimediali

È possibile utilizzare l'API per inviare un messaggio approvato [Template](/api/reference/object_types/template)

:::info
Questa funzione è disponibile solo per gli account che utilizzano l'integrazione ufficiale **WhatsApp Business API**.
:::

:::attenzione
Per inviare messaggi modello, `template_uuid` e `optin_contact` devono essere presenti nel payload.
:::

Se sono stati approvati dei messaggi modello di media, è possibile inviarli includendo un `url` valido del media

### Invia allegato immagine

<RequestTabs endpoint='messages_api' request="post_messages_template_image" />

### Invio di un documento allegato

<RequestTabs endpoint='messages_api' request="post_messages_template_document"/>

### Invio di un allegato video

<RequestTabs endpoint='messages_api' request="post_messages_template_video"/>

:::info
Utilizzare le [Templates API] (/api/reference/template_messages_api/introduction) per ottenere il `template_uuid` dei propri template.
:::
