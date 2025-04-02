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