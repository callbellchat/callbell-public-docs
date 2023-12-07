---
sidebar_position: 1
---

# Introduzione

Callbell API fornisce **HTTP Webhooks** per gli eventi più comuni delle applicazioni:

- **eventi di messaggio**
- Eventi di stato di notifica del messaggio**
- Eventi di contatto
- Eventi di conversazione

## Come sottoscrivere gli eventi

:::info
Questo può essere fatto anche programmaticamente da [WebhooksEndpoint](./../webhooks_api/introduction.md)
:::

Nella dashboard di Callbell, navigare nella sezione [**"Impostazioni API "**](https://dash.callbell.eu/settings/api_settings/webhooks) e fare clic sulla scheda "Webhooks":

![webhook_tab](./assets/webhook_tab.jpg)

Nel campo URL aggiungere l'URL dell'endpoint (ad esempio, `https://myapp.com/callbell_endpoint`) e selezionare gli eventi per i quali si desidera ottenere le sottoscrizioni:

![webhook_create](./assets/webhook_create.jpg)

:::info
Assicurarsi di **includere** anche il protocollo (`http` o `https`) nel proprio endpoint webhook:

✅ **Buono**: `https://www.myexample.com`

❌ **Cattivo**: `www.example.com`
:::

Dopo aver fatto clic su "Crea nuovo webhook" si dovrebbe ricevere una notifica di successo. È sempre possibile modificare gli eventi Webhook in una fase successiva:

![webhook_edit](./assets/webhook_edit.jpg)

:::attenzione
Callbell non supporta `localhost` come URL di webhook. Se si ha bisogno di eseguire il debug di un'applicazione locale, utilizzare invece un servizio per esporre il proprio ambiente di sviluppo locale, come [Ngrok](https://ngrok.com).
:::
