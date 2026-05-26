---
sidebar_position: 9
---

import agentFlowImage1 from './assets/agent_flow_1.png'
import agentFlowImage2 from './assets/agent_flow_2.png'
import agentFlowImage3 from './assets/agent_flow_3.png'
import agentFlowImage4 from './assets/agent_flow_4.png'

# Flujo de Agente IA

La acción **Flujo de Agente IA** te permite ejecutar un agente de IA directamente dentro del flujo de tu bot, habilitando conversaciones totalmente automatizadas con tus clientes en función de los objetivos y el comportamiento que hayas definido.

:::note
Antes de usar esta acción, necesitas crear al menos un agente de IA. Consulta la [guía de configuración del agente de IA](https://callbellsupport.zendesk.com/hc/articles/27593692327324) para empezar.
:::

## Cómo usarlo

1. Añade la acción **Flujo de Agente IA** al flujo de tu bot.
2. Selecciona el agente de IA que quieras usar en el menú desplegable **Agente de IA seleccionado**.
3. Haz clic en **Guardar**.

La acción se añadirá a tu flujo con sus nodos de motivos de salida, que definen qué sucede después de que el agente termina —o detiene— la gestión de la conversación.

<div class="text--center">
    <img src={agentFlowImage1} width={500} />
</div>

## Motivos de salida

Los motivos de salida definen los diferentes caminos que el flujo del bot puede tomar después de que el agente de IA se detiene. Hay **4 motivos de salida predeterminados** y **3 opcionales** que puedes añadir según tu caso de uso.

### Motivos de salida predeterminados

| Motivo de salida | Cuándo se activa |
| --- | --- |
| **Objetivo alcanzado** | El agente determina que el objetivo definido en la configuración del agente de IA se ha completado. Se añade automáticamente una nota interna con el resultado del agente. |
| **Solicitud de humano** | El cliente pide explícitamente hablar con un humano. El agente deja de enviar mensajes y el flujo continúa por este camino. Se recomienda asignar la conversación a un equipo o agente en este punto. |
| **Sin respuesta** | El cliente deja de responder. De forma predeterminada, el agente envía 2 mensajes de seguimiento con un intervalo de 5 minutos entre cada uno. Si sigue sin haber respuesta, el flujo continúa por este camino. El número de seguimientos y el tiempo de espera se pueden personalizar en los **Ajustes avanzados**. |
| **Error** | Se activa cuando ocurre un error inesperado o cuando se agota la cartera de créditos de IA. Usa este camino para asignar la conversación a un agente humano o redirigirla a un flujo de bot tradicional de camino fijo. |

### Motivos de salida opcionales

Además de los 4 motivos de salida predeterminados, puedes añadir hasta 3 opcionales para un control más granular:

<div class="text--center">
    <img src={agentFlowImage2} width={500} />
</div>

| Motivo de salida | Cuándo se activa |
| --- | --- |
| **Usuario no interesado** | El cliente afirma explícitamente que no está interesado en la conversación, el servicio o el producto. |
| **Usuario frustrado** | El cliente muestra signos de frustración o enfado con las respuestas del agente. |
| **Cartera de créditos de IA agotada** | Se activa específicamente cuando se agota la cartera de créditos de IA, lo que te permite personalizar qué sucede en este escenario de forma independiente al camino genérico de **Error**. Más información sobre los [créditos de IA](https://callbellsupport.zendesk.com/hc/articles/27543940082844). |

## Conocimiento adicional (opcional)

La acción incluye un campo de texto libre donde puedes pasar al agente de IA información dinámica recopilada anteriormente en el flujo del bot. Esto es útil cuando quieres enriquecer el contexto del agente con datos provenientes de fuentes externas, como una acción de [Webhook](/bot/editor/actions/logic/webhook) o de [Google Sheets](/bot/editor/actions/logic/google_spreadsheets).

<div class="text--center">
    <img src={agentFlowImage3} width={500} />
</div>

**Ejemplo:** recuperar el estado del pedido de un cliente desde una herramienta externa mediante un webhook, almacenarlo en una variable y pasarlo al agente para que pueda hacer referencia a esa información durante la conversación.

## Ajustes avanzados

<div class="text--center">
    <img src={agentFlowImage4} width={500} />
</div>

| Ajuste | Descripción |
| --- | --- |
| **Permitir que el agente cree botones** | Permite que el agente de IA envíe mensajes con botones interactivos. El agente puede incluir hasta 3 botones por mensaje. |
| **Permitir que el agente recuerde al usuario** | Establece cuántos mensajes de seguimiento automáticos enviará el agente si el cliente deja de responder. |
| **Retraso del seguimiento** | Establece cuánto tiempo espera el agente antes de enviar un mensaje de seguimiento. Las opciones van de 5 minutos a 23 horas. |
