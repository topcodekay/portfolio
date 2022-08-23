"use strict";

const toggleButton = document.getElementsByClassName("toggle-nav")[0];
const navLinks = document.getElementsByClassName("nav-menu")[0];

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
