---
sidebar_position: 4
---

# Claude Code, Codex e outros clientes MCP

As ferramentas de desenvolvimento e os outros clientes MCP se conectam ao Callbell com a mesma URL de servidor e o mesmo login do Callbell que o Claude e o ChatGPT. Cada pessoa que usa a conexão entra com o próprio usuário do Callbell.

## Claude Code

:::tip
Se você usa o Claude Code com a sua conta do claude.ai e já adicionou o Callbell no Claude (veja [Conectar o Claude](./connect_claude.md)), o Callbell já está disponível no Claude Code.
:::

1. Adicione o servidor:

```bash
claude mcp add --transport http callbell https://ai.callbell.eu/mcp
```

Por padrão, o servidor só fica disponível no projeto atual. Adicione `--scope user` para usá-lo em todos os seus projetos, ou `--scope project` para compartilhá-lo com a sua equipe em um arquivo `.mcp.json` (cada colega continua entrando com o próprio usuário do Callbell).

2. Inicie o Claude Code, execute `/mcp`, selecione **callbell** e escolha **Authenticate**. Você também pode executar `claude mcp login callbell` no terminal.
3. O navegador abre a página de consentimento do Callbell. Escolha as permissões e clique em **Permitir**.

O Claude Code salva a conexão e a renova automaticamente.

## Codex

1. Adicione o servidor:

```bash
codex mcp add callbell --url https://ai.callbell.eu/mcp
```

2. O Codex detecta que o Callbell usa OAuth e abre o navegador. Se isso não acontecer, execute:

```bash
codex mcp login callbell
```

3. Na página de consentimento do Callbell, escolha as permissões e clique em **Permitir**.

Você também pode adicionar o servidor manualmente em `~/.codex/config.toml` e depois executar `codex mcp login callbell`:

```toml
[mcp_servers.callbell]
url = "https://ai.callbell.eu/mcp"
```

A CLI do Codex, a extensão do Codex para IDE e o aplicativo desktop do ChatGPT compartilham essa configuração.

## Outros clientes MCP

Qualquer cliente MCP compatível com servidores remotos via **Streamable HTTP** e login **OAuth** pode se conectar ao Callbell. A maioria dos clientes só precisa da URL, por exemplo em uma configuração JSON:

```json
{
  "mcpServers": {
    "callbell": {
      "type": "http",
      "url": "https://ai.callbell.eu/mcp"
    }
  }
}
```

O cliente encontra sozinho as configurações de login. Para referência, estes são os detalhes técnicos:

| Configuração | Valor |
| :-- | :-- |
| Servidor MCP | `https://ai.callbell.eu/mcp` (Streamable HTTP) |
| Metadados do recurso protegido | `https://ai.callbell.eu/.well-known/oauth-protected-resource` |
| Servidor de autorização | `https://dash.callbell.eu` |
| Metadados do servidor de autorização | `https://dash.callbell.eu/.well-known/oauth-authorization-server` |
| Registro do cliente | Registro dinâmico em `https://dash.callbell.eu/oauth/register` |
| Tipo de concessão | Código de autorização com PKCE (`S256`), com tokens de atualização |
| Scopes | `read`, `write` |
| URIs de redirecionamento | Qualquer URL `https`, ou `http` em `localhost` ou um endereço de loopback para clientes desktop e de linha de comando |

:::note
O servidor MCP só aceita os tokens OAuth emitidos pelo login do Callbell. As chaves de API do Callbell não funcionam com ele: para chamar o Callbell a partir do seu próprio código, use a [API do Callbell](/api/reference/introduction).
:::

## Ferramentas disponíveis

Estas são as ações que o assistente pode realizar no Callbell:

| Ferramenta | Permissão | O que faz |
| :-- | :-- | :-- |
| `find_contacts` | Leitura | Busca um contato pelo número de telefone, ou lista contatos filtrados por canal, etiquetas ou equipe. Não há busca por nome. |
| `get_contact` | Leitura | Obtém um contato com suas etiquetas, campos personalizados, equipe, canal e status da conversa. |
| `list_messages` | Leitura | Lê as mensagens da conversa de um contato, da mais recente para a mais antiga, incluindo as notas internas. |
| `list_channels` | Leitura | Lista os canais conectados (WhatsApp, Instagram, Facebook Messenger e Telegram). |
| `list_teams` | Leitura | Lista as equipes da conta. |
| `list_templates` | Leitura | Lista os modelos do WhatsApp e o status de aprovação. |
| `send_message` | Escrita | Envia uma mensagem do WhatsApp para um contato existente. Fora da janela de atendimento de 24 horas, só é possível enviar modelos aprovados. |
| `update_contact` | Escrita | Renomeia um contato, adiciona ou remove etiquetas, preenche campos personalizados ou move a conversa para outra equipe. |
| `add_note` | Escrita | Adiciona uma nota interna a uma conversa. As notas são visíveis só para a sua equipe, nunca para o contato. |
| `close_conversation` | Escrita | Fecha a conversa de um contato. |

:::note
O assistente só pode escrever para contatos que já existem no Callbell: ele não pode iniciar uma conversa com um número novo. Modelos de autenticação (códigos de uso único) não podem ser enviados por um aplicativo de IA.
:::
