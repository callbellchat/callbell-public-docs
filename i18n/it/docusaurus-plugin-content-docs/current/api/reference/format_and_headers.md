---
titolo: Formato e intestazioni
sidebar_position: 4
---

Tutte le risposte sono restituite in formato JSON. D'altra parte, l'API accetta solo payload JSON, il che significa che è responsabilità del client inviare un'intestazione accept come la seguente:

```
Accetta: application/json
```

Seguendo la stessa logica, tutti i corpi degli endpoint (ad esempio nelle richieste POST, PUT e PATCH) devono essere codificati in JSON.
