---
sidebar_position: 1
---

import restartBotUrl from './assets/restart_bot.png'

# Riavvia il Bot

<img src={restartBotUrl} width={180} />

Questa azione consente di riavviare la sequenza di bot.

È utile quando si vuole riavviare la sequenza bot da un punto specifico, ad esempio quando l'utente non è in grado di rispondere a una domanda.

Si noti che questa azione chiude anche la conversazione e azzera tutte le variabili. Se si vuole riavviare la sequenza bot senza chiudere la conversazione, si può usare l'azione [Jump to Action] (/bot/editor/actions/logic/jump_to).