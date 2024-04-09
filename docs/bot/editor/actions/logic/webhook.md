---
sidebar_position: 3
---

import urlParams from './assets/url_params.png'
import queryParams from './assets/query_params.png'
import responseQuickView from './assets/response_quick_view.png'
import webhookValidationErrors from './assets/webhook_validation_errors.png'
import parameterVariable from './assets/parameter_variable.png'
import pathHelper from './assets/path_helper.png'
import flatMapExemple from './assets/flat_map_exemple.png'
import responseFailureVariable from './assets/response_failure_variable.png'
import failureHandling from './assets/failure_handling.png'
import simulatorWebhookChoices from './assets/simulator_webhook_choices.png'
import fakeSuccessWebhook from './assets/fake_success_webhook.png'
import multipleResponseVariables from './assets/multiple_response_variables.png'

# Webhook

This action allows you to make HTTP Request to any external service you want.
This is useful to send information from the bot to another service or to fetch information from another service and use it in the bot.

:::tip
Before utilizing this action you'll need technical knwoledge about [HTTP request and their parameters](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview).
:::

<iframe width="100%" height="500" src="https://www.youtube.com/embed/0pbU9KPXcWI" title="How to use the &quot;Webhook&quot; action - Callbell Chatbot" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## How this action works

Here are some explanations of how this action operates and its limitations:

- The bot always executes this action synchronously, meaning it waits until the request receives a result (either success or failure) before proceeding to the next step. If you have multiple webhook actions one after the other, they will be executed sequentially, not in batches.

- The timeout for the query is set internally to 15 seconds. Any long-running query will fail beyond this duration.

- The bot will continue even if your webhook action fails for any reason.

- It's your responsibility to handle the response, whether success or failure. You'll need to specify variables to store the request results. Then, it's up to you to use these variables later in the bot, for instance, as a condition in a choice block.

## How to use it

### Request parameters

The only mandatory parameter is the URL. You can directly add query parameters to it:

<div class="text--center">
    <img src={urlParams} width={500} />
</div>

or use the helper:

<div class="text--center">
    <img src={queryParams} width={500} />
</div>

All other parameters (headers and body) are optional. You can add them using the same logic, using the "add header" or "add body" buttons in the top right corner.

:::tip
You can insert variables to send previously stored information in any fields: URL, params, header, or body. Just click the small variable button on the right.

<div class="text--center">
    <img src={parameterVariable} width={500} />
</div>
:::

Once you have chosen the right method, you can click the `Test URL` button. If the request is successful, a small "eye" button on the right side will appear, allowing you to have a quick look at the response layout:

<div class="text--center">
    <img src={responseQuickView} width={500} />
</div>

### Request validation errors

When setting and testing the action, you may encounter different types of errors:

<div class="text--center">
    <img src={webhookValidationErrors} width={500} />
</div>

We process your requests on our server and identify common errors:

 <table>
  <tr>
    <th>Type</th>
    <th>Reasons</th>
    <th>Action</th>
  </tr>
  <tr>
    <td>MissingParameter</td>
    <td>Missing url or method</td>
    <td>Double-check that either the URL and the method are correctly specified.</td>
  </tr>
  <tr>
    <td>BadRequest</td>
    <td>Invalid URL, body, params or header</td>
    <td>Check the validity of each parameter. Use clients like Postman to check your parameters.</td>
  </tr>
  <tr>
    <td>BadResponse</td>
    <td>Response status different from 200 or response not in JSON format</td>
    <td>Check your server status.</td>
  </tr>
  <tr>
    <td>KeyError</td>
    <td>Specified path does not match response payload</td>
    <td>Double check the validity of the path you entered in the webhook action for each variable</td>
  </tr>
</table>

### Parsing and storing requests response in variables

Once your request receives a successful response, you can choose a variable that will store the result. You can also select the part of the response you want to store by using the "path" helper:

<div class="text--center">
    <img src={pathHelper} width={500} />
</div>

If you are trying to select an array as a value, the helper will suggest using the `flatMap` function, which gives you the possibility to extract any value from the array.

For instance, let's say the data structure of your request's response looks like this:

```
{
  "products": [
    {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "images": [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",
        "https://cdn.dummyjson.com/product-images/1/2.jpg"
      ]
    },
    {
      "id": 2,
      "title": "iPhone X",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "images": [
        "https://cdn.dummyjson.com/product-images/2/1.jpg"
      ]
    }
  ]
}
```

And you want to store in the variable `webhook success` an array of product titles only:

```
["iPhone 9", "iPhone X"]
```

Using the following value will match your need:

<div class="text--center">
    <img src={flatMapExemple} width={500} />
</div>

If you want to access the category of the second product item, you can use this path instead:

```
products[1].category
```

:::tip
You can store multiple parts of the response in different variables. This will prevent you from running the same webhook request multiple time

<div class="text--center">
    <img src={multipleResponseVariables} width={500} />
</div>
:::

### Dealing with failed requests

It's possible that even after correctly setting up your webhook action, it fails occasionally (server errors, parameters not handled correctly, etc.).
If your bot's behavior depends on the result of the request, it's important to handle errors.
The bot will store any errors in the variable you specified, or will use the variable `last webhook failure`:

<div class="text--center">
    <img src={responseFailureVariable} width={500} />
</div>

It's up to you to handle this error or not. The best way is to create a specific variable for each webhook, and then check via a choice block if the variable contains a message:

<div class="text--center">
    <img src={failureHandling} width={600} />
</div>

## Test your request in the simulator

You should always verify if your bot is behaving as expected via the simulator, ensuring both successful and failed requests are handled correctly.
When the simulator reaches a webhook action, unlike the real bot, it will pause and prompt you to specify what the request should resemble:

<div class="text--center">
    <img src={simulatorWebhookChoices} width={500} />
</div>

- Fake success: It will prompt a modal to specify the payload of the successful request. Then, it will utilize each path you have specified in the webhook action to parse and store the corresponding variables. Note that if you are storing into a list-type variable, the simulator will expect the payload you provide to contain an array at the right path. If not, an error will be displayed in the modal, preventing further progression.

<div class="text--center">
    <img src={fakeSuccessWebhook} width={500} />
</div>

- Fake failure: It will display the same modal and allow you to specify the payload to be saved in the fail variable you specified in the action.

- Trigger real webhook: It will proxy your request to our server and return the actual result. This can be useful for checking if everything works fine, but remember that it will make a real HTTP request. If you plan to add a user to your CRM via the webhook action, using this choice in the simulator may add unwanted data to your CRM.
