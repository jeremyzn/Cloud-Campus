# Étape 0 – Analyse de la maquette « Nova Commerce »

Maquette Figma : 3 frames → Desktop (1440 px), Tablette (820 px), Mobile (375 px). Fond de page : #F5F7FB.

## 1. Zones de la page

Arborescence Figma : `Barre latérale` + `Espace de travail` (→ `En-tête` + `Contenu`).

**Barre latérale (desktop : 240 px, fond #0D1B32, padding 24/16)**
- Haut : logo carré bleu « N » + texte « Nova Commerce »
- Navigation : Dashboard (état actif = fond bleu), Commandes, Clients, Paramètres (icône + libellé)
- Bas (calé en bas, `space-between`) : encart « Besoin d'aide ? » + texte + bouton blanc « Contacter le support »

**En-tête (hauteur 80 px, fond blanc, bordure basse 1 px, padding latéral 24 px)**
- Gauche : champ « Rechercher une commande… » avec icône loupe et raccourci `⌘K`
- Droite : bouton notifications (cloche + pastille rouge), avatar initiales « ML » + nom « Marie Laurent » / rôle « Administratrice »

**Contenu (padding 32/32/48/32, espacement vertical 24 px entre blocs)**
1. Introduction : titre « Tableau de bord » (le seul h1) + sous-titre « Voici les performances… » ; à droite, sélecteur de période « 1–7 oct. 2026 » (icône calendrier)
2. Indicateurs : 4 cartes KPI en ligne (gap 16 px)
   - Commandes du jour : 284, +12,5 %
   - Chiffre d'affaires : 24 680 €, +8,2 %
   - Nouveaux clients : 47, +5,4 %
   - Commandes en attente : 18, −3,1 % (en rouge)
3. Graphique « Chiffre d'affaires – 7 derniers jours » : courbe lissée bleue, légende « Revenu », axe Y 0 / 10k / 20k / 30k, axe X Lun → Dim
4. Commandes récentes : titre + sous-titre + lien « Voir tout », tableau de 7 lignes
   - Colonnes : Client (avatar + nom + email) · Statut (badge) · Montant · Date et heure (jour + heure)

## 2. Breakpoints

| Plage | Frame de réf. | Sidebar | Header | KPI | Tableau |
|---|---|---|---|---|---|
| Mobile < 768 px | 375 | Masquée → bouton burger + « Nova » dans le header | Burger, logo texte, icône loupe (pas de champ), cloche, avatar seul | 1 colonne | 3 colonnes : Client (nom seul, sans email), Statut, Montant |
| Tablette 768–1023 px | 820 | Réduite à une colonne d'icônes (logo « N », 4 icônes, encart support → simple bouton icône en bas) | Champ de recherche, cloche, avatar seul (nom/rôle masqués) | 2 × 2 | 4 colonnes complètes |
| Desktop ≥ 1024 px | 1440 | Complète, 240 px | Complet | 4 colonnes | 4 colonnes complètes |

Autres différences sur mobile : le sélecteur de période disparaît, le graphique n'affiche qu'un label sur deux sur l'axe X (Lun, Mer, Ven, Dim).
Approche : mobile first, avec `min-width: 768px` puis `min-width: 1024px`.

## 3. Composants qui se répètent

- **Card** (fond blanc, coins arrondis, ombre légère) : conteneur commun aux KPI, au graphique et au tableau
- **Carte KPI** ×4 : libellé + icône dans un carré bleu clair (en haut à droite) + valeur + variation
- **Indicateur de variation** : vert si positif, rouge si négatif
- **Lien de navigation** ×4 : icône + libellé, état actif
- **Badge de statut** ×7, 3 variantes : Livrée (vert), En préparation (orange), Annulée (rouge)
- **Avatar à initiales** ×8 (7 clients + utilisateur), couleur de fond pastel différente selon la personne
- **Ligne de commande** ×7 : avatar + nom/email + badge + montant + date/heure
- **Bouton icône** : cloche, loupe mobile, burger, aide (tablette)

## 4. Points à clarifier / à signaler à l'IA

- **États interactifs** : seul l'état actif de la navigation est dessiné. Survol, focus et clic sont à définir (au minimum un `:focus-visible` visible partout).
- **Menu burger mobile** : son ouverture (tiroir/overlay) n'est pas maquettée.
- **Carte « Chiffre d'affaires »** : c'est la seule KPI sans icône, sur les trois frames. Oubli ou choix volontaire ? À valider.
- **Graphique** : les points de données ne tombent pas sur la courbe. Ne pas reproduire ce décalage, les points doivent être sur la ligne.
- **Tableau** : un vrai `<table>` (avec `<th scope="col">`). Sur mobile, on masque des colonnes plutôt que de passer en scroll horizontal, comme dans la maquette.
- **Accessibilité** : les boutons icônes ont besoin d'un `aria-label` (notifications, menu, recherche, aide). Le statut ne doit pas être porté que par la couleur (le texte du badge suffit). Les contrastes du texte gris clair (emails, heures, sous-titres) sont à vérifier.
- **Sémantique** : `aside` + `nav` pour la sidebar, `header` pour l'en-tête, `main` pour le contenu, `section` + `h2` pour chaque bloc (graphique, commandes), un seul `h1`.
