---
sidebar_position: 1
---

import csatActionPanel from './assets/csat_action_panel.png'
import lastCsatAnswer from './assets/last_csat_answer.png'
import csatBranches from './assets/csat_branches.png'
import csatAnalytics from './assets/csat_analytics.png'
import csatLogs from './assets/csat_logs.png'

# Send CSAT Survey

The **Send CSAT Survey** action allows you to send a customer satisfaction message and manage the flow according to the answer.

:::info
This action is not available for **QR** or **Twilio**  channels.
:::

## How to use it

Place this action in the part of the flow that is most suitable to have the survey triggered.

<img src={csatActionPanel} width={180} />

You will be asked to fill the CSAT question for your survey and the possible answers that will be categorized as "Promoter", "Neutral" or "Detractor". The possible answers will be sent as buttons for the customer to click and choose.
You can also choose whether to have a scheduled fallback or not. This means that:
 - If enabled, after 23 hours the bot flow will continue and the user will not be able to anser the survey anymore;
 - If disabled, the bot flow will continue only if the user answers the the survey (with a valid answer or not).

<img src={csatBranches} width={180} />

This is how the bot flow will look like once the action is added successfully.

<img src={lastCsatAnswer} width={180} />

The user's reply will be stored in a variable called "Last CSAT Answer" (it will vary according to your set up language).
If the user does not choose any of the valid buttons and send a random text, or does not reply at all, you will be able to know by checking the value stored in "Last CSAT Answer".

<img src={csatAnalytics} width={180} />

<img src={csatLogs} width={180} />

At last, you will be able to see the results of your CSAT survey in the analytics section of the Callbell app, as well as the response logs.
