---
name: Skill Forge
date: 2024
description: Une plateforme d'apprentissage complète pour les développeurs en herbe
bgColor: bg-[#171717]
preview: https://skill-forge.paillaugue.fr/
github: https://github.com/Angus-Paillaugue/Skill-Forge
image: /projectsAssets/Skill-Forge/Logo.webp
fullImage: /projectsAssets/Skill-Forge/FullPage.png
tags:
  - Code
  - Exercices
  - SvelteKit
  - TailwindCSS
---

# Skill Forge : une plateforme d'apprentissage complète pour les développeurs en herbe

**Skill Forge** est une plateforme Web conçue pour aider les développeurs à perfectionner leurs compétences grâce à une collection diversifiée de défis et d'exercices de programmation. La plateforme offre un environnement d'apprentissage dans lequel les utilisateurs peuvent résoudre des problèmes, suivre leurs progrès et comparer leurs performances avec d'autres développeurs en temps réel. Conçue avec un fort accent sur la flexibilité, la plateforme s'adresse aux développeurs à différentes étapes de leur parcours, des débutants aux codeurs avancés.

## Principales fonctionnalités

- **Parcours d'apprentissage** : Skill Forge organise les exercices en parcours d'apprentissage structurés. Chaque parcours représente un domaine clé de la programmation, comme les algorithmes, les structures de données ou le développement Web, et offre une courbe d'apprentissage progressive. Les utilisateurs peuvent se plonger dans les sujets de leur choix tout en progressant des tâches adaptées aux débutants aux défis plus avancés.

- **Large gamme d'exercices** : la plateforme propose plus de 10 exercices de codage, couvrant divers paradigmes de programmation, niveaux de difficulté et sujets. Les exercices sont stockés dans une base de données MySQL et chaque problème est associé à des cas de test spécifiques qui sont exécutés pour valider les solutions soumises par l'utilisateur.

## Pile technique

### Front-End :

- **SvelteKit** : L'interface utilisateur de Skill Forge est construite à l'aide de SvelteKit, un framework JavaScript moderne qui permet une interactivité fluide et rapide côté client. L'utilisation du modèle de programmation réactif de Svelte simplifie la gestion des états et offre une approche propre et modulaire du développement front-end.

- **TailwindCSS** : TailwindCSS est intégré pour gérer le style de l'ensemble de la plateforme. Avec le CSS axé sur l'utilité, nous avons créé une interface hautement personnalisable et réactive, permettant une apparence cohérente sur tous les appareils.

### Back-End :

- **Points de terminaison de l'API SvelteKit** : La logique back-end est alimentée par les capacités de rendu côté serveur de SvelteKit. Toutes les interactions entre le front-end et la base de données MySQL sont facilitées par des routes API ou des « actions de formulaire ». Chaque appel d'API, comme la récupération des détails d'un exercice, la progression de l'utilisateur ou la soumission de solutions, est traité avec des requêtes optimisées.

- **Base de données MySQL** : Les données principales, notamment les exercices, les utilisateurs, les soumissions et les parcours d'apprentissage, sont stockées dans une base de données relationnelle MySQL. Les tables sont interconnectées via des clés étrangères et des index pour garantir une requête efficace.

## Exécution de code isolée :

L'un des aspects les plus avancés de Skill Forge est l'**environnement d'exécution de code isolé**. Pour des raisons de sécurité et d'évolutivité, Skill Forge utilise la bibliothèque `isolated-vm` pour exécuter le code soumis par l'utilisateur dans un environnement sandbox. Cela garantit que le code utilisateur ne peut pas accéder aux ressources du serveur ni interférer avec elles. Les cas de test associés à chaque exercice sont exécutés à l'intérieur de cette machine virtuelle et les résultats (que les tests aient réussi ou échoué) sont renvoyés à l'utilisateur.

## Progression et classement des utilisateurs

Skill Forge fournit également des outils complets permettant aux utilisateurs de suivre leur parcours de codage. Les utilisateurs peuvent consulter l'historique de leurs soumissions, surveiller les exercices qu'ils ont terminés et suivre leur classement par rapport aux autres via le système de classement. L'une des principales fonctionnalités de la plateforme est la possibilité de récupérer le classement d'un utilisateur en fonction du nombre d'exercices distincts qu'il a terminés avec succès.
Commentaires en temps réel et analyses détaillées

Les utilisateurs reçoivent des commentaires instantanés après avoir soumis des solutions. Ces commentaires comprennent une répartition de chaque cas de test (qu'il ait réussi ou échoué) et des analyses détaillées des performances. À l'avenir, nous prévoyons d'intégrer des outils de profilage de code, permettant aux utilisateurs d'obtenir encore plus d'informations sur les performances de leur soumission.

## Conclusion

Skill Forge est plus qu'une simple plateforme de codage. C'est un outil d'apprentissage qui s'adapte au niveau de compétence individuel de chaque utilisateur, offrant un suivi personnalisé des progrès, des commentaires en temps réel et un système d'exercices robuste. Avec une architecture évolutive et une prise en charge multilingue sur la feuille de route, il vise à être une ressource complète pour les codeurs cherchant à développer leurs compétences à n'importe quel niveau.
