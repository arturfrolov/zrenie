import 'bootstrap';
import resize from './components/resize/resize';
import hamburgerMenu from './components/menu/hamburger-menu';
import fixedmenu from './components/menu/fixedmenu';
import search from './components/search/search';
import forms from './components/modal/modal';

resize('.menu', '.container', 'p-0');
hamburgerMenu({
  hamburgerSelector: '.js-hamburger',
  menuSelector: '.menu',
  closeElemSelector: '.js-menu__close',
  overlaySelector: '.overlay',
});
fixedmenu();
search();
forms('form', '.modal', '.modal-close');
