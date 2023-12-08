# Status de Mensagem Atualizado

:::caution
Observe que as **notificações de entrega de mensagem** estão disponíveis apenas no **WhatsApp Business API** e **WhatsApp QR API**.
:::

:::info
Os eventos são encaminhados apenas para **mensagens enviadas**. As mensagens recebidas não acionarão atualizações de status.
:::

Este evento será enviado sempre que um status de mensagem receber uma **atualização**. Isso pode ser um dos seguintes valores:

- `enqueued`
- `sent`
- `delivered`
- `read`
- `failed`
- `mismatch`
- `deleted`

### Status de Mensagem

#### Enfileirado

Enviado quando a mensagem é enviada com sucesso para o cliente do WhatsApp Business API ou para o cliente do QR API.

#### Enviado

Esse status é enviado sempre que a mensagem é enviada para o dispositivo do usuário final.

#### Entregue

Enviado quando a mensagem foi finalmente entregue ao dispositivo do usuário final.

#### Lido

Indica que a mensagem foi lida com sucesso pelo usuário final.

#### Falha

Esse status é emitido sempre que a entrega da mensagem não foi possível. Na carga útil interna, o motivo da falha também é especificado (por exemplo, _"número não existe no WhatsApp"_)

#### Incompatibilidade

Esse status do evento é enviado sempre que o WhatsApp Business API realiza uma correção automática no número de telefone. O identificador do número de telefone corrigido estará presente na carga útil interna do evento.

### Excluído
:::caution
Este evento foi depreciado, pois não é mais suportado pelo Meta.
:::

Representa a exclusão de uma mensagem pelo usuário final, tanto para _"excluir apenas para mim"_ quanto para _"excluir para todos"_.

### Nome do Evento

`message_status_updated`

### Campos da Carga Útil

| Campo                  | Tipo   | Descrição                                |
| :--------------------- | :----- | :--------------------------------------- |
| `uuid`                 | string | O identificador único da mensagem        |
| `status`               | string | O status de entrega da mensagem          |
| `messageStatusPayload` | JSON   | A carga útil bruta do status da mensagem |

### Exemplo de Carga Útil

```json title=payload.json
{
  "event": "message_status_updated",
  "payload": {
    "uuid": "adf3d1216d4c4dcd908199d6700f2381",
    "status": "read",
    "messageStatusPayload":{
      "id":"gBGGM2MSRxl_Aglqmg5KQXU7ABC",
      "gsId":"2b34bfb7-2631-4763-89fb-1b3c65a4babc",
      "type":"read",
      "payload":{
        "ts":1686563913
      },
      "destination":"1122334455"
    }
  }
}
```