// Header & Footer einfügen
function loadComponent(id, file) {
    fetch(file)
    .then(response => response.text())
    .then(data => document.getElementById(id).innerHTML = data);
}

document.addEventListener("DOMContentLoaded", function() {
    loadComponent("header", "header.html");
    loadComponent("footer", "footer.html");
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

//Filter Länder Seite Inspiration
document.addEventListener("DOMContentLoaded", function () {
    // Alle Filter-Buttons holen
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
                    // Zeige alle Reiseziele, wenn "Alle" ausgewählt ist
                    destination.style.display = "flex";
                } else {
                    // Prüfe, ob das Ziel die gesuchte Klasse enthält
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