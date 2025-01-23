---
sidebar_position: 3
---

import jumpToBotAction from './assets/jump_to_bot.png'
import jumpToBotActionBotSelection from './assets/jump_to_bot_select_bot.png'
import jumpToBotActionStepSelection from './assets/jump_to_bot_select_step.png'
import jumpToBotActionPassToChild from './assets/jump_to_bot_pass_to_child.png'
import jumpToBotActionPassToParent from './assets/jump_to_bot_pass_to_parent.png'
import jumpToBotActionExtractTip from './assets/jump_to_bot_extract_tip.png'

# Saltar a Bot

Esta acción te permite saltar a un bot diferente.

<img src={jumpToBotAction} width={180} />

Esta funcionalidad puede ser útil en dos casos principales:

- **Simplificar la lógica de bots complejos**: Si la lógica de tu bot se está volviendo demasiado compleja, puedes dividirla en partes más pequeñas y manejables. Esta acción te permite separar la lógica de tu bot principal en bots más enfocados.
- **Reutilizar patrones o lógica**: Si repites frecuentemente un patrón o lógica específica en tu bot, puedes crear un bot "plantilla" reutilizable. Este caso de uso avanzado puede ahorrar tiempo, reducir la complejidad y minimizar errores al construir bots.

:::tip
Al usar la función de copiar/pegar en el creador de bots, puedes extraer el contenido copiado al portapapeles en un nuevo bot. Por defecto, esta función reemplazará automáticamente la sección que copiaste inicialmente con una acción de "saltar a bot".

<div class="text--center">
    <img src={jumpToBotActionExtractTip} width={500} />
</div>
:::

## Cómo Usarlo

### 1. Selección de Bot y Selección de Paso

Primero, selecciona el bot al que quieres saltar. Ten en cuenta que solo puedes seleccionar bots que utilicen el mismo canal que tu bot actual.

<div class="text--center">
    <img src={jumpToBotActionBotSelection} width={500} />
</div>

Después de seleccionar el bot, aparecerá una ventana emergente que te pedirá que selecciones el paso o acción específica en el bot de destino. Ten cuidado al elegir este paso. Si el bot hijo depende de variables inicializadas antes del paso seleccionado, es posible que necesites especificar sus valores (ver Paso 2 a continuación).

<div class="text--center">
    <img src={jumpToBotActionStepSelection} width={500} />
</div>

### 2. Pasar Valores al Bot Hijo

En algunos casos, es posible que desees pasar valores del bot padre al bot hijo. Usa el botón "Agregar Valor" para transferir datos. Cada línea te permite configurar una variable en el bot hijo con cualquier valor que elijas. Puedes pasar valores fijos o usar variables del bot padre:

<div class="text--center">
    <img src={jumpToBotActionPassToChild} width={500} />
</div>

### 3. Regresar al Bot Padre Después del Bot Hijo

En otros casos, es posible que desees continuar con el flujo del bot padre una vez que el bot hijo haya terminado. En lugar de crear una acción de "saltar a bot" separada en el bot hijo para regresar al padre, simplemente activa la opción "Continuar el flujo aquí después de que el bot hijo termine". Esto asegura que, cuando el bot hijo complete su tarea, regresará automáticamente al bot padre.

También puedes usar los valores guardados durante la ejecución del bot hijo en el bot padre. Para lograr esto, guarda los valores del bot hijo en variables del bot padre:

<div class="text--center">
    <img src={jumpToBotActionPassToParent} width={500} />
</div>
