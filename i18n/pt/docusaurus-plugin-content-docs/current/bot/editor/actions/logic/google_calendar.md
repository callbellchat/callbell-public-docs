---
sidebar_position: 8
---

import googleCredentials from './assets/google_credentials.png'
import googleCredentialsWarning from './assets/google_credentials_warning.png'
import googleCalendarVariables from './assets/google_calendar_variables.png'
import googleCalendarFullSetup from './assets/google_calendar_full_setup.png'
import googleCalendarEventCreated from './assets/google_calendar_event_created.png'
import googleCalendarSendMessage from './assets/google_calendar_send_message.png'
import googleCalendarWaitUserAnswer from './assets/google_calendar_wait_user_answer.png'
import googleCalendarSetVariable from './assets/google_calendar_set_variable.png'
import googleCalendarFlowCombination from './assets/google_calendar_flow_combination.png'

# Google Calendar

Esta ação permite que seu bot interaja com o Google Calendar, criando eventos dinamicamente durante as interações do usuário.

# Casos de uso:

- Criar lembretes no seu Google Calendar.
- Criar reuniões usando links de reunião gerados automaticamente.

# Como usar:

## 1. Adicionando uma Ação do Google Calendar

Para adicionar uma ação do Google Calendar no editor de fluxo do Callbell, siga estas etapas:

1. Abra o Criador de Fluxo e selecione o ponto da conversa em que você deseja integrar o Google Calendar.
2. Adicione nova ação clicando no botão Adicionar Ação e selecione Google Calendar na lista de ações disponíveis, dentro da seção "Lógica".

## 2. Autenticando sua conta do Google

Clique no botão "Conectar com o Google" e siga as instruções.

:::tip
Certifique-se de selecionar todas as permissões necessárias. O bot do Callbell não funcionará corretamente se alguma permissão estiver faltando.

<div class="text--center">
    <img src={googleCredentials} width={500} />
</div>

Você também pode encontrar este aviso do Google:

<div class="text--center">
    <img src={googleCredentialsWarning} width={500} />
</div>

Este aviso é apenas temporário. Nesse caso, certifique-se de continuar clicando em "avançado" e, em seguida, "Continuar com o Callbell"
:::

## 3. Configurando a Ação

Você precisará configurar a integração preenchendo os seguintes campos:

**Selecionar calendário**: Escolha o Google Calendar com o qual você deseja interagir. Cada conta do Google pode ter vários calendários; o que tem um endereço de e-mail é o seu calendário principal.

**Selecionar ação**: Atualmente, `criar evento` é a única opção disponível.

**Resumo do evento**: O título do evento como ele aparecerá no calendário.

**Mês do evento**: O mês em que o evento será criado.

**Dia do evento**: O dia em que o evento será criado.

**Hora de início do evento**: A hora em que o evento começará. O formato de hora necessário é: `HH:MM`.

**Duração do evento (em minutos)**: O tempo de duração do evento em minutos.

**Enviar atualizações de evento para**: Os destinatários que receberão atualizações sobre o evento. As opções são: `Nenhum` ou `Todos`.

**Criar link de reunião**: Opção para gerar um link para uma reunião virtual associada ao evento.

:::tip
Você pode usar variáveis para preencher dinamicamente esses campos
:::

## 4. Lidando com o Sucesso

Em caso de uma resposta bem-sucedida da API, o resultado indicará o status de criação do evento: `confirmado`. Por padrão, esse valor será salvo como `Último sucesso de webhook`, mas você pode configurar qualquer variável que preferir. Se a opção `Criar link de reunião` estiver ativa, a URL da reunião será armazenada na variável.

## 5. Lidando com a Falha

Em caso de falha da API, você pode armazenar a resposta de falha em uma variável dedicada para análises ou novas tentativas. Você pode, por exemplo, imaginar uma lógica que verificaria a falha e faria uma ação de "salto" novamente.

## 6. Exemplo

Aqui está um exemplo de como você pode configurar a ação e usá-la com variáveis.

1. Neste exemplo, criamos 2 variáveis:

<img src={googleCalendarVariables} width={500} />

2. `Resumo`, `mês` e `duração` foram definidos como valores fixos.

3. Usamos uma combinação de ações para recuperar dinamicamente o dia:

<img src={googleCalendarFlowCombination} width={200} />

- [Enviar mensagem](/bot/editor/actions/interaction/send_message) para enviar a mensagem perguntando sobre qual é o melhor dia.

<img src={googleCalendarSendMessage} width={500} />

- [Aguardar resposta do usuário](/bot/editor/actions/interaction/wait_user_answer) para obter a resposta.

<img src={googleCalendarWaitUserAnswer} width={500} />

- [Definir variável](/bot/editor/actions/logic/set_variable) para salvar o resultado da resposta em nossa variável `dia`.

<img src={googleCalendarSetVariable} width={500} />

4. Fizemos o mesmo para recuperar a `hora`.

5. Agora está pronto, este é o resultado:

<img src={googleCalendarFullSetup} width={500} />

<img src={googleCalendarEventCreated} width={500} />

# Melhores Práticas:

- Sempre verifique se a API do Google está conectada e possui as permissões adequadas para que o bot acesse o calendário.
- Teste a integração minuciosamente para lidar com possíveis erros da API (por exemplo, problemas de acesso ao calendário do Google, problemas de formato de data incorreto). O simulador de bot irá ajudá-lo nesse aspecto.
