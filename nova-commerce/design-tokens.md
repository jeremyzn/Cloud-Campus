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
