---
sidebar_position: 3
---

import openAIAPIKey from './assets/openAI_api_key.png'

# OpenAI

This action allows you to generate text, based on a prompt and the previous messages from the conversation.
You can imagine all type of scenarios, from the classic chat style with an assistant to more specific actions like summarising a conversation for your agents, giving advises or detecting possible users behaviours.
It's really up to you and highly depends on the prompt you will give to OpenAI.

:::tip
Before utilizing this action it is recommanded to read how to correctly set a prompt, which is call [prompt engineering](https://platform.openai.com/docs/guides/prompt-engineering).
:::

<iframe width="100%" height="500" src="https://www.youtube.com/embed/dqIdYm0nohY" title="How to use the &quot;OpenAI&quot; action - Callbell Chatbot" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## How this action works

Here are some explanations of how this action operates and its limitations:

- The bot always executes this action synchronously, meaning it waits until the OpenAI API returns a response before proceeding to the next step. Like the Webhook Action, if you have multiple OpenAI Actions one after the other, they will be executed sequentially, not in batches.

- The bot will continue even if your OpenAI action fails for any reason (timeout for instance).

- It's your responsibility to handle the response, whether success or failure. You'll need to specify variables to store the OpenAI answer. Then, it's up to you to use these variables later in the bot, for instance, as a condition in a choice block, in a message or a note.

## How to use it

Only the token and the prompt are mandatory.

### OpenAI Token parameter

You will find the API key on your [OpenAI account](https://platform.openai.com/api-keys).

:::tip
You can paste directly the key in the input, or you can also save it in a variable as a default value, which can be useful if you want to reuse it in multiple actions:

<div class="text--center">
    <img src={openAIAPIKey} width={500} />
</div>
:::

### Prompt parameter

The prompt allows you to build a custom assistant. You can insert variables inside to make it more dynamic.

### Analysed previous messages

<table>
  <tr>
    <th>Type</th>
    <th>Action</th>
  </tr>
  <tr>
    <td>All from conversation</td>
    <td>Send the whole conversation to OpenAI. Each message sent being seen as "Assistant" by OpenAI and each message received as "User"</td>
  </tr>
  <tr>
    <td>Only from current bot session</td>
    <td>Send the messages within the same "bot thread": from the last restart of the bot within the conversation </td>
  </tr>
  <tr>
    <td>Only last message</td>
    <td>The last user answer</td>
  </tr>
  <tr>
    <td>Only prompt</td>
    <td>Only the prompt is used to query OpenAI API</td>
  </tr>
</table>

### Dealing with OpenAI response

It's possible that even after correctly setting up your OpenAI action, it fails occasionally (mostly timeout).
If your bot's behavior depends on the result of the OpenAI response, it's important to handle errors.
The bot will store any errors in the variable you specified, or will use the variable `last webhook failure`:

It's up to you to handle this error or not. The best way is to create a specific variable for each webhook, and then check via a choice block if the variable contains a message:
