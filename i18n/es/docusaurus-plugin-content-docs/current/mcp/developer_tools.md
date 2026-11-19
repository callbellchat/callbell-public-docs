---
sidebar_position: 4
---

# Claude Code, Codex y otros clientes MCP

Las herramientas de desarrollo y los demás clientes MCP se conectan a Callbell con la misma URL de servidor y el mismo inicio de sesión de Callbell que Claude y ChatGPT. Cada persona que usa la conexión inicia sesión con su propio usuario de Callbell.

## Claude Code

:::tip
Si usas Claude Code con tu cuenta de claude.ai y ya añadiste Callbell en Claude (consulta [Conectar Claude](./connect_claude.md)), Callbell ya está disponible en Claude Code.
:::

1. Añade el servidor:

```bash
claude mcp add --transport http callbell https://ai.callbell.eu/mcp
```

Por defecto, el servidor solo está disponible en el proyecto actual. Añade `--scope user` para usarlo en todos tus proyectos, o `--scope project` para compartirlo con tu equipo en un archivo `.mcp.json` (cada compañero sigue iniciando sesión con su propio usuario de Callbell).

2. Inicia Claude Code, ejecuta `/mcp`, selecciona **callbell** y elige **Authenticate**. También puedes ejecutar `claude mcp login callbell` desde tu terminal.
3. Tu navegador abre la página de consentimiento de Callbell. Elige los permisos y haz clic en **Permitir**.

Claude Code guarda la conexión y la renueva automáticamente.

## Codex

1. Añade el servidor:

```bash
codex mcp add callbell --url https://ai.callbell.eu/mcp
```

2. Codex detecta que Callbell usa OAuth y abre tu navegador. Si no lo hace, ejecuta:

```bash
codex mcp login callbell
```

3. En la página de consentimiento de Callbell, elige los permisos y haz clic en **Permitir**.

También puedes añadir el servidor a mano en `~/.codex/config.toml` y después ejecutar `codex mcp login callbell`:

```toml
[mcp_servers.callbell]
url = "https://ai.callbell.eu/mcp"
```

La CLI de Codex, la extensión de Codex para IDE y la aplicación de escritorio de ChatGPT comparten esta configuración.

## Otros clientes MCP

Cualquier cliente MCP compatible con servidores remotos por **Streamable HTTP** e inicio de sesión **OAuth** puede conectarse a Callbell. La mayoría de los clientes solo necesitan la URL, por ejemplo en una configuración JSON:

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

El cliente encuentra solo los ajustes de inicio de sesión. Como referencia, estos son los detalles técnicos:

| Ajuste | Valor |
| :-- | :-- |
| Servidor MCP | `https://ai.callbell.eu/mcp` (Streamable HTTP) |
| Metadatos del recurso protegido | `https://ai.callbell.eu/.well-known/oauth-protected-resource` |
| Servidor de autorización | `https://dash.callbell.eu` |
| Metadatos del servidor de autorización | `https://dash.callbell.eu/.well-known/oauth-authorization-server` |
| Registro del cliente | Registro dinámico en `https://dash.callbell.eu/oauth/register` |
| Tipo de concesión | Código de autorización con PKCE (`S256`), con tokens de actualización |
| Scopes | `read`, `write` |
| URI de redirección | Cualquier URL `https`, o `http` en `localhost` o una dirección de loopback para clientes de escritorio y de línea de comandos |

:::note
El servidor MCP solo acepta los tokens OAuth emitidos por el inicio de sesión de Callbell. Las claves API de Callbell no funcionan con él: para llamar a Callbell desde tu propio código, usa la [API de Callbell](/api/reference/introduction).
:::

## Herramientas disponibles

Estas son las acciones que el asistente puede realizar en Callbell:

| Herramienta | Permiso | Qué hace |
| :-- | :-- | :-- |
| `find_contacts` | Lectura | Busca un contacto por número de teléfono, busca contactos por nombre, o lista contactos filtrados por canal, etiquetas, equipo, estado de la conversación, quién envió el último mensaje, cuándo escribió el contacto por última vez o miembro del equipo asignado. Consulta [Buscar conversaciones](#finding-conversations). |
| `get_contact` | Lectura | Obtiene un contacto con sus etiquetas, campos personalizados, equipo, canal y estado de la conversación. |
| `list_messages` | Lectura | Lee la conversación de un contacto como una transcripción que indica quién envió cada mensaje, incluidas las notas internas. Cada llamada lee hasta 100 mensajes, empezando por los más recientes. |
| `list_channels` | Lectura | Lista los canales conectados (WhatsApp, Instagram, Facebook Messenger y Telegram). |
| `list_teams` | Lectura | Lista los equipos de la cuenta. |
| `list_tags` | Lectura | Lista los nombres de las etiquetas de la cuenta. `find_contacts` y `update_contact` solo aceptan estos nombres exactos. |
| `list_custom_fields` | Lectura | Lista los campos personalizados de la cuenta, con el tipo de cada campo y, para los campos desplegables y de casilla de verificación, las opciones permitidas. |
| `list_templates` | Lectura | Lista las plantillas de WhatsApp y su estado de aprobación. |
| `send_message` | Escritura | Envía un mensaje de WhatsApp a un contacto existente. Fuera de la ventana de atención al cliente de 24 horas, solo se pueden enviar plantillas aprobadas. |
| `update_contact` | Escritura | Cambia el nombre de un contacto, añade o quita etiquetas, rellena campos personalizados o mueve la conversación a otro equipo. |
| `add_note` | Escritura | Añade una nota interna a una conversación. Las notas solo las ve tu equipo, nunca el contacto. |
| `close_conversation` | Escritura | Cierra la conversación de un contacto. |
| `report_unsupported_request` | Lectura | Informa a Callbell de una solicitud que las demás herramientas no pueden hacer, o solo pueden hacer en parte, para que Callbell pueda mejorarlas. Envía la solicitud del usuario y una breve descripción de lo que falta, y no cambia nada en la cuenta. |

:::note
El asistente solo puede escribir a contactos que ya existen en Callbell: no puede iniciar una conversación con un número nuevo. Las plantillas de autenticación (códigos de un solo uso) no se pueden enviar desde una aplicación de IA.
:::

## Buscar conversaciones {#finding-conversations}

`find_contacts` puede filtrar los contactos según el estado de su conversación. El asistente usa estos filtros para responder a preguntas como «¿qué conversaciones esperan una respuesta?» o «¿quién nos escribió hoy?» sin leer todos los contactos. Los filtros se combinan entre sí y con la búsqueda por nombre, etiquetas, canal y equipo.

| Filtro | Valores | Encuentra |
| :-- | :-- | :-- |
| `conversation_state` | `open` o `closed` | Los contactos cuya conversación está abierta, o cerrada. |
| `last_message_from` | `contact` o `business` | Los contactos que enviaron el último mensaje de su conversación, lo que normalmente significa que esperan una respuesta, o los contactos cuyo último mensaje se envió desde tu cuenta (un miembro del equipo, un bot, una difusión o la API). |
| `last_inbound_message_after` y `last_inbound_message_before` | Una fecha y hora ISO 8601, por ejemplo `2026-11-19T08:00:00Z` | Los contactos cuyo mensaje más reciente para ti llegó en ese intervalo de tiempo. Los mensajes enviados desde tu cuenta no cuentan. |
| `assigned_user` | El correo electrónico de un miembro del equipo, o `unassigned` | Los contactos cuya conversación está asignada a ese miembro del equipo, o a nadie. |
| `order` | `created_at` (predeterminado) o `last_inbound_message_at` | Primero la conversación más reciente, o primero el contacto que escribió más recientemente. |

Cada contacto de los resultados muestra también `lastInboundMessageAt`, cuándo te escribió el contacto por última vez, y `lastMessageFrom`, `contact` o `business`, para que el asistente sepa cuánto tiempo lleva esperando un contacto. Los filtros funcionan como los parámetros equivalentes de [GET /contacts](/api/reference/contacts_api/get_contacts) en la API de Callbell.

:::tip
Las aplicaciones de IA conservan la lista de herramientas que cargaron al conectarte. Si el asistente no usa estos filtros, abre un chat nuevo o vuelve a conectar Callbell para que la aplicación cargue las herramientas más recientes.
:::
