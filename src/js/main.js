import 'bootstrap';
import '../index.html';
import '../sass/style.scss';

// import tabs from './modules/tabs';
// import calc from './modules/calc';
// import forms from './modules/forms';
// import modal from './modules/modal';
// import slider from './modules/slider';
// import timer from './modules/timer';
// import { openModal } from './modules/modal';
// import bootstrap from 'bootstrap';

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const close = menu.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

close.addEventListener('click', () => {
  menu.classList.remove('active');
});

// window.addEventListener('resize', () => {
//   let viewport_width = Math.max(
//     document.documentElement.clientWidth,
//     window.innerWidth || 0
//   );
//   if (viewport_width < 992) {
//     menu.innerHTML = ``;
//   }
// });
