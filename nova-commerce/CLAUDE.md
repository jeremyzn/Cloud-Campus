# Contexte du projet
Dashboard de gestion « Nova Commerce », intégré à partir d'une maquette Figma.
La maquette est dans `assets/maquette/` (desktop.pdf, tablette.pdf, mobile.pdf).
Les couleurs, tailles et espacements sont dans @design-tokens.md

## Stack
- HTML5 sémantique uniquement
- CSS natif (pas de Bootstrap, Tailwind, etc.)
- JavaScript vanilla (pas de librairie, même pour le graphique)

## Structure de fichiers
- index.html
- css/style.css
- js/script.js
- assets/

## Règles
- Toujours sémantique (header, nav, main, aside, section, footer)
- Un seul h1 par page, puis des h2
- Mobile first : breakpoints à 768px et 1024px
- Composants interactifs accessibles au clavier
- Jamais de style inline, jamais de !important
- Toujours utiliser les variables CSS de design-tokens.md, jamais une couleur ni un espacement écrits à la main
- Texte lisible : contraste d'au moins 4.5:1 (sinon prendre la couleur corrigée des tokens)
- Boutons avec seulement une icône : ajouter un aria-label
- Menu mobile : quand il est ouvert, la touche Tab doit rester dans le menu et Échap le ferme

## Ce que l'audit m'a appris
- Commencer en mode Plan : proposer un plan d'action, j'attends ma validation avant de toucher au code
- Ne pas deviner les tailles : prendre celles de design-tokens.md
- Ne pas recopier les erreurs de la maquette, me les signaler avant
- Une étape à la fois (HTML, puis CSS mobile, puis tablette et desktop, puis JS), j'attends ma validation entre chaque
- Avant de dire que c'est fini : vérifier un seul h1, aucun style inline, la navigation au clavier, et le rendu à 375px, 820px et 1440px
