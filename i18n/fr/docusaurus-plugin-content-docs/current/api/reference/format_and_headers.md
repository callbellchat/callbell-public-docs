---
title: Format and Headers
sidebar_position: 4
---

Toutes les réponses sont renvoyées au format JSON. D'autre part, l'API n'accepte que les charges utiles JSON, ce qui signifie que c'est la responsabilité du client d'envoyer un en-tête accept comme suit:

```
Accept: application/json
```

En suivant la même logique, tous les points de terminaison du corps (par exemple, dans les demandes POST, PUT et PATCH) doivent être encodés en JSON en conséquence.