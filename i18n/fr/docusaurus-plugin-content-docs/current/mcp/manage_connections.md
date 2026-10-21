---
sidebar_position: 5
---

import callbellConnectedApps from './assets/callbell_connected_apps.png'

# Gérer les connexions

Toutes les applications d'IA connectées à votre compte Callbell sont listées dans Callbell : vous savez toujours qui a connecté quoi.

## Voir les applications connectées

1. Dans Callbell, allez dans **Paramètres**, ouvrez **Intégrations** et cliquez sur **Paramètres de l'API**.
2. Ouvrez l'onglet **Applications connectées**.

<div class="text--center">
    <img src={callbellConnectedApps} alt="L'onglet Applications connectées dans les paramètres de l'API de Callbell" width={800} />
</div>

Chaque ligne correspond à une connexion :

| Colonne | Signification |
| :-- | :-- |
| **Application** | L'application d'IA, par exemple Claude ou ChatGPT. |
| **Connectée par** | L'utilisateur Callbell qui a approuvé la connexion. |
| **Connectée le** | La date à laquelle la connexion a été approuvée. |
| **Permissions** | **Lecture**, ou **Lecture** et **Écriture** si l'utilisateur a autorisé l'application à effectuer des modifications. |
| **Dernière utilisation** | La dernière fois que l'application a appelé Callbell. |

Tous les utilisateurs ayant accès aux paramètres voient toutes les connexions du compte, y compris celles de leurs collègues.

## Déconnecter une application

3. Cliquez sur **Déconnecter** sur la connexion à supprimer, puis confirmez.

L'application perd immédiatement l'accès au compte. Seule cette connexion est supprimée : la même application connectée par d'autres utilisateurs continue de fonctionner.

Pour utiliser à nouveau Callbell depuis cette application, reconnectez-la depuis l'application (par exemple avec **Connect** sur le connecteur Callbell dans Claude).

:::tip
Déconnectez puis reconnectez une application pour faire passer sa connexion de la lecture seule à la lecture et l'écriture, ou l'inverse.
:::

## Dépannage

| Message ou problème | Que faire |
| :-- | :-- |
| « Les applications d'IA externes ne sont pas encore activées sur ce compte. » | Contactez notre équipe support pour activer la fonctionnalité sur votre compte. |
| « Seuls les utilisateurs ayant accès aux paramètres du compte peuvent connecter une application. » | Demandez à un administrateur de vous donner accès aux paramètres, ou de connecter l'application. |
| « Terminez la configuration de votre compte Callbell avant de connecter une application. » | Terminez la configuration de votre compte dans Callbell, puis réessayez. |
| « Cette action est temporairement bloquée sur votre utilisateur pour des raisons de sécurité. » | Contactez notre équipe support. |
| L'assistant peut lire vos données mais ne peut pas envoyer de messages ni rien modifier. | La connexion n'a que la permission **Lecture**. Déconnectez-la et reconnectez-la en cochant **Autoriser ... à effectuer des modifications**. |
| L'assistant indique qu'il y a trop de requêtes. | Chaque connexion a une limite de requêtes. Attendez une minute et réessayez. |
| L'application ne fonctionne plus après une déconnexion. | Reconnectez l'application depuis les paramètres de son connecteur. |
