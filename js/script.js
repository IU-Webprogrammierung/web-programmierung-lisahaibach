// Header & Footer einfügen mit Callback-Funktion
function loadComponent(id, file, callback) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
            if (callback) callback(); // Führe Callback nach Laden aus
        });
}

document.addEventListener("DOMContentLoaded", function() {
    loadComponent("header", "header.html", function () {
        // Burger-Menü Funktion initialisieren, nachdem der Header geladen wurde
        const menuToggle = document.getElementById("mobile-menu");
        const navLinks = document.querySelector(".nav-links");

        if (menuToggle && navLinks) {
            menuToggle.addEventListener("click", function () {
                navLinks.classList.toggle("active");
                menuToggle.classList.toggle("active");
            });
        }
    });

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