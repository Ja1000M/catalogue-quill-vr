# Mémo — Présentation immersive « Constellation »

Page autonome `immersif.html`, en complément du catalogue raisonné. Accessible une fois déployée à :
**https://ja1000m.github.io/catalogue-quill-vr/immersif.html**

## Ce que c'est
Une cartographie interactive des œuvres VR de Jamil sous forme de **nuage de points** :
- chaque œuvre est un nœud ; au **survol**, le nœud approché aspire ses œuvres reliées et déforme toute la cartographie ;
- **clic** sur une œuvre → zoom révélant l'affiche + son carrousel d'images + les œuvres reliées ;
- molette/pincer pour zoomer (les points deviennent vignettes), glisser pour déplacer ;
- filtre par année, bascule liens/vignettes ;
- palette et esthétique reprises du catalogue (clair/sombre automatique), pensée mobile.

## Deux modes (bouton « Critère »)
- **Proxy** : les 495 œuvres, placées par affinité (mots-clés + chronologie), dé-densifiées.
- **Géométrie** : critère retenu — œuvres placées par **forme réelle** de la couverture (contours, angularité, complexité, symétrie) et colorées par leur **couleur dominante**. Au 21/06/2026 : **60 / 495 couvertures analysées** ; les autres s'ajouteront au fil des prochains lots.

## État / suite
- Données inline dans la page (un seul fichier à déployer, aucune dépendance).
- Les images sont chargées depuis Google Drive (dossier « posts » partagé).
- À venir : compléter l'analyse géométrique des 495 couvertures, puis une page d'accueil à **double entrée** (répertoire + immersif).

*Fichier de travail, non nécessaire au site : conservé dans le dossier Quill local (scripts d'analyse, magasin de descripteurs, layout).*
