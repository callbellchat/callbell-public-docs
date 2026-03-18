---
sidebar_position: 1
---

import csatActionPanel from './assets/csat_action_panel.png'
import lastCsatAnswer from './assets/last_csat_answer.png'
import csatBranches from './assets/csat_branches.png'
import csatAnalytics from './assets/csat_analytics.png'
import csatLogs from './assets/csat_logs.png'

# Fluxo de CSAT

A ação de **fluxo de CSAT** permite que você envie uma mensagem de satisfação do cliente e gerencie o fluxo de acordo com a resposta.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/imobkOhILNg?si=3NFEpvk1FRO-9H-U" title="Pesquisa de Fidelização pelo WhatsApp" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
:::info
Esta ação não está disponível para canais **QR** ou **Twilio**.
:::

## Como utilizar

Coloque esta ação na parte do fluxo mais adequada para acionar a pesquisa.

<img src={csatActionPanel} width={400} />

Você será solicitado a preencher a pergunta de CSAT para a sua pesquisa e as possíveis respostas que serão categorizadas como "Promotor", "Neutro" ou "Detrator". As respostas possíveis serão enviadas como botões para o cliente clicar e escolher.
Você também pode escolher se deseja ter um fallback agendado ou não. Isso significa que:

- Se ativado, após 23 horas o fluxo do bot continuará e o usuário não poderá mais responder à pesquisa;
- Se desativado, o fluxo do bot continuará apenas se o usuário responder à pesquisa (com uma resposta válida ou não).

<img src={csatBranches} width={500} />

Assim é como o fluxo do bot ficará uma vez que a ação tenha sido adicionada com sucesso.

<img src={lastCsatAnswer} width={150} />

A resposta do usuário será armazenada em uma variável chamada "Última Resposta de CSAT" (ela irá variar de acordo com o idioma configurado).
Se o usuário não escolher nenhum dos botões válidos e enviar um texto aleatório, ou não responder de forma alguma, você poderá saber verificando o valor armazenado em "Última Resposta de CSAT".

## Analytics

Por fim, você poderá ver os resultados de sua pesquisa de CSAT na seção de análises do aplicativo Callbell (aba de desempenho), bem como os logs de resposta.

<img src={csatAnalytics} width={800} />
<br/>
<img src={csatLogs} width={800} />

