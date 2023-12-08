---
sidebar_position: 2
---

# Empezando

Esta guía paso a paso te guiará en la construcción de tu primer chatbot con Callbell.

## Prerrequisitos

Debes crear una cuenta en Callbell y haber configurado al menos **1 canal** para poder seguir esta guía.

- Regístrate en [Callbell](https://dash.callbell.eu/users/sign_up)
- Obtén más información sobre nuestra [integración con la API de WhatsApp Business](https://callbellsupport.zendesk.com/hc/en-us/articles/360007805898-How-to-integrate-WhatsApp-into-Callbell-through-the-WhatsApp-Business-APIs) para usar el generador de flujos del bot con WhatsApp.

## Creando tu primer chatbot

Dirígete a la sección **Generador de Bots** en la barra lateral izquierda y haz clic en el botón **Crear nuevo bot**:

![create_new_bot](./assets/create_new_bot.png)

Aparecerá una ventana emergente que te pedirá que elijas un nombre para tu bot y el canal que deseas utilizar:

![create_new_bot_modal](./assets/create_new_bot_modal.png)

Después de hacer clic en el botón **Crear bot**, serás redirigido a la página del generador de bots donde podrás comenzar a construir tu primer chatbot:

![bot_builder](./assets/bot_builder.png)

## Agregar una nueva acción

Para que el bot funcione, tendrás que agregar al menos una acción. Por ejemplo, vamos a responder al usuario con un mensaje cuando envíe un mensaje al bot.

Haz clic en el botón **Agregar nueva acción** y selecciona la acción **Enviar mensaje**:

![add_new_action](./assets/add_new_action.png)

Se abrirá un panel para que puedas configurar la acción. En este caso, simplemente agregaremos un mensaje de texto:

![add_new_action_panel](./assets/add_new_action_panel.png)

Después de hacer clic en el botón **Guardar**, serás redirigido a la página del generador de bots donde podrás ver la acción que acabas de crear:

![bot_builder_action](./assets/bot_builder_action.png)

## Prueba tu bot

Para probar tu bot, deberás hacer clic en el botón **Ejecutar simulador** en la esquina superior derecha de la página. Esto abrirá un panel donde podrás probar tu nuevo flujo:

![run_simulator](./assets/run_simulator.png)

Simplemente haz clic en el botón **Enviar** y verás que el bot responde con el mensaje que acabas de configurar:

![run_simulator_reply](./assets/run_simulator_reply.png)

## Publica tu bot

Una vez que estés satisfecho con tu bot, puedes publicarlo haciendo clic en el botón **Publicar borrador** en la esquina superior derecha de la página:

![publish_bot](./assets/publish_bot.png)

Después de hacer clic en el botón **Publicar borrador** y confirmar, tu flujo de bot se publicará; al mismo tiempo, deberás **activar tu bot** para que esté disponible para tus clientes. Puedes hacer esto volviendo a la sección "Bots" en la barra lateral derecha y haciendo clic en el botón **Activar bot**:

![enable_bot](./assets/enable_bot.png)

Puedes confirmar que el bot está activado revisando el estado en la sección "Bots":

![bot_enabled](./assets/bot_enabled.png)

## Prueba tu bot en producción

Ahora que tu bot está activado, puedes probarlo en producción enviando un mensaje al canal que configuraste. En este caso, enviaremos un mensaje al número de WhatsApp que configuramos en la sección [Prerrequisitos](#prerrequisitos):

![test_bot_in_production](./assets/test_bot_in_production.gif)

## ¿Qué sigue?

Ahora que has creado tu primer chatbot, puedes comenzar a explorar las otras acciones disponibles en el generador de bots.