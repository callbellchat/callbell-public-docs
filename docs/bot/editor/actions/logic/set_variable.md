---
sidebar_position: 6
---

import setVariableUrl from './assets/set_variable.png'
import setVariableEditUrl from './assets/set_variable_edit.png'

# Set Variable

<img src={setVariableUrl} width={180} />

The **Set Variable** action is used to set a variable to a specific value.

## How to use it

After adding the action you can either select an existing variable or create a new one. In the latter case, just type the variable name and then click on the **Create** button.

<img src={setVariableEditUrl} width={400} />

###  Creating a new variable

Creating a new variable will prompt you to select the variable type. You can choose between **String**, **Number** and **List**.

After selecting the variable type, you can specify the variable value. Depending on the type of variable you selected, you will be able to specify an operation to apply to the variable.

### String variables

If you created or selected a **String** variable, you can perform the following actions:

- **Replace text** - Replace the variable value with the specified text.
- **Add to text** - Append the specified text to the variable value.

### Number variables

If you created or selected a **Number** variable, you can perform the following actions:

- **Replace number** - Replace the variable value with the specified number.
- **Add number** - Add the specified number to the variable value.
- **Subtract number** - Subtract the specified number from the variable value.
- **Multiply number** - Multiply the variable value by the specified number.
- **Divide number** - Divide the variable value by the specified number.

:::info
By default, the variable value is set to `0`.
:::

### List variables

If you created or selected a **List** variable, you can perform the following actions:

- **Add to list** - Add the specified text to the list.
- **Remove from list** - Remove the specified text from the list.
- **Empty list** - Empty the list.

### Using variables with other variables

You can also use variables with other variables. For example, you can set a variable to the value of another variable. This is helpful if you're building a list of values and you want to add a new value to the list or, for example you want to keep track of the score of a user.