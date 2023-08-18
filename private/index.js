import 'bootstrap';
import resize from './components/resize/resize';
import forms from './components/modal/modal';
import pageUp from './blocks/read-more/pageup';
import header from './blocks/header/header';

resize('.menu', '.container', 'p-0');
header();
forms('form', '.modal', '.modal-close');
pageUp();
