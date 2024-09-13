---
sidebar_position: 3
---

import googleSpreadsheetValidFormat from './assets/google_spreadsheet_valid_format.png'

# Google Spreadsheet

This action enables your bot to interact with a Google Sheets document by inserting, updating, and selecting rows dynamically during user interactions. It can be used to store, retrieve, and modify data collected from bot conversations.

# Use Cases:

• Storing user responses directly into a Google Sheets file for further processing.
• Updating specific entries in Google Sheets based on user input.
• Retrieving data from a Google Sheet to use within a conversation or to use as conditions in the bot flow.

# How to use it:

## 1. Adding a Google Sheets Action

To add a Google Sheets action in the Callbell flow editor, follow these steps:

1. Open the Flow Builder and select the point in your conversation where you want to integrate Google Sheets.
2. Add a new action by clicking the Add Action button and selecting Google Sheets from the list of available actions, inside the "Logic" section.

## 2. Authenticate to your Google account

Click "Google connect" button and follow the instructions.

:::tip
Make sure to select all rights. Callbell bot will not work properly if either of the "Google Drive File" or "Google Spreadsheet Sheet" right is missing.
:::

## 3. Configuring the Action

You will need to configure the integration by filling in the following fields:

**Spreadsheet**: Choose the Google Sheets document that you want to interact with. Ensure that the Google Sheets API is properly set up.

**Sheet**: Select the specific sheet within the document (e.g., “Sheet1”).

**Select Action**:

- Insert Row: Use this to add a new row in the sheet with the user’s data.
- Update Row: Use this to update an existing row based on user input.
- Select Row: Use this to retrieve data from the sheet to display in the bot conversation.

:::tip
Make sure you have available spreadsheets in your account. Callbell won't be able to create one automatically for you.
In addition, Callbell will only support spreadsheet with headers (with column names) at the top like this:

<div class="text--center">
    <img src={googleSpreadsheetValidFormat} width={500} />
</div>
:::

## 4. Inserting Data into Google Sheets

When selecting the Insert Row option:

- Insert Position: Choose the row where the new data will be inserted (typically “Custom” for dynamic use).
- Columns Values: Map the data that will be inserted.

You can add multiple columns based on the data you want to insert and on the columns available in your spreadsheet.
Callbell will try to

## 5. Updating Data in Google Sheets

When selecting the Update Row option:

- Update Position: Define which row to update (using “Custom” if you’re fetching a dynamic row index).
- Columns Values: Define which columns to update with user-provided values, such as:

## 6. Selecting Data from Google Sheets

For selecting data to display in the conversation:

- Configure which row or condition should be matched to retrieve the correct data.
- Use the returned data in the bot’s message by referencing variables (e.g., display a user’s last purchase or previous feedback).

## 7. Handling Failures

In case of an API failure, you can store the failure response in a dedicated variable for future analysis or retries. You can imagine some logic that would check the failure and retry with a "jump" action.

# Best Practices:

- Always ensure that the Google Sheets API is connected and has the proper permissions for the bot to access the document.
- Test the integration thoroughly to handle possible API errors (e.g., Google Sheets access issues). The bot simulator will help you in this matter.
