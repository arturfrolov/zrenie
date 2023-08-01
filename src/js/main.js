import 'bootstrap';
import '../index.html';
import '../sass/style.scss';

// import modal from './modules/modal';

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const close = menu.querySelector('.menu__close');
const container = menu.querySelector('.container');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

close.addEventListener('click', () => {
  menu.classList.remove('active');
});

window.addEventListener('resize', () => {
  const viewport_width = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );

  if (viewport_width < 992 && !container.classList.contains('p-0')) {
    container.classList.add('p-0');
  } else if (viewport_width >= 992 && container.classList.contains('p-0')) {
    container.classList.remove('p-0');
  }
});
