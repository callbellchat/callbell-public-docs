---
title: Canal
sidebar_position: 6
---

# Canal

Os canais são as diferentes plataformas onde você pode receber e enviar mensagens. Você pode ter vários canais do mesmo tipo, por exemplo, vários números de WhatsApp.

## Propriedades

| Parâmetro  | Tipo    | Descrição                                                                                     |
| :--------- | :------ | :-------------------------------------------------------------------------------------------- |
| `uuid`     | String  | O identificador único do canal.                                                               |
| `title`    | String  | O título do canal.                                                                            |
| `type`     | String  | O tipo do canal. Os valores possíveis são `facebook`, `whatsapp`, `instagram` e `telegram`. |
| `main`     | Boolean | Indica se o canal é o canal principal.                                                        |

## Exemplo

```json title=response.json
{
  "channels": [
    {
      "uuid": "7c996996fea947f4a1d5a11e7fac84db",
      "title": "phone_number_1",
      "type": "whatsapp",
      "main": true
    },
    {
      "uuid": "dcefe6d18b5c4bbdb0661136c7f63c8e",
      "title": "phone_number_2",
      "type": "whatsapp",
      "main": false
    },
    {
      "uuid": "759edec71ff440b29fc635c5fac84d4f",
      "title": "phone_number_3",
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