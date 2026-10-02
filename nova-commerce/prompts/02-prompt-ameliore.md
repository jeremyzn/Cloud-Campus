# Étape 1.2 – Prompt amélioré (avec les bonnes pratiques)

## Rôle et contexte
Tu es un développeur front-end senior, rigoureux sur le HTML sémantique, l'accessibilité (WCAG AA) et le CSS maintenable.
Stack : HTML5 + CSS natif + JavaScript vanilla. Aucun framework, aucune librairie (pas de Bootstrap, Tailwind, Chart.js…).
Police : Inter (Google Fonts). Icônes : Lucide, en sprite SVG inline dans le HTML (`<symbol>` + `<use>`).

## Maquette
Figma « Nova Commerce » : 3 frames → Desktop 1440 px, Tablette 820 px, Mobile 375 px (exports PDF dans `assets/maquette/`).

## Structure attendue (reprise de mon analyse Étape 0)
- `aside` sidebar (fond #0D1B32, 240 px) : logo « N » + « Nova Commerce », `nav` avec 4 liens (Dashboard actif, Commandes, Clients, Paramètres), encart « Besoin d'aide ? » + bouton « Contacter le support » calé en bas.
- `header` (80 px, blanc, bordure basse) : recherche « Rechercher une commande… » + `⌘K`, bouton notifications avec pastille, avatar « ML » + Marie Laurent / Administratrice.
- `main` : `h1` « Tableau de bord » + sous-titre + bouton période « 1–7 oct. 2026 » ; 4 cartes KPI ; carte « Chiffre d'affaires – 7 derniers jours » (courbe SVG) ; carte « Commandes récentes » avec un vrai `<table>` (7 lignes : avatar + nom + email, badge statut, montant, date + heure) et un lien « Voir tout ».

## Breakpoints (mobile first, `min-width`)
- < 768 px : sidebar en tiroir ouvert par un bouton burger (aria-expanded, Échap pour fermer, focus géré), header = burger + « Nova » + loupe + cloche + avatar, pas de bouton période, KPI en 1 colonne, axe X du graphique 1 label sur 2, tableau sans email ni colonne date.
- 768–1023 px : sidebar réduite à 72 px (icônes seules, libellés conservés pour les lecteurs d'écran, encart support remplacé par un bouton icône), nom de l'utilisateur masqué, KPI en 2 colonnes, tableau complet.
- ≥ 1024 px : sidebar complète, KPI en 4 colonnes.

## Design tokens à respecter (relevés dans Figma)
Primaire #2563EB (actif nav #1D4ED8, fond icône #EFF6FF) · texte #162033 · texte secondaire #64748B · fond page #F5F7FB · bordure #E4E9F1 · séparateurs #EDF0F5 · succès #15803D / #ECFDF3 · attention #B45309 / #FFF7E6 · erreur #DC2626 / #FEF2F2.
Cartes : padding 20 px, rayon 12 px, bordure 1 px, ombre 0 4px 16px rgba(22,32,51,.05). Gap des KPI 16 px, gap entre blocs 24 px, padding du contenu 32/32/48/32.
Typo : h1 30 px regular · titres de cartes 18 px bold · valeur KPI 25 px · texte 14 px · secondaire 12 px · en-têtes de tableau 10 px bold majuscules · badges 10 px.
Tous les tokens en custom properties dans `:root`.

## Règles
- Un seul `h1`, puis `h2` par section. Aucun style inline, aucun `!important`.
- Navigation clavier complète, `:focus-visible` visible partout, `aria-label` sur les boutons icônes, lien d'évitement.
- Ne reproduis pas les défauts de la maquette : les points du graphique doivent être sur la courbe, les 4 KPI doivent être réparties régulièrement (la maquette a un espacement fantôme entre la 3e et la 4e).

## Fichiers de sortie
`index.html`, `css/style.css`, `js/script.js`, `assets/`.

## Découpage (valider chaque étape avant la suivante)
1. HTML sémantique complet (sans CSS).
2. CSS mobile (tokens + composants).
3. Media queries tablette et desktop.
4. JS : menu burger, recherche mobile, raccourci ⌘K/Ctrl+K. Le graphique est un SVG écrit directement dans le HTML, avec un tableau des valeurs masqué pour les lecteurs d'écran.

Réponds uniquement avec le code de l'étape en cours, sans explication.
