---
sidebar_position: 3
---

import openAIAPIKey from './assets/openAI_api_key.png'

# OpenAI

This action enables the generation of text based on a prompt and previous messages from the conversation. It can be applied to various scenarios, ranging from classic chat-style interactions with an assistant to specific actions like summarizing conversations for your agents, providing advice, or detecting potential user behaviors. The effectiveness of the action largely depends on the quality of the prompt provided.

:::tip
Before using this action, it is recommended to familiarize yourself with prompt engineering, which can be found [here](https://platform.openai.com/docs/guides/prompt-engineering).
:::

<iframe width="100%" height="500" src="https://www.youtube.com/embed/qvKuamQ207k" title="How to use the &quot;OpenAI&quot; action - Callbell Chatbot" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## How this action works

Here are some explanations of how this action operates and its limitations:

- The bot always executes this action synchronously, meaning it waits until the OpenAI API returns a response before proceeding to the next step. Similar to the Webhook Action, if you have multiple consecutive OpenAI Actions, they will be executed sequentially rather than in batches.
- The bot will continue its flow even if the OpenAI action fails for any reason, such as a timeout.
- It is your responsibility to handle the response, whether successful or failed. You'll need to specify variables to store the OpenAI answer. Then, it's up to you to utilize these variables later in the bot, for example, as conditions in a choice block, in messages, or notes.

## How to use it

Only the token and the prompt are mandatory.

### OpenAI Token parameter

You can find the API key on your [OpenAI account](https://platform.openai.com/api-keys).

:::tip
You can directly paste the key into the input field, or you can save it as a variable with a default value, which can be useful for reuse across multiple actions:

<div class="text--center">
    <img src={openAIAPIKey} width={500} />
</div>
:::

### Prompt parameter

The prompt allows you to construct a custom assistant. You can insert variables within it to make it more dynamic.

### Analysed previous messages

<table>
  <tr>
    <th>Type</th>
    <th>Action</th>
  </tr>
  <tr>
    <td>All from conversation</td>
    <td>Sends the entire conversation to OpenAI. Each message sent is interpreted as "Assistant" by OpenAI, and each received message is interpreted as "User"</td>
  </tr>
  <tr>
    <td>Only from current bot session</td>
    <td>Sends messages within the same "bot thread", starting from the last restart of the bot within the conversation.</td>
  </tr>
  <tr>
    <td>Only last message</td>
    <td>The last user response.</td>
  </tr>
  <tr>
    <td>Only prompt</td>
    <td>Only the prompt is used to query OpenAI API.</td>
  </tr>
</table>

### Dealing with OpenAI response

Even after correctly setting up your OpenAI action, occasional failures (mostly due to timeouts) may occur. If your bot's behavior relies on the OpenAI response, it's crucial to handle errors appropriately. Any errors encountered will be stored in the specified variable, or will use the variable `last webhook failure`:

It's up to you to decide how to handle these errors. The recommended approach is to create a specific variable for each webhook and then use a choice block to check if the variable contains a message.
