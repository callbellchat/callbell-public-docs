Esta mensagem será enviada sempre que uma mensagem for **criada**, por exemplo, ao receber ou enviar uma mensagem de/para um cliente.

### Nome do Evento

`message_created`

### Campos do Payload

| Campo          | Tipo     | Descrição                                                       |
| :------------- | :------- | :-------------------------------------------------------------- |
| `to`           | string   | O identificador específico do canal do destinatário da mensagem |
| `from`         | string   | O identificador específico do canal do remetente da mensagem    |
| `text`         | string   | O texto da mensagem                                             |
| `attachments`  | string[] | Os anexos da mensagem                                           |
| `status`       | string   | O status da mensagem. Pode ser apenas `recebida` ou `enviada`   |
| `channel`      | string   | Identificador do canal (por exemplo, `whatsapp`)                |
| `contact.uuid` | string   | O UUID do contato associado à mensagem                          |
| `createdAt`    | string   | Data de criação do contato (formato ISO 8601)                   |

### Exemplo de Payload

```json title=payload.json
{
  "event": "message_created",
  "payload": {
    "to": "331122334455",
    "from": "335544332211",
    "text": "Olá",
    "status": "recebida",
    "channel": "whatsapp",
    "contact": {
      "uuid": "eb2b914a977e4ab896e7b886698b3eac"
    },
    "createdAt": "2022-10-18T12:06:29.000+02:00"
  }
}
```