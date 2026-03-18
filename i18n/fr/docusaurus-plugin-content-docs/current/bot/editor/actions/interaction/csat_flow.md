---
sidebar_position: 1
---

import csatActionPanel from './assets/csat_action_panel.png'
import lastCsatAnswer from './assets/last_csat_answer.png'
import csatBranches from './assets/csat_branches.png'
import csatAnalytics from './assets/csat_analytics.png'
import csatLogs from './assets/csat_logs.png'

# CSAT Flow

L'action du **flux de CSAT** vous permet d'envoyer un message de satisfaction client et de gérer le flux en fonction de la réponse.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/itjJWznhbww?si=kc-N3r5quKm7Pr5D" title="WhatsApp + Sondage de Fidélisation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

:::info
Cette action n'est pas disponible pour les canaux **QR** ou **Twilio**.
:::

## Comment l'utiliser

Placez cette action dans la partie du flux la plus adaptée pour déclencher l'enquête.

<img src={csatActionPanel} width={400} />

Vous devrez remplir la question du CSAT pour votre enquête et les réponses possibles qui seront catégorisées en "Promoteur", "Neutre" ou "Détracteur". Les réponses possibles seront envoyées sous forme de boutons pour que le client puisse cliquer et choisir.
Vous pouvez également choisir d'avoir ou non une solution de repli planifiée. Cela signifie que :

- Si activée, après 23 heures, le flux du chatbot se poursuivra et l'utilisateur ne pourra plus répondre à l'enquête ;
- Si désactivée, le flux du chatbot se poursuivra uniquement si l'utilisateur répond à l'enquête (avec une réponse valide ou non).

<img src={csatBranches} width={500} />

Voici à quoi ressemblera le flux du chatbot une fois que l'action est ajoutée avec succès.

<img src={lastCsatAnswer} width={150} />

La réponse de l'utilisateur sera stockée dans une variable appelée "Dernière réponse au CSAT" (elle variera en fonction de la langue que vous avez configurée).
Si l'utilisateur ne choisit aucune des réponses valides et envoie un texte aléatoire, ou ne répond pas du tout, vous pourrez le savoir en vérifiant la valeur stockée dans "Dernière réponse au CSAT".

## Analytics

Enfin, vous pourrez voir les résultats de votre enquête CSAT dans la section analytics de l'application Callbell (onglet performance), ainsi que les journaux de réponse.

<img src={csatAnalytics} width={800} />
<br/>
<img src={csatLogs} width={800} />
