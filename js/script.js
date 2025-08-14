// Mobile menu toggle

function toggleOffcanvasMenu() {
    const menu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('offcanvasOverlay');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
}




window.addEventListener("scroll", function () {
    const navBar = document.getElementById("navBar");
    if (window.scrollY > 50) {
        navBar.classList.add("scrolled");
    } else {
        navBar.classList.remove("scrolled");
    }
});

