/*****************************
 * DONNÉES
 *****************************/

// Tableau des produits de la boutique (4 produits).
// Chaque produit est un objet avec : id, nom, prix, catégorie, description et image.
// Les catégories disponibles sont : "audio", "périphériques", "écrans"
const products = [
  {
    id: 1,
    name: "Casque Audio Pro",
    price: 199.99,
    category: "audio",
    description: "Casque audio professionnel avec réduction de bruit active",
    image: "https://picsum.photos/600/400",
  },
  {
    id: 2,
    name: "Clavier Mécanique",
    price: 129.99,
    category: "périphériques",
    description: "Clavier mécanique gaming avec rétroéclairage RGB",
    image: "https://picsum.photos/600/400",
  },
  {
    id: 3,
    name: "Écran 27 pouces 4K",
    price: 399.99,
    category: "écrans",
    description: "Écran 27 pouces Ultra HD 4K aux couleurs fidèles, idéal pour travailler et jouer",
    image: "https://picsum.photos/600/400",
  },
  {
    id: 4,
    name: "Souris Gaming",
    price: 79.99,
    category: "périphériques",
    description: "Souris gaming ergonomique et précise avec boutons programmables",
    image: "https://picsum.photos/600/400",
  },
];

/*****************************
 * ÉTAT DE L'APPLICATION
 *****************************/

// Cette variable permet de stocker le filtre actuel
// Par défaut, on affiche tous les produits ("all")
let currentFilter = "all";

// Taille de base du texte, en rem, appliquée sur la balise <html>
// (1rem = 16px, la taille par défaut du navigateur)
let currentFontSize = 1;

// Limites pour que le texte ne devienne ni trop petit ni trop grand
const MIN_FONT_SIZE = 0.8;
const MAX_FONT_SIZE = 1.5;

/*****************************
 * FONCTIONS PRINCIPALES
 *****************************/

/**
 * Cette fonction affiche les produits dans la page
 * Elle est appelée au chargement de la page et à chaque changement de filtre
 *
 * @param {string} category - Catégorie à filtrer ('all' pour tous les produits)
 */
function displayProducts(category = "all") {
  // 1. Filtrer les produits selon la catégorie avec .filter()
  //    Avec "all", on garde tous les produits
  const filteredProducts = products.filter(
    (product) => category === "all" || product.category === category
  );

  // 2. Récupérer l'élément HTML qui contiendra les produits
  const productList = document.querySelector(".product-list");

  // 3. Créer le HTML de chaque produit avec .map()
  //    (même structure que les cartes d'origine de index.html)
  const productsHTML = filteredProducts
    .map(
      (product) => `
        <article class="product-card" data-product-id="${product.id}">
          <div
            class="img-placeholder"
            style="background-image: url('${product.image}')"
          ></div>
          <div class="product-info">
            <div class="product-info-top">
              <h2>${product.name}</h2>
              <span>${product.category}</span>
            </div>
            <p>${product.price.toFixed(2)} €</p>
            <button class="add-to-cart" data-product-id="${product.id}">
              Ajouter au panier
            </button>
          </div>
        </article>
      `
    )
    .join(""); // On colle toutes les cartes ensemble en un seul bloc de HTML

  // 4. Injecter le HTML dans la page (remplace les anciennes cartes)
  productList.innerHTML = productsHTML;

  // 5. Ajouter les écouteurs d'événements sur les cartes :
  //    un clic sur une carte ouvre la modale de détails du produit
  productList.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("click", () => {
      // On récupère l'id du produit écrit sur la carte et on le transforme en nombre
      showProductDetails(Number(card.dataset.productId));
    });
  });

  // Le panier n'est pas à développer : on empêche simplement le clic
  // sur "Ajouter au panier" d'ouvrir aussi la modale de la carte
  productList.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", (event) => event.stopPropagation());
  });
}

/**
 * Filtre les produits quand on clique sur un bouton de catégorie
 * Le texte du bouton donne la catégorie : "Audio" → "audio", "Tous" → "all"
 *
 * @param {HTMLButtonElement} clickedButton - Bouton de filtre cliqué
 */
function filterProducts(clickedButton) {
  // 1. Déduire la catégorie à partir du texte du bouton
  const label = clickedButton.textContent.trim().toLowerCase();
  currentFilter = label === "tous" ? "all" : label;

  // 2. Mettre à jour le bouton actif (classe .active déjà stylée dans le CSS)
  document.querySelectorAll(".categories button").forEach((button) => {
    button.classList.remove("active");
  });
  clickedButton.classList.add("active");

  // 3. Réafficher les produits avec le nouveau filtre
  displayProducts(currentFilter);
}

/**
 * Cette fonction affiche les détails d'un produit dans une modale
 * Elle est appelée quand on clique sur une carte produit
 *
 * @param {number} productId - ID du produit à afficher
 */
function showProductDetails(productId) {
  // 1. Trouver le produit correspondant à l'ID avec .find()
  const product = products.find((item) => item.id === productId);

  // Sécurité : si aucun produit ne correspond, on ne fait rien
  if (!product) return;

  // 2. Créer la modale avec les informations du produit
  //    (classes .modal, .modal-content, .close, .modal-image et .price déjà stylées)
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
    <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <span class="close" title="Fermer">&times;</span>
      <img class="modal-image" src="${product.image}" alt="${product.name}" />
      <h2 id="modal-title">${product.name}</h2>
      <p>${product.description}</p>
      <p class="price">${product.price.toFixed(2)} €</p>
      <button class="add-to-cart" data-product-id="${product.id}">
        Ajouter au panier
      </button>
    </div>
  `;

  // 3. Ajouter la modale à la page
  document.body.appendChild(modal);

  // 4. Gérer la fermeture de la modale
  // Ferme la modale et retire l'écoute du clavier devenue inutile
  function closeModal() {
    modal.remove();
    document.removeEventListener("keydown", closeOnEscape);
  }

  // Ferme la modale avec la touche Échap (utile au clavier)
  function closeOnEscape(event) {
    if (event.key === "Escape") closeModal();
  }

  // Fermeture avec la croix
  modal.querySelector(".close").addEventListener("click", closeModal);

  // Fermeture en cliquant sur le fond sombre (en dehors du contenu)
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });

  // Fermeture avec la touche Échap
  document.addEventListener("keydown", closeOnEscape);
}

/*****************************
 * FONCTIONS D'ACCESSIBILITÉ
 *****************************/

/**
 * Change la taille de la police en modifiant la taille de base des REM
 * @param {number} delta - Variation de la taille en REM (0.1 ou -0.1)
 * Soit on augmente la taille, soit on la diminue
 */
function changeFontSize(delta) {
  // On calcule la nouvelle taille, arrondie à 1 chiffre après la virgule
  // (sinon JavaScript peut donner des nombres bizarres comme 1.2000000000000002)
  const newFontSize = Math.round((currentFontSize + delta) * 10) / 10;

  // On reste entre la taille minimale et la taille maximale
  if (newFontSize < MIN_FONT_SIZE || newFontSize > MAX_FONT_SIZE) return;

  currentFontSize = newFontSize;

  // On modifie la taille de base sur <html> :
  // tous les textes définis en rem s'adaptent automatiquement
  document.documentElement.style.fontSize = `${currentFontSize}rem`;
}

/**
 * Active/désactive le mode sombre
 */
function toggleDarkMode() {
  // On ajoute la classe .dark sur <body> si elle n'y est pas, sinon on l'enlève
  // isDarkMode vaut true si le mode sombre est maintenant activé
  const isDarkMode = document.body.classList.toggle("dark");

  // Le bouton passe en violet (.active) quand le mode sombre est activé
  updateAccessButton(document.querySelector("#dark-mode-btn"), isDarkMode);
}

/**
 * Active/désactive la police dyslexie
 */
function toggleDyslexiaFont() {
  // La classe .dyslexia applique la police OpenDyslexic (déjà chargée dans le CSS)
  const isDyslexiaFont = document.body.classList.toggle("dyslexia");

  // Le bouton passe en violet (.active) quand la police dyslexie est activée
  updateAccessButton(document.querySelector("#dyslexia-btn"), isDyslexiaFont);
}

/**
 * Met à jour l'état visuel d'un bouton d'option (classe .active)
 * et son état pour les lecteurs d'écran (aria-pressed)
 *
 * @param {HTMLButtonElement} button - Bouton à mettre à jour
 * @param {boolean} isActive - true si l'option est activée
 */
function updateAccessButton(button, isActive) {
  button.classList.toggle("active", isActive);
  button.setAttribute("aria-pressed", isActive);
}

/**
 * Ouvre/ferme le panneau d'accessibilité
 */
function toggleAccessibilityPanel() {
  const panel = document.querySelector(".accessibility-panel");
  const toggleButton = document.querySelector(".accessibility-toggle");

  // La classe .active affiche le panneau (voir style.css)
  const isOpen = panel.classList.toggle("active");

  // Indique aux lecteurs d'écran si le panneau est ouvert ou fermé
  toggleButton.setAttribute("aria-expanded", isOpen);
}

/*****************************
 * INITIALISATION
 *****************************/

// Attendre que le DOM soit chargé
document.addEventListener("DOMContentLoaded", () => {
  // 1. Afficher les produits initiaux
  displayProducts(currentFilter);

  // 2. Ajouter les écouteurs d'événements sur les filtres
  document.querySelectorAll(".categories button").forEach((button) => {
    button.addEventListener("click", () => filterProducts(button));
  });

  // 3. Ajouter les écouteurs pour l'accessibilité en exécutant les fonctions
  // A+ : agrandir le texte / A- : réduire le texte
  document
    .querySelector("#font-increase")
    .addEventListener("click", () => changeFontSize(0.1));
  document
    .querySelector("#font-decrease")
    .addEventListener("click", () => changeFontSize(-0.1));

  // Mode sombre
  document
    .querySelector("#dark-mode-btn")
    .addEventListener("click", toggleDarkMode);

  // Police dyslexie
  document
    .querySelector("#dyslexia-btn")
    .addEventListener("click", toggleDyslexiaFont);

  // 4. Ajouter l'écouteur pour le panneau d'accessibilité
  document
    .querySelector(".accessibility-toggle")
    .addEventListener("click", toggleAccessibilityPanel);
});
