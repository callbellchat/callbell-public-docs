---
sidebar_position: 1
---

# Introducción

Conecta **Claude**, **ChatGPT** u otro asistente de IA a tu cuenta de Callbell y pregúntale por tus contactos y conversaciones con tus propias palabras. Por ejemplo:

- "Muéstrame los últimos mensajes del +34 600 000 000."
- "¿Qué contactos con la etiqueta `refund-request` están asignados al equipo de Soporte?"
- "Añade una nota interna a este contacto con un resumen de la conversación."
- "Envía nuestra plantilla aprobada `order_update` a este contacto."

## Qué necesitas

- Una aplicación de IA que admita conectores personalizados, como Claude o ChatGPT.
- Un usuario de Callbell con acceso a la **configuración** de la cuenta.
- La dirección de Callbell, que pegas en tu aplicación de IA:

```
https://ai.callbell.eu/mcp
```

No hay ninguna clave API que crear: la primera vez que te conectas, solo tienes que iniciar sesión con tu usuario de Callbell.

## Cómo funciona la conexión

1. Añades Callbell en tu aplicación de IA con la dirección de arriba.
2. La aplicación abre una página de Callbell, donde inicias sesión si aún no lo has hecho.
3. Callbell muestra lo que pide la aplicación. Eliges lo que puede hacer y haces clic en **Permitir**.

Cada conexión es personal: cada compañero se conecta con su propio usuario de Callbell. Todas las conexiones aparecen en Callbell, donde se pueden eliminar en cualquier momento (consulta [Gestionar las conexiones](./manage_connections.md)). Callbell nunca comparte tu contraseña con la aplicación de IA.

## Qué puede hacer el asistente

Al conectarte, eliges entre dos niveles de acceso.

**Solo lectura** (por defecto). El asistente puede:

- encontrar contactos por número de teléfono, etiqueta, equipo o canal,
- leer los datos de los contactos y los mensajes de las conversaciones, incluidas las notas internas,
- ver tus canales, equipos y plantillas de WhatsApp.

**Lectura y escritura**, solo si marcas **Permitir que ... haga cambios**. El asistente también puede:

- enviar mensajes de WhatsApp a tus contactos existentes (fuera de la ventana de atención al cliente de 24 horas, solo plantillas aprobadas),
- actualizar contactos: nombre, etiquetas, campos personalizados y equipo,
- añadir notas internas,
- cerrar conversaciones.

Para cambiar el nivel de acceso más adelante, desconecta la aplicación y vuelve a conectarla.

:::caution
El asistente trabaja con toda la cuenta de Callbell: puede ver todos los contactos y conversaciones, no solo los que tienes asignados. Conecta solo aplicaciones de confianza y mantén el acceso de solo lectura cuando el asistente no necesite cambiar nada.
:::

## Configurar tu aplicación de IA

- [Claude (web, escritorio y móvil)](./connect_claude.md)
- [ChatGPT](./connect_chatgpt.md)
- [Claude Code, Codex y otros clientes MCP](./developer_tools.md)

Para ver o eliminar las aplicaciones conectadas a tu cuenta, consulta [Gestionar las conexiones](./manage_connections.md).
