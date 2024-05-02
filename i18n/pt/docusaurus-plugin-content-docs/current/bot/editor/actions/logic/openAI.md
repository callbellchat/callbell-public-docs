---
sidebar_position: 3
---

import openAIAPIKey from './assets/openAI_api_key.png'

# OpenAI

Essa ação permite a geração de texto com base em um prompt e mensagens anteriores da conversa. Pode ser aplicada a vários cenários, desde interações clássicas de chat com um assistente até ações específicas como resumir conversas para seus agentes, fornecer conselhos ou detectar comportamentos potenciais dos usuários. A eficácia da ação depende principalmente da qualidade do prompt fornecido.

:::tip
Antes de usar esta ação, é recomendável familiarizar-se com a engenharia de prompts, que pode ser encontrada [aqui](https://platform.openai.com/docs/guides/prompt-engineering).
:::

<iframe width="100%" height="500" src="https://www.youtube.com/embed/qvKuamQ207k" title="Como usar a ação &quot;OpenAI&quot; - Chatbot Callbell" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Como essa ação funciona

Aqui estão algumas explicações de como essa ação opera e suas limitações:

- O bot sempre executa esta ação de forma síncrona, o que significa que ele aguarda até que a API da OpenAI retorne uma resposta antes de prosseguir para a próxima etapa. Semelhante à Ação de Webhook, se você tiver várias Ações OpenAI consecutivas, elas serão executadas sequencialmente, em vez de em lotes.

- O bot continuará seu fluxo mesmo se a ação OpenAI falhar por qualquer motivo, como um timeout.

- É sua responsabilidade lidar com a resposta, seja bem-sucedida ou falha. Você precisará especificar variáveis para armazenar a resposta da OpenAI. Em seguida, cabe a você utilizar essas variáveis posteriormente no bot, por exemplo, como condições em um bloco de escolha, em mensagens ou notas.

## Como usar

Apenas o token e o prompt são obrigatórios.

### Parâmetro Token da OpenAI

Você pode encontrar a chave da API em sua [conta da OpenAI](https://platform.openai.com/api-keys).

:::tip
Você pode colar diretamente a chave no campo de entrada, ou pode salvá-la como uma variável com um valor padrão, o
