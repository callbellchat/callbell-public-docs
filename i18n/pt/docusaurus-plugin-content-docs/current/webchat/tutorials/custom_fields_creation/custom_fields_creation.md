---
sidebar_position: 1
---

# Como criar campos personalizados a partir do webchat

Neste guia rápido, você aprenderá como criar [campos personalizados](https://headwayapp.co/callbell-changelog/custom-fields-(for-contacts)-225586) no aplicativo Callbell usando informações que são enviadas por meio do nosso webchat.

## Passo 1: Gerar o trecho de código do webchat

Após criar uma integração de webchat e personalizá-la de acordo com suas preferências, vá para a segunda seção da página de configuração do widget. Lá você verá um trecho de código que foi gerado para ser copiado e colado em seu site para que o webchat funcione.

![webchat_snippet](./assets/webchat_snippet.png)

## Passo 2: Editar o trecho de código

Em nosso caso, o que queremos é enviar informações de nosso site para o aplicativo Callbell sempre que um usuário começar a interagir com o chat. Podemos fazer isso simplesmente fazendo algumas pequenas alterações no trecho de código gerado acima. Veja o exemplo abaixo:

```html
<script>
  if (!window.callbellSettings) {
    window.callbellSettings = {}
  }
  window.callbellSettings["uuid"] = "000000-0000-abcd-1234-0000000000";
  window.callbellSettings["script_token"] = "script_token";
  window.callbellSettings["extra_params"] = {
    "identifier": '12345567',
    "course": "Computer Science",
    "semester": "4rd"
  }
</script>
<script>
  (function(){var ...);
</script>
```

Neste exemplo, os campos extras são codificados manualmente, mas podem ser informações enviadas a partir de seu backend.

:::info
Observe que o campo `identifier` é obrigatório. Ele será usado como um identificador para o usuário que interage com o webchat, portanto, deve ser único. Se este campo não for enviado, o usuário poderá interagir com o chat, enviar e receber mensagens, mas nenhum campo personalizado será criado.
:::

:::info
Você pode enviar no máximo 20 campos extras para criar campos personalizados no aplicativo Callbell.
:::

## Exemplo

No exemplo abaixo, estamos gerando um UUID aleatório como identificador e obtendo o idioma do navegador.
```html
<script>
  if (!window.callbellSettings) {
    window.callbellSettings = {}
  }
  window.callbellSettings["uuid"] = "000000-0000-abcd-1234-0000000000";
  window.callbellSettings["script_token"] = "script_token";
  window.callbellSettings["extra_params"] = {
    identifier: self.crypto.randomUUID(),
    language: navigator.language,
  }
</script>
<script>
  (function(){var ...);
</script>
````

E é assim que será mostrado no aplicativo Callbell.
![custom_fields](./assets/custom_fields.png)