import 'bootstrap';
import '../index.html';
import '../sass/style.scss';
import '../img/spinner.svg';
import resize from './modules/resize';
import hamburgerMenu from './modules/hamburger-menu';
import fixedmenu from './modules/fixedmenu';
import search from './modules/search';
import forms from './modules/form';

resize('.menu', '.container', 'p-0');
hamburgerMenu('.js-hamburger', '.menu', '.js-menu__close');
fixedmenu();
search();
forms();
