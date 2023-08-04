import 'bootstrap';
import '../index.html';
import '../sass/style.scss';
import resize from './modules/resize';
import hamburgerMenu from './modules/hamburger-menu';

resize('.menu', '.container', 'p-0');
hamburgerMenu('.js-hamburger', '.menu', '.js-menu__close');
