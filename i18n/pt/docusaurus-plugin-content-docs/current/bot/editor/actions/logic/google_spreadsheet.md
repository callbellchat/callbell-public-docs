---
sidebar_position: 3
---

import googleSpreadsheetValidFormat from './assets/google_spreadsheet_valid_format.png'
import googleCredentials from './assets/google_credentials.png'
import googleSpreadsheetInsertLast from './assets/google_spreadsheet_insert_last.png'
import googleSpreadsheetInsert from './assets/google_spreadsheet_insert.png'
import googleSpreadsheetInsert2 from './assets/google_spreadsheet_insert_2.png'
import googleSpreadsheetUpdate from './assets/google_spreadsheet_update.png'
import googleSpreadsheetUpdate2 from './assets/google_spreadsheet_update_2.png'
import googleSpreadsheetSelect from './assets/google_spreadsheet_select.png'
import googleSpreadsheetSelect2 from './assets/google_spreadsheet_select_2.png'

# Planilha do Google

Essa ação permite que seu bot interaja com um documento do Planilhas Google inserindo, atualizando e selecionando linhas dinamicamente durante as interações do usuário. Ela pode ser usada para armazenar, recuperar e modificar dados coletados de conversas de bots.

# Casos de uso:

- Armazenamento das respostas do usuário diretamente em um arquivo do Planilhas Google para processamento posterior.
- Atualização de entradas específicas no Planilhas Google com base na entrada do usuário.
- Recuperação de dados de uma planilha do Google para uso em uma conversa ou como condições no fluxo do bot.

# Como usar:

## 1. Adicionando uma ação do Google Sheets

Para adicionar uma ação do Google Sheets no editor de fluxo da Callbell, siga estas etapas:

1. Abra o Flow Builder e selecione o ponto da conversa em que você deseja integrar o Google Sheets.
2. Adicione uma nova ação clicando no botão Add Action (Adicionar ação) e selecionando Google Sheets na lista de ações disponíveis, dentro da seção "Logic" (Lógica).

## 2. Faça a autenticação em sua conta do Google

Clique no botão "Google connect" e siga as instruções.

:::tip
Certifique-se de selecionar todos os direitos. O bot da Callbell não funcionará corretamente se o direito "Google Drive File" ou "Google Spreadsheet Sheet" estiver ausente.

<div class="text--center">
    <img src={googleCredentials} width={500} />
</div>
:::

## 3. Configuração da ação

Você precisará configurar a integração preenchendo os seguintes campos:

**Spreadsheet**: Escolha o documento do Google Sheets com o qual você deseja interagir. Certifique-se de que a API do Google Sheets esteja configurada corretamente.

**Planilha**: Selecione a planilha específica dentro do documento (por exemplo, "Sheet1").

**Selecionar ação**:

- Insert Row (Inserir linha): use essa opção para adicionar uma nova linha na planilha com os dados do usuário.
- Update Row (Atualizar linha): Use essa ação para atualizar uma linha existente com base na entrada do usuário.
- Select Row (Selecionar linha): Use essa ação para recuperar dados da planilha a serem exibidos na conversa do bot.

:::tip
Certifique-se de ter planilhas disponíveis em sua conta. A Callbell não poderá criar uma automaticamente para você.
Além disso, a Callbell só aceita planilhas com cabeçalhos (com nomes de colunas) na parte superior, como esta:

<div class="text--center">
    <img src={googleSpreadsheetValidFormat} width={500} />
</div>
:::

## 4. Inserção de dados no Planilhas Google

Ao selecionar a opção Inserir linha:

- Insert Position (Inserir posição): Escolha a linha onde os novos dados serão inseridos.

  "First" inserirá uma linha na linha 1.

  "Custom" inserirá uma linha em qualquer índice especificado. Você pode tornar esse valor dinâmico usando uma variável, mas certifique-se de que o valor seja sempre um número. O bot retornará um erro e continuará seu fluxo se o índice não for um número.

  "Last" inserirá a linha até a primeira linha vazia encontrada.

  Observe que, se houver "buracos" na planilha, a linha poderá não ser inserida onde você deseja.

<div class="text--center">
    <img src={googleSpreadsheetInsertLast} width={500} />
</div>

- Valores das colunas: Mapeia os dados que serão inseridos.

Você pode adicionar várias colunas com base nos dados que deseja inserir e nas colunas disponíveis em sua planilha.
A omissão de um valor de coluna deixará a coluna vazia em sua planilha

Por exemplo, estes parâmetros:

<div class="text--center">
    <img src={googleSpreadsheetInsert} width={500} />
</div>
O resultado será esta inserção:
<div class="text--center">
    <img src={googleSpreadsheetInsert2} width={500} />
</div>

## 5. Atualização de dados no Planilhas Google

Ao selecionar a opção Atualizar linha:

- Atualizar posição: Exatamente como nessa inserção, defina a linha a ser atualizada. Observe que, devido à limitação do Google, não é possível atualizar diretamente a última linha.

- Columns Values (Valores das colunas): Como na inserção, defina quais colunas serão atualizadas com valores fornecidos pelo usuário. Qualquer coluna especificada aqui substituirá o valor da linha anterior. Se você quiser manter o valor da coluna anterior, basta não especificar nenhuma coluna.

Por exemplo, uma ação definida desta forma:

<div class="text--center">
    <img src={googleSpreadsheetUpdate} width={500} />
</div>

O resultado será a atualização da linha 3 dessa forma:

<div class="text--center">
    <img src={googleSpreadsheetUpdate2} width={500} />
</div>

## 6. Seleção de dados do Google Sheets

Para pesquisar e recuperar uma linha, você precisará de:

- **A coluna a ser pesquisada** : O bot que iteramos e procuramos somente em uma determinada coluna.
- Valor da célula a ser encontrado\*\* : O valor que a coluna deve conter
- Armazene os dados da linha em variáveis. Você pode acessar qualquer dado de coluna e armazená-lo em qualquer variável que tenha criado.

Por exemplo, uma ação definida desta forma:

<div class="text--center">
    <img src={googleSpreadsheetSelect} width={500} />
</div>

O que retornaria esse valor:

<div class="text--center">
    <img src={googleSpreadsheetSelect2} width={500} />
</div>

E armazene-o na variável "número de telefone da planilha"

:::tip
Observe que a pesquisa retornará apenas o primeiro resultado. Se você tiver várias linhas que correspondam ao valor da célula, somente a primeira será retornada. Se o resultado que você está procurando não for o primeiro, crie uma nova coluna na planilha com valores mais específicos/únicos
:::

## 7. Tratamento de falhas

No caso de uma falha de API, você pode armazenar a resposta à falha em uma variável detipda para análise futura ou novas tentativas.
Você pode, por exemplo, imaginar alguma lógica que verifique a falha e tente novamente com uma ação de "salto".

# Práticas recomendadas:

- Certifique-se sempre de que a API do Planilhas Google esteja conectada e tenha as permissões adequadas para que o bot acesse o documento.
- Teste a integração completamente para lidar com possíveis erros de API (por exemplo, problemas de acesso ao Planilhas Google). O simulador de bot o ajudará nessa questão.
