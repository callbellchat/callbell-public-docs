---
sidebar_position: 3
---

import jumpToBotAction from './assets/jump_to_bot.png'
import jumpToBotActionBotSelection from './assets/jump_to_bot_select_bot.png'
import jumpToBotActionStepSelection from './assets/jump_to_bot_select_step.png'
import jumpToBotActionPassToChild from './assets/jump_to_bot_pass_to_child.png'
import jumpToBotActionPassToParent from './assets/jump_to_bot_pass_to_parent.png'
import jumpToBotActionExtractTip from './assets/jump_to_bot_extract_tip.png'

# Jump to Bot

This action allows you to jump to a different bot.

<img src={jumpToBotAction} width={180} />

This feature can be useful in two main use cases:

- **Simplifying complex bot logic**: If your bot's logic is becoming too complex, you can split it into smaller, more manageable chunks. This action enables you to separate the logic of your main bot into smaller, focused bots.
- **Reusing patterns or logic**: If you frequently repeat a specific pattern or logic in your bot, you can create a reusable "template" bot. This advanced use case can save time, reduce complexity, and minimize errors when building bots.

:::tip
When using the copy/paste feature in the bot builder, you can extract the copied clipboard contents into a new bot. By default, this feature will automatically replace the section you initially copied with a "jump to bot" action.

<div class="text--center">
    <img src={jumpToBotActionExtractTip} width={500} />
</div>
:::

## How to Use It

### 1. Bot Selection and Step Selection

First, select the bot you want to jump to. Note that you can only select bots that use the same channel as your current bot.

<div class="text--center">
    <img src={jumpToBotActionBotSelection} width={500} />
</div>

After selecting the bot, a popup will appear prompting you to select the specific step or action in the target bot. Be mindful when choosing this step. If the child bot relies on variables initialized before the selected step, you may need to specify their values (see Step 2 below).

<div class="text--center">
    <img src={jumpToBotActionStepSelection} width={500} />
</div>

### 2. Passing Values to the Child Bot

In some cases, you may want to pass values from the parent bot to the child bot. Use the "Add Value" button to pass data. Each line allows you to set a variable in the child bot with any value you choose. You can pass fixed values or use variables from the parent bot:

<div class="text--center">
    <img src={jumpToBotActionPassToChild} width={500} />
</div>

### 3. Returning to the Parent Bot After the Child Bot

In other cases, you may want to continue the parent bot's flow once the child bot is finished. Instead of creating a separate "jump to bot" action in the child bot to return to the parent, simply toggle the "Continue flow here after child bot is over" option. This ensures that when the child bot completes, it will automatically return to the parent bot.

You can also use values saved during the child bot's execution in the parent bot. To achieve this, save values from the child bot into parent bot variables:

<div class="text--center">
    <img src={jumpToBotActionPassToParent} width={500} />
</div>
