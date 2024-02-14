---
title: POST /contatti
sidebar_position: 4
---

import RequestTabs from "@site/src/components/Requests/RequestTabs"

# POST /contatti

Crea un nuovo contatto.

### Parametri richiesti

| Parametro    | Tipo   | Descrizione                                                        |
| :----------- | :----- | :----------------------------------------------------------------- |
| `identificativo` | String | L'identificativo del contatto (ad esempio, numero di telefono su WhatsApp) |
| `origine`     | Origine | L'origine del contatto (ad esempio, `whatsapp`)                     |
| `nome`       | String | Il nome del contatto                                               |

### Parametri opzionali

| Parametro       | Tipo     | Descrizione                                                                       |
| :-------------- | :------- | :-------------------------------------------------------------------------------- |
| `tags`          | String[] | Una lista di valori separati da virgola (ad esempio, `['Richiamare', 'Interessato']`) |
| `campi_personalizzati` | String{} | Un oggetto con i campi personalizzati (ad esempio, `{'Indirizzo di fatturazione': 'Via Principale 1'}`)                    |
| `utente_assegnato` | String   | Email dell'utente a cui vuoi assegnare un contatto                             |
| `team_uuid`     | String   | UUID del team a cui vuoi assegnare un contatto                                  |
| `canale_uuid`  | String   | Il messaggio sarà inviato da questo canale (se omesso, verrà utilizzato il canale principale predefinito) |

:::caution
Quando si passano `campi_personalizzati` o `tags`, assicurarsi che esistano nel proprio account. Consulta [tags](https://dash.callbell.eu/settings/tags) e [campi_personalizzati](https://dash.callbell.eu/settings/custom_fields) nelle impostazioni.

Lo stesso vale per `utente_assegnato` e `team_uuid`: devono esistere nel proprio account.
:::

### Esempio Richiesta

<RequestTabs endpoint='contacts_api' request="post_contacts"/>

### Risposta

| Parametro | Tipo                                           | Descrizione               |
| :-------- | :--------------------------------------------- | :------------------------ |
| `contatto` | [Contatto](/api/reference/object_types/contact) | Il contatto creato. |

### Esempio Risposta

```json title=response.json
{
  "contatto": [
    {
      "uuid": "414a6d692bd645ed803f2e7ce360d4c8",
      "nome": "John Doe",
      "numeroDiTelefono": "123456789",
      "avatarUrl": null,
      "creatoIl": "2020-11-13T21:08:53Z",
      "origine": "whatsapp",
      "link": "https://dash.callbell.eu/contacts/414a6d692bd645ed803f2e7ce360d4c8",
      "tags": [],
      "utenteAssegnato": null,
      "campiPersonalizzati": {}
    }
  ]
}
```