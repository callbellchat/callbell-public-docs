---
sidebar_position: 10
---

import transcribeChoice from './assets/transcribe_1.png'
import transcribeAction from './assets/transcribe_2.png'

# Transcribir audio

Esta acción transcribe los mensajes de audio enviados por los usuarios dentro de un flujo de bot, convirtiéndolos en texto y guardando el resultado en una variable para usarlo en las acciones posteriores.

:::note
Si estás usando la acción [Flujo de Agente IA](/bot/editor/actions/logic/agent_flow), la transcripción de audio ya se gestiona automáticamente. No es necesario añadir esta acción por separado si tu bot utiliza un Agente IA.
:::

## Cómo funciona

Para transcribir un mensaje de audio necesitas dos cosas en tu flujo de bot: una forma de detectar cuándo el usuario envía un audio y la acción Transcribir audio para procesarlo.

### Paso 1: Detectar el audio con un nodo de Elección

Añade un nodo de [Nueva Opción](/bot/editor/actions/logic/new_choice) después de una acción [Esperar respuesta del usuario](/bot/editor/actions/interaction/wait_user_answer). Dentro de la elección, define la condición:

- **Tipo de respuesta del último usuario** → **es** → **Audio**

Esto crea un camino específico que solo se activa cuando el usuario envía un mensaje de audio. Nómbralo en consecuencia (por ejemplo, «Audio recibido») para mantener tu flujo legible.

<div class="text--center">
    <img src={transcribeChoice} width={600} />
</div>

### Paso 2: Añadir la acción Transcribir audio

En el camino del audio, añade la acción **Transcribir audio** y configura los campos que se describen a continuación.

<div class="text--center">
    <img src={transcribeAction} width={400} />
</div>

## Configuración

### Token OpenAI

La transcripción la procesa **OpenAI** de forma externa a Callbell. Hay dos opciones:

- **Gestionado por Callbell** (recomendado): no requiere configuración. El coste se descuenta de tu [cartera de créditos de IA](https://callbellsupport.zendesk.com/hc/articles/27543940082844).
- **Token personalizado**: usa tu propia clave de API de OpenAI y paga directamente a OpenAI.

### Audio que hay que transcribir

Selecciona qué audio transcribir:

- **Último audio recibido del usuario:** transcribe el mensaje de audio más reciente recibido en la conversación.
- **URL de audio personalizada:** transcribe cualquier audio proporcionando su URL. Útil cuando el audio proviene de una fuente externa.

### Guardar la transcripción en

Selecciona la variable donde se guardará el texto transcrito. Esta variable se puede usar después en acciones posteriores, como enviar un mensaje, añadir una nota o enviar datos a un webhook.

### Almacenar el fallo (si lo hay) en

Selecciona una variable para guardar cualquier mensaje de error en caso de que la transcripción falle. Esto te permite gestionar los fallos de forma controlada en tu flujo de bot.
