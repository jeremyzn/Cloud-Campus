# Étape 4 : rapport court

L'IA a fait une page proche de la maquette, mais beaucoup de tailles étaient fausses (menu, recherche, graphique, tableau), parce que mon premier prompt ne donnait pas les valeurs exactes et qu'elle les a devinées.
Elle a recopié des couleurs trop claires de la maquette sans vérifier si elles se lisaient bien.
Sur téléphone, la touche Tab sortait du menu ouvert : l'IA ne teste pas son code toute seule.
Elle n'a pas suivi toutes mes règles (couleurs écrites à la main) et a ajouté des choses que je n'avais pas demandées.
J'ai appris qu'il faut lui donner des valeurs précises prises dans Figma, et pas seulement une description.
Il faut lui demander de signaler les erreurs de la maquette au lieu de les recopier.
Il vaut mieux avancer étape par étape, en vérifiant chaque étape, et commencer en mode Plan.
J'ai mis ces règles dans CLAUDE.md et design-tokens.md (ci-dessous) pour ne plus avoir à les répéter.

Lien du projet : https://github.com/jeremyzn/Cloud-Campus/tree/main/nova-commerce

---

## CLAUDE.md

```markdown
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
```

## design-tokens.md

```markdown
# Design tokens

Valeurs relevées dans Figma sur la maquette Nova Commerce.
Les noms sont ceux des variables CSS de `:root` dans `css/style.css`.

## Couleurs
--color-primary: #2563eb
--color-primary-strong: #1d4ed8 (menu actif, initiales de l'avatar utilisateur)
--color-primary-soft: #eff6ff (fond des icônes)
--color-sidebar: #0d1b32
--color-sidebar-soft: #16284a (encart support, bouton aide tablette)
--color-sidebar-text: #91a0b8
--color-focus-dark: #93c5fd (contour de focus sur la sidebar)
--color-on-dark: #ffffff (texte et icônes sur fond foncé)
--color-on-dark-hover: rgba(255, 255, 255, 0.06) (survol sur la sidebar)
--color-on-dark-soft: rgba(255, 255, 255, 0.08) (fonds discrets sur la sidebar)
--color-overlay: rgba(13, 27, 50, 0.5) (voile derrière le menu mobile)
--color-bg: #f5f7fb
--color-surface: #ffffff
--color-text: #162033
--color-text-muted: #5f6f86 (maquette #64748b, trop clair sur le fond gris)
--color-border: #e4e9f1
--color-border-soft: #edf0f5 (séparateurs du tableau, grille du graphique)
--color-row-hover: #fafbfd (survol des lignes du tableau)
--color-success: #15803d / --color-success-soft: #ecfdf3
--color-warning: #b45309 / --color-warning-soft: #fff7e6
--color-danger: #dc2626 / --color-danger-soft: #fef2f2
--color-danger-strong: #b91c1c (texte du badge Annulée, plus lisible)

Fonds des avatars (texte en --color-text) :
--avatar-blue: #dce8ff
--avatar-green: #e3f6ea
--avatar-pink: #fce7f3
--avatar-orange: #ffedd5
--avatar-violet: #ede9fe
--avatar-teal: #ccfbf1
--avatar-sand: #f5e6d3

## Espacements
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-5: 20px
--space-6: 24px
--space-8: 32px
--space-12: 48px

## Typographie
Police : Inter
--fs-2xs: 10px (badges, en-têtes du tableau)
--fs-xs: 12px (petits textes)
--fs-sm: 14px (texte normal)
--fs-md: 16px (logo, « Nova » du header mobile)
--fs-lg: 18px (titres des cartes)
--fs-kpi: 25px (chiffres des cartes)
--fs-h1-mobile: 24px
--fs-h1: 30px

## Formes
--radius-xs: 4px (touche ⌘K)
--radius-sm: 8px
--radius-md: 12px (cartes)
--radius-full: 999px (avatars, badges)
--shadow-card: 0 4px 16px rgba(22, 32, 51, 0.05)

## Tailles
--sidebar-w: 240px
--sidebar-w-compact: 72px (tablette)
--header-h-mobile: 64px
--header-h: 80px
Carte de statistique : padding 20px, hauteur 126px
Barre de recherche : 292px max en tablette, 380px max en desktop
Graphique : 160px de haut en mobile, 240px à partir de la tablette
En-tête du tableau « Commandes récentes » : 68px de haut
Colonnes du tableau en desktop : Client 350px, Statut 170px, Montant 152px
```
