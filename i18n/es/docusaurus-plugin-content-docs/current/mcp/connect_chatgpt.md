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

# Conectar ChatGPT

En [ChatGPT](https://chatgpt.com), conectas Callbell añadiéndolo como **servidor MCP personalizado** desde la página **Plugins**. La configuración se hace desde ChatGPT en la web.

Los textos de la interfaz de ChatGPT aparecen en inglés, como en las capturas de pantalla.

:::info Espacios de trabajo Business, Enterprise y Edu
En los espacios de trabajo de empresa, puede que un administrador o propietario tenga que crear primero el plugin de Callbell y publicarlo en el espacio de trabajo. Después, los miembros lo instalan y se conectan con su propio usuario de Callbell. Consulta [el artículo de ayuda de OpenAI](https://help.openai.com/en/articles/12584461) para conocer las reglas de tu plan.
:::

## Paso 1: crear el plugin de Callbell

1. En ChatGPT, haz clic en **Plugins** en la barra lateral.
2. Haz clic en **Add** y luego en **Add custom MCP server**.

<div class="text--center">
    <img src={chatgptOpenAdd} alt="Plugins, Add, Add custom MCP server" width={800} />
</div>

3. Rellena el formulario:
    1. **Name**: `Callbell` (la descripción es opcional).
    2. **Connection**, **Server URL**: `https://ai.callbell.eu/mcp`
    3. **Authentication**: deja **OAuth**. No hace falta cambiar los **Advanced OAuth settings**.
    4. Marca **I understand and want to continue**.
    5. Haz clic en **Create as a plugin**.

<div class="text--center">
    <img src={chatgptAddCustomMcp} alt="Formulario Add custom MCP server rellenado con Callbell y https://ai.callbell.eu/mcp" width={600} />
</div>

## Paso 2: conectar tu cuenta de Callbell

1. ChatGPT te pide conectar Callbell: haz clic en **Connect Callbell**.

<div class="text--center">
    <img src={chatgptConnect} alt="El botón Connect Callbell" width={480} />
</div>

2. ChatGPT abre Callbell. Inicia sesión con tu usuario de Callbell si aún no lo has hecho.
3. Revisa la solicitud de acceso:
    1. Marca **Permitir que ChatGPT haga cambios** solo si quieres que ChatGPT envíe mensajes, actualice contactos, añada notas y cierre conversaciones. Déjalo sin marcar para un acceso de solo lectura.
    2. Haz clic en **Permitir**.

<div class="text--center">
    <img src={chatgptConsent} alt="Página de consentimiento de Callbell con la casilla para permitir cambios y el botón Permitir" width={800} />
</div>

Vuelves a ChatGPT. Callbell aparece ahora en la página **Plugins**, en la pestaña **Personal**.

<div class="text--center">
    <img src={chatgptInstalled} alt="El plugin de Callbell en la pestaña Personal" width={480} />
</div>

## Paso 3: elegir cuándo ChatGPT te pide permiso

1. En ChatGPT, ve a **Settings** > **Plugins** y abre **Callbell**.
2. Haz clic en **Permission** y elige cuándo ChatGPT necesita tu aprobación para usar Callbell.

<div class="text--center">
    <img src={chatgptPermissions} alt="Opciones de permiso del plugin de Callbell" width={700} />
</div>

:::tip
Elige **Allow read-only tools**: ChatGPT lee tus datos de Callbell sin preguntar, pero te pide permiso antes de cada cambio, como enviar un mensaje.
:::

## Paso 4: usar Callbell en un chat

1. En un chat nuevo, escribe **@** y elige **Callbell**.

<div class="text--center">
    <img src={chatgptMention} alt="Elegir Callbell después de escribir @ en un chat" width={760} />
</div>

2. Haz una pregunta sobre tu cuenta de Callbell, por ejemplo "¿Qué equipos tenemos en Callbell?".

<div class="text--center">
    <img src={chatgptPrompt} alt="Una pregunta a Callbell en el cuadro de mensaje de ChatGPT" width={760} />
</div>

3. ChatGPT responde con los datos de tu cuenta de Callbell.

<div class="text--center">
    <img src={chatgptAnswer} alt="Respuesta de ChatGPT usando Callbell" width={760} />
</div>

## Desconectar ChatGPT

En ChatGPT, ve a **Settings** > **Plugins** y abre **Callbell**:

1. Para desconectar tu cuenta de Callbell, haz clic en **...** junto a ella y luego en **Disconnect**.
2. Para eliminar el plugin por completo, haz clic en **Uninstall**.

<div class="text--center">
    <img src={chatgptManage} alt="Disconnect y Uninstall en la configuración del plugin de Callbell" width={760} />
</div>

También puedes quitar el acceso desde Callbell, consulta [Gestionar las conexiones](./manage_connections.md).
