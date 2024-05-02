---
sidebar_position: 3
---

import openAIAPIKey from './assets/openAI_api_key.png'

# OpenAI

Esta acción permite la generación de texto basada en un estímulo y los mensajes previos de la conversación. Puede aplicarse a varios escenarios, desde interacciones de estilo de chat clásico con un asistente hasta acciones específicas como resumir conversaciones para sus agentes, brindar consejos o detectar posibles comportamientos de los usuarios. La efectividad de la acción depende en gran medida de la calidad del estímulo proporcionado.

:::tip
Antes de usar esta acción, se recomienda familiarizarse con la ingeniería de estímulos, que se puede encontrar [aquí](https://platform.openai.com/docs/guides/prompt-engineering).
:::

<iframe width="100%" height="500" src="https://www.youtube.com/embed/qvKuamQ207k" title="Cómo usar la acción de &quot;OpenAI&quot; - Chatbot de Callbell" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Cómo funciona esta acción

Aquí hay algunas explicaciones sobre cómo opera esta acción y sus limitaciones:

- El bot siempre ejecuta esta acción de manera sincrónica, lo que significa que espera hasta que la API de OpenAI devuelva una respuesta antes de continuar con el siguiente paso. Similar a la Acción de Webhook, si tiene múltiples Acciones de OpenAI consecutivas, se ejecutarán secuencialmente en lugar de en lotes.

- El bot continuará su flujo incluso si la acción de OpenAI falla por cualquier motivo, como un tiempo de espera.

- Es su responsabilidad manejar la respuesta, ya sea exitosa o fallida. Deberá especificar variables para almacenar la respuesta de OpenAI. Luego, depende de usted utilizar estas variables más adelante en el bot, por ejemplo, como condiciones en un bloque de opciones, en mensajes o notas.

## Cómo usarlo

Solo el token y el estímulo son obligatorios.

### Parámetro de Token de OpenAI

Puede encontrar la clave de la API en su [cuenta de OpenAI](https://platform.openai.com/api-keys).

:::tip
Puede pegar directamente la clave en el campo de entrada, o puede guardarla como una variable con un valor predeterminado, lo que puede ser útil para reutilizarla en múltiples acciones:

<div class="text--center">
    <img src={openAIAPIKey} width={500} />
</div>
:::

### Parámetro de Estímulo

El estímulo le permite construir un asistente personalizado. Puede insertar variables dentro de él para que sea más dinámico.

### Mensajes previos analizados

<table>
  <tr>
    <th>Tipo</th>
    <th>Acción</th>
  </tr>
  <tr>
    <td>Todos de la conversación</td>
    <td>Envía toda la conversación a OpenAI. Cada mensaje enviado se interpreta como "Asistente" por OpenAI, y cada mensaje recibido se interpreta como "Usuario".</td>
  </tr>
  <tr>
    <td>Solo de la sesión actual del bot</td>
    <td>Envía los mensajes dentro del mismo "hilo del bot", a partir del último reinicio del bot dentro de la conversación.</td>
  </tr>
  <tr>
    <td>Solo último mensaje</td>
    <td>La última respuesta del usuario.</td>
  </tr>
  <tr>
    <td>Solo estímulo</td>
    <td>Solo se utiliza el estímulo para consultar la API de OpenAI.</td>
  </tr>
</table>

### Manejo de la respuesta de OpenAI

Incluso después de configurar correctamente su acción de OpenAI, pueden ocurrir fallas ocasionales (principalmente debido a tiempos de espera). Si el comportamiento de su bot depende de la respuesta de OpenAI, es crucial manejar los errores adecuadamente. Cualquier error encontrado se almacenará en la variable especificada, o se utilizará la variable `last webhook failure`:

Depende de usted decidir cómo manejar estos errores. El enfoque recomendado es crear una variable específica para cada webhook y luego utilizar un bloque de opciones para verificar si la variable contiene un mensaje.
