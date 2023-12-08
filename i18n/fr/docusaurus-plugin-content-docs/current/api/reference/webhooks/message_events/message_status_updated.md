# État du message mis à jour

:::caution
Notez que les **notifications de remise de message** sont disponibles uniquement sur les API WhatsApp Business et WhatsApp QR.
:::

:::info
Les événements sont uniquement transférés pour les **messages sortants**. Les messages entrants ne déclenchent aucune mise à jour d'état.
:::

Cet événement est envoyé chaque fois qu'un statut de message est **mis à jour**. Il peut prendre l'une des valeurs suivantes :

- `enqueued` (en attente)
- `sent` (envoyé)
- `delivered` (livré)
- `read` (lu)
- `failed` (échec)
- `mismatch` (erreur de correspondance)
- `deleted` (supprimé)


### Statuts du message

#### En attente (enqueued)

Envoyé lorsque le message est envoyé avec succès au client de l'API WhatsApp Business ou au client de l'API QR.

#### Envoyé (sent)

Ce statut est envoyé chaque fois que le message est envoyé à l'appareil de l'utilisateur final.

#### Livré (delivered)

Envoyé lorsque le message a finalement été livré à l'appareil de l'utilisateur final.

#### Lu (read)

Indique que le message a été lu avec succès par l'utilisateur final.

#### Échec (failed)

Ce statut est émis lorsque la livraison du message n'a pas été possible. La raison de l'échec est également spécifiée dans la charge utile interne (par exemple, "le numéro n'existe pas sur WhatsApp").

#### Erreur de correspondance (mismatch)

Cet événement de statut est envoyé chaque fois que l'API WhatsApp Business effectue une correction automatique du numéro de téléphone. L'identifiant du numéro de téléphone corrigé sera présent à l'intérieur de la charge utile interne de l'événement.

### Supprimé

:::caution
Cet événement a été abandonné car il n'est plus pris en charge par Meta.
:::

Représente la suppression d'un message par l'utilisateur final, à la fois pour "supprimer uniquement pour moi" et "supprimer pour tout le monde".


### Nom de l'événement

`message_status_updated`

### Champs de la charge utile

| Champ                  | Type   | Description                                 |
| :--------------------- | :----- | :------------------------------------------ |
| `uuid`                 | string | L'identifiant unique du message               |
| `status`               | string | Le statut de livraison du message             |
| `messageStatusPayload` | JSON   | La charge utile brute du statut du message    |

### Exemple de charge utile

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