import { navLinks } from "./sidebar.js";
const sections = document.querySelectorAll("section");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {

    const targetId = link.getAttribute("href").slice(1);

    sections.forEach((section) => {
      section.classList.remove("shown");
    });


    navLinks.forEach((l) => l.classList.remove("activeLink"))
link.classList.add("activeLink")

const targetSection = document.getElementById(targetId);
if (targetSection) {
  targetSection.classList.add("shown");
}


if(link.hash === window.location.hash) {
  link.classList.add("activeLink")
}
});
});
