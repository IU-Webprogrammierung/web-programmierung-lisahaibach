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
    const filterButtons = document.querySelectorAll(".filter-btn");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            let filterValue = this.getAttribute("onclick").split("'")[1];

            // Entferne die aktive Klasse von allen Buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));

            // Füge die aktive Klasse zum aktuellen Button hinzu
            this.classList.add("active");

            // Alle Destination-Cards holen
            const destinations = document.querySelectorAll(".destination-card");

            destinations.forEach(destination => {
                if (filterValue === "all") {
                    destination.style.display = "flex";
                } else {
                    if (destination.classList.contains(filterValue)) {
                        destination.style.display = "flex";
                    } else {
                        destination.style.display = "none";
                    }
                }
            });
        });
    });
});