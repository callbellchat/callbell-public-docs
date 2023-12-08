---
sidebar_position: 2
---

import newChoiceUrl from './assets/new_choice.png'
import newChoiceEditUrl from './assets/new_choice_edit.png'
import newChoiceFallbackUrl from './assets/new_choice_fallback.png'

# Nueva Opción

<img src={newChoiceUrl} width={180} />

Esta acción te permite crear una nueva opción en el flujo actual.

## Configuración

La acción te permite personalizar **cómo debe comportarse el flujo** dependiendo del último mensaje enviado por el usuario o por el valor de una variable.

<img src={newChoiceEditUrl} width={300} />

### Disparadores de la opción

Puedes especificar un **disparador** de la opción utilizando uno de los siguientes operadores de igualdad:

- **Igual a** - La opción se dispara si el valor es igual al valor en el campo de la derecha.
- **Contiene** - La opción se dispara si el valor contiene el valor en el campo de la derecha.
- **Comienza con** - La opción se dispara si el valor comienza con el valor especificado en el campo de la derecha.
- **Termina con** - La opción se dispara si el valor termina con el valor especificado en el campo de la derecha.
- **Diferente a** - La opción se dispara si el valor es diferente al valor en el campo de la derecha.
- **Mayor que** - La opción se dispara si el valor es mayor que el valor en el campo de la derecha.
- **Menor que** - La opción se dispara si el valor es menor que el valor en el campo de la derecha.
- **Mayor o igual que** - La opción se dispara si el valor es mayor o igual que el valor en el campo de la derecha.
- **Menor o igual que** - La opción se dispara si el valor es menor o igual que el valor en el campo de la derecha.
- **Es número** - La opción se dispara si el valor es un número.
- **Es mensaje** - La opción se dispara si el valor es un mensaje.

### Múltiples Disparadores

Puedes especificar múltiples disparadores en la misma condición haciendo clic en el botón **Agregar condición**.

Puedes decidir cómo unir las múltiples condiciones utilizando los operadores **Y** o **O**. Si deseas cambiar entre los dos operadores, haz clic en el botón **Y** o **O**.

Por ejemplo, usando múltiples operadores **O** puedes construir una lista de sinónimos para la misma opción. Esto es útil si deseas activar la misma opción para diferentes palabras.

Al mismo tiempo, puedes usar múltiples operadores **Y** para construir una lista de condiciones que deben ser cumplidas para activar la opción. Por ejemplo, imagina verificar la condición de una variable para que sea mayor de cierto valor y menor que otro valor.

### Variables

Puedes comparar los valores de las variables, lo que significa que puedes tomar una decisión basada en el valor de una variable. Esto es útil cuando deseas dirigir al bot para que tome un camino específico sin tener que pedir al usuario una entrada.

### Respaldo

Si ninguna de las condiciones se cumple, el bot tomará el camino de **Respaldo**.

<img src={newChoiceFallbackUrl} width={500} />

Los respaldos son útiles cuando deseas manejar todos los casos que no están cubiertos por las condiciones.