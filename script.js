// window.onscroll = function () {
//   myFunction();
// };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

const title = document.getElementById("moving-title");
const scrollPosition = window.scrollY;

// Adjust the transform value to create an upward motion effect
title.style.transform = `translateY(${Math.min(scrollPosition, 70)}px)`;

// function myFunction() {
//   if (window.scrollY >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
