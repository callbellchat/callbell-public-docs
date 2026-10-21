---
sidebar_position: 5
---

import callbellConnectedApps from './assets/callbell_connected_apps.png'

# Gerenciar as conexões

Todos os aplicativos de IA conectados à sua conta Callbell aparecem no Callbell, assim você sempre sabe quem conectou o quê.

## Ver os aplicativos conectados

1. No Callbell, vá em **Configurações**, abra **Integrações** e clique em **Configurações da API**.
2. Abra a aba **Aplicativos conectados**.

<div class="text--center">
    <img src={callbellConnectedApps} alt="A aba Aplicativos conectados nas configurações da API do Callbell" width={800} />
</div>

Cada linha é uma conexão:

| Coluna | Significado |
| :-- | :-- |
| **Aplicativo** | O aplicativo de IA, por exemplo Claude ou ChatGPT. |
| **Conectado por** | O usuário do Callbell que aprovou a conexão. |
| **Conectado em** | Quando a conexão foi aprovada. |
| **Permissões** | **Leitura**, ou **Leitura** e **Escrita** se o usuário permitiu que o aplicativo fizesse alterações. |
| **Última vez usada** | A última vez que o aplicativo chamou o Callbell. |

Todos os usuários com acesso às configurações veem todas as conexões da conta, inclusive as dos colegas.

## Desconectar um aplicativo

3. Clique em **desconectar** na conexão que você quer remover e confirme.

O aplicativo perde o acesso à conta imediatamente. Somente essa conexão é removida: o mesmo aplicativo conectado por outros usuários continua funcionando.

Para usar o Callbell de novo nesse aplicativo, conecte-o novamente pelo próprio aplicativo (por exemplo com **Connect** no conector do Callbell no Claude).

:::tip
Desconecte e conecte novamente um aplicativo para mudar a conexão de somente leitura para leitura e escrita, ou o contrário.
:::

## Solução de problemas

| Mensagem ou problema | O que fazer |
| :-- | :-- |
| "Os aplicativos de IA externos ainda não estão habilitados nesta conta." | Entre em contato com nossa equipe de suporte para ativar o recurso na sua conta. |
| "Somente usuários com acesso às configurações da conta podem conectar um aplicativo." | Peça a um administrador para dar acesso às configurações, ou para conectar o aplicativo. |
| "Conclua a configuração da sua conta Callbell antes de conectar um aplicativo." | Conclua a configuração da sua conta no Callbell e tente novamente. |
| "Esta ação está temporariamente bloqueada no seu usuário por motivos de segurança." | Entre em contato com nossa equipe de suporte. |
| O assistente consegue ler seus dados, mas não consegue enviar mensagens nem alterar nada. | A conexão só tem a permissão **Leitura**. Desconecte e conecte novamente marcando **Permitir que ... faça alterações**. |
| O assistente diz que há solicitações demais. | Cada conexão tem um limite de solicitações. Aguarde um minuto e tente novamente. |
| O aplicativo parou de funcionar depois de uma desconexão. | Conecte o aplicativo novamente pelas configurações do conector. |
