// script.js
// Sticky navbar show/hide on scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');
const scrollThreshold = window.innerHeight * 0.05;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= scrollThreshold) {
    navbar.classList.remove('sticky-active', 'hide');
  } else {
    navbar.classList.add('sticky-active');
    if (currentScroll < lastScroll) {
      // Scrolling up
      navbar.classList.remove('hide');
    } else {
      // Scrolling down
      navbar.classList.add('hide');
    }
  }
  lastScroll = currentScroll;
});

const navbarLogo = document.querySelector('.logo');
const video = document.querySelector('.background-video');
const body = document.querySelector('body');

navbarLogo.addEventListener('mouseenter', () => {
  body.classList.add('video-playing');
  video.play();
});

navbarLogo.addEventListener('mouseleave', () => {
  body.classList.remove('video-playing');
  video.pause();
});
