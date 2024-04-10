---
sidebar_position: 3
---

import urlParams from './assets/url_params.png'
import queryParams from './assets/query_params.png'
import responseQuickView from './assets/response_quick_view.png'
import webhookValidationErrors from './assets/webhook_validation_errors.png'
import parameterVariable from './assets/parameter_variable.png'
import pathHelper from './assets/path_helper.png'
import flatMapExemple from './assets/flat_map_exemple.png'
import responseFailureVariable from './assets/response_failure_variable.png'
import failureHandling from './assets/failure_handling.png'
import simulatorWebhookChoices from './assets/simulator_webhook_choices.png'
import fakeSuccessWebhook from './assets/fake_success_webhook.png'
import multipleResponseVariables from './assets/multiple_response_variables.png'

# Webhook

Essa ação permite que você faça uma solicitação HTTP para qualquer serviço externo que desejar.
Isso é útil para enviar informações do bot para outro serviço ou para buscar informações de outro serviço e usá-las no bot.

:::tip
Antes de utilizar essa ação, você precisará de conhecimento técnico sobre [solicitação HTTP e seus parâmetros] (https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview).
:::

<iframe width="100%" height="500" src="https://www.youtube.com/embed/dqIdYm0nohY" title="Como usar a ação &quot;Webhook&quot; - Callbell Chatbot" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Como essa ação funciona

Aqui estão algumas explicações sobre como essa ação funciona e suas limitações:

- O bot sempre executa essa ação de forma síncrona, o que significa que ele aguarda até que a solicitação receba um resultado (sucesso ou falha) antes de prosseguir para a próxima etapa. Se você tiver várias ações de webhook, uma após a outra, elas serão executadas sequencialmente, não em lotes.

- O tempo limite da consulta é definido internamente como 15 segundos. Qualquer consulta de longa duração falhará após esse período.

- O bot continuará mesmo que sua ação de webhook falhe por qualquer motivo.

- É sua responsabilidade lidar com a resposta, seja ela bem-sucedida ou não. Você precisará especificar variáveis para armazenar os resultados da solicitação. Em seguida, cabe a você usar essas variáveis posteriormente no bot, por exemplo, como uma condição em um bloco de escolha.

## Como usar

### Parâmetros da solicitação

O único parâmetro obrigatório é o URL. Você pode adicionar parâmetros de consulta diretamente a ele:

<div class="text--center">
    <img src={urlParams} width={500} />
</div>

ou use o auxiliar:

<div class="text--center">
    <img src={queryParams} width={500} />
</div>

Todos os outros parâmetros (cabeçalhos e corpo) são opcionais. Você pode adicioná-los usando a mesma lógica, usando os botões "add header" (adicionar cabeçalho) ou "add body" (adicionar corpo) no canto superior direito.

:::tip
Você pode inserir variáveis para enviar informações armazenadas anteriormente em qualquer campo: URL, parâmetros, cabeçalho ou corpo. Basta clicar no pequeno botão de variável à direita.

<div class="text--center">
    <img src={parameterVariable} width={500} />
</div>
:::

Depois de escolher o método correto, você pode clicar no botão `Testar URL`. Se a solicitação for bem-sucedida, um pequeno botão de "olho" no lado direito será exibido, permitindo que você dê uma olhada rápida no layout da resposta:

<div class="text--center">
    <img src={responseQuickView} width={500} />
</div>

### Erros de validação de solicitação

Ao configurar e testar a ação, você pode encontrar diferentes tipos de erros:

<div class="text--center">
    <img src={webhookValidationErrors} width={500} />
</div>

Processamos suas solicitações em nosso servidor e identificamos erros comuns:

 <table>
  <tr>
    <th>Tipo</th>
    <th>razões</th>
    <th>Ação</th>
  </tr>
  <tr>
    <td>MissingParameter</td>
    <td>Url ou método ausente</td>
    <td>Verifique novamente se o URL e o método estão especificados corretamente.</td>
  </tr>
  <tr>
    <td>BadRequest</td>
    <td>URL, corpo, parâmetros ou cabeçalho inválidos</td>
    <td>Verifique a validade de cada parâmetro. Use clientes como o Postman para verificar seus parâmetros.</td>
  </tr>
  <tr>
    <td>BadResponse</td>
    <td>Status da resposta diferente de 200 ou a resposta não está no formato JSON</td>
    <td>Verifique o status de seu servidor.</td>
  </tr>
  <tr>
    <td>KeyError</td>
    <td>O caminho especificado não corresponde à carga útil da resposta</td>
    <td>Verifique novamente a validade do caminho que você inseriu na ação do webhook para cada variável</td>
  </tr>
</table>

### Analisar e armazenar a resposta das solicitações em variáveis

Quando sua solicitação receber uma resposta bem-sucedida, você poderá escolher uma variável que armazenará o resultado. Você também pode selecionar a parte da resposta que deseja armazenar usando o auxiliar "path" (caminho):

<div class="text--center">
    <img src={pathHelper} width={500} />
</div>

Se estiver tentando selecionar uma matriz como valor, o helper sugerirá o uso da função `flatMap`, que lhe dá a possibilidade de extrair qualquer valor da matriz.

Por exemplo, digamos que a estrutura de dados da resposta de sua solicitação seja semelhante a esta:

```
{
  "products": [
    {
      "id": 1,
      "title": "iPhone 9",
      "description": "Um celular da apple que não é nada parecido com a apple",
      "price": 549,
      "rating": 4.69,
      "estoque": 94,
      "marca": "Apple",
      "category": "smartphones",
      "images": [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",
        "https://cdn.dummyjson.com/product-images/1/2.jpg"
      ]
    },
    {
      "id": 2,
      "title": "iPhone X",
      "description": "Sem SIM, modelo A19211 Tela Super Retina HD de 6,5 polegadas com tecnologia OLED Chip A12 Bionic com ...",
      "price": 899,
      "rating": 4.44,
      "estoque": 34,
      "marca": "Apple",
      "category": "smartphones",
      "images": [
        "https://cdn.dummyjson.com/product-images/2/1.jpg"
      ]
    }
  ]
}
```

E você deseja armazenar na variável `webhook success` uma matriz somente de títulos de produtos:

```
["iPhone 9", "iPhone X"]
```

O uso do valor a seguir atenderá às suas necessidades:

<div class="text--center">
    <img src={flatMapExemple} width={500} />
</div>

Se quiser acessar a categoria do segundo item do produto, você pode usar esse caminho:

```
products[1].category
```

:::tip
Você pode armazenar várias partes da resposta em diferentes variáveis. Isso evitará que você execute a mesma solicitação de webhook várias vezes

<div class="text--center">
    <img src={multipleResponseVariables} width={500} />
</div>
:::

### Lidando com solicitações com falha

É possível que, mesmo depois de configurar corretamente sua ação de webhook, ela falhe ocasionalmente (erros de servidor, parâmetros não tratados corretamente etc.).
Se o comportamento do seu bot depender do resultado da solicitação, é importante dar uma tratativa aos erros.
O bot armazenará todos os erros na variável que você especificou ou usará a variável `last webhook failure`:

<div class="text--center">
    <img src={responseFailureVariable} width={500} />
</div>

Cabe a você tratar esse erro ou não. A melhor maneira é criar uma variável específica para cada webhook e, em seguida, verificar por meio de um bloco de opções se a variável contém uma mensagem:

<div class="text--center">
    <img src={failureHandling} width={600} />
</div>

## Teste sua solicitação no simulador

Você deve sempre verificar se o seu bot está se comportando conforme o esperado por meio do simulador, garantindo que as solicitações bem-sucedidas e com falha sejam tratadas corretamente.
Quando o simulador chegar a uma ação de webhook, ao contrário do bot real, ele fará uma pausa e solicitará que você especifique como deveria ser a solicitação:

<div class="text--center">
    <img src={simulatorWebhookChoices} width={500} />
</div>

- Sucesso falso: Ele solicitará um modal para especificar o _payload_ da solicitação bem-sucedida. Em seguida, ele utilizará cada caminho que você especificou na ação do webhook para analisar e armazenar as variáveis correspondentes. Observe que, se você estiver armazenando em uma variável do tipo lista, o simulador esperará que o _payload_ fornecido contenha um arranjo no caminho correto. Caso contrário, será exibido um erro no modal, impedindo a continuidade.

<div class="text--center">
    <img src={fakeSuccessWebhook} width={500} />
</div>

- Falha falsa: Exibirá o mesmo modal e permitirá que você especifique o _payload_ a ser salvo na variável de falha especificada na ação.

- Trigger real webhook: fará proxy de sua solicitação para o nosso servidor e retornará o resultado real. Isso pode ser útil para verificar se tudo está funcionando bem, mas lembre-se de que ele fará uma solicitação HTTP real. Se você planeja adicionar um usuário ao seu CRM por meio da ação do webhook, usar essa opção no simulador pode adicionar dados indesejados ao seu CRM.
