const formulaire = document.getElementById("formulaire");
const champ = document.getElementById("champ");
const erreur = document.getElementById("erreur");

formulaire.addEventListener("submit", function (event) {
  if (champ.value === "") {
    event.preventDefault();
    erreur.textContent = "Veuillez saisir une recherche";
  }
});

champ.addEventListener("input", function () {
  erreur.textContent = "";
});
