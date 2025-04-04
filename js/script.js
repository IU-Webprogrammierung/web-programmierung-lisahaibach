// Komponenten (Header & Footer) laden
function loadComponent(id, file, callback) {
    fetch(file)
      .then(response => response.text())
      .then(data => {
        document.getElementById(id).innerHTML = data;
        if (callback) callback(); // Führe Callback nach dem Laden aus
      });
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    // Header laden + Menü-Funktion aktivieren
    loadComponent("header", "header.html", function () {
      const hamburger = document.getElementById("hamburger");
      const navMenu = document.getElementById("nav-menu");
  
      if (hamburger && navMenu) {
        hamburger.addEventListener("click", function () {
          navMenu.classList.toggle("hidden");
        });
      }
    });
  
    // Footer laden
    loadComponent("footer", "footer.html");
  });

  // Filter-Funktion für die Inspirationsseite
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".destination-card");

  buttons.forEach(button => {
      button.addEventListener("click", () => {
          const filter = button.getAttribute("data-filter");

          // Aktiven Button markieren
          buttons.forEach(btn => btn.classList.remove("active"));
          button.classList.add("active");

          // Karten filtern
          cards.forEach(card => {
              if (filter === "all" || card.classList.contains(filter)) {
                  card.style.display = "block";
              } else {
                  card.style.display = "none";
              }
          });
      });
  });
});