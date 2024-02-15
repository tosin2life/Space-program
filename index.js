// javascript

const hamburger = document.querySelector(".mobile-nav-toggle");
const navBar = document.querySelector(".primary-navigation");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("open");
  hamburger.classList.toggle("open");
});
