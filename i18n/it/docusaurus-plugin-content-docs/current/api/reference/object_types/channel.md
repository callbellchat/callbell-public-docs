---
title: Canale
sidebar_position: 6
---

# Canale

I canali sono le diverse piattaforme in cui puoi ricevere e inviare messaggi. Puoi avere più canali dello stesso tipo, ad esempio, numeri di WhatsApp multipli.

## Proprietà

| Parametro | Tipo    | Descrizione                                                                                     |
| :-------- | :------ | :---------------------------------------------------------------------------------------------- |
| `uuid`    | String  | L'identificatore univoco del canale.                                                             |
| `title`   | String  | Il titolo del canale.                                                                           |
| `type`    | String  | Il tipo di canale. I valori possibili sono `facebook`, `whatsapp`, `instagram` e `telegram`.   |
| `main`    | Boolean | Indica se il canale è il canale principale.                                                      |

## Esempio

```json title=response.json
{
  "channels": [
    {
      "uuid": "7c996996fea947f4a1d5a11e7fac84db",
      "title": "numero_di_telefono_1",
      "type": "whatsapp",
      "main": true
    },
    {
      "uuid": "dcefe6d18b5c4bbdb0661136c7f63c8e",
      "title": "numero_di_telefono_2",
      "type": "whatsapp",
      "main": false
    },
    {
      "uuid": "759edec71ff440b29fc635c5fac84d4f",
      "title": "numero_di_telefono_3",
      "type": "whatsapp",
      "main": false
    },
  ],
  "meta": {
    "page": 1,
    "pages": 1
  }
}
```