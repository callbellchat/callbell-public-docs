---
sidebar_position: 4
---

import setVariableUrl from './assets/set_variable.png'
import setVariableEditUrl from './assets/set_variable_edit.png'

# Establecer variable

<img src={setVariableUrl} width={180} />

La acción **Set Variable** se utiliza para establecer una variable a un valor específico.

## Cómo utilizarla

Después de añadir la acción puede seleccionar una variable existente o crear una nueva. En este último caso, basta con escribir el nombre de la variable y pulsar el botón **Crear**.

<img src={setVariableEditUrl} width={400} />

### Creación de una nueva variable

Al crear una nueva variable se le pedirá que seleccione el tipo de variable. Puede elegir entre **Cadena**, **Número** y **Lista**.

Después de seleccionar el tipo de variable, puede especificar el valor de la variable. Dependiendo del tipo de variable que hayas seleccionado, podrás especificar una operación a aplicar a la variable.

### Variables de cadena

Si has creado o seleccionado una variable **Cadena**, puedes realizar las siguientes acciones:

- Sustituir texto** - Sustituye el valor de la variable por el texto especificado.
- Añadir al texto** - Añade el texto especificado al valor de la variable.

### Variables numéricas

Si has creado o seleccionado una variable **Número**, puedes realizar las siguientes acciones:

- **Reemplazar número** - Reemplazar el valor de la variable por el número especificado.
- **Añadir número** - Añadir el número especificado al valor de la variable.
- Restar número** - Restar el número especificado al valor de la variable.
- Multiplicar número** - Multiplica el valor de la variable por el número especificado.
- Dividir número** - Dividir el valor de la variable por el número especificado.

:::info
Por defecto, el valor de la variable es `0`.
:::

### Lista de variables

Si has creado o seleccionado una variable **Lista**, puedes realizar las siguientes acciones:

- **Añadir a la lista** - Añadir el texto especificado a la lista.
- Eliminar de la lista** - Elimina el texto especificado de la lista.
- Vaciar lista** - Vacía la lista.

### Uso de variables con otras variables

También puede utilizar variables con otras variables. Por ejemplo, puedes establecer una variable al valor de otra variable. Esto es útil si estás construyendo una lista de valores y quieres añadir un nuevo valor a la lista o, por ejemplo, quieres hacer un seguimiento de la puntuación de un usuario.