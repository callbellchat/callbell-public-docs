---
sidebar_position: 4
---

import setVariableUrl from './assets/set_variable.png'
import setVariableEditUrl from './assets/set_variable_edit.png'

# Set Variable

<img src={setVariableUrl} width={180} />

La acción **Set Variable** se utiliza para asignar un valor específico a una variable.

## Cómo usarlo

Después de agregar la acción, puedes seleccionar una variable existente o crear una nueva. En caso de crear una nueva, simplemente escribe el nombre de la variable y luego haz clic en el botón **Crear**.

<img src={setVariableEditUrl} width={400} />

### Crear una nueva variable

Al crear una nueva variable, se te solicitará seleccionar el tipo de variable. Puedes elegir entre **String** (cadena de texto), **Number** (número) y **List** (lista).

Una vez seleccionado el tipo de variable, puedes especificar su valor. Dependiendo del tipo de variable seleccionado, podrás especificar una operación para aplicar a la variable.

### Variables de tipo String (cadena de texto)

Si creaste o seleccionaste una variable de tipo **String**, puedes realizar las siguientes acciones:

- **Reemplazar texto**: reemplaza el valor de la variable con el texto especificado.
- **Agregar a texto**: agrega el texto especificado al valor de la variable.

### Variables de tipo Number (número)

Si creaste o seleccionaste una variable de tipo **Number**, puedes realizar las siguientes acciones:

- **Reemplazar número**: reemplaza el valor de la variable con el número especificado.
- **Sumar número**: suma el número especificado al valor de la variable.
- **Restar número**: resta el número especificado al valor de la variable.
- **Multiplicar por número**: multiplica el valor de la variable por el número especificado.
- **Dividir por número**: divide el valor de la variable por el número especificado.

:::info
Por defecto, el valor de la variable se establece en `0`.
:::

### Variables de tipo List (lista)

Si creaste o seleccionaste una variable de tipo **List**, puedes realizar las siguientes acciones:

- **Agregar a lista**: agrega el texto especificado a la lista.
- **Eliminar de lista**: elimina el texto especificado de la lista.
- **Vaciar lista**: vacía la lista.

### Usar variables con otras variables

También puedes usar variables con otras variables. Por ejemplo, puedes asignar a una variable el valor de otra variable. Esto es útil si estás construyendo una lista de valores y deseas agregar un nuevo valor a la lista o, por ejemplo, si deseas realizar un seguimiento del puntaje de un usuario.