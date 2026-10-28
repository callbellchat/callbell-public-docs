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

# Conectar o ChatGPT

No [ChatGPT](https://chatgpt.com), você conecta o Callbell adicionando-o como **servidor MCP personalizado** na página **Plugins**. A configuração é feita no ChatGPT pela web.

Os textos da interface do ChatGPT aparecem em inglês, como nas capturas de tela.

:::info Espaços de trabalho Business, Enterprise e Edu
Nos espaços de trabalho de empresas, pode ser que um administrador ou proprietário precise primeiro criar o plugin do Callbell e publicá-lo no espaço de trabalho. Depois, os membros o instalam e se conectam com o próprio usuário do Callbell. Confira [o artigo de ajuda da OpenAI](https://help.openai.com/en/articles/12584461) para as regras do seu plano.
:::

Assista ao vídeo passo a passo ou siga as etapas abaixo.

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
    <iframe src="https://cap.callbell.eu/embed/k19cbznc662mdvp" title="Conectar o ChatGPT ao Callbell passo a passo" frameBorder="0" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></iframe>
</div>

## Passo 1: criar o plugin do Callbell

1. No ChatGPT, clique em **Plugins** na barra lateral.
2. Clique em **Add** e depois em **Add custom MCP server**.

<div class="text--center">
    <img src={chatgptOpenAdd} alt="Plugins, Add, Add custom MCP server" width={800} />
</div>

3. Preencha o formulário:
    1. **Name**: `Callbell` (a descrição é opcional).
    2. **Connection**, **Server URL**: `https://ai.callbell.eu/mcp`
    3. **Authentication**: mantenha **OAuth**. Não é preciso alterar as **Advanced OAuth settings**.
    4. Marque **I understand and want to continue**.
    5. Clique em **Create as a plugin**.

<div class="text--center">
    <img src={chatgptAddCustomMcp} alt="Formulário Add custom MCP server preenchido com Callbell e https://ai.callbell.eu/mcp" width={600} />
</div>

## Passo 2: conectar sua conta Callbell

1. O ChatGPT pede para conectar o Callbell: clique em **Connect Callbell**.

<div class="text--center">
    <img src={chatgptConnect} alt="O botão Connect Callbell" width={480} />
</div>

2. O ChatGPT abre o Callbell. Entre com o seu usuário do Callbell, se ainda não estiver conectado.
3. Revise o pedido de acesso:
    1. Marque **Permitir que ChatGPT faça alterações** somente se quiser que o ChatGPT envie mensagens, atualize contatos, adicione notas e feche conversas. Deixe desmarcado para um acesso somente leitura.
    2. Clique em **Permitir**.

<div class="text--center">
    <img src={chatgptConsent} alt="Página de consentimento do Callbell com a caixa para permitir alterações e o botão Permitir" width={800} />
</div>

Você volta para o ChatGPT. O Callbell agora aparece na página **Plugins**, na aba **Personal**.

<div class="text--center">
    <img src={chatgptInstalled} alt="O plugin do Callbell na aba Personal" width={480} />
</div>

## Passo 3: escolher quando o ChatGPT pede permissão

1. No ChatGPT, vá em **Settings** > **Plugins** e abra o **Callbell**.
2. Clique em **Permission** e escolha quando o ChatGPT precisa da sua aprovação para usar o Callbell.

<div class="text--center">
    <img src={chatgptPermissions} alt="Opções de permissão do plugin do Callbell" width={700} />
</div>

:::tip
Escolha **Allow read-only tools**: o ChatGPT lê os seus dados do Callbell sem perguntar, mas pede a sua aprovação antes de cada alteração, como enviar uma mensagem.
:::

## Passo 4: usar o Callbell em um chat

1. Em um chat novo, digite **@** e escolha **Callbell**.

<div class="text--center">
    <img src={chatgptMention} alt="Escolhendo o Callbell depois de digitar @ em um chat" width={760} />
</div>

2. Faça uma pergunta sobre a sua conta Callbell, por exemplo "Quais equipes temos no Callbell?".

<div class="text--center">
    <img src={chatgptPrompt} alt="Uma pergunta ao Callbell na caixa de mensagem do ChatGPT" width={760} />
</div>

3. O ChatGPT responde com os dados da sua conta Callbell.

<div class="text--center">
    <img src={chatgptAnswer} alt="Resposta do ChatGPT usando o Callbell" width={760} />
</div>

## Desconectar o ChatGPT

No ChatGPT, vá em **Settings** > **Plugins** e abra o **Callbell**:

1. Para desconectar a sua conta Callbell, clique em **...** ao lado dela e depois em **Disconnect**.
2. Para remover o plugin por completo, clique em **Uninstall**.

<div class="text--center">
    <img src={chatgptManage} alt="Disconnect e Uninstall nas configurações do plugin do Callbell" width={760} />
</div>

Você também pode remover o acesso pelo Callbell, veja [Gerenciar as conexões](./manage_connections.md).
