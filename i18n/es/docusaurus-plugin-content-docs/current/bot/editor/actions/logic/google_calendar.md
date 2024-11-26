---
sidebar_position: 8
---

import googleCredentials from './assets/google_credentials.png'
import googleCredentialsWarning from './assets/google_credentials_warning.png'
import googleCalendarVariables from './assets/google_calendar_variables.png'
import googleCalendarFullSetup from './assets/google_calendar_full_setup.png'
import googleCalendarEventCreated from './assets/google_calendar_event_created.png'

# Google Calendar

Esta acción permite a tu bot interactuar con un Calendario de Google creando eventos dinámicamente durante las interacciones del usuario.

# Casos de Uso:

- Crear recordatorios en tu Calendario de Google.
- Crear reuniones utilizando enlaces de reunión generados automáticamente.

# Cómo utilizarlo:

## 1. Agregar una Acción de Calendario de Google

Para agregar una acción de Calendario de Google en el editor de flujos de Callbell, sigue estos pasos:

1. Abre el Constructor de Flujos y selecciona el punto en tu conversación donde deseas integrar el Calendario de Google.
2. Agrega una nueva acción haciendo clic en el botón Agregar Acción y seleccionando Calendario de Google de la lista de acciones disponibles, dentro de la sección "Lógica".

## 2. Autenticarse en tu cuenta de Google

Haz clic en el botón "Conectar a Google" y sigue las instrucciones.

:::tip
Asegúrate de seleccionar todos los permisos. El bot de Callbell no funcionará correctamente si faltan algunos permisos.

<div class="text--center">
    <img src={googleCredentials} width={500} />
</div>

También puedes encontrar esta advertencia de Google:

<div class="text--center">
    <img src={googleCredentialsWarning} width={500} />
</div>

Esto solo es una advertencia temporal. En ese caso, asegúrate de continuar haciendo clic en "Opciones avanzadas" y luego en "Continuar con Callbell"
:::

## 3. Configurar la Acción

Deberás configurar la integración completando los siguientes campos:

**Seleccionar calendario**: Elige el Calendario de Google con el que deseas interactuar. Cada cuenta de Google puede tener varios calendarios; el que está etiquetado con una dirección de correo electrónico es tu calendario principal.

**Seleccionar acción**: Actualmente, la única opción disponible es `crear evento`.

**Resumen de evento**: El título del evento tal como aparecerá en el calendario.

**Mes de evento**: El mes en el que se creará el evento.

**Día de evento**: El día en el que se creará el evento.

**Hora de inicio del evento**: La hora en la que comenzará el evento. El formato de tiempo requerido es: `HH:MM`.

**Duración del evento (en minutos)**: La duración del evento en minutos.

**Enviar actualizaciones de evento a**: Los destinatarios que recibirán actualizaciones sobre el evento. Las opciones son: `Ninguno` o `Todos`.

**Crear enlace de reunión**: Opción para generar un enlace para una reunión virtual asociada con el evento.

:::tip
Puedes utilizar variables para completar dinámicamente estos detalles
:::

## 4. Manejo del Éxito

En caso de una respuesta exitosa de la API, el resultado indicará el estado de creación del evento: `confirmado`. Por defecto, este valor se guardará como `Último éxito de webhook`, pero puedes configurar cualquier variable que prefieras para ello. Si la opción `Crear enlace de reunión` está activa, la URL de la reunión se guardará en la variable.

## 5. Manejo del Fallo

En caso de un fallo de la API, puedes guardar la respuesta de fallo en una variable dedicada para análisis o reintentos futuros.
Puedes, por ejemplo, imaginar una lógica que verifique el fallo y reintente con una acción de "salto".

## 6. Ejemplo

Aquí tienes un ejemplo de cómo puedes configurar la acción y usarla con variables.

1. En este ejemplo, creamos 2 variables:

<img src={googleCalendarVariables} width={500} />

2. `Resumen`, `mes` y `duración` se establecieron como valores fijos.

3. Utilizamos una combinación de acciones para recuperar dinámicamente el día:

- [Enviar mensaje](/bot/editor/actions/interaction/send_message) para enviar el mensaje preguntando cuál es el mejor día.
- [Esperar respuesta del usuario](/bot/editor/actions/interaction/wait_user_answer) para obtener la respuesta.
- [Establecer variable](/bot/editor/actions/logic/set_variable) para guardar el resultado de la respuesta en nuestra variable `día`.

4. Hicimos lo mismo para recuperar la `hora`.

5. Y ahora está terminado, este es el resultado:

<img src={googleCalendarFullSetup} width={500} />

<img src={googleCalendarEventCreated} width={500} />

# Mejores Prácticas:

- Asegúrate siempre de que la API de Google esté conectada y tenga los permisos adecuados para que el bot acceda al calendario.
- Prueba la integración a fondo para manejar posibles errores de la API (por ejemplo, problemas de acceso al calendario de Google, problemas de formato de fecha incorrecta). El simulador de bot te ayudará en este asunto.