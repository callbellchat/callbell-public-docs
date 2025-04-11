---
sidebar_position: 1
---

# Websocket Connection Refused

Once the webchat is installed successfully, depending on your website configuration, you might get a WebSocket connection error in the browser console like the one below:

```
Refused to connect to 'wss://centrifugo.callbell.eu/connection/websocket' because it violates the following Content Security Policy directive: "default-src https: localhost:* 'unsafe-inline' 'unsafe-eval'". Note that 'connect-src' was not explicitly set, so 'default-src' is used as a fallback.
```

This is because the websocket connection is not allowed by the Content Security Policy (CSP) of your website.

## Solution

You can fix this by whitelisting `wss://centrifugo.callbell.eu/connection/websocket` in your website's CSP:

```html
connect-src 'self' wss://centrifugo.callbell.eu
```

You can add this line to your website's CSP by adding the following line to your website's CSP:

```html
<meta http-equiv="Content-Security-Policy" content="connect-src 'self' wss://centrifugo.callbell.eu">
```
