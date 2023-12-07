---
titolo: Ottieni /auth/me
sidebar_position: 1
---

importare RequestTabs da "@site/src/components/Requests/RequestTabs".

# GET /auth/me

Restituisce un codice di stato `200` se l'`api_token` è valido.

### Richiesta di esempio

<RichiestaTabs endpoint='auth_api' request="get_me" />

### Risposta

| Parametro | Tipo | Descrizione |
| :----------- | :----- | :----------------------------------------------------- |
| `status` | stringa | Lo stato della richiesta (`ok`) |
| `user_email` | stringa | Email dell'utente dell'account |
| `nome_utente` | stringa | Nome dell'utente dell'account |
| `api_key` | stringa | Chiave API che ha generato il token usato per la richiesta |

### Esempio di risposta

```json title=response.json
{
  "status": "ok",
  "user_email": "john_doe@email.com",
  "nome_utente": "John Doe",
  "api_key": "test_1234567890"
}
```
