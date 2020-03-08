let hamburger = document.querySelector(".nav__hamburger");
let mobileNav = document.querySelector(".mobile__nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileNav.classList.toggle("active")
})

