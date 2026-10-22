---
sidebar_position: 2
---

import claudeOpenConnectors from './assets/claude_open_connectors.png'
import claudeAddCustomConnector from './assets/claude_add_custom_connector.png'
import claudeConnect from './assets/claude_connect.png'
import callbellConsent from './assets/callbell_consent.png'
import claudeToolPermissions from './assets/claude_tool_permissions.png'
import claudeEnableInChat from './assets/claude_enable_in_chat.png'
import claudeToolApproval from './assets/claude_tool_approval.png'
import claudeChatAnswer from './assets/claude_chat_answer.png'

# Connect Claude

This guide connects Callbell to [Claude](https://claude.ai) as a custom connector. You set it up once on claude.ai, and Callbell is then also available in the Claude desktop and mobile apps.

:::info Plans
Custom connectors are available on every Claude plan (the Free plan is limited to one custom connector). On **Team** and **Enterprise** plans, only an organization Owner can add a custom connector: see [Team and Enterprise plans](#team-and-enterprise-plans) below.
:::

## Step 1: Add the Callbell connector

1. In Claude, click **Customize** in the left sidebar, then **Connectors**.
2. Click **+ Add**, then **Add custom connector**.

<div class="text--center">
    <img src={claudeOpenConnectors} alt="Customize, Connectors, Add, Add custom connector" width={800} />
</div>

3. Fill in the form:
    - **Name**: `Callbell`
    - **MCP server URL**: `https://ai.callbell.eu/mcp`
4. Click **Continue**.

<div class="text--center">
    <img src={claudeAddCustomConnector} alt="Add custom connector form filled with Callbell and https://ai.callbell.eu/mcp" width={560} />
</div>

If Claude then shows authentication settings, keep sign-in enabled and, under **OAuth client**, choose **Register automatically**. Then click **Add**.

### Team and Enterprise plans {#team-and-enterprise-plans}

On Team and Enterprise plans, an Owner adds Callbell once for the whole organization:

1. Go to **Organization settings** > **Connectors**.
2. Click **Add**, choose **Custom**, then **Web**.
3. Fill in the same **Name** and **MCP server URL** as above, then confirm.

Members then find **Callbell** (with the **Custom** label) in **Customize** > **Connectors** and continue with step 2. Each member connects with their own Callbell login.

## Step 2: Connect your Callbell account {#step-2-connect-your-callbell-account}

1. Open the **Callbell** connector and click **Connect**.

<div class="text--center">
    <img src={claudeConnect} alt="Connect button on the Callbell connector" width={460} />
</div>

2. Claude opens Callbell. Log in with your Callbell user if you are not logged in already.
3. Review the access request:
    1. Tick **Allow Claude to make changes** only if you want Claude to send messages, update contacts, add notes and close conversations. Leave it unticked for read-only access.
    2. Click **Allow**.

<div class="text--center">
    <img src={callbellConsent} alt="Callbell consent page with the Allow Claude to make changes checkbox and the Allow button" width={800} />
</div>

You are sent back to Claude, and the Callbell connector now lists its tools.

## Step 3: Choose when Claude can use each tool

The connector page lists the Callbell tools. By default, Claude asks for your approval before each use (**Needs approval**). Use the icons next to each tool, or the menu next to each group, to let Claude use a tool without asking, ask you every time, or never use it.

<div class="text--center">
    <img src={claudeToolPermissions} alt="Tool permissions of the Callbell connector" width={700} />
</div>

:::tip
Keep **Needs approval** on the write tools (send messages, update contacts, add notes, close conversations) so that you check every change before Claude makes it.
:::

## Step 4: Use Callbell in a chat

1. In a chat, click **+**, then **Connectors**, and check that **Callbell** is switched on.

<div class="text--center">
    <img src={claudeEnableInChat} alt="The Callbell toggle in the Connectors menu of a chat" width={520} />
</div>

2. Ask a question about your Callbell account, for example "Which teams do we have in Callbell?". When Claude wants to use a Callbell tool, it asks you first: click **Allow once**, or **Always allow** to stop being asked for this tool.

<div class="text--center">
    <img src={claudeToolApproval} alt="Claude asking to use List teams from Callbell" width={620} />
</div>

3. Claude answers with data from your Callbell account.

<div class="text--center">
    <img src={claudeChatAnswer} alt="Claude answer after using the Callbell connector" width={700} />
</div>

## Disconnect Claude

On the Callbell connector page in Claude, click **Disconnect**. You can also remove the access from Callbell, see [Manage connections](./manage_connections.md).
