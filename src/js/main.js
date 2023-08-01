import 'bootstrap';
import '../index.html';
import '../sass/style.scss';

// import modal from './modules/modal';

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const close = menu.querySelector('.menu__close');
const container = menu.querySelector('.container');
const reportItem = document.querySelector('.report__item');

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
//   if (viewport_width < 1200 && reportItem.classList.contains('ps-5')) {
//     reportItem.classList.remove('ps-5');
//     reportItem.classList.add('ps-4');
//   } else if (viewport_width >= 1200 && reportItem.classList.contains('ps-4')) {
//     reportItem.classList.remove('ps-4');
//     reportItem.classList.add('ps-5');
//   }
//   if (viewport_width < 992) {
//     container.classList.add('p-0');
//   } else if (viewport_width >= 992) {
//     container.classList.remove('p-0');
//   }
// });
