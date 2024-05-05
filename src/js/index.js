import '../css/index.css';

import gsap from "gsap";

window.addEventListener('scroll', function () {
  var scrollPosition = window.scrollY;
  var header = document.querySelector('header');
  var body = document.querySelector('body');

  if (scrollPosition > 0) {
    header.style.backgroundColor = '#0E1122';
  } else if(header.classList.contains("menu-open")) {
    body.style.overflow = "hidden";
        header.style.backgroundColor = '#0E1122';
  }
});

const hamburgerMenu = document.querySelector('.hamburger-menu');
const header = document.querySelector('header');

hamburgerMenu.addEventListener('click', () => {
  header.classList.toggle('menu-open');
});

// gsap.to('.search-card', {
//   opacity: 1,
//   duration: 1,
//   stagger: 0.1 // dit zorgt ervoor dat elke kaart 0.5 seconden na de vorige infade
// });