---
sidebar_position: 1
---

import askQuestionSetMessage from './assets/ask_question_set_message.png'
import askQuestionButtonsFlow from './assets/ask_question_buttons_flow.png'
import askQuestionFreeReplyFlow from './assets/ask_question_free_reply_flow.png'
import askQuestionFallback from './assets/ask_question_fallback.png'

# Hacer una pregunta

La acción **Hacer una pregunta** simplifica una de las configuraciones más comunes de los bots: pedir una respuesta al usuario, gestionar los seguimientos cuando no responde y (opcionalmente) gestionar las respuestas inválidas.

## Cómo usarla

La acción se divide en dos secciones: **configuración del mensaje** y **configuración del fallback**.

## Paso 1: Configuración del mensaje

### 1. Escribe el mensaje

Escribe la pregunta o el mensaje que quieres enviar al usuario.

### 2. Añade botones o una lista (opcional)

Opcionalmente puedes añadir botones interactivos o una lista de opciones para que el usuario elija.

<div class="text--center">
    <img src={askQuestionSetMessage} width={400} />
</div>

**Con botones o una lista,** cada opción que añades crea automáticamente su propia salida en el flujo, de modo que puedes definir una continuación distinta para cada elección.

<div class="text--center">
    <img src={askQuestionButtonsFlow} width={700} />
</div>

**Sin botones ni lista,** se acepta cualquier respuesta. El flujo continúa desde una única salida "Respondida". Si necesitas continuaciones distintas según lo que respondió el usuario, añádelas como salidas personalizadas debajo de "Respondida".

<div class="text--center">
    <img src={askQuestionFreeReplyFlow} width={500} />
</div>

## Paso 2: Configuración del fallback

<div class="text--center">
    <img src={askQuestionFallback} width={400} />
</div>

### 1. Tiempo máximo de espera

Define cuánto tiempo debe esperar la acción una respuesta antes de activar un seguimiento. Puedes elegir desde 5 minutos hasta 23 horas.

### 2. Número de mensajes de seguimiento

Elige cuántos recordatorios automáticos enviar si el usuario no responde. Configura **0** para desactivar los seguimientos, o hasta un máximo de **5**.

### 3. Mensaje de seguimiento

Escribe el mensaje de recordatorio que se envía una vez transcurrido el tiempo de espera.

### 4. Número de errores permitidos

Define cuántas respuestas inválidas puede dar el usuario antes de que el flujo pase a la ruta de error. Esta opción solo aparece cuando hay botones o una lista configurados, ya que una respuesta solo cuenta como inválida cuando no coincide con una de las opciones. Si no hay botones ni lista configurados, cualquier respuesta es válida y esta opción queda oculta.

### 5. Mensaje de error

Escribe el mensaje que se envía cuando la respuesta del usuario no coincide con una de las opciones configuradas. Obligatorio si configuras 1 o más errores permitidos.

## Cómo se crean los nodos automáticamente

| Configuración | ✅ Nodo(s) de éxito | ❌ Nodo de error | ⌛️ Nodo de fallback programado |
| :-: | :-: | :-: | :-: |
| **Sin botones/lista (respuesta libre)** | Una única salida "Respondida" (añade salidas personalizadas debajo si es necesario) | No se crea | Configurado automáticamente |
| **Botones** | Un nodo por botón | Cuando la respuesta no es uno de los botones | Configurado automáticamente |
| **Lista** | Un nodo por opción | Cuando la respuesta no es una de las opciones | Configurado automáticamente |

Para **botones** y **listas**, cada opción crea automáticamente su propia ruta de salida en el flujo, de modo que puedes definir continuaciones distintas para cada elección sin ninguna configuración adicional.
