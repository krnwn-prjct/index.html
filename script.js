// ===============================
// Promise of the Dandelions
// Version 1.0
// ===============================

// Scroll reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }

  });
}, {
  threshold: 0.2
});

document.querySelectorAll(".chapter, .ending").forEach((section) => {

  section.style.opacity = "0";
  section.style.transform = "translateY(60px)";
  section.style.transition = "all 1s ease";

  observer.observe(section);

});

// Floating stars effect
const stars = document.querySelector(".stars");

let offset = 0;

window.addEventListener("scroll", () => {

  offset = window.scrollY * 0.15;

  stars.style.transform = `translateY(${offset}px)`;

});

// Button animation
const button = document.querySelector(".button");

button.addEventListener("mouseenter", () => {

  button.style.transform = "translateY(-4px) scale(1.03)";

});

button.addEventListener("mouseleave", () => {

  button.style.transform = "";

});

// Hero fade
window.addEventListener("load", () => {

  document.body.style.opacity = "1";

});
