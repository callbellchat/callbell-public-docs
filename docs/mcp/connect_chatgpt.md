---
sidebar_position: 3
---

import chatgptOpenAdd from './assets/chatgpt_open_add.png'
import chatgptAddCustomMcp from './assets/chatgpt_add_custom_mcp.png'
import chatgptConnect from './assets/chatgpt_connect.png'
import chatgptConsent from './assets/chatgpt_consent.png'
import chatgptInstalled from './assets/chatgpt_installed.png'
import chatgptPermissions from './assets/chatgpt_permissions.png'
import chatgptMention from './assets/chatgpt_mention.png'
import chatgptPrompt from './assets/chatgpt_prompt.png'
import chatgptAnswer from './assets/chatgpt_answer.png'
import chatgptManage from './assets/chatgpt_manage.png'

# Connect ChatGPT

In [ChatGPT](https://chatgpt.com), you connect Callbell by adding it as a **custom MCP server** from the **Plugins** page. You set it up from ChatGPT on the web.

:::info Business, Enterprise and Edu workspaces
In company workspaces, an admin or owner may need to create the Callbell plugin and publish it to the workspace first. Members then install it and connect with their own Callbell login. See [OpenAI's help article](https://help.openai.com/en/articles/12584461) for the rules of your plan.
:::

## Step 1: Create the Callbell plugin

1. In ChatGPT, click **Plugins** in the left sidebar.
2. Click **Add**, then **Add custom MCP server**.

<div class="text--center">
    <img src={chatgptOpenAdd} alt="Plugins, Add, Add custom MCP server" width={800} />
</div>

3. Fill in the form:
    1. **Name**: `Callbell` (the description is optional).
    2. **Connection**, **Server URL**: `https://ai.callbell.eu/mcp`
    3. **Authentication**: keep **OAuth**. You don't need to change the **Advanced OAuth settings**.
    4. Tick **I understand and want to continue**.
    5. Click **Create as a plugin**.

<div class="text--center">
    <img src={chatgptAddCustomMcp} alt="Add custom MCP server form filled with Callbell and https://ai.callbell.eu/mcp" width={600} />
</div>

## Step 2: Connect your Callbell account

1. ChatGPT asks you to connect Callbell: click **Connect Callbell**.

<div class="text--center">
    <img src={chatgptConnect} alt="The Connect Callbell button" width={480} />
</div>

2. ChatGPT opens Callbell. Log in with your Callbell user if you are not logged in already.
3. Review the access request:
    1. Tick **Allow ChatGPT to make changes** only if you want ChatGPT to send messages, update contacts, add notes and close conversations. Leave it unticked for read-only access.
    2. Click **Allow**.

<div class="text--center">
    <img src={chatgptConsent} alt="Callbell consent page with the Allow ChatGPT to make changes checkbox and the Allow button" width={800} />
</div>

You are sent back to ChatGPT. Callbell now appears on the **Plugins** page, in the **Personal** tab.

<div class="text--center">
    <img src={chatgptInstalled} alt="The Callbell plugin in the Personal tab" width={480} />
</div>

## Step 3: Choose when ChatGPT asks for permission

1. In ChatGPT, go to **Settings** > **Plugins** and open **Callbell**.
2. Click **Permission** and choose when ChatGPT needs your approval to use Callbell.

<div class="text--center">
    <img src={chatgptPermissions} alt="Permission options of the Callbell plugin" width={700} />
</div>

:::tip
Choose **Allow read-only tools**: ChatGPT reads your Callbell data without asking, but asks you before every change, such as sending a message.
:::

## Step 4: Use Callbell in a chat

1. In a new chat, type **@** and choose **Callbell**.

<div class="text--center">
    <img src={chatgptMention} alt="Choosing Callbell after typing @ in a chat" width={760} />
</div>

2. Ask a question about your Callbell account, for example "Which teams do we have in Callbell?".

<div class="text--center">
    <img src={chatgptPrompt} alt="A question to Callbell in the ChatGPT message box" width={760} />
</div>

3. ChatGPT answers with data from your Callbell account.

<div class="text--center">
    <img src={chatgptAnswer} alt="ChatGPT answer using Callbell" width={760} />
</div>

## Disconnect ChatGPT

In ChatGPT, go to **Settings** > **Plugins** and open **Callbell**:

1. To disconnect your Callbell account, click **...** next to it, then **Disconnect**.
2. To remove the plugin completely, click **Uninstall**.

<div class="text--center">
    <img src={chatgptManage} alt="Disconnect and Uninstall in the Callbell plugin settings" width={760} />
</div>

You can also remove the access from Callbell, see [Manage connections](./manage_connections.md).
