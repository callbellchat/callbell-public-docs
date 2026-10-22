---
sidebar_position: 5
---

import callbellConnectedApps from './assets/callbell_connected_apps.png'

# Gestionar las conexiones

Todas las aplicaciones de IA conectadas a tu cuenta de Callbell aparecen en Callbell, así siempre sabes quién conectó qué.

## Ver las aplicaciones conectadas

1. En Callbell, ve a **Configuraciones**, abre **Integraciones** y haz clic en **Configuración de la API**.
2. Abre la pestaña **Aplicaciones conectadas**.

<div class="text--center">
    <img src={callbellConnectedApps} alt="La pestaña Aplicaciones conectadas en la configuración de la API de Callbell" width={800} />
</div>

Cada fila es una conexión:

| Columna | Significado |
| :-- | :-- |
| **Aplicación** | La aplicación de IA, por ejemplo Claude o ChatGPT. |
| **Conectada por** | El usuario de Callbell que aprobó la conexión. |
| **Conectada el** | Cuándo se aprobó la conexión. |
| **Permisos** | **Lectura**, o **Lectura** y **Escritura** si el usuario permitió que la aplicación hiciera cambios. |
| **Última vez que se usó** | La última vez que la aplicación llamó a Callbell. |

Todos los usuarios con acceso a la configuración ven todas las conexiones de la cuenta, incluidas las de sus compañeros.

## Desconectar una aplicación

3. Haz clic en **Desconectar** en la conexión que quieres eliminar y confirma.

La aplicación pierde el acceso a la cuenta de inmediato. Solo se elimina esa conexión: la misma aplicación conectada por otros usuarios sigue funcionando.

Para volver a usar Callbell desde esa aplicación, conéctala de nuevo desde la aplicación (por ejemplo con **Connect** en el conector de Callbell en Claude).

:::tip
Desconecta y vuelve a conectar una aplicación para pasar su conexión de solo lectura a lectura y escritura, o al revés.
:::

## Solución de problemas

| Mensaje o problema | Qué hacer |
| :-- | :-- |
| "Las aplicaciones de IA externas aún no están habilitadas en esta cuenta." | Contacta con nuestro equipo de soporte para activar la función en tu cuenta. |
| "Solo los usuarios con acceso a la configuración de la cuenta pueden conectar una aplicación." | Pide a un administrador que te dé acceso a la configuración, o que conecte la aplicación. |
| "Termina de configurar tu cuenta de Callbell antes de conectar una aplicación." | Completa la configuración de tu cuenta en Callbell y vuelve a intentarlo. |
| "Esta acción está bloqueada temporalmente en tu usuario por motivos de seguridad." | Contacta con nuestro equipo de soporte. |
| El asistente puede leer tus datos pero no puede enviar mensajes ni cambiar nada. | La conexión solo tiene el permiso **Lectura**. Desconéctala y vuelve a conectarla marcando **Permitir que ... haga cambios**. |
| El asistente dice que hay demasiadas solicitudes. | Cada conexión tiene un límite de solicitudes. Espera un minuto y vuelve a intentarlo. |
| La aplicación dejó de funcionar después de una desconexión. | Vuelve a conectar la aplicación desde la configuración de su conector. |
