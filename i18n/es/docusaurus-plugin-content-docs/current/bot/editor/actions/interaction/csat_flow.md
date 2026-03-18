---
sidebar_position: 1
---

import csatActionPanel from './assets/csat_action_panel.png'
import lastCsatAnswer from './assets/last_csat_answer.png'
import csatBranches from './assets/csat_branches.png'
import csatAnalytics from './assets/csat_analytics.png'
import csatLogs from './assets/csat_logs.png'

# Flujo CSAT

La acción de flujo CSAT te permite enviar un mensaje de satisfacción del cliente y gestionar el flujo según la respuesta.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/CHR2DUkPD9c?si=r9WhkeASkp5ob0OL" title="Encuesta de Fidelización para WhatsApp" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
:::info
Esta acción no está disponible para los canales QR o Twilio.
:::

Cómo usarlo

Coloca esta acción en la parte del flujo que sea más adecuada para activar la encuesta.

<img src={csatActionPanel} width={400} />

Se te pedirá que completes la pregunta de CSAT para tu encuesta y las posibles respuestas que serán categorizadas como "Promotor", "Neutral" o "Detractor". Las posibles respuestas se enviarán como botones para que el cliente haga clic y elija.

También puedes elegir si deseas tener un fallback programado o no. Esto significa que:

Si está habilitado, después de 23 horas el flujo del bot continuará y el usuario ya no podrá responder la encuesta;

Si está deshabilitado, el flujo del bot continuará solo si el usuario responde la encuesta (con una respuesta válida o no).

<img src={csatBranches} width={500} />

Así es como se verá el flujo del bot una vez que la acción se haya agregado correctamente.

<img src={lastCsatAnswer} width={150} />

La respuesta del usuario se almacenará en una variable llamada "Last CSAT Answer" (variará según el idioma configurado).
Si el usuario no selecciona ninguno de los botones válidos y envía un texto aleatorio, o no responde en absoluto, podrás saberlo revisando el valor almacenado en "Last CSAT Answer".

Analítica

Por último, podrás ver los resultados de tu encuesta CSAT en la sección de analítica de la aplicación Callbell (pestaña de rendimiento), así como los registros de respuestas.

<img src={csatAnalytics} width={800} /> <br/> <img src={csatLogs} width={800} />

