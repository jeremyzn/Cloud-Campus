# Étape 2 : rapport d'audit

J'ai comparé la page avec les PDF de la maquette en mobile (375px), tablette (820px) et desktop (1440px). Les captures sont dans `audit/captures/` (maquette à gauche, ma page à droite). J'ai aussi relu le code et testé la page au clavier.

Petit chantier = je corrige moi-même. Gros chantier = je donne une consigne précise à l'IA.

## Le visuel

| Problème | Décision | Fait |
|---|---|---|
| Les liens du menu sont trop serrés (4px au lieu de 8px) | Petit | Oui |
| La barre de recherche est trop étroite (320px au lieu de 380px) | Petit | Oui |
| Le bouton de date n'est pas centré avec le titre | Petit | Oui |
| Dans les cartes, le chiffre est collé en bas au lieu d'être sous le libellé | Gros | Oui (consigne 1) |
| Le graphique est trop bas (192px au lieu de 240px) | Petit | Oui |
| Les colonnes du tableau n'ont pas la bonne largeur | Gros | Oui (consigne 2) |
| « Voir tout » n'est pas centré, et le sous-titre du tableau ne doit pas être affiché sur mobile | Gros | Oui (consigne 2) |
| Les initiales des avatars sont en couleur et en gras, pas comme la maquette | Petit | Oui |
| Les lignes du tableau sont trop basses sur mobile | Petit | Oui |
| Survol et focus ne sont pas dans la maquette : je les ai ajoutés | Choix | Oui |

## Le code

| Problème | Décision | Fait |
|---|---|---|
| Sur mobile, quand le menu est ouvert, la touche Tab sort du menu | Gros | Oui (consigne 3) |
| À l'ouverture du menu, le focus ne va pas sur le bouton Fermer | Petit | Oui |
| Le gris des petits textes est trop clair sur le fond gris (4.44 au lieu de 4.5) | Gros | Oui (consigne 4) |
| Le texte rouge du badge « Annulée » est trop clair (4.41) | Gros | Oui (consigne 4) |
| Le nom de l'utilisatrice est lu deux fois par les lecteurs d'écran | Petit | Oui |
| Faute dans le texte lu pour « Voir tout » | Petit | Oui |
| La recherche recharge la page quand on appuie sur Entrée | Petit | Oui |
| Des couleurs sont écrites à la main au lieu d'utiliser les variables | Petit | Oui |

Ce qui était déjà bon : un seul h1, des balises sémantiques, aucun style inline, aucun !important, des aria-label sur les boutons icônes, la bonne structure de fichiers. Il n'y a aucune balise `<img>` (donc pas d'attribut alt à vérifier) : les icônes SVG sont décoratives et cachées aux lecteurs d'écran avec `aria-hidden`.

## Deuxième relecture

| Problème | Décision | Fait |
|---|---|---|
| Les initiales « ML » de l'avatar sont trop claires (bleu sur bleu clair : 4.19 au lieu de 4.5) | Petit | Oui |
| Quelques espacements écrits à la main (9px, 6px, 2px 6px) au lieu des variables | Petit | Oui |
| Des variables du CSS n'étaient pas dans design-tokens.md | Petit | Oui |
| Sur mobile, Ctrl+K avec le menu ouvert ne pouvait pas mettre le focus dans la recherche | Petit | Oui |
| La carte « Chiffre d'affaires » était la seule sans icône | Choix | Oui |

## Consignes données à l'IA

1. Dans les cartes de statistiques, mets le chiffre juste sous le libellé (écart de 12px) et centre le libellé avec l'icône. Ne change rien d'autre.
2. Dans le tableau, en desktop, donne ces largeurs : Client 350px, Statut 170px, Montant 152px. Centre « Voir tout » verticalement, donne 68px de haut à l'en-tête du tableau, et cache le sous-titre sur mobile.
3. Quand le menu mobile est ouvert, empêche la touche Tab d'aller sur le reste de la page. Remets le focus sur le bouton burger quand le menu se ferme.
4. Fonce le gris des petits textes en #5f6f86 et le rouge du badge « Annulée » en #b91c1c, pour avoir un contraste d'au moins 4.5. Garde ces valeurs dans les variables CSS.

## Différences avec la maquette, voulues
- Dans la maquette, il y a un espace en trop entre la 3e et la 4e carte. Je ne l'ai pas recopié.
- Dans la maquette, les points du graphique ne sont pas sur la courbe. Sur ma page, ils sont dessus.
- Certaines couleurs sont un peu plus foncées pour être lisibles.
- Le menu burger ouvert n'est pas dessiné dans la maquette. Je l'ai fait comme un panneau qui sort à gauche.
- Dans la maquette, la carte « Chiffre d'affaires » n'a pas d'icône. Je lui en ai mis une (euro), comme les trois autres cartes.
