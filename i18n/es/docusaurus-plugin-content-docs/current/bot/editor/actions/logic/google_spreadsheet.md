---
sidebar_position: 3
---

import googleSpreadsheetValidFormat from './assets/google_spreadsheet_valid_format.png'
import googleCredentials from './assets/google_credentials.png'
import googleSpreadsheetInsertLast from './assets/google_spreadsheet_insert_last.png'
import googleSpreadsheetInsert from './assets/google_spreadsheet_insert.png'
import googleSpreadsheetInsert2 from './assets/google_spreadsheet_insert_2.png'
import googleSpreadsheetUpdate from './assets/google_spreadsheet_update.png'
import googleSpreadsheetUpdate2 from './assets/google_spreadsheet_update_2.png'
import googleSpreadsheetSelect from './assets/google_spreadsheet_select.png'
import googleSpreadsheetSelect2 from './assets/google_spreadsheet_select_2.png'

# Hoja de cálculo de Google

Esta acción permite a tu bot interactuar con un documento de Google Sheets insertando, actualizando y seleccionando filas dinámicamente durante las interacciones del usuario. Se puede utilizar para almacenar, recuperar y modificar los datos recopilados de las conversaciones del bot.

# Casos de uso:

- Almacenamiento de las respuestas de los usuarios directamente en un archivo de Google Sheets para su posterior procesamiento.
- Actualización de entradas específicas en Google Sheets en función de las entradas del usuario.
- Recuperar datos de una hoja de Google para utilizarlos en una conversación o como condiciones en el flujo del bot.

# Cómo utilizarlo:

## 1. Añadir una acción de Google Sheets

Para añadir una acción de Google Sheets en el editor de flujos de Callbell, sigue estos pasos:

1. Abre el editor de flujos y selecciona el punto de la conversación en el que deseas integrar Google Sheets.
2. Añade una nueva acción haciendo clic en el botón Añadir acción y seleccionando Google Sheets en la lista de acciones disponibles, dentro de la sección "Lógica".

## 2. Autentícate en tu cuenta de Google

Haz clic en el botón "Google connect" y sigue las instrucciones.

:::consejo
Asegúrate de seleccionar todos los derechos. Callbell bot no funcionará correctamente si falta alguno de los derechos "Archivo de Google Drive" u "Hoja de cálculo de Google".

<div class="text--center">
    <img src={googleCredentials} width={500} />
</div>
:::

## 3. Configuración de la acción

Deberá configurar la integración rellenando los siguientes campos:

**Hoja de cálculo**: Elige el documento de Google Sheets con el que quieres interactuar. Asegúrese de que la API de Google Sheets está correctamente configurada.

**Hoja**: Selecciona la hoja específica dentro del documento (por ejemplo, "Hoja1").

**Seleccionar acción**:

- Insertar Fila: Se utiliza para añadir una nueva fila en la hoja con los datos del usuario.
- Actualizar Fila: Permite actualizar una fila existente basándose en los datos introducidos por el usuario.
- Seleccionar Fila: Se utiliza para recuperar datos de la hoja para mostrarlos en la conversación del bot.

:::consejo
Asegúrate de que tienes hojas de cálculo disponibles en tu cuenta. Callbell no podrá crear una automáticamente por ti.
Además, Callbell sólo soportará hojas de cálculo con cabeceras (con nombres de columnas) en la parte superior como esta:

<div class="text--center">
    <img src={googleSpreadsheetValidFormat} width={500} />
</div>
:::

## 4. Inserción de datos en Google Sheets

Al seleccionar la opción Insertar Fila:

- Insertar Posición: Elige la fila donde se insertarán los nuevos datos.

  "Primera" insertará una fila en la línea 1.

  "Personalizado" insertará una fila en cualquier índice especificado. Puedes hacer que este valor sea dinámico utilizando una variable, pero asegúrate de que el valor sea siempre un número. El Bot devolverá un error y continuará su flujo si el índice no es un número.

  "Última" insertará la fila hasta la primera fila vacía encontrada.

  Ten en cuenta que si tienes "agujeros" en tu hoja de cálculo, la fila puede no insertarse donde quieres.

<div class="text--center">
    <img src={googleSpreadsheetInsertLast} width={500} />
</div>

- Columnas Valores: Mapea los datos que se insertarán.

Puedes añadir varias columnas en función de los datos que quieras insertar y de las columnas disponibles en tu hoja de cálculo.
Si omite el valor de una columna, ésta quedará vacía en la hoja de cálculo.

Por ejemplo, estos parámetros:

<div class="text--center">
    <img src={googleSpreadsheetInsert} width={500} />
</div>
Dará como resultado esta inserción:
<div class="text--center">
    <img src={googleSpreadsheetInsert2} width={500} />
</div>

## 5. Actualización de datos en las hojas de cálculo de Google

Al seleccionar la opción Actualizar fila:

- Actualizar Posición: Exactamente igual que en esta inserción, define qué fila actualizar. Tenga en cuenta que debido a la limitación de Google, no es posible actualizar directamente la última fila.

- Columnas Valores: Al igual que en la inserción, defina qué columnas actualizar con los valores proporcionados por el usuario. Cualquier columna especificada aquí anulará el valor de la fila anterior. Si desea mantener el valor de la columna anterior, simplemente no especifique ninguna columna.

Por ejemplo, una acción definida de esta manera:

<div class="text--center">
    <img src={googleSpreadsheetUpdate} width={500} />
</div>

Resultará actualizar la fila 3 de esa manera:

<div class="text--center">
    <img src={googleSpreadsheetUpdate2} width={500} />
</div>

## 6. Selección de datos de las hojas de cálculo de Google

Para buscar y recuperar una fila necesitarás:

- **La columna a buscar** : El bot que iterar y buscar sólo en una columna dada.
- **El valor de la celda a buscar** : Qué valor debe contener la columna
- Almacenar los datos de la fila en variables. Puedes acceder a cualquier dato de columna y almacenarlo en cualquier variable que hayas creado.

Por ejemplo una acción establecida de esta manera:

<div class="text--center">
    <img src={googleSpreadsheetSelect} width={500} />
</div>

Whould devolver este valor:

<div class="text--center">
    <img src={googleSpreadsheetSelect2} width={500} />
</div>

Y almacenarlo en la variable "número de teléfono de la hoja de cálculo"

:::consejo
Tenga en cuenta que la búsqueda sólo devolverá el primer resultado. Si tienes varias filas que coinciden con el valor de la celda, sólo se devolverá la primera. Si el resultado que buscas no es el primero, crea una nueva columna en tu hoja de cálculo con valores más específicos/únicos
:::

## 7. Manejo de fallos

En caso de fallo de la API, puedes almacenar la respuesta al fallo en una variable dedicada para futuros análisis o reintentos.
Puedes, por ejemplo, imaginar alguna lógica que compruebe el fallo y reintente con una acción "saltar".

# Mejores prácticas:

- Asegúrate siempre de que la API de Google Sheets está conectada y cuenta con los permisos adecuados para que el bot acceda al documento.
- Prueba la integración a fondo para gestionar posibles errores de la API (por ejemplo, problemas de acceso a Google Sheets). El simulador de bots te ayudará en esta cuestión.
