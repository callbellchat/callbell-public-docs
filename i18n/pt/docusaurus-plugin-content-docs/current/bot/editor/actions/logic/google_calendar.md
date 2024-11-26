---
sidebar_position: 8
---

import googleCredentials from './assets/google_credentials.png'
import googleCredentialsWarning from './assets/google_credentials_warning.png'
import googleCalendarVariables from './assets/google_calendar_variables.png'
import googleCalendarFullSetup from './assets/google_calendar_full_setup.png'
import googleCalendarEventCreated from './assets/google_calendar_event_created.png'

# Google Calendar

This action enables your bot to interact with a Google Calendar by creating events dynamically during user interactions.

# Use Cases:

- Creating reminders in your Google Calendar.
- Creating meetings using self-generated meeting links.

# How to use it:

## 1. Adding a Google Calendar Action

To add a Google Calendar action in the Callbell flow editor, follow these steps:

1. Open the Flow Builder and select the point in your conversation where you want to integrate Google Calendar.
2. Add a new action by clicking the Add Action button and selecting Google Calendar from the list of available actions, inside the "Logic" section.

## 2. Authenticate to your Google account

Click "Google connect" button and follow the instructions.

:::tip
Make sure to select all rights. Callbell bot will not work properly if any permissions are missing.

<div class="text--center">
    <img src={googleCredentials} width={500} />
</div>

You may also encounter this warning from Google:

<div class="text--center">
    <img src={googleCredentialsWarning} width={500} />
</div>

Which is just a temporary warning. In that case, make sure to continue by clicking "advanced" and then "Proceed with Callbell"
:::

## 3. Configuring the Action

You will need to configure the integration by filling in the following fields:

**Select calendar**: Choose the Google Calendar you want to interact with. Each Google account can have multiple calendars; the one labeled with an email address is your main calendar.

**Select action**: Currently, `create event` is the only option available.

**Event summary**: The title of the event as it will appear on the calendar.

**Event month**: The month in which the event will be created.

**Event day**: The day on which the event will be created.

**Event starts at**: The time when the event will start. The required time format is: `HH:MM`.

**Event duration (in minutes)**: The length of the event in minutes.

**Send event updates to**: The recipients who will receive updates about the event. The options are: `None` or `All`.

**Create meet link**: Option to generate a link for a virtual meeting associated with the event.

:::tip
You can use variables to dynamically populate these details
:::

## 4. Handling Success

In case of a successful response from the API, the result will indicate the event creation status: `confirmed`. By default, this value will be saved as `Last webhook success`, but you can configure any variable you prefer for it. If `Create meet link` option is active, the URL of the meet will be stored in the variable.

## 5. Handling Failure

In case of an API failure, you can store the failure response in a dedicated variable for future analysis or retries.
You can, for instance, imagine some logic that would check the failure and retry with a "jump" action.

## 6. Example

This is an example of how you can configure the action and use it with variables.

1. In this example, we created 2 variables:

<img src={googleCalendarVariables} width={500} />

2. `Summary`, `month` and `duration` were set as fixed values.

3. We used a combination of actions to dynamically retrieve the day:

- [Send message](/bot/editor/actions/interaction/send_message) to send the message asking about which day is the best.
- [Wait user's answer](/bot/editor/actions/interaction/wait_user_answer) to get the answer.
- [Set variable](/bot/editor/actions/logic/set_variable) to save the result from the answer in our variable `day`.

4. We did the same to retrieve the `time`.

5. Now it's finished, this is the result:

<img src={googleCalendarFullSetup} width={500} />

<img src={googleCalendarEventCreated} width={500} />

# Best Practices:

- Always ensure that the Google API is connected and has the proper permissions for the bot to access the calendar.
- Test the integration thoroughly to handle possible API errors (e.g., Google calendar access issues, Wrong date format issues). The bot simulator will help you in this matter.