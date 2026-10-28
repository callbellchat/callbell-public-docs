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

# Conectar o Claude

Este guia conecta o Callbell ao [Claude](https://claude.ai) como um conector personalizado. Você configura uma única vez no claude.ai e depois o Callbell também fica disponível nos aplicativos do Claude para desktop e celular.

Os textos da interface do Claude aparecem em inglês, como nas capturas de tela.

:::info Planos
Os conectores personalizados estão disponíveis em todos os planos do Claude (o plano Free é limitado a um conector personalizado). Nos planos **Team** e **Enterprise**, só um Owner da organização pode adicionar um conector personalizado: veja [Planos Team e Enterprise](#team-and-enterprise-plans) abaixo.
:::

Assista ao vídeo passo a passo ou siga as etapas abaixo.

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
    <iframe src="https://cap.callbell.eu/embed/d9wjzmnq4r95rr6" title="Conectar o Claude ao Callbell passo a passo" frameBorder="0" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></iframe>
</div>

## Passo 1: adicionar o conector do Callbell

1. No Claude, clique em **Customize** na barra lateral e depois em **Connectors**.
2. Clique em **+ Add** e depois em **Add custom connector**.

<div class="text--center">
    <img src={claudeOpenConnectors} alt="Customize, Connectors, Add, Add custom connector" width={800} />
</div>

3. Preencha o formulário:
    - **Name**: `Callbell`
    - **MCP server URL**: `https://ai.callbell.eu/mcp`
4. Clique em **Continue**.

<div class="text--center">
    <img src={claudeAddCustomConnector} alt="Formulário Add custom connector preenchido com Callbell e https://ai.callbell.eu/mcp" width={560} />
</div>

Se o Claude mostrar em seguida configurações de autenticação, mantenha o login ativado e, em **OAuth client**, escolha **Register automatically**. Depois clique em **Add**.

### Planos Team e Enterprise {#team-and-enterprise-plans}

Nos planos Team e Enterprise, um Owner adiciona o Callbell uma única vez para toda a organização:

1. Vá em **Organization settings** > **Connectors**.
2. Clique em **Add**, escolha **Custom** e depois **Web**.
3. Preencha os mesmos **Name** e **MCP server URL** indicados acima e confirme.

Depois, os membros encontram o **Callbell** (com a etiqueta **Custom**) em **Customize** > **Connectors** e seguem direto para o passo 2. Cada membro se conecta com o próprio usuário do Callbell.

## Passo 2: conectar sua conta Callbell {#step-2-connect-your-callbell-account}

1. Abra o conector **Callbell** e clique em **Connect**.

<div class="text--center">
    <img src={claudeConnect} alt="Botão Connect do conector do Callbell" width={460} />
</div>

2. O Claude abre o Callbell. Entre com o seu usuário do Callbell, se ainda não estiver conectado.
3. Revise o pedido de acesso:
    1. Marque **Permitir que Claude faça alterações** somente se quiser que o Claude envie mensagens, atualize contatos, adicione notas e feche conversas. Deixe desmarcado para um acesso somente leitura.
    2. Clique em **Permitir**.

<div class="text--center">
    <img src={callbellConsent} alt="Página de consentimento do Callbell com a caixa para permitir alterações e o botão Permitir" width={800} />
</div>

Você volta para o Claude, e o conector do Callbell agora mostra as suas ferramentas.

## Passo 3: escolher quando o Claude pode usar cada ferramenta

A página do conector lista as ferramentas do Callbell. Por padrão, o Claude pede a sua aprovação antes de cada uso (**Needs approval**). Use os ícones ao lado de cada ferramenta, ou o menu ao lado de cada grupo, para deixar o Claude usar uma ferramenta sem perguntar, perguntar toda vez ou nunca usá-la.

<div class="text--center">
    <img src={claudeToolPermissions} alt="Permissões das ferramentas do conector do Callbell" width={700} />
</div>

:::tip
Mantenha **Needs approval** nas ferramentas de escrita (enviar mensagens, atualizar contatos, adicionar notas, fechar conversas) para conferir cada alteração antes que o Claude a faça.
:::

## Passo 4: usar o Callbell em um chat

1. Em um chat, clique em **+**, depois em **Connectors**, e confira se o **Callbell** está ativado.

<div class="text--center">
    <img src={claudeEnableInChat} alt="O botão do Callbell no menu Connectors de um chat" width={520} />
</div>

2. Faça uma pergunta sobre a sua conta Callbell, por exemplo "Quais equipes temos no Callbell?". Quando o Claude quer usar uma ferramenta do Callbell, ele pergunta antes: clique em **Allow once**, ou em **Always allow** para não ser mais perguntado sobre essa ferramenta.

<div class="text--center">
    <img src={claudeToolApproval} alt="O Claude pedindo para usar List teams do Callbell" width={620} />
</div>

3. O Claude responde com os dados da sua conta Callbell.

<div class="text--center">
    <img src={claudeChatAnswer} alt="Resposta do Claude depois de usar o conector do Callbell" width={700} />
</div>

## Desconectar o Claude

Na página do conector do Callbell no Claude, clique em **Disconnect**. Você também pode remover o acesso pelo Callbell, veja [Gerenciar as conexões](./manage_connections.md).
