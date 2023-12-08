---
sidebar_position: 1
---

# Introduzione

L'API di Callbell fornisce **Webhook HTTP** per gli eventi delle applicazioni più comuni:

- **Eventi di messaggio**
- **Stato delle notifiche degli eventi di messaggio**
- **Eventi di contatto**
- **Eventi di conversazione**

## Come iscriversi agli eventi

:::info
Questo può essere fatto anche programmaticamente da [WebhooksEndpoint](./../webhooks_api/introduction.md)
:::

Sulla tua dashboard Callbell vai alla sezione [**"Impostazioni API"**](https://dash.callbell.eu/settings/api_settings/webhooks) e clicca sulla scheda "Webhooks":

![webhook_tab](./assets/webhook_tab.jpg)

Nel campo URL aggiungi l'URL del tuo endpoint (ad esempio `https://myapp.com/callbell_endpoint`) e seleziona gli eventi per i quali desideri ottenere le sottoscrizioni:

![webhook_create](./assets/webhook_create.jpg)

:::info
Assicurati di **includere** anche il protocollo (`http` o `https`) all'interno del tuo endpoint webhook:

✅ **Buono**: `https://www.myexample.com`

❌ **Scarso**: `www.example.com`
:::

Dopo aver cliccato su "Crea nuovo webhook" dovresti ricevere una notifica di successo. Puoi sempre modificare gli eventi del webhook in un secondo momento:

![webhook_edit](./assets/webhook_edit.jpg)

:::caution
Callbell non supporta `localhost` come URL del webhook. Se hai bisogno di eseguire il debug di un'applicazione locale, utilizza invece un servizio per esporre l'ambiente di sviluppo locale come [Ngrok](https://ngrok.com).
:::