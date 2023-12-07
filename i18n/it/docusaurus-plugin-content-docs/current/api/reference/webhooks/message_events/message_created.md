# Messaggio creato

Questo evento sarà inviato ogni volta che un messaggio viene **creato**, ad esempio quando si _riceve_ o _invia_ un messaggio da/verso un cliente.

### Nome evento

`messaggio_creato`

### Campi del carico utile

| Campo | Tipo | Descrizione |
| :------------- | :------- | :------------------------------------------------------------- |
| `to` | stringa | L'identificatore specifico del canale del destinatario del messaggio |
| `da` | stringa | L'identificatore specifico del canale del mittente del messaggio |
| `testo` | stringa | Il testo del messaggio |
| `attachments` | string[] | Gli allegati del messaggio |
| `status` | stringa | Lo stato del messaggio. Può essere solo `ricevuto` o `inviato` |
| `canale` | stringa | Identificatore del canale (ad esempio, `whatsapp`) |
| `contatto.uuid` | stringa | L'uuid del contatto associato al messaggio |
| `createdAt` | stringa | Data di creazione del contatto (formattata ISO 8601) |

### Esempio di carico utile

```json title=payload.json
{
  "evento": "message_created",
  "payload": {
    "to": "331122334455",
    "da": "335544332211",
    "text": "Ciao",
    "stato": "ricevuto",
    "canale": "whatsapp",
    "contatto": {
      "uuid": "eb2b914a977e4ab896e7b886698b3eac"
    },
    "createdAt": "2022-10-18T12:06:29.000+02:00"
  }
}
```
