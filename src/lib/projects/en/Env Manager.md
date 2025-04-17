---
name: Env Manager
date: 2025
description: Seamless environment variable management, anywhere
bgColor: bg-[#0a0a0a]
preview: https://blog.paillaugue.fr
github: https://github.com/Angus-Paillaugue/Env-manager
image: /projectsAssets/Env-manager/Logo.svg
fullImage: /projectsAssets/Env-manager/FullPage.png
tags:
  - SvelteKit
  - PostgreSQL
  - TailwindCSS
  - Markdown
---

# Environment Variable Manager : Gestion sécurisée et simplifiée des variables d'environnement

**Environment Variable Manager** est une plateforme full-stack conçue pour simplifier et sécuriser la gestion des variables d'environnement dans différents projets et équipes. Le projet propose une interface web intuitive couplée à une CLI puissante, permettant aux développeurs de stocker, organiser et partager leurs configurations sensibles en toute simplicité.

Construit avec des technologies web modernes, il offre des fonctionnalités d’auto-hébergement, un contrôle d’accès granulaire et une synchronisation en temps réel entre l’interface et le terminal, ce qui en fait une solution idéale pour les équipes travaillant sur plusieurs environnements ou microservices.


## Fonctionnalités Clés

 - **Gestion d’équipe** : Collaborez en toute sécurité grâce à un système de rôles. Invitez des membres, assignez-leur des rôles (Owner, Contributor, Guest) et définissez les accès par projet ou environnement.

 - **Intégration CLI** : La CLI officielle `env-manager` permet de pousser et de récupérer des variables directement depuis le terminal. Elle supporte l’authentification JWT ainsi que la double authentification (2FA) via TOTP.

 - **Auto-hébergement prêt à l’emploi** : Le projet est entièrement dockerisé et peut être déployé facilement sur votre propre serveur, vous offrant un contrôle total sur vos données et votre infrastructure.


## Stack Technique


### Front-End :

 - **SvelteKit** : Le tableau de bord web est développé avec SvelteKit, ce qui permet une expérience utilisateur fluide et très réactive. Le système réactif de Svelte facilite la gestion des états et des données en temps réel.

 - **TailwindCSS** : Le style est géré via TailwindCSS, permettant une interface moderne, minimaliste et responsive. L’interface adopte un style "terminal" pensé pour les développeurs.


### Back-End :

 - **API SvelteKit** : Toutes les opérations serveur (création de projets, gestion des utilisateurs, stockage des variables…) sont traitées via les routes API de SvelteKit, avec validation forte et typage complet.

 - **PostgreSQL** : L’ensemble des données — projets, variables, historiques — est stocké dans une base PostgreSQL sécurisée. Les valeurs sensibles sont chiffrées avant d’être enregistrées.

 - **JWT & Authentification TOTP** : Le système utilise des tokens JWT pour la gestion des sessions et intègre une authentification à double facteur (2FA) via TOTP (compatible Google Authenticator).


## CLI & Journalisation en Temps Réel

La CLI, développée avec **Bun**, permet une exécution rapide en TypeScript natif. Elle interagit avec le backend via des appels sécurisés (HTTP + WebSocket) pour offrir un retour immédiat lors des opérations de synchronisation.

Une interface dédiée permet de consulter les logs CLI en temps réel : variables poussées, utilisateur, horodatage… Un outil précieux pour le débogage ou les audits de configuration.


## Structure du Projet & Auto-Hébergement

L’application est entièrement containerisée avec Docker et peut être déployée via un simple `docker-compose`. Elle est compatible avec les tunnels Cloudflare pour une exposition sécurisée de l’interface sur Internet.

La configuration reste simple, modulaire, et pensée pour s’intégrer à tout type d’infrastructure personnelle ou professionnelle.


## Conclusion

Environment Variable Manager répond à un besoin fondamental des développeurs : partager et sécuriser les variables d’environnement dans un contexte d’équipe. En combinant une interface ergonomique et une CLI robuste, il s’intègre naturellement dans les workflows de développement modernes. Que vous soyez seul ou en équipe, sur un monolithe ou une architecture distribuée, cette solution évolue avec vos besoins.
