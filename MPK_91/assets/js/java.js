// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(useGSAP, ScrollTrigger);

feather.replace();

// toggle
const navbarLink = document.querySelector(".navbar-link");
// klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  e.preventDefault();
  navbarLink.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarLink.contains(e.target)) {
    navbarLink.classList.remove("active");
  }
});

// navbar scroll
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 10);
});
// aos

// gsap
