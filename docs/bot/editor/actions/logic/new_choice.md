---
sidebar_position: 2
---

import newChoiceUrl from './assets/new_choice.png'
import newChoiceEditUrl from './assets/new_choice_edit.png'
import newChoiceFallbackUrl from './assets/new_choice_fallback.png'

# New Choice

<img src={newChoiceUrl} width={180} />

This action allows you to create a new choice in the current flow.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/0pbU9KPXcWI" title="How to use the &quot;New choice&quot; action - Callbell Chatbot" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Configuration

The action allows you to customize **how the flow should behave** depending on the last message sent by the user or by a variable value.

<img src={newChoiceEditUrl} width={300} />

### Choice triggers

You can specify a **trigger** of the choice by using one of the following equality operators:

- **Equals** - The choice triggers if the value is equal to the value on the right field.
- **Contains** - The choice triggers if the value contains the value on the right field.
- **Starts with** - The choice triggers if the value starts with the value specified in the right field.
- **Ends with** - The choice triggers if the value ends with the value specified in the right field.
- **Different from** - The choice triggers if the value is different from the value in the right field.
- **Greater than** - The choice triggers if the value is greater than the value in the right field.
- **Less than** - The choice triggers if the value is less than the value in the right field.
- **Greater than or equal to** - The choice triggers if the value is greater than or equal to the value in the right field.
- **Less than or equal to** - The choice triggers if the value is less than or equal to the value in the right field.
- **Is number** - The choice triggers if the value is a number.
- **Is message** - The choice triggers if the value is a message.

### Multiple Triggers

You can specify multiple triggers on the same condition by clicking on the **Add condition** button.

You can decide how to join the multiple conditions by using the **AND** or **OR** operators. If you want to switch between the two operators, click on the **AND** or **OR** button.

For example, using multiple **OR** you can build a list of synonyms for the same choice. This is helpful if you want to trigger the same choice for different words.

At the same time you can use multiple **AND** to build a list of conditions that must be satisfied to trigger the choice. For example, imagine checking the condition of a variable to be more of a certain value and less than another value.


### Variables

You can compare variable values, meaning that you can take a decision based on the value of a variable. This is helpful when you want to route the bot to take a specific path without having to ask the user for input.

### Fallback

If none of the conditions are satisfied, the bot will take the **Fallback** path.

<img src={newChoiceFallbackUrl} width={500} />

Fallbacks are useful when you want to handle all the cases that are not covered by the conditions.