---
sidebar_position: 1
---

# Visão geral

Conecte o **Claude**, o **ChatGPT** ou outro assistente de IA à sua conta Callbell e pergunte sobre seus contatos e conversas com as suas próprias palavras. Por exemplo:

- "Mostre as últimas mensagens do +55 11 90000 0000."
- "Quais contatos com a etiqueta `refund-request` estão atribuídos à equipe de Suporte?"
- "Adicione uma nota interna a este contato com um resumo da conversa."
- "Envie nosso modelo aprovado `order_update` para este contato."

## O que o assistente pode e não pode fazer

Ao se conectar, você escolhe entre dois níveis de acesso: **Somente leitura** (padrão) ou **Leitura e escrita**, se você marcar **Permitir que ... faça alterações**.

| | Ação | Somente leitura | Leitura e escrita |
| :-- | :-- | :-: | :-: |
| **Contatos** | Encontrar um contato pelo número de telefone | ✅ | ✅ |
| | Listar contatos por etiqueta, equipe ou tipo de canal | ✅ | ✅ |
| | Ver os dados de um contato, como etiquetas, campos personalizados, equipe, usuário atribuído e nota de contato | ✅ | ✅ |
| | Renomear um contato, adicionar ou remover etiquetas, preencher campos personalizados | ❌ | ✅ |
| | Buscar contatos pelo nome | ❌ | ❌ |
| | Criar ou excluir um contato | ❌ | ❌ |
| | Criar novas etiquetas ou campos personalizados | ❌ | ❌ |
| | Editar a nota de contato | ❌ | ❌ |
| **Conversas** | Ler as mensagens de uma conversa, incluindo as notas internas | ✅ | ✅ |
| | Adicionar uma nota interna | ❌ | ✅ |
| | Mover uma conversa para outra equipe | ❌ | ✅ |
| | Fechar uma conversa | ❌ | ✅ |
| | Reabrir uma conversa | ❌ | ❌ |
| | Atribuir uma conversa a um usuário, ou remover a atribuição | ❌ | ❌ |
| | Iniciar ou parar o bot em uma conversa | ❌ | ❌ |
| | Ver ou mudar a etapa do funil de uma conversa | ❌ | ❌ |
| **Mensagens** | Enviar uma mensagem de texto do WhatsApp dentro da janela de atendimento de 24 horas | ❌ | ✅ |
| | Enviar um modelo aprovado do WhatsApp, também fora da janela de 24 horas | ❌ | ✅ |
| | Enviar imagens, documentos, áudios ou vídeos, ou modelos com mídia | ❌ | ❌ |
| | Enviar uma mensagem pelo Instagram, Facebook Messenger ou Telegram | ❌ | ❌ |
| | Iniciar uma conversa com um número de telefone novo | ❌ | ❌ |
| | Verificar se uma mensagem foi entregue ou lida | ❌ | ❌ |
| | Excluir uma mensagem | ❌ | ❌ |
| **Conta** | Ver seus canais, equipes e modelos do WhatsApp | ✅ | ✅ |
| | Ver os membros de uma equipe | ❌ | ❌ |
| | Criar ou editar canais, equipes ou modelos | ❌ | ❌ |
| | Mudar a disponibilidade ou o status personalizado de um usuário | ❌ | ❌ |

Para as ações marcadas com ❌ nas duas colunas, use o Callbell diretamente. Para mudar o nível de acesso depois, desconecte o aplicativo e conecte-o novamente.

:::caution
O assistente trabalha com toda a conta Callbell: ele pode ver todos os contatos e todas as conversas, não só os atribuídos a você. Conecte apenas aplicativos de confiança e mantenha o acesso somente leitura quando o assistente não precisar alterar nada.
:::

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

## Configurar o seu aplicativo de IA

- [Claude (web, desktop e celular)](./connect_claude.md)
- [ChatGPT](./connect_chatgpt.md)
- [Claude Code, Codex e outros clientes MCP](./developer_tools.md)

Para ver ou remover os aplicativos conectados à sua conta, leia [Gerenciar as conexões](./manage_connections.md).
