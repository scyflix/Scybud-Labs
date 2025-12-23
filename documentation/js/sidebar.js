const menuIcon = document.querySelector(".menuIcon");
const navbar = document.getElementById("navbar");
const mainDoc = document.getElementById("main-doc");
export const navLinks = document.querySelectorAll(".nav-link");

function navbarToggle() {
  navbar.classList.toggle("hide");
  mainDoc.classList.toggle("adjust");
}
menuIcon.addEventListener("click", () => {
  navbarToggle();
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbarToggle();
  });
});
