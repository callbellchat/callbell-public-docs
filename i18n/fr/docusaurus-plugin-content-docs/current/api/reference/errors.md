---
sidebar_position: 6
---

# Erreurs

Callbell utilise les codes de réponse HTTP standard :

- Les réponses dans la plage **2xx** signifie que la requête a été exécutée avec succès

- Les réponses dans la plage **4xx** signifie que la requête n'a pas été réussie en raison d'une erreur du client, comme une erreur d'authentification, une limite de taux atteinte ou des paramètres incorrects

- Les réponses dans la plage **5xx** signifie que la requête n'a pas été réussie en raison d'une erreur interne du serveur. Il est généralement sûr de réessayer ces requêtes avec un délai ou ultérieurement