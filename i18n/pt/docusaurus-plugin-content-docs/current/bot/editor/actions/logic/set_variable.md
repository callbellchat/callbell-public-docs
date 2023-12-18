---
sidebar_position: 4
---

import setVariableUrl from './assets/set_variable.png'
import setVariableEditUrl from './assets/set_variable_edit.png'

# Set Variable

<img src={setVariableUrl} width={180} />

A ação **Set Variable** é usada para definir uma variável com um valor específico.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/94-suQGULQM?list=PLf4W27ayM3atB5hBJesfP7Xp0XWY3Uge3" title="Callbell - Como usar a ação &quot;definir variável&quot; no Chatbot da Callbell" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Como usar

Depois de adicionar a ação, você pode selecionar uma variável existente ou criar uma nova. No último caso, basta digitar o nome da variável e clicar no botão **Criar**.

<img src={setVariableEditUrl} width={400} />

###  Criando uma nova variável

Ao criar uma nova variável, você será solicitado a selecionar o tipo de variável. Você pode escolher entre **String**, **Number** e **List**.

Após selecionar o tipo de variável, você pode especificar o valor da variável. Dependendo do tipo de variável selecionado, você poderá especificar uma operação a ser aplicada à variável.

### Variáveis do tipo String

Se você criou ou selecionou uma variável do tipo **String**, você pode executar as seguintes ações:

- **Substituir texto** - Substituir o valor da variável pelo texto especificado.
- **Adicionar ao texto** - Anexar o texto especificado ao valor da variável.

### Variáveis do tipo Number

Se você criou ou selecionou uma variável do tipo **Number**, você pode executar as seguintes ações:

- **Substituir número** - Substituir o valor da variável pelo número especificado.
- **Adicionar número** - Adicionar o número especificado ao valor da variável.
- **Subtrair número** - Subtrair o número especificado do valor da variável.
- **Multiplicar por número** - Multiplicar o valor da variável pelo número especificado.
- **Dividir por número** - Dividir o valor da variável pelo número especificado.

:::info
Por padrão, o valor da variável é definido como `0`.
:::

### Variáveis do tipo List

Se você criou ou selecionou uma variável do tipo **List**, você pode executar as seguintes ações:

- **Adicionar à lista** - Adicionar o texto especificado à lista.
- **Remover da lista** - Remover o texto especificado da lista.
- **Esvaziar lista** - Esvaziar a lista.

### Usando variáveis com outras variáveis

Você também pode usar variáveis com outras variáveis. Por exemplo, você pode definir uma variável com o valor de outra variável. Isso é útil se você estiver construindo uma lista de valores e quiser adicionar um novo valor à lista ou, por exemplo, se quiser acompanhar a pontuação de um usuário.