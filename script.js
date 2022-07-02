const mobileMenu = document.querySelector(".nav-menu");
const mobileMenuBg = document.querySelector(".nav-menu-background");
const menuIcon = document.querySelector(".nav-menu-icon");
const closeMenuIcon = document.querySelector(".nav-close-menu-icon");

window.addEventListener("resize", () => {
    if (window.innerWidth >= 800 && mobileMenu.classList.contains("show")) {
        closeMobileMenu();
        menuIcon.style.display = "none";
    } else if (window.innerWidth >= 800 && menuIcon.style.display === "block") {
        menuIcon.style.display = "none";
    } else if (window.innerWidth < 800 && menuIcon.style.display === "none") {
        menuIcon.style.display = "block";
    }
});
menuIcon.addEventListener("click", openMobileMenu);
closeMenuIcon.addEventListener("click", closeMobileMenu);

function closeMobileMenu() {
    mobileMenuBg.classList.remove("show");
    mobileMenu.classList.remove("show");
    closeMenuIcon.style.display = "none";
    menuIcon.style.display = "block";
    document.body.style.overflow = "visible";
}

function openMobileMenu() {
    mobileMenuBg.classList.add("show");
    mobileMenu.classList.add("show");
    closeMenuIcon.style.display = "block";
    menuIcon.style.display = "none";
    document.body.style.overflow = "hidden";
}
