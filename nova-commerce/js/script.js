/* =========================================================
   Nova Commerce – interactions du tableau de bord
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const menu = initMenu();
  initSearch(menu);
});

/* ---------- Menu latéral (tiroir mobile) ---------- */
function initMenu() {
  const burger = document.querySelector(".topbar__burger");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.querySelector(".overlay");
  const closeBtn = sidebar.querySelector(".sidebar__close");
  const workspace = document.querySelector(".workspace");
  const skipLink = document.querySelector(".skip-link");
  const tabletQuery = window.matchMedia("(min-width: 768px)");

  const open = () => {
    sidebar.classList.add("is-open");
    overlay.hidden = false;
    burger.setAttribute("aria-expanded", "true");
    document.body.classList.add("no-scroll");
    workspace.inert = true; // le contenu derrière le tiroir n'est plus atteignable au clavier
    skipLink.inert = true;
    closeBtn.focus();
  };

  const close = (returnFocus = true) => {
    if (!sidebar.classList.contains("is-open")) return;
    sidebar.classList.remove("is-open");
    overlay.hidden = true;
    burger.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");
    workspace.inert = false;
    skipLink.inert = false;
    if (returnFocus) burger.focus();
  };

  burger.addEventListener("click", open);
  closeBtn.addEventListener("click", () => close());
  overlay.addEventListener("click", () => close());

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });

  // Si on passe en tablette/desktop avec le menu ouvert, on le referme.
  tabletQuery.addEventListener("change", (event) => {
    if (event.matches) close(false);
  });

  return { close };
}

/* ---------- Recherche ---------- */
function initSearch(menu) {
  const topbar = document.querySelector(".topbar");
  const toggle = document.querySelector(".search-toggle");
  const input = document.getElementById("search-input");
  const form = input.form;

  // Pas de back-end : on empêche le rechargement de la page à la validation.
  form.addEventListener("submit", (event) => event.preventDefault());

  const openSearch = () => {
    topbar.classList.add("is-search-open");
    toggle.setAttribute("aria-expanded", "true");
    input.focus();
  };

  const closeSearch = () => {
    topbar.classList.remove("is-search-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", openSearch);

  input.addEventListener("blur", closeSearch);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && topbar.classList.contains("is-search-open")) {
      closeSearch();
      toggle.focus();
    }
  });

  // Raccourci ⌘K (Mac) / Ctrl+K (Windows, Linux)
  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      // Le menu ouvert rend le reste de la page inerte : on le ferme d'abord.
      menu.close(false);
      if (window.matchMedia("(min-width: 768px)").matches) {
        input.focus();
      } else {
        openSearch();
      }
    }
  });
}
