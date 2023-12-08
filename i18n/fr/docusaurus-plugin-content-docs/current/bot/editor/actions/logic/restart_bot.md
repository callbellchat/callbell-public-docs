---
sidebar_position: 1
---

import restartBotUrl from './assets/restart_bot.png'

# Redémarrer le robot

<img src={restartBotUrl} width={180} />

Cette action vous permet de redémarrer la séquence du robot.

Cela est utile lorsque vous souhaitez redémarrer la séquence du robot à partir d'un point spécifique, par exemple, lorsque l'utilisateur n'est pas en mesure de répondre à une question.

Notez que cette action fermera également la conversation et réinitialisera toutes les variables. Si vous souhaitez redémarrer la séquence du robot sans fermer la conversation, vous pouvez utiliser le [Saut vers une action](/bot/editor/actions/logic/jump_to).