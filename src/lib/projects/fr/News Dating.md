---
name: News Dating
date: 2024
description: Une façon interactive et ludique de lire l'actualité quotidienne.
bgColor: bg-[#0a0a0a]
preview: https://news-dating.paillaugue.fr/
github: https://github.com/Angus-Paillaugue/News-Dating
image: /projectsAssets/News-Dating/Logo.webp
fullImage: /projectsAssets/News-Dating/FullPage.png
tags:
  - News
  - Swipe
  - SvelteKit
  - TailwindCSS
---


**News Dating** est une application Web qui regroupe les flux RSS de plusieurs fournisseurs, permettant aux utilisateurs de s'abonner à leurs catégories préférées et d'accéder facilement aux derniers articles. Le projet est conçu pour offrir une expérience d'actualité personnalisée, avec prise en charge de différentes langues et fournisseurs.

## Fonctionnalités clés

- **Intégration de flux RSS personnalisés** : les utilisateurs peuvent s'abonner à différentes catégories, chacune liée à des flux RSS spécifiques. Les fournisseurs sont stockés dans une base de données relationnelle et peuvent être interrogés de manière dynamique en fonction des préférences de l'utilisateur.
- **Filtrage de langue** : les catégories peuvent être filtrées par langue, ce qui permet aux utilisateurs de trouver facilement du contenu dans leur langue préférée.
- **Abonnements utilisateur** : chaque utilisateur peut gérer son propre ensemble d'abonnements, stockés dans une base de données et facilement mis à jour depuis l'interface utilisateur. L'application suit leurs préférences et propose un contenu adapté à leurs intérêts.
- **Optimisé pour les performances** : le frontend utilise SvelteKit, connu pour ses performances rapides et son modèle de réactivité simple. L'application récupère et analyse dynamiquement les flux RSS, affichant les résultats dans un format structuré et visuellement attrayant en utilisant TailwindCSS pour le style.
- **Analyse de contenu dynamique** : les données RSS sont extraites de sources externes et, comme chaque fournisseur peut utiliser des sélecteurs différents, le projet stocke les règles de sélection dans une base de données et les applique selon les besoins pour extraire les titres, les descriptions et les images.

## Détails techniques

- **Frontend** : conçu avec SvelteKit et TailwindCSS pour une interface utilisateur réactive, rapide et moderne.
- **Backend** : le backend est un serveur Node.js qui agit comme un proxy pour la récupération des flux RSS. Il communique également avec une base de données MySQL pour stocker les sélecteurs de fournisseurs, les préférences des utilisateurs et les catégories.
- **Base de données** : le schéma de base de données MySQL comprend des tables pour les utilisateurs, les catégories, les abonnements des utilisateurs et les sélecteurs de fournisseurs, qui permettent des requêtes flexibles et dynamiques.
- **Transitions et animations** : grâce aux transitions intégrées de Svelte, l'interface utilisateur est enrichie d'animations fluides pour la sélection des catégories, le filtrage et l'abonnement aux flux d'actualités.
- **Conception modulaire** : le projet suit une architecture basée sur des composants, permettant un code réutilisable et maintenable, en particulier avec des composants complexes comme le sélecteur de catégorie.
