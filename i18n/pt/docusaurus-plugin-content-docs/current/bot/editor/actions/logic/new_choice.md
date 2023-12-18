---
sidebar_position: 2
---

import newChoiceUrl from './assets/new_choice.png'
import newChoiceEditUrl from './assets/new_choice_edit.png'
import newChoiceFallbackUrl from './assets/new_choice_fallback.png'

# Nova Escolha

<img src={newChoiceUrl} width={180} />

Essa ação permite criar uma nova escolha no fluxo atual.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/6lKoVK60FR4?list=PLf4W27ayM3atB5hBJesfP7Xp0XWY3Uge3" title="Callbell - Como usar o bloco de ação &quot;Nova Escolha&quot; - Chatbot" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Configuração

A ação permite personalizar **como o fluxo deve se comportar** com base na última mensagem enviada pelo usuário ou em um valor de variável.

<img src={newChoiceEditUrl} width={300} />

### Gatilhos da escolha

Você pode especificar um **gatilho** para a escolha utilizando um dos seguintes operadores de igualdade:

- **Igual** - O gatilho disparará se o valor for igual ao valor no campo da direita.
- **Contém** - O gatilho disparará se o valor contiver o valor do campo da direita.
- **Começa com** - O gatilho disparará se o valor começar com o valor especificado no campo da direita.
- **Termina com** - O gatilho disparará se o valor terminar com o valor especificado no campo da direita.
- **Diferente de** - O gatilho disparará se o valor for diferente do valor do campo da direita.
- **Maior que** - O gatilho disparará se o valor for maior do que o valor do campo da direita.
- **Menor que** - O gatilho disparará se o valor for menor do que o valor do campo da direita.
- **Maior ou igual a** - O gatilho disparará se o valor for maior ou igual ao valor do campo da direita.
- **Menor ou igual a** - O gatilho disparará se o valor for menor ou igual ao valor do campo da direita.
- **É número** - O gatilho disparará se o valor for um número.
- **É mensagem** - O gatilho disparará se o valor for uma mensagem.

### Múltiplos Gatilhos

Você pode especificar múltiplos gatilhos na mesma condição clicando no botão **Adicionar condição**.

Você pode decidir como unir as múltiplas condições utilizando os operadores **E** ou **OU**. Se você quiser alternar entre os dois operadores, clique no botão **E** ou **OU**.

Por exemplo, utilizando múltiplos **OU**, você pode construir uma lista de sinônimos para a mesma escolha. Isso é útil se você quiser disparar a mesma escolha para palavras diferentes.

Ao mesmo tempo, você pode usar múltiplos **E** para construir uma lista de condições que devem ser satisfeitas para disparar a escolha. Por exemplo, imagine verificar a condição de uma variável sendo maior que um certo valor e menor que outro valor.


### Variáveis

Você pode comparar valores de variáveis, ou seja, você pode tomar uma decisão com base no valor de uma variável. Isso é útil quando você quer direcionar o bot para tomar um caminho específico sem precisar perguntar ao usuário.

### Fallback

Se nenhuma das condições for satisfeita, o bot seguirá o caminho de **Fallback**.

<img src={newChoiceFallbackUrl} width={500} />

<iframe width="100%" height="500" src="https://www.youtube.com/embed/2LKLsk4q2CM?list=PLf4W27ayM3atB5hBJesfP7Xp0XWY3Uge3" title="Callbell - Como usar a ação Reenvio e Reenvio programado - Chatbot" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Os fallbacks são úteis quando você quer lidar com todos os casos que não são cobertos pelas condições.