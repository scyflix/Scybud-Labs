import { navLinks } from "./sidebar.js";
const sections = document.querySelectorAll("article section");


navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const targetId = link.getAttribute("href").slice(1);

    sections.forEach((section) => {
      section.classList.remove("shown");
    });

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add("shown");
    } 
  });
});
