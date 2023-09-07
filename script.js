var hamB = document.querySelector(".hamburger-menu");
var firstSpan = document.querySelector(".first-span");
var secSpan = document.querySelector(".sec-span");
var navTwo = document.querySelector(".nav2");

hamB.addEventListener("click", () => {
    hamB.classList.toggle("active")
    navTwo.classList.toggle("show")
})
