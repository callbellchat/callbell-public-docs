---
sidebar_position: 1
---

# Como criar campos personalizados do live chat

Neste guia rápido, você aprenderá como criar [campos personalizados](https://headwayapp.co/callbell-changelog/custom-fields-(for-contacts)-225586) no aplicativo Callbell usando as informações enviadas pelo live chat.

## Etapa 1: Gerar o trecho de código do live chat

Após criar uma integração de live chat e personalizá-la de acordo com suas preferências, vá para a segunda seção da página de configuração do widget. Lá você verá um trecho de código que foi gerado para ser copiado e colado em seu site para instalação do live chat.

![snippet](./assets/snippet.png)

## Etapa 2: Editar o trecho de código

No nosso caso, o que queremos é enviar informações do nosso site para o aplicativo Callbell sempre que um usuário interagir com o chat. Podemos fazer isso com algumas pequenas alterações no trecho de código gerado acima. Veja o exemplo abaixo:

```html
<script>
  if (!window.callbellSettings) {
    window.callbellSettings = {}
  }
  window.callbellSettings["uuid"] = "000000-0000-abcd-1234-0000000000";
  window.callbellSettings["script_token"] = "script_token";
  window.callbellSettings["extra_params"] = {
    "identifier": '12345567',
    "course": "Ciência da Computação",
    "semester": "4º ano"
  }
</script>
<script>
  (function(){var ...);
</script>
```

Neste exemplo, os campos extras estão *hard-coded*, mas podem ser informações enviadas do seu backend.

:::info
Observe que o campo `identifier` é obrigatório. Ele será usado como um ID para o usuário que interage com o live chat, portanto, deve ser único. Se esse campo não for enviado, o usuário poderá interagir com o chat e enviar e receber mensagens, mas nenhum campo personalizado será criado.
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

E assim será exibido no aplicativo Callbell.
![custom_fields](./assets/custom_fields.png)