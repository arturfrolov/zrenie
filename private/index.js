import 'bootstrap';
import forms from './components/modal/modal';
import header from './blocks/header/header';
import readMore from './blocks/read-more/read-more';

header();
forms('form', '.modal', '.modal-close');
readMore();
