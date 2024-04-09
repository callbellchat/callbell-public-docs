---
sidebar_position: 3
---

import urlParams from './activos/url_params.png'
import queryParams de './assets/query_params.png'
import responseQuickView de './assets/response_quick_view.png'
import webhookValidationErrors from './assets/webhook_validation_errors.png'
import parameterVariable from './assets/parameter_variable.png'
import pathHelper from './assets/path_helper.png'
import flatMapExemple from './assets/flat_map_exemple.png'
import responseFailureVariable from './assets/response_failure_variable.png'
import failureHandling from './activos/failure_handling.png'
import simulatorWebhookChoices from './activos/simulator_webhook_choices.png'
import fakeSuccessWebhook from './assets/fake_success_webhook.png'

# Webhook

Esta acción le permite realizar peticiones HTTP a cualquier servicio externo que desee.
Esto es útil para enviar información desde el bot a otro servicio o para obtener información de otro servicio y utilizarla en el bot.

:::consejo
Antes de utilizar esta acción necesitarás conocimientos técnicos sobre [Peticiones HTTP y sus parámetros](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview).
:::

<iframe width="100%" height="500" src="https://www.youtube.com/embed/0pbU9KPXcWI" title="Cómo usar la acción &quot;Webhook&quot; - Callbell Chatbot" frameborder="0" allow="acelerómetro; autoplay; clipboard-write; encrypted-media; giroscopio; picture-in-picture; web-share" allowfullscreen></iframe>

## Cómo funciona esta acción

He aquí algunas explicaciones sobre el funcionamiento de esta acción y sus limitaciones:

- El bot siempre ejecuta esta acción de forma sincrónica, lo que significa que espera hasta que la solicitud recibe un resultado (ya sea éxito o fracaso) antes de proceder al siguiente paso. Si tienes varias acciones webhook una tras otra, se ejecutarán secuencialmente, no por lotes.

- El tiempo de espera para la consulta se establece internamente en 15 segundos. Cualquier consulta de larga duración fallará más allá de esta duración.

- El bot continuará incluso si tu acción webhook falla por cualquier razón.

- Es tu responsabilidad manejar la respuesta, ya sea éxito o fracaso. Tendrás que especificar variables para almacenar los resultados de la solicitud. Luego, depende de ti utilizar estas variables más adelante en el bot, por ejemplo, como condición en un bloque de elección.

## Cómo usarlo

### Parámetros de solicitud

El único parámetro obligatorio es la URL. Puede añadirle directamente parámetros de consulta:

<div class="text--center">
    <img src={urlParams} width={500} />
</div>

o utilizar el helper:

<div class="text--center">
    <img src={queryParams} width={500} />
</div>

El resto de parámetros (cabeceras y cuerpo) son opcionales. Puedes añadirlos siguiendo la misma lógica, utilizando los botones "add header" o "add body" de la esquina superior derecha.

:::consejo
Puede insertar variables para enviar información previamente almacenada en cualquier campo: URL, params, cabecera o cuerpo. Sólo tienes que hacer clic en el pequeño botón de variables de la derecha.

<div class="text--center">
    <img src={parameterVariable} width={500} />
</div>
:::

Una vez que haya elegido el método correcto, puede hacer clic en el botón `Test URL`. Si la solicitud tiene éxito, aparecerá un pequeño botón "ojo" en el lado derecho, que le permitirá echar un vistazo rápido al diseño de la respuesta:

<div class="text--center">
    <img src={responseQuickView} width={500} />
</div>

### Errores de validación de la solicitud

Al configurar y probar la acción, puede encontrarse con diferentes tipos de errores:

<div class="text--center">
    <img src={webhookValidationErrors} width={500} />
</div>

Procesamos sus peticiones en nuestro servidor e identificamos los errores más comunes:

 <table>
  <tr>
    <th>Tipo</th>
    <th>Razones</th>
    <th>Acción</th>
  </tr>
  <tr>
    <td>Parámetro que falta</td>
    <td>Falta url o método</td>
    <td>Verifique que tanto la URL como el método estén correctamente especificados.</td>
  </tr>
  <tr>
    <td>Solicitud incorrecta</td>
    <td>URL, cuerpo, parámetros o cabecera no válidos</td>.
    <td>Comprueba la validez de cada parámetro. Utilice clientes como Postman para comprobar sus parámetros.</td>
  </tr>
  <tr>
    <td>Respuesta incorrecta</td>
    <td>Estado de la respuesta diferente de 200 o respuesta no en formato JSON</td>.
    <td>Comprueba el estado de tu servidor.</td>
  </tr>
  <tr>
    <td>Error de clave</td>
    <td>La ruta especificada no coincide con la carga útil de la respuesta</td>.
    <td>Verifica dos veces la validez de la ruta que has introducido en la acción webhook para cada variable</td>.
  </tr>
</table>

### Análisis sintáctico y almacenamiento de la respuesta de las solicitudes en variables

Una vez que tu petición recibe una respuesta satisfactoria, puedes elegir una variable que almacenará el resultado. También puede seleccionar la parte de la respuesta que desea almacenar utilizando el ayudante "path":

<div class="text--center">
    <img src={pathHelper} width={500} />
</div>

Si estás intentando seleccionar un array como valor, el helper te sugerirá utilizar la función `flatMap`, que te da la posibilidad de extraer cualquier valor del array.

Por ejemplo, digamos que la estructura de datos de la respuesta de tu petición tiene este aspecto:

```
{
  "productos": [
    {
      "id": 1,
      "title": "iPhone 9",
      "description": "Un móvil de apple que no se parece en nada a apple",
      "price": 549,
      "valoración": 4.69,
      "stock": 94,
      "marca": "Apple",
      "categoría": "smartphones",
      "imágenes": [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",
        "https://cdn.dummyjson.com/product-images/1/2.jpg"
      ]
    },
    {
      "id": 2,
      "title": "iPhone X",
      "description": "SIM-Free, Modelo A19211 Pantalla Super Retina HD de 6,5 pulgadas con tecnología OLED Chip A12 Bionic con ...",
      "price": 899,
      "valoración": 4.44,
      "stock": 34,
      "marca": "Apple",
      "categoría": "smartphones",
      "imágenes": [
        "https://cdn.dummyjson.com/product-images/2/1.jpg"
      ]
    }
  ]
}
```

Y quieres almacenar en la variable `webhook success` un array sólo de títulos de productos:

```
["iPhone 9", "iPhone X"]
```

Utilizando el siguiente valor se ajustará a su necesidad:

<div class="text--center">
    <img src={flatMapExemple} width={500} />
</div>

Si desea acceder a la categoría del segundo elemento de producto, puede utilizar esta ruta en su lugar:

```
productos[1].categoría
```

### Tratamiento de peticiones fallidas

Es posible que incluso después de configurar correctamente tu acción webhook, ésta falle ocasionalmente (errores del servidor, parámetros no manejados correctamente, etc.).
Si el comportamiento de tu bot depende del resultado de la petición, es importante manejar los errores.
El bot almacenará cualquier error en la variable que hayas especificado, o utilizará la variable `last webhook failure`:

<div class="text--center">
    <img src={responseFailureVariable} width={500} />
</div>

Depende de ti manejar este error o no. La mejor manera es crear una variable específica para cada webhook, y luego comprobar a través de un bloque de elección si la variable contiene un mensaje:

<div class="text--center">
    <img src={failureHandling} width={600} />
</div>

## Prueba tu petición en el simulador

Siempre debes verificar si tu bot se comporta como esperas a través del simulador, asegurándote de que tanto las peticiones exitosas como las fallidas se gestionan correctamente.
Cuando el simulador llega a una acción de webhook, a diferencia del bot real, hará una pausa y te pedirá que especifiques a qué debería parecerse la petición:

<div class="text--center">
    <img src={simulatorWebhookChoices} width={500} />
</div>

- Falso éxito: Pedirá un modal para especificar la carga útil de la solicitud exitosa. Luego, utilizará cada ruta que hayas especificado en la acción webhook para analizar y almacenar las variables correspondientes. Ten en cuenta que si estás almacenando en una variable de tipo lista, el simulador esperará que la carga útil que proporciones contenga un array en la ruta correcta. Si no es así, se mostrará un error en el modal, impidiendo seguir avanzando.

<div class="text--center">
    <img src={fakeSuccessWebhook} width={500} />
</div>

- Fallo falso: Mostrará el mismo modal y te permitirá especificar la carga útil que se guardará en la variable fail que hayas especificado en la acción.

- Trigger real webhook: Proxyeará tu petición a nuestro servidor y devolverá el resultado real. Esto puede ser útil para comprobar si todo funciona bien, pero recuerda que hará una petición HTTP real. Si planeas añadir un usuario a tu CRM a través de la acción webhook, utilizar esta opción en el simulador puede añadir datos no deseados a tu CRM.
