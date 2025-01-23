---
sidebar_position: 3
---

import jumpToBotAction from './assets/jump_to_bot.png'
import jumpToBotActionBotSelection from './assets/jump_to_bot_select_bot.png'
import jumpToBotActionStepSelection from './assets/jump_to_bot_select_step.png'
import jumpToBotActionPassToChild from './assets/jump_to_bot_pass_to_child.png'
import jumpToBotActionPassToParent from './assets/jump_to_bot_pass_to_parent.png'
import jumpToBotActionExtractTip from './assets/jump_to_bot_extract_tip.png'

# Pular para um Bot

Esta ação permite que você pule para um bot diferente.

<img src={jumpToBotAction} width={180} />

Essa funcionalidade pode ser útil em dois casos principais:

- **Simplificar a lógica de bots complexos**: Se a lógica do seu bot se tornar muito complexa, você pode dividi-la em partes menores e mais gerenciáveis. Esta ação permite separar a lógica do bot principal em bots mais focados.
- **Reutilizar modelos ou lógicas**: Se você frequentemente repete um modelo ou lógica específica no seu bot, pode criar um bot "modelo" reutilizável. Esse caso de uso avançado pode economizar tempo, reduzir a complexidade e minimizar erros ao criar bots.

:::tip
Ao usar a função de copiar/colar no construtor de bots, você pode extrair o conteúdo copiado para um novo bot. Por padrão, essa função substituirá automaticamente a seção que você copiou inicialmente por uma ação de "pular para um bot".

<div class="text--center">
    <img src={jumpToBotActionExtractTip} width={500} />
</div>
:::

## Como Usar

### 1. Seleção do Bot e da Ação

Primeiro, selecione o bot para o qual deseja pular. Observe que você só pode selecionar bots que utilizam o mesmo canal que o seu bot atual.

<div class="text--center">
    <img src={jumpToBotActionBotSelection} width={500} />
</div>

Após selecionar o bot, aparecerá um popup convidando você a selecionar a etapa ou ação específica no bot de destino. Tenha cuidado ao escolher essa etapa. Se o bot filho depender de variáveis inicializadas antes da etapa selecionada, pode ser necessário especificar seus valores (consulte o ponto 2 abaixo).

<div class="text--center">
    <img src={jumpToBotActionStepSelection} width={500} />
</div>

### 2. Passar Valores para o Bot Filho

Em alguns casos, você pode querer passar valores do bot pai para o bot filho. Use o botão "Adicionar Valor" para transferir dados. Cada linha permite configurar uma variável no bot filho com qualquer valor que você desejar. Você pode passar valores fixos ou usar variáveis do bot pai:

<div class="text--center">
    <img src={jumpToBotActionPassToChild} width={500} />
</div>

### 3. Retornar ao Bot Pai Após o Bot Filho

Em outros casos, você pode querer continuar o fluxo do bot pai assim que o bot filho terminar. Em vez de criar uma ação separada de "pular para um bot" no bot filho para retornar ao pai, basta ativar a opção "Continuar o fluxo aqui após o término do bot filho". Isso garante que, quando o bot filho concluir sua tarefa, ele retorne automaticamente ao bot pai.

Você também pode usar os valores salvos durante a execução do bot filho no bot pai. Para fazer isso, salve os valores do bot filho em variáveis do bot pai:

<div class="text--center">
    <img src={jumpToBotActionPassToParent} width={500} />
</div>
