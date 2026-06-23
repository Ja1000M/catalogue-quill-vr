# Mémo — Présentation immersive « Constellation »

Page autonome `immersif.html`, en complément du catalogue raisonné. Accessible une fois déployée à :
**https://ja1000m.github.io/catalogue-quill-vr/immersif.html**

## Ce que c'est
Une cartographie interactive des œuvres VR de Jamil sous forme de **nuage de points** :
- au **survol**, le nœud approché se fige (cliquable), ses œuvres reliées se rapprochent et les autres s'écartent — la déformation se fige comme nouvel état ; on peut glisser vers un voisin sans « attraper » la cible ;
- **clic** sur une œuvre → zoom révélant l'affiche + son carrousel d'images + les œuvres reliées ;
- molette/pincer pour zoomer (les points deviennent vignettes), glisser pour déplacer, « Recentrer » pour rétablir la disposition d'origine ;
- filtre par année, bascule liens/vignettes ;
- palette et esthétique reprises du catalogue (clair/sombre automatique), pensée mobile.

## Deux modes (bouton « Critère »)
- **Chronologie** : les 495 œuvres placées dans le temps (gauche→droite : 2017→2025, hauteur = densité par période). Lisible et complet.
- **Géométrie** : critère artistique — œuvres placées par **forme réelle** de la couverture (contours, angularité, complexité, symétrie) et colorées par leur **couleur dominante**. Au 22/06/2026 : **99 / 495 couvertures analysées** ; les autres s'ajouteront au fil des prochains lots.

## État / suite
- Données inline dans la page (un seul fichier à déployer, aucune dépendance).
- Les images sont chargées depuis Google Drive (dossier « posts » partagé).
- À venir : compléter l'analyse géométrique des 495 couvertures, puis une page d'accueil à **double entrée** (répertoire + immersif).

*Fichier de travail, non nécessaire au site : conservé dans le dossier Quill local (scripts d'analyse, magasin de descripteurs, layout).*
