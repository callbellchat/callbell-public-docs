---
sidebar_position: 1
---

# Visão geral

Conecte o **Claude**, o **ChatGPT** ou outro assistente de IA à sua conta Callbell e pergunte sobre seus contatos e conversas com as suas próprias palavras. Por exemplo:

- "Mostre as últimas mensagens do +55 11 90000 0000."
- "Quais contatos com a etiqueta `refund-request` estão atribuídos à equipe de Suporte?"
- "Adicione uma nota interna a este contato com um resumo da conversa."
- "Envie nosso modelo aprovado `order_update` para este contato."

## O que você precisa

- Um aplicativo de IA que aceite conectores personalizados, como o Claude ou o ChatGPT.
- Um usuário do Callbell com acesso às **configurações** da conta.
- O endereço do Callbell, que você cola no seu aplicativo de IA:

```
https://ai.callbell.eu/mcp
```

Não há chave de API para criar: na primeira vez que você se conecta, basta entrar com o seu usuário do Callbell.

## Como funciona a conexão

1. Você adiciona o Callbell no seu aplicativo de IA com o endereço acima.
2. O aplicativo abre uma página do Callbell, onde você entra se ainda não estiver conectado.
3. O Callbell mostra o que o aplicativo está pedindo. Você escolhe o que ele pode fazer e clica em **Permitir**.

Cada conexão é pessoal: cada colega se conecta com o próprio login do Callbell. Todas as conexões aparecem no Callbell, onde podem ser removidas a qualquer momento (veja [Gerenciar as conexões](./manage_connections.md)). O Callbell nunca compartilha sua senha com o aplicativo de IA.

## O que o assistente pode fazer

Ao se conectar, você escolhe entre dois níveis de acesso.

**Somente leitura** (padrão). O assistente pode:

- encontrar contatos por número de telefone, etiqueta, equipe ou canal,
- ler os dados dos contatos e as mensagens das conversas, incluindo as notas internas,
- ver seus canais, equipes e modelos do WhatsApp.

**Leitura e escrita**, somente se você marcar **Permitir que ... faça alterações**. O assistente também pode:

- enviar mensagens do WhatsApp para os seus contatos existentes (fora da janela de atendimento de 24 horas, só modelos aprovados),
- atualizar contatos: nome, etiquetas, campos personalizados e equipe,
- adicionar notas internas,
- fechar conversas.

Para mudar o nível de acesso depois, desconecte o aplicativo e conecte-o novamente.

:::caution
O assistente trabalha com toda a conta Callbell: ele pode ver todos os contatos e todas as conversas, não só os atribuídos a você. Conecte apenas aplicativos de confiança e mantenha o acesso somente leitura quando o assistente não precisar alterar nada.
:::

## Configurar o seu aplicativo de IA

- [Claude (web, desktop e celular)](./connect_claude.md)
- [ChatGPT](./connect_chatgpt.md)
- [Claude Code, Codex e outros clientes MCP](./developer_tools.md)

Para ver ou remover os aplicativos conectados à sua conta, leia [Gerenciar as conexões](./manage_connections.md).
