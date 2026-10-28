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

# Conectar Claude

Esta guía conecta Callbell a [Claude](https://claude.ai) como conector personalizado. Lo configuras una sola vez en claude.ai y después Callbell también está disponible en las aplicaciones de Claude para escritorio y móvil.

Los textos de la interfaz de Claude aparecen en inglés, como en las capturas de pantalla.

:::info Planes
Los conectores personalizados están disponibles en todos los planes de Claude (el plan Free está limitado a un conector personalizado). En los planes **Team** y **Enterprise**, solo un Owner de la organización puede añadir un conector personalizado: consulta [Planes Team y Enterprise](#team-and-enterprise-plans) más abajo.
:::

Mira el vídeo paso a paso o sigue los pasos que aparecen a continuación.

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
    <iframe src="https://cap.callbell.eu/embed/d9wjzmnq4r95rr6" title="Conectar Claude a Callbell paso a paso" frameBorder="0" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></iframe>
</div>

## Paso 1: añadir el conector de Callbell

1. En Claude, haz clic en **Customize** en la barra lateral y luego en **Connectors**.
2. Haz clic en **+ Add** y luego en **Add custom connector**.

<div class="text--center">
    <img src={claudeOpenConnectors} alt="Customize, Connectors, Add, Add custom connector" width={800} />
</div>

3. Rellena el formulario:
    - **Name**: `Callbell`
    - **MCP server URL**: `https://ai.callbell.eu/mcp`
4. Haz clic en **Continue**.

<div class="text--center">
    <img src={claudeAddCustomConnector} alt="Formulario Add custom connector rellenado con Callbell y https://ai.callbell.eu/mcp" width={560} />
</div>

Si Claude muestra después opciones de autenticación, deja el inicio de sesión activado y, en **OAuth client**, elige **Register automatically**. Luego haz clic en **Add**.

### Planes Team y Enterprise {#team-and-enterprise-plans}

En los planes Team y Enterprise, un Owner añade Callbell una sola vez para toda la organización:

1. Ve a **Organization settings** > **Connectors**.
2. Haz clic en **Add**, elige **Custom** y luego **Web**.
3. Introduce los mismos **Name** y **MCP server URL** que arriba y confirma.

Después, los miembros encuentran **Callbell** (con la etiqueta **Custom**) en **Customize** > **Connectors** y siguen directamente con el paso 2. Cada miembro se conecta con su propio usuario de Callbell.

## Paso 2: conectar tu cuenta de Callbell {#step-2-connect-your-callbell-account}

1. Abre el conector **Callbell** y haz clic en **Connect**.

<div class="text--center">
    <img src={claudeConnect} alt="Botón Connect del conector de Callbell" width={460} />
</div>

2. Claude abre Callbell. Inicia sesión con tu usuario de Callbell si aún no lo has hecho.
3. Revisa la solicitud de acceso:
    1. Marca **Permitir que Claude haga cambios** solo si quieres que Claude envíe mensajes, actualice contactos, añada notas y cierre conversaciones. Déjalo sin marcar para un acceso de solo lectura.
    2. Haz clic en **Permitir**.

<div class="text--center">
    <img src={callbellConsent} alt="Página de consentimiento de Callbell con la casilla para permitir cambios y el botón Permitir" width={800} />
</div>

Vuelves a Claude, y el conector de Callbell ya muestra sus herramientas.

## Paso 3: elegir cuándo Claude puede usar cada herramienta

La página del conector lista las herramientas de Callbell. Por defecto, Claude te pide permiso antes de cada uso (**Needs approval**). Usa los iconos junto a cada herramienta, o el menú junto a cada grupo, para que Claude use una herramienta sin preguntar, te pregunte cada vez o no la use nunca.

<div class="text--center">
    <img src={claudeToolPermissions} alt="Permisos de las herramientas del conector de Callbell" width={700} />
</div>

:::tip
Mantén **Needs approval** en las herramientas de escritura (enviar mensajes, actualizar contactos, añadir notas, cerrar conversaciones) para revisar cada cambio antes de que Claude lo haga.
:::

## Paso 4: usar Callbell en un chat

1. En un chat, haz clic en **+**, luego en **Connectors**, y comprueba que **Callbell** está activado.

<div class="text--center">
    <img src={claudeEnableInChat} alt="El interruptor de Callbell en el menú Connectors de un chat" width={520} />
</div>

2. Haz una pregunta sobre tu cuenta de Callbell, por ejemplo "¿Qué equipos tenemos en Callbell?". Cuando Claude quiere usar una herramienta de Callbell, te pregunta primero: haz clic en **Allow once**, o en **Always allow** para que no te vuelva a preguntar por esta herramienta.

<div class="text--center">
    <img src={claudeToolApproval} alt="Claude pide usar List teams de Callbell" width={620} />
</div>

3. Claude responde con los datos de tu cuenta de Callbell.

<div class="text--center">
    <img src={claudeChatAnswer} alt="Respuesta de Claude después de usar el conector de Callbell" width={700} />
</div>

## Desconectar Claude

En la página del conector de Callbell en Claude, haz clic en **Disconnect**. También puedes quitar el acceso desde Callbell, consulta [Gestionar las conexiones](./manage_connections.md).
