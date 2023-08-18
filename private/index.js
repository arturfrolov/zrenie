import 'bootstrap';
import resize from './components/resize/resize';
import hamburgerMenu from './blocks/header/hamburger-menu';
import fixedmenu from './blocks/header/fixedmenu';
import search from './blocks/header/search';
import forms from './components/modal/modal';
import pageUp from './blocks/read-more/pageup';

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
pageUp();
