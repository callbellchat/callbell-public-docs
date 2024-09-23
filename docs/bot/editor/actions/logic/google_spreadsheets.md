---
sidebar_position: 3
---

import googleSpreadsheetValidFormat from './assets/google_spreadsheet_valid_format.png'
import googleCredentials from './assets/google_credentials.png'
import googleCredentialsWarning from './assets/google_credentials_warning.png'
import googleSpreadsheetInsertLast from './assets/google_spreadsheet_insert_last.png'
import googleSpreadsheetInsert from './assets/google_spreadsheet_insert.png'
import googleSpreadsheetInsert2 from './assets/google_spreadsheet_insert_2.png'
import googleSpreadsheetUpdate from './assets/google_spreadsheet_update.png'
import googleSpreadsheetUpdate2 from './assets/google_spreadsheet_update_2.png'
import googleSpreadsheetSelect from './assets/google_spreadsheet_select.png'
import googleSpreadsheetSelect2 from './assets/google_spreadsheet_select_2.png'

# Google Spreadsheet

This action enables your bot to interact with a Google Sheets document by inserting, updating, and selecting rows dynamically during user interactions. It can be used to store, retrieve, and modify data collected from bot conversations.

# Use Cases:

- Storing user responses directly into a Google Sheets file for further processing.
- Updating specific entries in Google Sheets based on user input.
- Retrieving data from a Google Sheet to use within a conversation or to use as conditions in the bot flow.

# How to use it:

## 1. Adding a Google Sheets Action

To add a Google Sheets action in the Callbell flow editor, follow these steps:

1. Open the Flow Builder and select the point in your conversation where you want to integrate Google Sheets.
2. Add a new action by clicking the Add Action button and selecting Google Sheets from the list of available actions, inside the "Logic" section.

## 2. Authenticate to your Google account

Click "Google connect" button and follow the instructions.

:::tip
Make sure to select all rights. Callbell bot will not work properly if either of the "Google Drive File" or "Google Spreadsheet Sheet" right is missing.

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

- Insert Position: Choose the row where the new data will be inserted.

  "First" will insert a row at line 1.

  "Custom" will insert a row at any specified index. You can make this value dynamic by using a variable but make sure the value is always a number. The Bot will return an error and continue its flow if the index is not a number.

  "Last" will insert the row to the first empty row found.

  Note that that if you have "holes" in your spreadsheet, the row may not be inserted where you want.

<div class="text--center">
    <img src={googleSpreadsheetInsertLast} width={500} />
</div>

- Columns Values: Map the data that will be inserted.

You can add multiple columns based on the data you want to insert and on the columns available in your spreadsheet.
Ommiting a column value will just leave the column empty in your spreadsheet

For instance, these parameters:

<div class="text--center">
    <img src={googleSpreadsheetInsert} width={500} />
</div>
Will result in this insert:
<div class="text--center">
    <img src={googleSpreadsheetInsert2} width={500} />
</div>

## 5. Updating Data in Google Sheets

When selecting the Update Row option:

- Update Position: Exactly like this insert, define which row to update. Note that because of Google limitation, it's not possible to update directly the last row.

- Columns Values: Like the insert, define which columns to update with user-provided values. Any column specified here will override the previous row value. If you want to keep the previous column value, just don't specify any column.

For instance, an action define this way:

<div class="text--center">
    <img src={googleSpreadsheetUpdate} width={500} />
</div>

Will result updating the row 3 that way:

<div class="text--center">
    <img src={googleSpreadsheetUpdate2} width={500} />
</div>

## 6. Selecting Data from Google Sheets

To search and retreive a row you will need:

- **The column to search** : The bot we iterate and look only on one given column.
- **Cell value to find** : What value the column should contain
- Store the row data in variables. You can access any column data and store it in any variable you have created.

For instance an action set this way:

<div class="text--center">
    <img src={googleSpreadsheetSelect} width={500} />
</div>

Whould return this value:

<div class="text--center">
    <img src={googleSpreadsheetSelect2} width={500} />
</div>

And store it in the variable "spreadsheet phone number"

:::tip
Note that the search will only return the first result. If you have multiple rows matching the cell value, only the first one will be returned. If the result you are looking for is not the first one, create a new column in your spreadsheet with more specific/unique values
:::

## 7. Handling Failures

In case of an API failure, you can store the failure response in a dedicated variable for future analysis or retries.
You can, for instance, imagine some logic that would check the failure and retry with a "jump" action.

# Best Practices:

- Always ensure that the Google Sheets API is connected and has the proper permissions for the bot to access the document.
- Test the integration thoroughly to handle possible API errors (e.g., Google Sheets access issues). The bot simulator will help you in this matter.
