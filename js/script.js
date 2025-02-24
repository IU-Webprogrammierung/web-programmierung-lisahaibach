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