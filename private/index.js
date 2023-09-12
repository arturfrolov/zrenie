import 'bootstrap';
import Modal from './components/modal/modal';
import Header from './blocks/header/header';
import ReadMore from './blocks/read-more/read-more';

const modal = new Modal(
  {
    formSelector: 'form',
    modalSelector: '.modal',
    modalCloseSelector: '.modal-close',
    modalDialog: '.modal-dialog',
  },
);
modal.bindPostData();

const newHeader = new Header(
  {
    menuSelector: '.menu',
    headerSelector: '.header',
    containerSelector: '.container',
    hamburgerSelector: '.js-hamburger',
    closeBtnSelector: '.js-menu__close',
    overlaySelector: '.overlay',
    searchBtnSelector: '.js-search',
    searchWrapSelector: '.header .wrap',
    searchInputSelector: '.header .input',
    searchHeaderTextSelector: '.header__search_text',
    searchMenuTextSelector: '.menu__search_text',
  },
);
newHeader.init();

const readMore = new ReadMore('.read-more__btns-pageup');
readMore.init();
