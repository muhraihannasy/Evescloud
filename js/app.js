const navbarNav = document.querySelector(".navbar-nav");
const btnOpenNavbar = document.querySelector(".open-navbar");
const btnCloseNavbar = document.querySelector(".close-navbar");

btnOpenNavbar.addEventListener("click", () => {
  navbarNav.classList.add("active");
  navbarNav.classList.replace("opacity-0", "opacity-100");
});

btnCloseNavbar.addEventListener("click", () => {
  navbarNav.classList.remove("active");
  navbarNav.classList.replace("opacity-100", "opacity-0");
});
