---
sidebar_position: 2
---

import newChoiceUrl from './assets/new_choice.png'
import newChoiceEditUrl from './assets/new_choice_edit.png'
import newChoiceFallbackUrl from './assets/new_choice_fallback.png'

# Nueva elección

<img src={newChoiceUrl} width={180} />

Esta acción permite crear una nueva elección en el flujo actual.

## Configuración

Esta acción permite personalizar **cómo debe comportarse** el flujo en función del último mensaje enviado por el usuario o por un valor variable.

<img src={newChoiceEditUrl} width={300} />

### Activadores de elección

Puede especificar un **disparador** de la elección utilizando uno de los siguientes operadores de igualdad:

- Igual a** - La elección se activa si el valor es igual al valor del campo de la derecha.
- Contiene** - La elección se activa si el valor contiene el valor del campo de la derecha.
- Empieza por** - La opción se activa si el valor empieza por el valor especificado en el campo de la derecha.
- **Finaliza con** - La elección se dispara si el valor finaliza con el valor especificado en el campo de la derecha.
- Diferente de** - La elección se activa si el valor es diferente del valor especificado en el campo de la derecha.
- Mayor que** - La opción se activa si el valor es mayor que el valor especificado en el campo de la derecha.
- Menor que** - La opción se activa si el valor es menor que el valor del campo de la derecha.
- Mayor o igual que** - La opción se activa si el valor es mayor o igual que el valor del campo de la derecha.
- Menor o igual que** - La opción se activa si el valor es menor o igual que el valor del campo de la derecha.
- Es un número** - La opción se activa si el valor es un número.
- Es un mensaje** - La opción se activa si el valor es un mensaje.

### Disparadores múltiples

Puede especificar múltiples disparadores en la misma condición pulsando el botón **Añadir condición**.

Puede decidir cómo unir las múltiples condiciones utilizando los operadores **AND** u **OR**. Si desea cambiar entre los dos operadores, haga clic en el botón **AND** u **OR**.

Por ejemplo, utilizando múltiples **OR** puede construir una lista de sinónimos para la misma elección. Esto es útil si desea activar la misma opción para diferentes palabras.

Al mismo tiempo, puede utilizar múltiples **AND** para crear una lista de condiciones que deben cumplirse para activar la selección. Por ejemplo, imagine comprobar la condición de una variable para que sea mayor que un determinado valor y menor que otro valor.


### Variables

Puedes comparar valores de variables, lo que significa que puedes tomar una decisión basándote en el valor de una variable. Esto es útil cuando quieres que el bot tome un camino específico sin tener que preguntar al usuario.

### Fallback

Si no se cumple ninguna de las condiciones, el bot tomará la ruta **Fallback**.

<img src={newChoiceFallbackUrl} width={500} />

Los Fallbacks son útiles cuando quieres manejar todos los casos que no están cubiertos por las condiciones.